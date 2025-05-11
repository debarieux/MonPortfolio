"use client"

import { Send } from "lucide-react"
import Button from "@/components/ui/button"
import { Input } from "@/components/ui/input" 
import { Textarea } from "@/components/ui/textarea"
import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from "sonner"

type FormValues = {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        toast.success("Message envoyé avec succès!")
        reset()
      } else {
        throw new Error("Erreur lors de l'envoi du message")
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message)
      }
      toast.error("Une erreur est survenue, veuillez réessayer")
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Contactez-moi
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="Votre nom"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  Ce champ est requis
                </p>
              )}
            </div>
            <div>
              <Input
                placeholder="Votre email"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  Veuillez entrer un email valide
                </p>
              )}
            </div>
          </div>
          <div>
            <Textarea
              placeholder="Votre message"
              rows={5}
              {...register("message", { required: true })}
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">
                Veuillez entrer un message
              </p>
            )}
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="gap-2 hover:scale-105 transition-transform duration-200">
              <Send className="w-4 h-4" />
              Envoyer
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
