import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CertificatesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allCertifications = [
    {
      title: "Data Analyst Bootcamp Using Excel and SQL Analisis Data",
      issuer: "Karirnex",
      date: "Jan 2026",
      image: "/img/sertifikat/Data Analyst Bootcamp Using Excel and SQL.jpg",
      credentialUrl: "https://github.com/mraynar/my-portofolio", 
      tech: ["Looker Studio", "Excel", "DB Browser SQL"]
    },
    {
      title: "Intro to Data Analytics",
      issuer: "Revou",
      date: "Feb 2026",
      image: "/img/sertifikat/Intro to Data Analytics.jpg",
      credentialUrl: "https://github.com/mraynar/my-portofolio",
      tech: ["Excel", "Looker Studio"]
    },
    {
      title: "Python For Data Analysis",
      issuer: "My Skill",
      date: "Feb 2026",
      image: "/img/sertifikat/Python Introduction for Data Analysis.jpg",
      credentialUrl: "https://github.com/mraynar/my-portofolio",
      tech: ["Power BI", "Python", "Google Collab"]
    },
    {
      title: "UI/UX Design",
      issuer: "My Skill",
      date: "Jan 2025",
      image: "/img/sertifikat/UI:UX Design Fundamentals.jpg", 
      credentialUrl: "https://github.com/mraynar/my-portofolio",
      tech: ["Figma"]
    },
    {
      title: "Back End Developer",
      issuer: "Dicoding Indonesia",
      date: "Des 2024",
      image: "/img/sertifikat/Back-End | Deploy Aplikasi dengan Aman.jpg",
      credentialUrl: "https://github.com/mraynar/my-portofolio",
      tech: ["GitLab CI/CD"]
    },
    {
      title: "Flutter UI Android Development",
      issuer: "Dicoding Indonesia",
      date: "Des 2024",
      image: "/img/sertifikat/Flutter | Ciptakan Animasi Epik dengan Animation.jpg",
      credentialUrl: "https://github.com/mraynar/my-portofolio",
      tech: ["Flutter"]
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto mt-8">
        <Link to="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium mb-12 group transition-all">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <div className="text-left mb-16">
          <h2 className="text-indigo-500 font-bold tracking-[0.2em] uppercase text-lg mb-2">Recognition</h2>
          <h1 className="text-4xl md:text-5xl font-black text-white">All Certifications</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCertifications.map((cert, index) => (
            <div key={index} className="group bg-slate-900/40 rounded-3xl border border-slate-800 overflow-hidden hover:border-indigo-500/50 transition-all duration-500 shadow-xl flex flex-col">
              <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" onError={(e) => { e.target.src = "https://via.placeholder.com/400x250?text=Certificate"; }}/>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3"><span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-md">{cert.issuer}</span><span className="text-slate-500 text-xs font-medium">{cert.date}</span></div>
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors leading-tight flex-grow">{cert.title}</h3>
                <div className="mt-auto"><a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-slate-800 text-white text-xs font-bold rounded-xl hover:bg-indigo-600 border border-slate-700 hover:border-indigo-500 transition-all duration-300 flex items-center justify-center gap-2">Show Credentials</a></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
