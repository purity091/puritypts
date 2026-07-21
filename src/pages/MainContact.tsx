import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function MainContact() {
  return (
    <div className="bg-[#f4f7fb]">
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white lg:p-10">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.35em] text-brand-300">Contact</p>
            <h1 className="text-4xl font-extrabold tracking-tight">Start the right conversation.</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Whether you are a manufacturer, consultant, developer, contractor, or facility operator, the next
              step should be specific. This page is structured to reduce hesitation and move visitors toward action.
            </p>

            <div className="mt-10 space-y-5">
              <a href="tel:+971554330532" className="flex items-start gap-4 rounded-2xl bg-white/5 p-4 transition-colors hover:bg-white/10">
                <Phone className="mt-1 h-5 w-5 text-brand-300" />
                <div>
                  <div className="text-sm font-bold uppercase tracking-[0.16em] text-slate-400">Phone</div>
                  <div className="mt-1 text-lg font-semibold text-white">+971 55 433 0532</div>
                </div>
              </a>
              <a href="mailto:info@puritypts.com" className="flex items-start gap-4 rounded-2xl bg-white/5 p-4 transition-colors hover:bg-white/10">
                <Mail className="mt-1 h-5 w-5 text-brand-300" />
                <div>
                  <div className="text-sm font-bold uppercase tracking-[0.16em] text-slate-400">Email</div>
                  <div className="mt-1 text-lg font-semibold text-white">info@puritypts.com</div>
                </div>
              </a>
              <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-4">
                <MapPin className="mt-1 h-5 w-5 text-brand-300" />
                <div>
                  <div className="text-sm font-bold uppercase tracking-[0.16em] text-slate-400">Office</div>
                  <div className="mt-1 text-lg font-semibold text-white">Dubai, United Arab Emirates</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950">Inquiry Brief</h2>
              <p className="mt-3 text-slate-600">
                The form is structured like a qualification step so incoming leads are more actionable.
              </p>
            </div>

            <form className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Full Name</span>
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Company</span>
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Email</span>
                <input type="email" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Phone</span>
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500" />
              </label>
              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Interest Area</span>
                <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500">
                  <option>Architectural Solutions</option>
                  <option>Industrial Solutions</option>
                  <option>Brand Representation</option>
                  <option>General Corporate Inquiry</option>
                </select>
              </label>
              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Project / Requirement</span>
                <textarea rows={5} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500" />
              </label>
              <div className="md:col-span-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-600"
                >
                  Submit Inquiry
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
