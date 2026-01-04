import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      title: 'Words That Dance',
      subtitle: 'Between silence and sound',
      text: 'In the spaces where light meets shadow, poetry finds its voice',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80'
    },
    {
      title: 'Echoes of Tomorrow',
      subtitle: 'Dreams written in ink',
      text: 'Every verse a doorway, every line a journey into the unspoken',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'
    },
    {
      title: 'Rhythm & Soul',
      subtitle: 'Where emotion becomes art',
      text: 'Poetry is the heart speaking when words alone are not enough',
      image: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=1920&q=80'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Full Screen Image Carousel */}
      <section className="relative h-screen w-full overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Text Content - Centered and Prominent */}
            <div className="relative h-full flex items-center justify-center px-6 md:px-12">
              <div className={`text-center max-w-5xl transition-all duration-700 ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}>
                <div className="mb-4 text-sm tracking-[0.3em] uppercase" style={{ color: '#fbf0d8' }}>
                  {slide.subtitle}
                </div>
                <h1 className="text-6xl md:text-6xl lg:text-7xl font-light mb-8 text-white leading-tight">
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-2xl lg:text-3xl font-light italic text-white/90 leading-relaxed">
                  {slide.text}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl transition-all duration-300 hover:bg-white/30 hover:scale-110"
          aria-label="Previous slide"
        >
          ←
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => goToSlide((currentSlide + 1) % slides.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl transition-all duration-300 hover:bg-white/30 hover:scale-110"
          aria-label="Next slide"
        >
          →
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-white/70 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/70 rounded-full"></div>
            </div>
            <span className="text-xs text-white/70 tracking-widest">SCROLL</span>
          </div>
        </div>
      </section>

      {/* Latest Creations Section */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: '#fbf0d8' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-12 text-[#b02a29]">
            Latest Creations
          </h2>
          
          <p className="text-xl md:text-2xl leading-relaxed mb-12 font-light" style={{ color: '#191970' }}>
            Dive into a collection of verses that explore the depths of human experience, 
            from the quiet whispers of dawn to the echoes that linger in forgotten spaces. 
            Each poem is a journey—an invitation to pause, reflect, and feel.
          </p>

          <a 
            href="/poems"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            style={{ backgroundColor: '#b02a29' }}
          >
            <span>Explore All Poems</span>
            <span className="group-hover:translate-x-2 transition-transform text-xl">→</span>
          </a>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: '#fbf0d8' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-light text-center mb-20" style={{ color: '#191970' }}>
            Explore Collections
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {['Kikuyu Gems', 'Urban Echoes', 'For Everyone'].map((collection, idx) => (
              <div 
                key={idx}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
                style={{ backgroundColor: '#191970' }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: '#b02a29' }}
                ></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <h3 className="text-3xl font-light text-center mb-4 text-white">
                    {collection}
                  </h3>
                  <div className="text-sm tracking-wider" style={{ color: '#fbf0d8' }}>
                    {Math.floor(Math.random() * 10) + 3} poems
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}