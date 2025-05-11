"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Button from "@/components/ui/button"
import { Send, Mail, Phone, MapPin, MessageSquare, Check, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactFormSection() {
  // État pour simuler l'envoi du formulaire
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulation d'envoi du formulaire (remplacer par l'intégration réelle)
    setTimeout(() => {
      // 90% de chance de succès pour la démonstration
      if (Math.random() > 0.1) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
      
      // Réinitialiser après 5 secondes
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15
      }
    }
  };
  
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 pb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
            Parlons de votre projet
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Des questions, une demande de devis ou simplement envie d'échanger sur votre projet ? Contactez-moi dès maintenant !
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Bloc d'informations de contact */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800/30 shadow-xl rounded-2xl p-8 md:p-10 backdrop-blur-sm border-0 dark:border dark:border-gray-700/50"
          >
            <motion.h3 
              variants={itemVariants} 
              className="text-xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Informations de contact
            </motion.h3>

            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                  <a href="mailto:contact@david-debarieux.fr" className="text-blue-600 dark:text-blue-400 hover:underline transition-all duration-300">
                    contact.debarieux@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Téléphone</h4>
                  <a href="tel:+33600000000" className="text-blue-600 dark:text-blue-400 hover:underline transition-all duration-300">
                    +33 6 00 00 00 00
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Localisation</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    France, travail à distance
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Réponse rapide</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Sous 24-48h ouvrées
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Card className="p-8 md:p-10 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:border-gray-700/50 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Nom complet
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Votre nom" 
                      required
                      disabled={formStatus === 'submitting' || formStatus === 'success'}
                      className="bg-white dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="votre@email.com" 
                      required
                      disabled={formStatus === 'submitting' || formStatus === 'success'}
                      className="bg-white dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Sujet
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Objet de votre message" 
                    required
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    className="bg-white dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="formule" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Formule souhaitée
                  </label>
                  <Select disabled={formStatus === 'submitting' || formStatus === 'success'}>
                    <SelectTrigger id="formule" className="bg-white dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600">
                      <SelectValue placeholder="Sélectionnez une formule" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="essentielle">Formule L&#39;Essentielle</SelectItem>
                      <SelectItem value="pro">Formule L&#39;Équilibré</SelectItem>
                      <SelectItem value="sur-mesure">Formule Le Complet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Détails de votre projet ou de votre demande..."
                    rows={6}
                    required
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    className="bg-white dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 min-h-[150px]"
                  />
                </div>

                <div className="space-y-3 py-3">
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Services complémentaires souhaités (optionnel)
                  </Label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="seo" disabled={formStatus === 'submitting' || formStatus === 'success'} />
                      <Label htmlFor="seo" className="text-sm">Création de Logo</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="blog" disabled={formStatus === 'submitting' || formStatus === 'success'} />
                      <Label htmlFor="blog" className="text-sm">Rédaction SEO</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="gallery" disabled={formStatus === 'submitting' || formStatus === 'success'} />
                      <Label htmlFor="gallery" className="text-sm">Galerie photo</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="calendar" disabled={formStatus === 'submitting' || formStatus === 'success'} />
                      <Label htmlFor="calendar" className="text-sm">Maintenance mensuelle</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="analytics" disabled={formStatus === 'submitting' || formStatus === 'success'} />
                      <Label htmlFor="analytics" className="text-sm">Hébergement</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="maintenance" disabled={formStatus === 'submitting' || formStatus === 'success'} />
                      <Label htmlFor="maintenance" className="text-sm">Autre ( à préciser )</Label>
                    </div>
                  </div>
                </div>

                <div>
                  {formStatus === 'idle' && (
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer le message
                    </Button>
                  )}
                  
                  {formStatus === 'submitting' && (
                    <Button 
                      disabled 
                      className="w-full bg-gray-400 text-white font-semibold cursor-not-allowed flex items-center justify-center"
                    >
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </Button>
                  )}
                  
                  {formStatus === 'success' && (
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg p-4 flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                      <span>Message envoyé avec succès ! Je vous répondrai très rapidement.</span>
                    </div>
                  )}
                  
                  {formStatus === 'error' && (
                    <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg p-4 flex items-center">
                      <AlertCircle className="h-5 w-5 mr-2 text-red-600 dark:text-red-400" />
                      <span>Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.</span>
                    </div>
                  )}
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
