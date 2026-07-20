import { motion } from 'motion/react';
import { Calculator, Download, HelpCircle, ChevronRight, FileText, Settings, Info } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "How do I estimate the cost of trim?",
    answer: "If you already have your project's drawings available, you can use our Calculator for a more accurate trim cost calculation."
  },
  {
    question: "How do I estimate the cost of the fiber cement installation hardware?",
    answer: "For Architectural Wall Panels, the Cost Estimator includes necessary hardware in your ballpark price. For an itemized list, we recommend using our Materials Calculator. The Price Catalog also includes pricing information for hardware."
  },
  {
    question: "Is installation included in the cost of my fiber cement siding?",
    answer: "No, but our team can connect you to an installer in your area."
  },
  {
    question: "How much waste should I account for when I'm estimating the cost of fiber cement cladding?",
    answer: "Typically you should plan for 5-10% waste. Projected waste depends on the project though, so speak with a rep about your specific plans."
  },
  {
    question: "How do I purchase from Nichiha once I know what I want?",
    answer: "Nichiha is sold through dealers and can assist you in finding a dealer to purchase from in your area. For assistance, contact our team and we can get you in touch with a dealer in your area."
  },
  {
    question: "How will my fiber cement siding be delivered?",
    answer: "Fiber cement siding is delivered through a dealer, usually on a flatbed truck, and is unloaded with a forklift as it is too heavy to be unloaded by hand."
  },
  {
    question: "What do I do if I need more product before my project is finished?",
    answer: "Smaller orders can be placed and shipped in accordance with current lead times but it's best to have the correct quantities on site when your project begins. For assistance with accurate ordering, reach out to our team."
  },
  {
    question: "Does Nichiha give contractors a discount?",
    answer: "For Architectural Wall Panels, we do publish a Contractor Price Catalog on our website. If you have additional questions or would like to get a quote, use this contact form. As pricing for Sierra Premium Shake, Savannah Smooth and 5/16\" NichiProduct is set at the local supplier level, please contact a dealer or a Nichiha representative with pricing questions."
  }
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="font-bold text-nichiha-dark text-lg group-hover:text-nichiha-blue transition-colors pr-8">{question}</span>
        <ChevronRight className={cn("w-5 h-5 text-nichiha-green transition-transform shrink-0", isOpen && "rotate-90")} />
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-gray-600 font-medium leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function Pricing() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-nichiha-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888069542-02111c6d1d29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mb-8 bg-nichiha-green w-16 h-1.5 rounded-full"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight mb-6">Cost Estimator & <span className="text-nichiha-blue">Materials Calculator</span></h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
            Plan your project with confidence using our comprehensive pricing tools and catalogs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Estimators Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-nichiha-light p-10 rounded-xl shadow-lg border-t-4 border-nichiha-blue relative overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="bg-white/50 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <Calculator className="w-8 h-8 text-nichiha-blue" />
            </div>
            <h3 className="text-2xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-4">Get a Quick AWP Cost Estimate</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-gray-600 font-medium">
                <div className="w-1.5 h-1.5 bg-nichiha-blue rounded-full mt-2 mr-3 shrink-0"></div>
                Two-step process
              </li>
              <li className="flex items-start text-gray-600 font-medium">
                <div className="w-1.5 h-1.5 bg-nichiha-blue rounded-full mt-2 mr-3 shrink-0"></div>
                Provides a ballpark cost range for AWP
              </li>
            </ul>
            <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start">
              <Settings className="w-5 h-5 text-nichiha-green mr-3 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold uppercase tracking-widest text-nichiha-dark mb-1">Requires:</span>
                <span className="text-sm font-medium text-gray-600">Less than 1 minute of your time</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-nichiha-light p-10 rounded-xl shadow-lg border-t-4 border-nichiha-green relative overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="bg-white/50 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <FileText className="w-8 h-8 text-nichiha-green" />
            </div>
            <h3 className="text-2xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-4">Get an Itemized Material Calculation</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-gray-600 font-medium">
                <div className="w-1.5 h-1.5 bg-nichiha-green rounded-full mt-2 mr-3 shrink-0"></div>
                Provides a Line-by-Line Cost and Description
              </li>
              <li className="flex items-start text-gray-600 font-medium">
                <div className="w-1.5 h-1.5 bg-nichiha-green rounded-full mt-2 mr-3 shrink-0"></div>
                Outputs a bill of materials
              </li>
            </ul>
            <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start">
              <Settings className="w-5 h-5 text-nichiha-blue mr-3 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold uppercase tracking-widest text-nichiha-dark mb-1">Requires:</span>
                <span className="text-sm font-medium text-gray-600">20-30 minutes, along with your contractor or some construction know-how</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Catalog Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-nichiha-dark text-white p-12 rounded-xl shadow-2xl relative overflow-hidden mb-24"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-nichiha-blue rounded-bl-full opacity-20 mix-blend-screen" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white mb-6">Download Our <span className="text-nichiha-green">Price Catalog!</span></h2>
              <p className="text-gray-300 font-medium leading-relaxed mb-6">
                The Nichiha Price Catalog is a go-to resource for building professionals looking to price our Architectural Wall Panel products.
              </p>
              <div className="bg-white/10 p-6 rounded-lg mb-6 backdrop-blur-sm border border-white/10">
                <div className="flex items-start mb-4">
                  <Info className="w-5 h-5 text-nichiha-green mr-3 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-200 font-medium">
                    For Sierra Premium Shake, Savannah Smooth and NichiProduct pricing, please reach out to your local rep.
                  </p>
                </div>
                <div className="flex items-start">
                  <Info className="w-5 h-5 text-nichiha-blue mr-3 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-200 font-medium">
                    For Canadian pricing, please click here.
                  </p>
                </div>
              </div>
            </div>
            <div className="shrink-0">
              <a href="#" className="inline-flex items-center justify-center py-5 px-8 bg-nichiha-green hover:bg-green-600 transition-all text-sm font-bold uppercase tracking-widest rounded-md shadow-xl hover:-translate-y-1">
                <Download className="w-5 h-5 mr-3" />
                Download Catalog
              </a>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-nichiha-light text-nichiha-blue px-3 py-1 font-bold uppercase tracking-widest text-xs rounded-sm mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-4">Questions about pricing fiber cement?</h2>
            <p className="text-xl text-nichiha-green font-bold uppercase tracking-widest">We've Got Answers</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-12">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
