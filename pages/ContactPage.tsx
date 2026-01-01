
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, Facebook, Instagram, Globe } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-100 bg-orange-50 text-orange-600 font-bold text-xs uppercase">
                <Sparkles size={14} /> Contact
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
                Parlons de <br /> <span className="text-orange-500">votre projet</span>
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
                Notre équipe d'experts est prête à vous accompagner dans la réalisation de vos rêves.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { title: 'Appelez-nous', value: '+216 97 286 007', icon: <Phone size={24} />, href: 'tel:+21697286007', color: 'bg-orange-500' },
                { title: 'Email', value: 'placof.decor@gmail.com', icon: <Mail size={24} />, href: 'mailto:placof.decor@gmail.com', color: 'bg-blue-500' },
                { title: 'Adresse', value: 'Sfax & Tunis, Tunisie', icon: <MapPin size={24} />, href: '#', color: 'bg-red-500' },
              ].map((contact, i) => (
                <a 
                  key={i} 
                  href={contact.href}
                  className="flex items-center gap-6 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:card-shadow transition-all group"
                >
                  <div className={`w-14 h-14 ${contact.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{contact.title}</h3>
                    <p className="text-xl font-black text-slate-900">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="pt-8">
               <h3 className="text-lg font-black text-slate-900 mb-6 uppercase tracking-widest">Suivez-nous :</h3>
               <div className="flex gap-4">
                  {[
                    { icon: <Facebook/>, color: 'bg-blue-600' },
                    { icon: <Instagram/>, color: 'bg-pink-600' },
                    { icon: <Globe/>, color: 'bg-black' },
                  ].map((s, i) => (
                    <button key={i} className={`w-14 h-14 rounded-2xl ${s.color} text-white flex items-center justify-center shadow-lg hover:-translate-y-1 transition-transform`}>
                       {s.icon}
                    </button>
                  ))}
               </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-10 md:p-12 rounded-[3rem] card-shadow border border-slate-50 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
              
              {isSubmitted ? (
                <div className="py-20 text-center animate-in zoom-in duration-500">
                  <div className="inline-flex p-6 bg-green-500/10 rounded-full mb-6 text-green-500">
                    <CheckCircle size={64} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 mb-4">Message envoyé !</h2>
                  <p className="text-slate-500 font-medium">Merci de nous avoir contactés. Nous vous répondrons très bientôt.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <h2 className="text-3xl font-black text-slate-900 mb-8">Envoyez un message</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-2">Nom Complet</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Votre nom..."
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 transition-all text-slate-900 font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-2">Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="Votre email..."
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 transition-all text-slate-900 font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-2">Sujet du Projet</label>
                    <input 
                      type="text" 
                      placeholder="Ex: Décoration Salon, Bureau..."
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 transition-all text-slate-900 font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-2">Détails de votre demande</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Comment pouvons-nous vous aider ?"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 transition-all text-slate-900 font-medium resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full gradient-orange text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-xl shadow-orange-500/30 hover:-translate-y-1 transition-all active:scale-95"
                  >
                    Envoyer <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
