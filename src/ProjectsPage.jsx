import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ProjectsPage() {
  // Agar setiap kali masuk halaman ini di-scroll ke bagian paling atas
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProjects = [
    {
      title: "Shoping Kuy - PHP",
      desc: "Platform e-commerce klasik berbasis PHP dengan manajemen katalog produk.",
      tech: ["PHP", "CSS", "MySQL", "JS"],
      images: ["/img/shoping-kuy/ShopingKuy.png"],
      link: "https://github.com/mraynar/my-portofolio" 
    }, 
    {
      title: "Griya Asri Kos - Laravel",
      desc: "Website portofolio sebagai tugas Sekolah Menengah Kejurusan",
      tech: ["Laravel", "Tailwind", "JS"],
      images: ["/img/sewa-kos/GriyaAsri.png"],
      link: "https://github.com/mraynar/my-portofolio"
    }, 
    {
      title: "Rental Mobil & Motor - Laravel",
      desc: "Website Rental Mobil dan Motor dengan pemesanan digital",
      tech: ["Laravel", "Bootstrap", "JS", "MySQL"],
      images: ["/img/rental/Car Rent.png"],
      link: "https://github.com/mraynar/my-portofolio"
    }, 
    {
      title: "FMCG Sales Performance Diatribution Analysis",
      desc: "Menganalisis +19.000 transaksi retail untuk mengoptimalkan strategi penjualan dan efektivitas promosi.",
      tech: ["Looker Studio", "DB Browser", "Excel"],
      images: [
        "/img/data1/looker1.png", 
        "/img/data1/looker4.png", 
        "/img/data1/looker2.png", 
        "/img/data1/looker3.png", 
        "/img/data1/data5.png", 
      ],
      link: "https://github.com/mraynar/my-portofolio"
    }, 
    {
      title: "Website UKM - Wordpress",
      desc: "Website UKM PENALARAN & KREATIFITAS UPN VETERAN Jawa Timur",
      tech: ["Wordpress"],
      images: [
        "/img/ukm/ukm-home.png", 
        "/img/ukm/ukm-jumlah.png", 
        "/img/ukm/ukm-bidang.png", 
        "/img/ukm/ukm-about.png", 
      ],
      link: "https://github.com/mraynar/my-portofolio"
    }, 
    {
      title: "SIPALING - Figma",
      desc: "Final project semester 3 membuat design aplikasi pelaporan warga",
      tech: ["Figma"],
      images: [
        "/img/figma1/SIPALING MOCKUP.png",
        "/img/figma1/fp-3.png",
        "/img/figma1/fp-4.png",
        "/img/figma1/figma-wf.png",
        "/img/figma1/fp-1.png",
        "/img/figma1/fp-2.png",
      ],
      link: "https://github.com/mraynar/my-portofolio"
    }, 
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto mt-8">
        <Link to="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium mb-12 group transition-all">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <div className="text-left mb-16">
          <h2 className="text-indigo-500 font-bold tracking-[0.2em] uppercase text-lg mb-2">Portfolio</h2>
          <h1 className="text-4xl md:text-5xl font-black text-white">All Featured Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div key={index} className="group relative bg-slate-900/40 rounded-3xl border border-slate-700 overflow-hidden hover:border-indigo-500/50 transition-all duration-500 shadow-2xl flex flex-col">
              <div className="relative h-52 w-full overflow-hidden bg-slate-800 group/swiper">
                <Swiper modules={[Pagination, Autoplay, Navigation]} pagination={{ clickable: true }} navigation={true} autoplay={{ delay: 4000, disableOnInteraction: false }} className="h-full w-full">
                  {project.images.map((img, imgIdx) => (
                    <SwiperSlide key={imgIdx}>
                      <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                      <img src={img} alt={`${project.title} - ${imgIdx}`} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tech.map((t) => <span key={t} className="text-[12px] font-bold uppercase tracking-tighter px-2 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-md">{t}</span>)}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{project.desc}</p>
                <div className="mt-auto">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-all duration-300 flex items-center justify-center gap-2">View Project Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
