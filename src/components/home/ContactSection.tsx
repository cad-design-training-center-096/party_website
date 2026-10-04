import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaCheckCircle, 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaInstagram 
} from 'react-icons/fa';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching image */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0052cc] tracking-tight">
            Contact Us
          </h2>
          <div className="w-12 h-1 bg-amber-500 rounded-full mx-auto mt-2.5 mb-4" />
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Reach out to us for any queries or to join our party.
          </p>
        </div>

        {/* Two-Column Grid: Get In Touch & Contact Information */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Get In Touch Form */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#002f6c] tracking-tight">
              Get In Touch
            </h3>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                <FaCheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Thank you, {formData.fullName}!</h4>
                <p className="text-xs text-slate-600">
                  Your message has been received by the Central Office of Vijaya Janata Party. Our team will contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: '', email: '', phone: '', message: '' });
                  }}
                  className="mt-3 px-4 py-2 text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052cc] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052cc] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052cc] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052cc] focus:border-transparent transition resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-[#f97316] hover:bg-[#ea580c] active:bg-[#c2410c] text-white font-bold text-sm uppercase tracking-wide rounded-md shadow-sm transition-colors cursor-pointer select-none"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Information matching image */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-[#002f6c] tracking-tight">
              Contact Information
            </h3>

            <div className="space-y-6">
              
              {/* Head Office */}
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 text-orange-500 shrink-0 flex items-center justify-center">
                  <FaMapMarkerAlt className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Head Office
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
                    Vijaya Janata Party, Shop No 308, Waheb Ultima,<br />
                    Seshadripuram Main Road, Seshadripuram,<br />
                    Bangalore - 560020<br />
                    <span className="text-slate-500">(Opposite to Hotel Hoysala)</span>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 text-orange-500 shrink-0 flex items-center justify-center">
                  <FaPhoneAlt className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Phone
                  </h4>
                  <a 
                    href="tel:+919876543210"
                    className="text-xs text-slate-700 hover:text-orange-600 font-medium transition-colors"
                  >
                    +91 9876543210
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 text-orange-500 shrink-0 flex items-center justify-center">
                  <FaEnvelope className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Email
                  </h4>
                  <a 
                    href="mailto:shashi@vjpparty.com"
                    className="text-xs text-slate-700 hover:text-orange-600 font-medium transition-colors"
                  >
                    shashi@vjpparty.com
                  </a>
                </div>
              </div>

              {/* Follow Us */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-800 mb-3">
                  Follow Us
                </h4>
                <div className="flex items-center gap-3">
                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#1877f2] text-white flex items-center justify-center text-sm font-bold hover:opacity-90 transition-transform transform hover:scale-105 shadow-sm"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>

                  {/* Twitter / X */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#1da1f2] text-white flex items-center justify-center text-sm font-bold hover:opacity-90 transition-transform transform hover:scale-105 shadow-sm"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#ff0000] text-white flex items-center justify-center hover:opacity-90 transition-transform transform hover:scale-105 shadow-sm"
                    aria-label="YouTube"
                  >
                    <FaYoutube className="w-4 h-4" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:opacity-90 transition-transform transform hover:scale-105 shadow-sm"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
