
import React from 'react';
// Fix: Added Star to the imports to resolve "Cannot find name 'Star'" error
import { Volume2, Layout, Palette, PenTool, CheckCircle2, Home, Globe, Lightbulb, Play, ArrowRight, Sparkles, Star } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const processes = [
    "Consultation et analyse des besoins",
    "Création de moodboards et concepts",
    "Plans 3D et visualisations",
    "Sélection des éléments décoratifs",
    "Installation et mise en place",
    "Finitions et ajustements"
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-slate-50/50">
        <div className="container mx-auto px-4 text-center space-y-6">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-100 bg-orange-50 text-orange-600 font-bold text-xs uppercase">
            <Sparkles size={14} /> Nos Services
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900">
            Expertise & <br /> <span className="text-orange-500">Créativité</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Des solutions complètes de décoration pour transformer vos espaces en <span className="text-orange-500 font-bold underline">lieux d'exception</span> qui vous ressemblent.
          </p>
          <div className="flex justify-center gap-4">
             <button className="gradient-orange text-white px-8 py-4 rounded-xl font-black shadow-lg shadow-orange-500/20 flex items-center gap-2"><Palette size={20}/> Consultation Gratuite</button>
             <button className="bg-white text-slate-700 px-8 py-4 rounded-xl font-bold border border-slate-200 flex items-center gap-2">Voir Nos Réalisations <ArrowRight size={18}/></button>
          </div>
        </div>
      </section>

      {/* Main Services Breakdown */}
      <section className="py-24">
        <div className="container mx-auto px-4 space-y-32">
          {/* Service 1: Decoration Interieure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
               <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg"><Home size={28}/></div>
               <h2 className="text-4xl font-black text-slate-900">Décoration Intérieure</h2>
               <p className="text-lg text-slate-600 font-medium">Transformez votre maison en un cocon de bien-être</p>
               <p className="text-slate-500 leading-relaxed">
                 Création d'espaces intérieurs harmonieux et fonctionnels qui reflètent parfaitement votre personnalité et votre style de vie. Nous prenons en compte chaque détail pour créer un environnement unique.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {[
                    "Conception personnalisée selon vos goûts",
                    "Optimisation intelligente de l'espace",
                    "Sélection minutieuse des matériaux",
                    "Coordination couleurs et textures",
                    "Éclairage d'ambiance sur mesure",
                    "Suivi complet du projet"
                  ].map(p => (
                    <div key={p} className="flex items-center gap-2 text-slate-500 text-sm font-bold">
                       <CheckCircle2 className="text-green-500 shrink-0" size={16} /> {p}
                    </div>
                  ))}
               </div>
               <button className="bg-blue-500 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2">En savoir plus <ArrowRight size={18}/></button>
            </div>
            
            <div className="bg-white rounded-[3rem] p-10 card-shadow border border-slate-50 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-[3rem] group-hover:bg-blue-500 transition-colors flex items-center justify-center">
                  <Star className="text-blue-500 group-hover:text-white transition-colors" size={32} />
               </div>
               <h3 className="text-2xl font-black text-slate-900 mb-8">Notre Processus :</h3>
               <div className="space-y-6">
                  {processes.map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-lg shrink-0">{i+1}</div>
                       <p className="text-slate-600 font-bold">{step}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Service 2: Design Commercial */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 bg-white rounded-[3rem] p-10 card-shadow border border-slate-50 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-bl-[3rem] group-hover:bg-orange-500 transition-colors flex items-center justify-center">
                  <Sparkles className="text-orange-500 group-hover:text-white transition-colors" size={32} />
               </div>
               <h3 className="text-2xl font-black text-slate-900 mb-8">Notre Processus :</h3>
               <div className="space-y-6">
                  {[
                    "Audit de l'espace existant",
                    "Analyse de la clientèle cible",
                    "Conception du parcours client",
                    "Design et aménagement",
                    "Installation technique",
                    "Formation et accompagnement"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-lg shrink-0">{i+1}</div>
                       <p className="text-slate-600 font-bold">{step}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
               <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg"><Layout size={28}/></div>
               <h2 className="text-4xl font-black text-slate-900">Design Commercial</h2>
               <p className="text-lg text-slate-600 font-medium">Renforcez votre image de marque</p>
               <p className="text-slate-500 leading-relaxed">
                 Conception d'espaces commerciaux attractifs et fonctionnels qui captivent vos clients et renforcent votre identité de marque. Chaque projet est pensé pour optimiser l'expérience client.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {[
                    "Étude de votre identité visuelle",
                    "Design ergonomique et fonctionnel",
                    "Éclairage professionnel adapté",
                    "Mobilier sur mesure et moderne",
                    "Signalétique intégrée",
                    "Respect des normes commerciales"
                  ].map(p => (
                    <div key={p} className="flex items-center gap-2 text-slate-500 text-sm font-bold">
                       <CheckCircle2 className="text-orange-500 shrink-0" size={16} /> {p}
                    </div>
                  ))}
               </div>
               <button className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2">En savoir plus <ArrowRight size={18}/></button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Complementaires */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Services Complémentaires</h2>
            <p className="text-slate-500">Des prestations spécialisées pour parfaire vos projets</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { title: 'Conseil en Couleurs', icon: <Palette/>, color: 'text-purple-500', bg: 'bg-purple-500/10' },
               { title: 'Éclairage Design', icon: <Lightbulb/>, color: 'text-amber-500', bg: 'bg-amber-500/10' },
               { title: 'Mobilier Sur Mesure', icon: <PenTool/>, color: <Globe size={24}/>, bg: 'bg-blue-500/10' },
               { title: 'Visualisation 3D', icon: <Layout/>, color: 'text-red-500', bg: 'bg-red-500/10' },
             ].map((s, i) => (
               <div key={i} className="bg-white p-8 rounded-[2rem] card-shadow text-center space-y-4">
                  <div className={`w-14 h-14 ${s.bg} rounded-2xl flex items-center justify-center mx-auto shadow-sm`}>
                    <div className={typeof s.color === 'string' ? s.color : ''}>{s.icon}</div>
                  </div>
                  <h3 className="text-lg font-black text-slate-900">{s.title}</h3>
                  <p className="text-slate-400 text-sm">Solutions professionnelles pour vos espaces.</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Expertise en Placoplatre */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Expertise en Placoplâtre</h2>
            <p className="text-slate-500">Solutions modernes de cloisonnement et décoration intérieure</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { id: '01', title: 'Étude & Mesures', desc: 'Analyse précise de votre espace', ar: 'دراسة وقياسات' },
               { id: '02', title: 'Préparation', desc: 'Préparation du support et matériaux', ar: 'التحضير' },
               { id: '03', title: 'Installation', desc: 'Pose professionnelle des plaques', ar: 'التركيب' },
               { id: '04', title: 'Finitions', desc: 'Joints, ponçage et finition parfaite', ar: 'اللمسة الأخيرة' },
             ].map((step, i) => (
               <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-center space-y-4 hover:bg-white hover:card-shadow transition-all">
                  <div className="w-16 h-16 gradient-orange rounded-2xl flex items-center justify-center mx-auto text-white font-black text-xl shadow-lg">{step.id}</div>
                  <div className="space-y-1">
                     <h3 className="text-lg font-black text-slate-900">{step.title}</h3>
                     <p className="text-xs font-bold text-orange-500">{step.ar}</p>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
