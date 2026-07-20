import { motion } from 'motion/react';
import { PlayCircle, Download, FileText, CheckCircle2, Video } from 'lucide-react';

const videos3030 = [
  { title: 'Tips for Installing Panels', duration: '4:24' },
  { title: 'Tips for Installing the Starter Track', duration: '3:38' },
  { title: 'Tips for Installing our Manufactured Corner', duration: '5:08' },
  { title: 'Creating an Expansion Joint', duration: '3:07' },
];

const manuals = [
  { title: 'Standard installation method (PDF)', type: 'General' },
  { title: '1. RC Structure, Metal Furring Strip: Horizontal installation (PDF)', type: '3030 Panel' },
  { title: '2. RC Structure, Metal Furring Strip: Vertical installation (PDF)', type: '3030 Panel' },
  { title: '3. Steel Structure, Metal framework: Horizontal installation (PDF)', type: '3030 Panel' },
  { title: '1. RC, Metal Furring Strip (PDF)', type: '1820 Panel (Fu-ge)' },
  { title: 'Long clip fixes (PDF)', type: 'Accessories' },
];

export default function Installation() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-nichiha-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888069542-02111c6d1d29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 bg-nichiha-green w-16 h-1.5 rounded-full"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight mb-6">Expert <span className="text-nichiha-blue">Installation</span></h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
            Installing a facade has never been so easy, quick, and convenient. Find step-by-step guides and videos below.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2 space-y-6">
            <span className="inline-block bg-nichiha-light text-nichiha-blue px-3 py-1 font-bold uppercase tracking-widest text-xs rounded-sm mb-4">Methodology</span>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-nichiha-dark">Comprehensive Facade <span className="text-nichiha-green">System</span></h2>
            <p className="text-base text-gray-600 leading-relaxed font-medium">
              Nichiha has developed a comprehensive facade system for you that includes all necessary installation components and extras, from basic mounting supplies to corner solutions.
            </p>
            <p className="text-base text-gray-600 leading-relaxed font-medium">
              All the necessary accessories for facade installation are available from us. This means you don't need to look elsewhere in hardware stores, and you can be sure of a high-quality and durable result.
            </p>
          </div>
          <div className="bg-nichiha-dark text-white p-10 rounded-xl shadow-2xl flex flex-col justify-center border-t-4 border-nichiha-blue relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-nichiha-green rounded-bl-full opacity-10" />
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">Need an Installer?</h3>
            <p className="text-gray-300 mb-8 leading-relaxed font-medium text-sm">
              Not keen on installing facade panels yourself? We have reliable partners experienced in Nichiha facade panel installation in the UAE.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center py-4 px-6 bg-nichiha-green hover:bg-green-600 transition-colors text-xs font-bold uppercase tracking-widest rounded-sm">
              Contact Us for Assistance
            </a>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-24">
          <div className="flex items-center mb-8">
            <Video className="w-8 h-8 text-nichiha-blue mr-4" />
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-nichiha-dark">Installation <span className="text-nichiha-blue">Videos</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videos3030.map((video, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all hover:border-nichiha-blue"
              >
                <div className="aspect-video bg-gray-200 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white opacity-90 group-hover:scale-110 transition-transform drop-shadow-md" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-sm text-nichiha-dark leading-snug mb-3">{video.title}</h4>
                  <span className="inline-block bg-nichiha-light text-nichiha-dark px-2 py-1 text-xs font-bold rounded-sm tracking-wider">{video.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Manuals Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-8 border-b-2 border-nichiha-green pb-4">Installation <span className="text-nichiha-green">Manuals</span></h2>
            <ul className="space-y-4">
              {manuals.map((manual, idx) => (
                <li key={idx} className="flex items-start bg-nichiha-light p-4 rounded-lg hover:bg-gray-100 transition-colors group">
                  <div className="bg-white p-2 rounded-md shadow-sm mr-4 mt-1">
                    <Download className="w-5 h-5 text-nichiha-blue group-hover:text-nichiha-green transition-colors" />
                  </div>
                  <div>
                    <a href="#" className="font-bold text-sm text-nichiha-dark hover:text-nichiha-blue transition-colors block mb-1">
                      {manual.title}
                    </a>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{manual.type}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-8 border-b-2 border-nichiha-blue pb-4">Handling & <span className="text-nichiha-blue">Maintenance</span></h2>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-nichiha-green/10 p-3 rounded-lg mr-4">
                    <FileText className="w-6 h-6 text-nichiha-green" />
                  </div>
                  <h3 className="text-xl font-bold text-nichiha-dark uppercase tracking-wider">Handling Guide</h3>
                </div>
                <ul className="space-y-4 text-sm text-gray-600 mb-8 font-medium">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-nichiha-green mr-3 shrink-0" /> Immediate inspection upon arrival.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-nichiha-green mr-3 shrink-0" /> Store on a horizontal surface above ground.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-nichiha-green mr-3 shrink-0" /> Protect against rain. Do not install wet panels.</li>
                </ul>
                <a href="#" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-nichiha-blue hover:text-blue-800 transition-colors">
                  <Download className="w-4 h-4 mr-2" /> Download Guide
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-nichiha-blue/10 p-3 rounded-lg mr-4">
                    <FileText className="w-6 h-6 text-nichiha-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-nichiha-dark uppercase tracking-wider">Maintenance</h3>
                </div>
                <p className="text-sm text-gray-600 mb-8 leading-relaxed font-medium">
                  Compared to most finishing materials, Nichiha facade panels require minimal maintenance. Occasional cleaning might be necessary. During installation, wipe off any cutting dust immediately.
                </p>
                <a href="#" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-nichiha-green hover:text-green-700 transition-colors">
                  <Download className="w-4 h-4 mr-2" /> Download Manual
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
