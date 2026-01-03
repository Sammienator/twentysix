import React from 'react';

const About = () => {
  return (
    <div style={{ backgroundColor: '#fbf0d8' }}>
      {/* About Section with Image */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden relative group shadow-2xl">
                {/* Placeholder for your photo - replace with your actual image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundColor: '#191970',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80)'
                  }}
                >
                  {/* Overlay */}
                  <div 
                    className="absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: '#b02a29' }}
                  ></div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute inset-0 border-4 border-white/20 rounded-3xl"></div>
              </div>
              
              {/* Floating accent */}
              <div 
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-3xl opacity-40"
                style={{ backgroundColor: '#b02a29' }}
              ></div>
            </div>
            
            {/* Text Content */}
            <div>
              <h2 
                className="text-5xl md:text-6xl font-light mb-8"
                style={{ color: '#191970' }}
              >
                The Art of Now
              </h2>
              
              <p 
                className="text-lg leading-relaxed mb-6"
                style={{ color: '#191970' }}
              >
                At the intersection of <span className="font-semibold" style={{ color: '#b02a29' }}>technology</span> and{' '}
                <span className="font-semibold" style={{ color: '#b02a29' }}>emotion</span>, 
                I explore the boundaries of contemporary poetry. Each verse is a digital brushstroke, 
                painting the invisible emotions of our hyperconnected age.
              </p>
              
              <p 
                className="text-lg leading-relaxed mb-8"
                style={{ color: '#191970' }}
              >
                My work weaves through themes of identity, connection, and the beautiful chaos 
                of modern existence—transforming code into consciousness, pixels into poetry.
              </p>

              <a 
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-3 rounded-full text-white font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                style={{ backgroundColor: '#b02a29' }}
              >
                <span>Get in Touch</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;