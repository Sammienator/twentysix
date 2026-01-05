import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [activeTab, setActiveTab] = useState('contact');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Create mailto link
    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleWhatsApp = () => {
    // Replace with your WhatsApp number (include country code, no + or spaces)
    const phoneNumber = '254700000000'; // Example: Kenya number
    const message = 'Hello! I would like to get in touch.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div style={{ backgroundColor: '#fbf0d8' }} className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
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
            Get in Touch
          </h1>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ color: '#191970' }}
          >
            Whether you want to reach out, collaborate, or support my work, I'd love to hear from you.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'contact' 
                ? 'text-white shadow-lg' 
                : 'text-white/80 hover:text-white'
            }`}
            style={{ 
              backgroundColor: activeTab === 'contact' ? '#b02a29' : '#191970',
            }}
          >
            Contact Me
          </button>
          <button
            onClick={() => setActiveTab('support')}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'support' 
                ? 'text-white shadow-lg' 
                : 'text-white/80 hover:text-white'
            }`}
            style={{ 
              backgroundColor: activeTab === 'support' ? '#b02a29' : '#191970',
            }}
          >
            Support My Work
          </button>
        </div>

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div 
              className="rounded-3xl p-8 md:p-12 shadow-xl"
              style={{ backgroundColor: 'white' }}
            >
              <h2 
                className="text-3xl font-light mb-8"
                style={{ color: '#191970' }}
              >
                Send Me a Message
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#191970' }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-colors"
                    style={{ 
                      borderColor: '#191970',
                      backgroundColor: '#fbf0d8'
                    }}
                  />
                </div>

                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#191970' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-colors"
                    style={{ 
                      borderColor: '#191970',
                      backgroundColor: '#fbf0d8'
                    }}
                  />
                </div>

                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#191970' }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-colors"
                    style={{ 
                      borderColor: '#191970',
                      backgroundColor: '#fbf0d8'
                    }}
                  />
                </div>

                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#191970' }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-colors resize-none"
                    style={{ 
                      borderColor: '#191970',
                      backgroundColor: '#fbf0d8'
                    }}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-4 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ backgroundColor: '#b02a29' }}
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="space-y-6">
              <div 
                className="rounded-3xl p-8 shadow-xl cursor-pointer transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#fbf0d8' }}
                onClick={handleWhatsApp}
              >
                <div className="flex items-center gap-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                    style={{ backgroundColor: '#fbf0d8' }}
                  >
                    💬
                  </div>
                  <div>
                    <h3 className="text-2xl font-light mb-2 text-black">
                      WhatsApp
                    </h3>
                    <p style={{ color: 'black' }}>
                      Chat with me instantly
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className="rounded-3xl p-8 shadow-xl"
                style={{ backgroundColor: 'fbf0d8' }}
              >
                <h3 
                  className="text-2xl font-light mb-4"
                  style={{ color: '#191970' }}
                >
                  Other Ways to Connect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📧</span>
                    <a 
                      href="mailto:your-email@example.com"
                      className="hover:underline"
                      style={{ color: '#b02a29' }}
                    >
                      your-email@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📱</span>
                    <a 
                      href="tel:+254700000000"
                      className="hover:underline"
                      style={{ color: '#b02a29' }}
                    >
                      +254 700 000 000
                    </a>
                  </div>
                </div>
              </div>

              <div 
                className="rounded-3xl p-8 shadow-xl"
                style={{ backgroundColor: '#fbf0d8' }}
              >
                <h3 className="text-2xl font-light mb-4 text-black">
                  Follow My Journey
                </h3>
                <div className="flex gap-4">
                  <a 
                    href="#b"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                    style={{ backgroundColor: '#b02a29', color: '#191970' }}
                  >
                    <span className="text-xl">📘</span>
                  </a>
                  <a 
                    href="#b"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                    style={{ backgroundColor: '#b02a29', color: '#191970' }}
                  >
                    <span className="text-xl">🐦</span>
                  </a>
                  <a 
                    href="#b"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                    style={{ backgroundColor: '#b02a29', color: '#191970' }}
                  >
                    <span className="text-xl">📷</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Support Tab */}
        {activeTab === 'support' && (
          <div className="max-w-4xl mx-auto">
            <div 
              className="rounded-3xl p-8 md:p-12 shadow-xl mb-8 text-center"
              style={{ backgroundColor: 'white' }}
            >
              <h2 
                className="text-3xl font-light mb-4"
                style={{ color: '#191970' }}
              >
                Support My Creative Journey
              </h2>
              <p 
                className="text-lg mb-8"
                style={{ color: '#191970' }}
              >
                Your support helps me continue creating poetry and sharing stories that matter.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* PayPal */}
              <div 
                className="rounded-3xl p-8 shadow-xl text-center cursor-pointer transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#191970' }}
                onClick={() => window.open('https://paypal.me/yourusername', '_blank')}
              >
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl"
                  style={{ backgroundColor: '#0070BA' }}
                >
                  💳
                </div>
                <h3 className="text-2xl font-light mb-2 text-white">PayPal</h3>
                <p style={{ color: '#fbf0d8' }}>
                  Donate via PayPal
                </p>
              </div>

              {/* Card Payment */}
              <div 
                className="rounded-3xl p-8 shadow-xl text-center cursor-pointer transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#191970' }}
                onClick={() => alert('Card payment link coming soon!')}
              >
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl"
                  style={{ backgroundColor: '#b02a29' }}
                >
                  💳
                </div>
                <h3 className="text-2xl font-light mb-2 text-white">Credit/Debit Card</h3>
                <p style={{ color: '#fbf0d8' }}>
                  Secure card payment
                </p>
              </div>

              {/* M-PESA */}
              <div 
                className="rounded-3xl p-8 shadow-xl text-center"
                style={{ backgroundColor: 'white' }}
              >
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl"
                  style={{ backgroundColor: '#00A651' }}
                >
                  📱
                </div>
                <h3 
                  className="text-2xl font-light mb-2"
                  style={{ color: '#191970' }}
                >
                  M-PESA
                </h3>
                <p 
                  className="mb-4"
                  style={{ color: '#191970' }}
                >
                  Send directly to:
                </p>
                <p 
                  className="text-xl font-medium"
                  style={{ color: '#b02a29' }}
                >
                  +254 700 000 000
                </p>
              </div>

              {/* Paybill */}
              <div 
                className="rounded-3xl p-8 shadow-xl text-center"
                style={{ backgroundColor: 'white' }}
              >
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl"
                  style={{ backgroundColor: '#191970' }}
                >
                  🏦
                </div>
                <h3 
                  className="text-2xl font-light mb-2"
                  style={{ color: '#191970' }}
                >
                  Paybill
                </h3>
                <div 
                  className="space-y-2"
                  style={{ color: '#191970' }}
                >
                  <p>Business Number: <span className="font-medium" style={{ color: '#b02a29' }}>123456</span></p>
                  <p>Account Number: <span className="font-medium" style={{ color: '#b02a29' }}>YourName</span></p>
                </div>
              </div>
            </div>

            <div 
              className="rounded-3xl p-8 shadow-xl mt-8 text-center"
              style={{ backgroundColor: '#191970' }}
            >
              <p className="text-lg text-white">
                ❤️ Every contribution, no matter the size, means the world to me. Thank you for your support!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;