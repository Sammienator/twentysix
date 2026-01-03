import React, { useState } from 'react';

const PoemsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample poems data - replace with your actual poems
  const poems = [
    {
      id: 1,
      title: 'Mũthamaki wa Ngoro Yakwa',
      category: 'kikuyu',
      date: 'December 2024',
      excerpt: 'Wee ũrĩa ũthamakagĩra ngoro yakwa, ũrĩa mwĩhoko wakwa ũiguaga...',
      content: `Wee ũrĩa ũthamakagĩra ngoro yakwa,
ũrĩa mwĩhoko wakwa ũiguaga,
ũrĩa ũtũmaga gũkena gũkorwo kũrĩ ũhoro.

Ndakwenda ta ũrĩa mũtĩ wendaga mbura,
ta ũrĩa riũa rĩendaga kũratha,
wee ũrĩ ũhoro wakwa wothe.`
    },
    {
      id: 2,
      title: 'City Lights',
      category: 'urban',
      date: 'November 2024',
      excerpt: 'Concrete jungle where dreams are made, hustle and flow in every corner...',
      content: `Concrete jungle where dreams are made,
hustle and flow in every corner,
matatus racing against time itself.

Street lights flicker like urban stars,
guiding souls through Nairobi nights,
each street corner tells a thousand tales.

We grind, we shine, we make it happen,
city rhythm in our blood,
this is where legends are born.`
    },
    {
      id: 3,
      title: 'The Space Between',
      category: 'everyone',
      date: 'October 2024',
      excerpt: 'In the silence between heartbeats, where all souls meet as one...',
      content: `In the silence between heartbeats,
where all souls meet as one,
no language needed, just feeling.

We are all searching for connection,
reaching across divides we've built,
finding humanity in unexpected places.

Love knows no borders,
pain speaks every tongue,
and hope—hope is universal.`
    },
    {
      id: 4,
      title: 'Gĩkũyũ Gĩakwa',
      category: 'kikuyu',
      date: 'September 2024',
      excerpt: 'Rũthiomi rwa ciana cia baba, rũrĩa rũciarĩte ngoro yakwa...',
      content: `Rũthiomi rwa ciana cia baba,
rũrĩa rũciarĩte ngoro yakwa,
rũrĩa rũkinyagia mĩario mĩrathi-inĩ.

Ndirĩ hĩndĩ ngariganĩrwo nĩ kĩrĩra gĩakwa,
kana thimo cia ũũgĩ wa tene,
cio irĩ na hinya wa kũhingũra njĩra.`
    },
    {
      id: 5,
      title: 'Mama Mboga Dreams',
      category: 'urban',
      date: 'August 2024',
      excerpt: 'She rises before the sun, her stall her kingdom, her hustle her crown...',
      content: `She rises before the sun,
her stall her kingdom,
her hustle her crown.

Counting shillings with calloused hands,
building empires coin by coin,
feeding families with her sweat.

This is the real Nairobi,
where queens don't wear crowns,
but they rule nonetheless.`
    },
    {
      id: 6,
      title: 'One Human Family',
      category: 'everyone',
      date: 'July 2024',
      excerpt: 'Different faces, different places, but the same heart beating inside...',
      content: `Different faces, different places,
but the same heart beating inside,
we bleed the same, we dream the same.

Borders are just lines on maps,
flags are just pieces of cloth,
what matters is the soul within.

When we strip away the labels,
we find we're not so different,
just humans trying to find our way home.`
    }
  ];

  const categories = [
    { value: 'all', label: 'All Poems' },
    { value: 'kikuyu', label: 'Kikuyu Gems' },
    { value: 'urban', label: 'Urban Echoes' },
    { value: 'everyone', label: 'For Everyone' }
  ];

  const filteredPoems = selectedCategory === 'all' 
    ? poems 
    : poems.filter(poem => poem.category === selectedCategory);

  const [expandedPoem, setExpandedPoem] = useState(null);

  return (
    <div style={{ backgroundColor: '#fbf0d8' }} className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Home Button */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            style={{ backgroundColor: '#191970' }}
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Home</span>
          </a>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-7xl font-light mb-6"
            style={{ color: '#191970' }}
          >
            Poetry Collection
          </h1>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ color: '#191970' }}
          >
            A journey through words, emotions, and the spaces in between
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === cat.value
                  ? 'text-white shadow-lg scale-105'
                  : 'text-white/80 hover:text-white hover:scale-105'
              }`}
              style={{
                backgroundColor: selectedCategory === cat.value ? '#b02a29' : '#191970'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Poems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPoems.map((poem) => (
            <div
              key={poem.id}
              className="rounded-3xl p-8 shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ backgroundColor: 'white' }}
              onClick={() => setExpandedPoem(expandedPoem === poem.id ? null : poem.id)}
            >
              {/* Date Badge */}
              <div 
                className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: '#191970', color: '#fbf0d8' }}
              >
                {poem.date}
              </div>

              {/* Title */}
              <h2 
                className="text-3xl font-light mb-4"
                style={{ color: '#191970' }}
              >
                {poem.title}
              </h2>

              {/* Excerpt or Full Content */}
              {expandedPoem === poem.id ? (
                <div 
                  className="text-base leading-relaxed whitespace-pre-line mb-4"
                  style={{ color: '#191970' }}
                >
                  {poem.content}
                </div>
              ) : (
                <p 
                  className="text-base leading-relaxed mb-4"
                  style={{ color: '#191970' }}
                >
                  {poem.excerpt}
                </p>
              )}

              {/* Read More/Less Button */}
              <button
                className="font-medium transition-colors inline-flex items-center gap-2 group"
                style={{ color: '#b02a29' }}
              >
                <span>{expandedPoem === poem.id ? 'Read Less' : 'Read More'}</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  {expandedPoem === poem.id ? '↑' : '→'}
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPoems.length === 0 && (
          <div 
            className="text-center py-20 rounded-3xl"
            style={{ backgroundColor: 'white' }}
          >
            <p 
              className="text-2xl font-light"
              style={{ color: '#191970' }}
            >
              No poems found in this category yet. Check back soon!
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div 
          className="mt-16 rounded-3xl p-12 text-center"
          style={{ backgroundColor: '#191970' }}
        >
          <h3 className="text-3xl font-light mb-4 text-white">
            Connect With Me
          </h3>
          <p className="text-lg mb-8" style={{ color: '#fbf0d8' }}>
            Have thoughts on my work? Want to collaborate? Reach out!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            style={{ backgroundColor: '#b02a29' }}
          >
            <span>Get in Touch</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PoemsPage;