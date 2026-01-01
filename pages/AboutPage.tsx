
import React from 'react';
// Fix: Added Star, Home, Layout, and Globe to the imports to resolve "Cannot find name" errors
import { Target, Eye, Lightbulb, Heart, ShieldCheck, Award, Sparkles, Users, Calendar, CheckCircle, Star, Home, Layout, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-slate-50/50">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-100 bg-orange-50 text-orange-600 font-bold text-xs">
            <Sparkles size={14} />
            À PROPOS DE NOUS
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
            Créateurs d'Espaces <br />
            <span className="text-orange-500">Exceptionnels</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Depuis 2012, nous transformons vos rêves en réalité à travers des designs <span className="text-orange-500 font-bold underline">innovants</span> et <span className="text-orange-500 font-bold underline">personnalisés</span>.
          </p>
          
          <div className="flex gap-4 justify-center">
             <button className="gradient-orange text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-orange-500/20">Découvrir nos Projets</button>
             <button className="bg-white text-slate-700 px-8 py-4 rounded-xl font-bold border border-slate-200">Prendre Rendez-vous</button>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Clients Satisfaits', value: '500+', icon: <Users className="text-blue-500" /> },
            { label: 'Projets Réalisés', value: '200+', icon: <Award className="text-orange-500" /> },
            { label: "Années d'Expérience", value: '+13', icon: <Calendar className="text-purple-500" /> },
            { label: 'Satisfaction Client', value: '97%', icon: <Heart className="text-red-500" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] card-shadow border border-slate-50 text-center space-y-3">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto">{stat.icon}</div>
              <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* History Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-slate-900">Notre Histoire</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Tout a commencé en 2012 with une vision simple : <span className="text-orange-500 font-bold">transformer les espaces ordinaires en lieux extraordinaires.</span>
              </p>
              <p className="text-slate-500 leading-relaxed">
                Fondée par un gérant passionné, Placof Décor s'est rapidement imposée comme une référence en Tunisie dans la décoration intérieure et extérieure, en particulier grâce à son expertise dans l'utilisation du placoplâtre pour des réalisations modernes, élégantes et sur mesure.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Aujourd'hui, nous sommes fiers d'avoir accompagné plus de 500 clients dans la réalisation de leurs projets, allant de la simple rénovation à la création d'espaces commerciaux complexes.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                 {['Créativité', 'Excellence', 'Innovation', 'Passion'].map(v => (
                   <div key={v} className="bg-orange-50 text-orange-600 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 border border-orange-100">
                     <Star size={14} fill="currentColor" /> {v}
                   </div>
                 ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4">
                  <div className="h-60 rounded-[2rem] bg-orange-100 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="History 1" />
                  </div>
                  <div className="h-40 rounded-[2rem] bg-red-100 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1541888941259-7a9492bb5907?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="History 2" />
                  </div>
               </div>
               <div className="space-y-4 pt-10">
                  <div className="h-40 rounded-[2rem] bg-purple-100 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="History 3" />
                  </div>
                  <div className="h-60 rounded-[2rem] bg-blue-100 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="History 4" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Nos Valeurs</h2>
            <p className="text-slate-500">Les principes qui guident chacune de nos créations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Vision', icon: <Eye className="text-white" />, color: 'bg-blue-500', desc: "Transformer chaque espace en une œuvre d'art fonctionnelle qui reflète la personnalité unique de nos clients." },
              { title: 'Mission', icon: <Target className="text-white" />, color: 'bg-orange-500', desc: "Offrir des solutions de décoration innovantes et durables qui dépassent les attentes de nos clients." },
              { title: 'Innovation', icon: <Lightbulb className="text-white" />, color: 'bg-purple-500', desc: "Intégrer les dernières tendances et technologies pour créer des espaces modernes et intemporels." },
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] card-shadow text-center space-y-6 group hover:border-orange-500/20 transition-all border border-transparent">
                <div className={`w-20 h-20 rounded-[2rem] ${value.color} flex items-center justify-center mx-auto shadow-xl`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Nos Expertises</h2>
            <p className="text-slate-500">Des services complets pour tous vos projets de décoration</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
             {[
               { title: 'Décoration Intérieure', icon: <Home className="text-orange-500" />, points: ['Design personnalisé', "Optimisation d'espace", 'Choix des matériaux', 'Suivi de projet'] },
               { title: 'Design Commercial', icon: <Layout className="text-orange-500" />, points: ['Identité visuelle', 'Ergonomie', 'Éclairage professionnel', 'Mobilier sur mesure'] },
               { title: 'Aménagement Extérieur', icon: <Globe className="text-orange-500" />, points: ['Paysagisme', 'Terrasses', 'Éclairage extérieur', 'Mobilier outdoor'] },
             ].map((exp, i) => (
               <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:card-shadow transition-all flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm"><div className="p-3 bg-orange-500/10 rounded-xl">{exp.icon}</div></div>
                  <div className="flex-grow text-center md:text-left">
                     <h3 className="text-2xl font-black text-slate-900 mb-2">{exp.title}</h3>
                     <p className="text-slate-500 text-sm mb-4">Création d'espaces harmonieux et fonctionnels qui reflètent votre style de vie.</p>
                     <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {exp.points.map(p => (
                          <div key={p} className="flex items-center gap-2 text-xs font-bold text-slate-600">
                             <CheckCircle className="text-green-500" size={14} /> {p}
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
