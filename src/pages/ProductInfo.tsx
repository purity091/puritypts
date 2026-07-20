import { FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProductInfo() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <div className="mb-8 bg-nichiha-green w-16 h-1.5 rounded-full"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-nichiha-dark tracking-tight mb-6 uppercase">Technical <span className="text-nichiha-blue">Specifications</span></h1>
          <p className="text-lg text-gray-600 max-w-3xl font-medium leading-relaxed">
            Detailed information about the dimensions, materials, and features of our premium fiber cement cladding panels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* 3-meter panels */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border-t-4 border-nichiha-green"
          >
            <div className="bg-nichiha-light p-8 border-b border-gray-100">
              <span className="inline-block bg-white text-nichiha-green px-3 py-1 font-bold uppercase tracking-widest text-xs rounded-sm mb-4 shadow-sm">01 / Spec</span>
              <h3 className="text-2xl font-bold uppercase tracking-wider text-nichiha-dark">3-Meter Facade Panels</h3>
              <p className="text-gray-600 font-medium mt-2">Standard length panels with horizontal tongue and groove.</p>
            </div>
            <div className="p-8">
              <table className="w-full text-left border-collapse text-sm">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-nichiha-dark w-1/3">Thickness</td>
                    <td className="py-4 text-gray-600 font-medium">16 mm</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-nichiha-dark">Height</td>
                    <td className="py-4 text-gray-600 font-medium">455 mm</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-nichiha-dark">Length</td>
                    <td className="py-4 text-gray-600 font-medium">3030 mm</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-nichiha-dark">Coverage</td>
                    <td className="py-4 text-gray-600 font-medium">1.37 m² / panel</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-nichiha-dark">Weight</td>
                    <td className="py-4 text-gray-600 font-medium">approx. 19 kg / m²</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-nichiha-dark">Installation</td>
                    <td className="py-4 text-gray-600 font-medium">Concealed clip</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-nichiha-dark">Direction</td>
                    <td className="py-4 text-gray-600 font-medium">Horizontal / Vertical</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-nichiha-dark">NichiGuard™</td>
                    <td className="py-4 text-nichiha-green font-bold">Yes (Self-cleaning)</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold text-nichiha-dark">Fire Resistance</td>
                    <td className="py-4 text-gray-600 font-medium">A2-s1, d0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 1.8-meter panels */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border-t-4 border-nichiha-blue"
          >
            <div className="bg-nichiha-dark text-white p-8 border-b border-gray-800">
              <span className="inline-block bg-white/10 text-nichiha-blue px-3 py-1 font-bold uppercase tracking-widest text-xs rounded-sm mb-4">02 / Spec</span>
              <h3 className="text-2xl font-bold uppercase tracking-wider">1.8-Meter Facade Panels</h3>
              <p className="text-gray-400 font-medium mt-2">Seamless panels (Fu-ge) with four-sided ship-lap profiles.</p>
            </div>
            <div className="p-8">
              <table className="w-full text-left border-collapse text-sm">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-nichiha-dark w-1/3">Thickness</td>
                    <td className="py-4 text-gray-600 font-medium">16 mm</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-nichiha-dark">Height</td>
                    <td className="py-4 text-gray-600 font-medium">455 mm</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-nichiha-dark">Length</td>
                    <td className="py-4 text-gray-600 font-medium">1820 (1818) mm</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-nichiha-dark">Coverage</td>
                    <td className="py-4 text-gray-600 font-medium">0.82 m² / panel</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-nichiha-dark">Weight</td>
                    <td className="py-4 text-gray-600 font-medium">approx. 19 kg / m²</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-nichiha-dark">Installation</td>
                    <td className="py-4 text-gray-600 font-medium">Concealed clip</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-nichiha-dark">Direction</td>
                    <td className="py-4 text-gray-600 font-medium">Horizontal / Chess square</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-nichiha-dark">Seamless</td>
                    <td className="py-4 text-nichiha-blue font-bold">Yes</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold text-nichiha-dark">Fire Resistance</td>
                    <td className="py-4 text-gray-600 font-medium">A2-s1, d0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Feature blocks */}
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-xl shadow-lg flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="flex-1">
              <span className="inline-block bg-nichiha-light text-nichiha-blue px-3 py-1 font-bold uppercase tracking-widest text-xs rounded-sm mb-4">System Overview</span>
              <h3 className="text-3xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-4">Ready-to-Install <span className="text-nichiha-green">Panels</span></h3>
              <p className="text-base text-gray-600 mb-6 leading-relaxed font-medium">
                NICHIHA facade panels are cut to a standard length of 3030 mm or 1820 mm with an effective cover width of 455 mm and a nominal thickness of 16 mm. The horizontal edges of the panel are machined with a complementary tongue and groove profile.
              </p>
              <ul className="space-y-4 text-base font-medium">
                <li className="flex items-start">
                  <CheckCircle2 className="text-nichiha-green w-6 h-6 mr-3 shrink-0" />
                  <span className="text-gray-700">1820 mm panels feature a ship-lap profile on all four sides.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-nichiha-green w-6 h-6 mr-3 shrink-0" />
                  <span className="text-gray-700">Minimizes the need for sealants at vertical joints.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-nichiha-green w-6 h-6 mr-3 shrink-0" />
                  <span className="text-gray-700">Creates a sleek, seamless finish (Fu-ge system).</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 bg-nichiha-light rounded-xl h-64 flex items-center justify-center border border-gray-100 p-6 shadow-inner">
               {/* Decorative structural element representing interlocking panels */}
               <div className="w-full h-full flex items-center justify-center space-x-2">
                 <div className="w-1/2 h-40 bg-white shadow-md rounded-sm border border-gray-200 relative">
                    <div className="absolute right-[-6px] top-6 bottom-6 w-3 bg-nichiha-green/20 z-10 rounded-r-md" />
                 </div>
                 <div className="w-1/2 h-40 bg-white shadow-md rounded-sm border border-gray-200 relative">
                    <div className="absolute left-[-4px] top-6 bottom-6 w-3 bg-white z-0 rounded-l-md" />
                 </div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-nichiha-blue"
          >
            <span className="inline-block bg-nichiha-light text-nichiha-blue px-3 py-1 font-bold uppercase tracking-widest text-xs rounded-sm mb-4">Detailing</span>
            <h3 className="text-3xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-6">External Corners <span className="text-nichiha-blue">Complete the Look</span></h3>
            <p className="text-base text-gray-600 mb-10 leading-relaxed font-medium">
              The selection perfectly complements each facade design, contributing to a cohesive and complete exterior appearance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-nichiha-light rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <h4 className="font-bold uppercase tracking-wider text-lg mb-3 text-nichiha-dark">Factory-Designed Corners</h4>
                <p className="text-gray-600 font-medium">Matching in pattern and texture, ensuring a flawless continuation of the facade's aesthetic around the building's edges.</p>
              </div>
              <div className="p-8 bg-nichiha-light rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <h4 className="font-bold uppercase tracking-wider text-lg mb-3 text-nichiha-dark">Metal External Corners</h4>
                <p className="text-gray-600 font-medium">Pre-painted in a selection of RAL colors for versatility and a modern, tailored finish to any design.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center pt-12">
             <a href="#" className="inline-flex items-center px-8 py-5 bg-nichiha-dark text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors rounded-sm shadow-xl hover:-translate-y-1 hover:shadow-2xl">
                <FileText className="w-5 h-5 mr-3 text-nichiha-green" />
                Download Technical Data Sheet (PDF)
             </a>
          </div>

        </div>
      </div>
    </div>
  );
}
