import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, message } = formData;
    
    let whatsappMessage = `*New Enquiry:*\n\n`;
    whatsappMessage += `*Full Name:* ${name}\n`;
    whatsappMessage += `*Inquiry Purpose:* ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/971554330532?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20 text-center flex flex-col items-center">
          <div className="mb-8 bg-nichiha-green w-16 h-1.5 rounded-full"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-6">Contact <span className="text-nichiha-blue">Us</span></h1>
          <p className="text-lg text-gray-600 max-w-2xl font-medium leading-relaxed">
            We are here to help. Reach out to our team in the UAE for product inquiries, samples, or installation assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <span className="inline-block bg-nichiha-light text-nichiha-blue px-3 py-1 font-bold uppercase tracking-widest text-xs rounded-sm mb-4">Location</span>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-6">Our <span className="text-nichiha-green">Office</span></h2>
              <div className="bg-nichiha-dark text-white p-10 rounded-xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-nichiha-blue rounded-bl-full opacity-20 mix-blend-screen" />
                <h3 className="text-xl font-bold uppercase tracking-wider mb-8 text-nichiha-green">Nichiha Middle East FZCO</h3>
                <ul className="space-y-8 relative z-10">
                  <li className="flex items-start">
                    <div className="bg-white/10 p-2 rounded-md mr-4">
                      <MapPin className="w-6 h-6 text-nichiha-green" />
                    </div>
                    <div>
                      <p className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-1">Headquarters</p>
                      <p className="text-sm text-gray-200 leading-relaxed font-medium">Business Bay, Dubai<br />United Arab Emirates</p>
                      <a href="#" className="text-xs uppercase tracking-widest font-bold text-nichiha-blue mt-3 inline-block hover:text-white transition-colors">View on Map</a>
                    </div>
                  </li>
                  <li className="flex items-start border-t border-gray-700 pt-6">
                    <div className="bg-white/10 p-2 rounded-md mr-4">
                      <Phone className="w-6 h-6 text-nichiha-blue" />
                    </div>
                    <div>
                      <p className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-1">Phone / WhatsApp</p>
                      <a href="https://wa.me/971554330532" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-200 font-medium hover:text-white transition-colors">+971 55 433 0532</a>
                    </div>
                  </li>
                  <li className="flex items-start border-t border-gray-700 pt-6">
                    <div className="bg-white/10 p-2 rounded-md mr-4">
                      <Mail className="w-6 h-6 text-nichiha-green" />
                    </div>
                    <div>
                      <p className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-1">Email</p>
                      <a href="mailto:info@puritypts.com" className="text-sm text-gray-200 font-medium hover:text-white transition-colors">info@puritypts.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <span className="inline-block bg-nichiha-light text-nichiha-blue px-3 py-1 font-bold uppercase tracking-widest text-xs rounded-sm mb-4">Directory</span>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-6">Our <span className="text-nichiha-blue">Team</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:border-nichiha-blue transition-colors">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-nichiha-dark mb-1">Mohand Safwan Alrashwane</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">Sales Manager - Dubai</p>
                  <p className="text-sm text-gray-600 mb-3 font-medium">
                    <a href="https://wa.me/971554330532" target="_blank" rel="noopener noreferrer" className="hover:text-nichiha-green transition-colors">+971 55 433 0532</a>
                  </p>
                  <a href="mailto:info@puritypts.com" className="text-xs uppercase tracking-widest font-bold text-nichiha-blue hover:text-nichiha-dark transition-colors">info@puritypts.com</a>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:border-nichiha-green transition-colors">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-nichiha-dark mb-3">Technical Support</h3>
                  <p className="text-sm text-gray-600 mb-3 font-medium">+971 55 433 0532</p>
                  <a href="mailto:info@puritypts.com" className="text-xs uppercase tracking-widest font-bold text-nichiha-green hover:text-nichiha-dark transition-colors">info@puritypts.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-nichiha-light p-8 md:p-12 rounded-xl shadow-lg border border-gray-100">
              <span className="inline-block bg-white text-nichiha-blue px-3 py-1 font-bold uppercase tracking-widest text-xs rounded-sm mb-4 shadow-sm">Inquiries</span>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-8">Send an <span className="text-nichiha-green">Enquiry</span></h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest font-bold text-nichiha-dark mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-md focus:border-nichiha-blue focus:ring-1 focus:ring-nichiha-blue focus:outline-none transition-all text-sm font-medium shadow-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest font-bold text-nichiha-dark mb-2">Inquiry Purpose *</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-md focus:border-nichiha-blue focus:ring-1 focus:ring-nichiha-blue focus:outline-none transition-all text-sm font-medium shadow-sm resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-5 px-6 bg-nichiha-blue text-white text-sm font-bold uppercase tracking-widest rounded-md shadow-xl hover:bg-blue-700 hover:-translate-y-1 hover:shadow-2xl transition-all mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
