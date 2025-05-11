"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Logo {
  id: number;
  name: string;
  src: string;
}

interface LogoColumnProps {
  logos: Logo[];
  columnIndex: number;
  currentTime: number;
}

function LogoColumn({ logos, columnIndex, currentTime }: LogoColumnProps) {
  const CYCLE_DURATION = 2000;
  const columnDelay = columnIndex * 200;
  const adjustedTime = (currentTime + columnDelay) % (CYCLE_DURATION * logos.length);
  const currentIndex = Math.floor(adjustedTime / CYCLE_DURATION);
  const currentLogo = logos[currentIndex];

  if (!currentLogo) {
    console.error('No current logo found for index:', currentIndex);
    return null;
  }

  return (
    <motion.div
      className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: columnIndex * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentLogo.id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "10%", opacity: 0 }}
          animate={{
            y: "0%",
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        >
          <div className="relative w-full h-full">
            <img
              src={currentLogo.src}
              alt={currentLogo.name}
              className="h-auto w-auto max-h-[80%] max-w-[80%] object-contain"
              onError={(e) => {
                console.error('Failed to load image:', currentLogo.src);
                console.error('Error:', e);
              }}
              onLoad={() => console.log('Successfully loaded:', currentLogo.src)}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

interface LogoCarouselProps {
  columns?: number;
  logos: Logo[];
}

export function LogoCarousel({ columns = 2, logos }: LogoCarouselProps) {
  const [logoColumns, setLogoColumns] = useState<Logo[][]>([]);
  const [time, setTime] = useState(0);

  console.log('Initializing LogoCarousel with logos:', logos);

  const distributeLogos = useCallback(
    (logos: Logo[]) => {
      console.log('Distributing logos into columns');
      const shuffled = [...logos].sort(() => Math.random() - 0.5);
      const result: Logo[][] = Array.from({ length: columns }, () => []);

      shuffled.forEach((logo, index) => {
        result[index % columns].push(logo);
      });

      const maxLength = Math.max(...result.map((col) => col.length));
      result.forEach((col) => {
        while (col.length < maxLength) {
          col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
        }
      });

      console.log('Distributed logos:', result);
      return result;
    },
    [columns]
  );

  useEffect(() => {
    if (!logos || logos.length === 0) {
      console.error('No logos provided to LogoCarousel');
      return;
    }
    const columns = distributeLogos(logos);
    setLogoColumns(columns);
  }, [logos, distributeLogos]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        console.log('Updating animation time:', prev + 100);
        return prev + 100;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!logos || logos.length === 0) {
    return <div className="text-center text-red-500">Aucun logo à afficher</div>;
  }

  if (!logoColumns || logoColumns.length === 0) {
    return <div className="text-center text-red-500">Les colonnes de logos ne sont pas prêtes</div>;
  }

  return (
    <div className="flex justify-center gap-4 py-8" data-testid="logo-carousel">
      <div className="absolute top-0 left-0 text-xs text-gray-500">
        Debug: {logos.length} logos, {logoColumns.length} colonnes
      </div>
      {logoColumns.map((columnLogos, index) => (
        <LogoColumn
          key={index}
          logos={columnLogos}
          columnIndex={index}
          currentTime={time}
        />
      ))}
    </div>
  );
}
