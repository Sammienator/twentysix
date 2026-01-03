import React from 'react'

const footer = () => {
  return (
    <div>
         {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-gray-500 text-sm">
              © 2026 Your Name. All rights reserved.
            </div>
            <div className="flex gap-6">
              {['Twitter', 'Instagram', 'Medium'].map((social) => (
                <a 
                  key={social}
                  href="#b"
                  className="text-gray-500 hover:text-cyan-400 transition-colors text-sm tracking-wide"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default footer