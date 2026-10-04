import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaCheck } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  return (
    <footer className="bg-[#111c2a] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Grid matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80 text-xs">
          
          {/* Column 1: Vijaya Janata Party */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold tracking-tight">
              Vijaya Janata Party
            </h3>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Committed to transparency, accountability, and equitable progress for all citizens of India.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#hero" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#hero" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#commitments" className="text-slate-400 hover:text-white transition-colors">
                  Neurocratia
                </a>
              </li>
              <li>
                <a href="#commitments" className="text-slate-400 hover:text-white transition-colors">
                  Our Agenda
                </a>
              </li>
              <li>
                <a href="#updates" className="text-slate-400 hover:text-white transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#digital-hub" className="text-slate-400 hover:text-white transition-colors">
                  Media
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold tracking-tight">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">
                  Shop No 308, Waheb Ultima, Seshadripuram Main Road, Seshadripuram, Bangalore - 560020
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <a href="tel:+919876543210" className="text-slate-400 hover:text-white transition-colors">
                  +91 9876543210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <a href="mailto:shashi@vjpparty.com" className="text-slate-400 hover:text-white transition-colors">
                  shashi@vjpparty.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold tracking-tight">
              Newsletter
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Subscribe to our newsletter for updates.
            </p>

            <form onSubmit={handleSubscribe} className="pt-1">
              <div className="flex rounded-md overflow-hidden bg-white shadow-sm max-w-sm">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 w-full focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="bg-[#f97316] hover:bg-[#ea580c] text-white px-4 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                >
                  {subscribed ? (
                    <FaCheck className="w-3.5 h-3.5" />
                  ) : (
                    <FaPaperPlane className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-emerald-400 font-medium mt-2">
                  Thank you for subscribing to VJP updates!
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Copyright centered matching screenshot */}
        <div className="pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Vijaya Janata Party. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
