
import React from 'react';
import { Star, Users, Award, ChevronRight, Sparkles, Home, Globe, Layout, Palette, PenTool, Lightbulb, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-20">
        <div className="container mx-auto px-4">
          {/* Badge Arabic */}
          <div className="max-w-md mx-auto mb-12 relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
             <div className="relative gradient-orange p-6 rounded-2xl text-center shadow-2xl">
                <p className="text-2xl font-black text-white" dir="rtl">
                  انتي عليك تبني و احنا علينا الديكور
                </p>
             </div>
          </div>

          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-100 bg-orange-50 text-orange-600 font-bold text-xs uppercase tracking-widest">
              <Star size={14} fill="currentColor" />
              NOUVELLE COLLECTION 2026
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] text-[#0F172A]">
              Transformez <span className="text-orange-500">votre espace</span> avec élégance
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Spécialiste de l'isolation, placo plâtre, enduit de plâtre et plafond démontable en Tunisie. Des solutions sur mesure pour créer des espaces qui vous ressemblent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="gradient-orange px-8 py-4 rounded-xl text-lg font-bold text-white shadow-xl shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all"
              >
                Prendre contact avec nous
              </Link>
              <Link
                to="/projects"
                className="bg-slate-100 px-8 py-4 rounded-xl text-lg font-bold text-slate-700 hover:bg-slate-200 transition-all"
              >
                Découvrir nos réalisations
              </Link>
            </div>

            {/* Stats Overlay */}
            <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { label: 'Projets Réalisés', value: '200+', icon: <Award className="text-orange-500" size={18} /> },
                { label: 'Clients Satisfaits', value: '500+', icon: <Users className="text-orange-500" size={18} /> },
                { label: 'Note Moyenne', value: '4.8/5', icon: <Star className="text-orange-500" size={18} /> },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl card-shadow border border-slate-50 text-center">
                  <div className="flex justify-center mb-1">{stat.icon}</div>
                  <h4 className="text-2xl font-black text-slate-900">{stat.value}</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Slider Image Preview */}
        <div className="container mx-auto px-4 mt-16">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] md:h-[600px] group">
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600" 
              alt="Luxury Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 text-white max-w-md">
               <h3 className="text-3xl font-black mb-2">Salle des fêtes Layali Palace</h3>
               <p className="text-slate-300">Fonctionnalité et esthétique parfaitement combinées</p>
            </div>
            <div className="absolute bottom-10 right-10 bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
               <span className="text-3xl font-black text-white">100%</span>
               <p className="text-xs text-white uppercase font-bold tracking-widest">Satisfaction client</p>
            </div>
            <div className="absolute top-10 left-10 bg-orange-500 text-white px-4 py-2 rounded-xl font-bold text-sm">
               13+ Années d'expérience
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Nos Services</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Découvrez notre gamme complète de services de décoration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Décoration Intérieure", desc: "Transformez vos espaces intérieurs avec nos solutions personnalisées", icon: <Home className="text-white" />, color: "bg-orange-500", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600" },
              { title: "Aménagement Extérieur", desc: "Créons ensemble des espaces extérieurs harmonieux et fonctionnels", icon: <Globe className="text-white" />, color: "bg-green-500", img: "https://images.unsplash.com/photo-1598901861713-54ad16a7e70e?auto=format&fit=crop&w=600" },
              { title: "Design Commercial", desc: "Solutions professionnelles pour restaurants, bureaux et commerces", icon: <Layout className="text-white" />, color: "bg-orange-600", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600" },
              { title: "Consultation Design", desc: "Conseils d'experts pour optimiser vos projets de décoration", icon: <Lightbulb className="text-white" />, color: "bg-blue-500", img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=600" },
              { title: "Mobilier Sur Mesure", desc: "Création de mobilier unique adapté à vos besoins spécifiques", icon: <PenTool className="text-white" />, color: "bg-orange-400", img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600" },
              { title: "Éclairage Design", desc: "Solutions d'éclairage modernes pour sublimer vos espaces", icon: <Lightbulb className="text-white" />, color: "bg-amber-500", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600" },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-[2rem] overflow-hidden card-shadow group">
                <div className="h-48 overflow-hidden relative">
                   <img src={service.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={service.title} />
                   <div className={`absolute bottom-4 left-4 p-3 rounded-2xl ${service.color} shadow-lg`}>
                      {service.icon}
                   </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-black text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realizations Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Nos Réalisations</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Découvrez nos projets de décoration intérieure et extérieure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="rounded-3xl overflow-hidden aspect-square relative group cursor-pointer shadow-lg">
                <img 
                  src={`https://picsum.photos/800/800?random=${n + 10}`} 
                  alt={`Realization ${n}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Play size={24} fill="white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 pb-24">
        <div className="gradient-orange rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-10 left-10 bg-white/10 p-10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 bg-white/10 p-16 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="inline-flex p-4 bg-white/10 backdrop-blur-md rounded-2xl mb-4">
               <Sparkles className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white">Prêt à Transformer Votre Espace ?</h2>
            <p className="text-orange-50 text-xl font-medium leading-relaxed">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons donner vie à vos idées les plus audacieuses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
               <Link to="/contact" className="bg-white text-orange-600 px-8 py-5 rounded-2xl font-black text-xl shadow-2xl flex items-center justify-center gap-3">
                  Démarrer un Projet
               </Link>
               <a href="tel:+21697286007" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3">
                  +216 97 286 007 <ChevronRight size={24} />
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
