'use client';

import { Mail, User, MessageSquare, ArrowLeft } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      setLoading(true);
  
      emailjs.sendForm(
        "service_rp9chmk", 
        "template_ij7w2k9", 
        form, 
        "qtviaJycgDpUeoIc0"
      )
      .then(() => {
        alert("Message envoyé 🚀");
        form.reset();
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert("Erreur 😢");
        setLoading(false);
      });
    };
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl space-y-6">
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-sm text-primary hover:text-primary/70 transition duration-150"
      >
        <ArrowLeft className="w-4 h-4" /> Home
      </button>
        
        {/* TITLE */}
        <div>
          <h1 className=" text-sky-400 text-4xl font-serif font-bold text-primary tracking-tight">
            Contact
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Envoie-moi un message, je te répondrai rapidement 🚀
          </p>
        </div>

        {/* CARD */}
        <div className="rounded-xl border border-body/20 p-6 bg-background/80 backdrop-blur-md shadow-sm">
          
          <form onSubmit={sendEmail} className="space-y-4">
            
            {/* NAME */}
            <div>
              <label className="text-sky-300 text-sm font-medium flex items-center gap-2 mb-1">
                <User className="text-sky-300 w-4 h-4 text-primary" />
                 Nom
              </label>
              <input
              name="name"
                type="text"
                placeholder="Ton nom"
                className="w-full rounded-lg border border-body/20 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sky-300 text-sm font-medium flex items-center gap-2 mb-1">
                <Mail className="text-sky-300 w-4 h-4 text-primary" />
                Email
              </label>
              <input
              name="email"
                type="email"
                placeholder="ton@email.com"
                className="w-full rounded-lg border border-body/20 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sky-300 text-sm font-medium flex items-center gap-2 mb-1">
                <Mail className="text-sky-300 w-4 h-4 text-primary" />
                titre
              </label>
              <input
                type="text"
                name="title"
                placeholder="demande d'information"
                className="w-full rounded-lg border border-body/20 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sky-300 text-sm font-medium flex items-center gap-2 mb-1">
                <MessageSquare className="text-sky-300 w-4 h-4 text-primary" />
                Message
              </label>
              <textarea
              name="message"
                placeholder="Écris ton message ici..."
                rows={5}
                className="w-full rounded-lg border border-body/20 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="bg-sky-300 w-full rounded-lg bg-primary text-white py-2 font-medium transition hover:bg-sky-600"
            >
              Envoyer le message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
