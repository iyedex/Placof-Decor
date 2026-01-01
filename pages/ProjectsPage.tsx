
import React from 'react';
import { MapPin, Search, Play, Filter, Sparkles } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const projects = [
    { title: "Hôtel El Medina", location: "Tunis", type: "Hospitalité", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" },
    { title: "Salle de mariage Palace", location: "Sousse", type: "Événementiel", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800" },
    { title: "Villa Moderne", location: "Hammamet", type: "Résidentiel", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800" },
    { title: "Bureau Corporate", location: "Tunis", type: "Commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
    { title: "Appartement de luxe", location: "Gammarth", type: "Résidentiel", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" },
    { title: "Boutique de Mode", location: "Lac 2", type: "Retail", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" },
    { title: "Restaurant Gastronomique", location: "Sidi Bou Said", type: "Commercial", image: "https://images.unsplash.com/photo-1550966842-2849a2839ca6?auto=format&fit=crop&q=80&w=800" },
    { title: "Showroom Design", location: "Tunis", type: "Commercial", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-100 bg-orange-50 text-orange-600 font-bold text-xs uppercase">
              <Sparkles size={14} /> Réalisations
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900">Nos <span className="text-orange-500">Projets</span></h1>
            <p className="text-xl text-slate-400">Découvrez nos plus belles réalisations à travers la Tunisie.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
             <div className="relative flex-grow">
               <input 
                 type="text" 
                 placeholder="Rechercher..." 
                 className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 pr-12 w-full md:w-80 focus:outline-none focus:border-orange-500 transition-all text-slate-700"
               />
               <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
             </div>
             <button className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-500 hover:text-orange-500 transition-colors">
                <Filter size={24} />
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="group relative rounded-[2.5rem] overflow-hidden h-[400px] shadow-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-6 right-6">
                 <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Play size={18} fill="white" />
                 </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  {project.type}
                </span>
                <h3 className="text-xl font-black text-white">{project.title}</h3>
                <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                  <MapPin size={14} className="text-orange-500" />
                  {project.location}, Tunisie
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
