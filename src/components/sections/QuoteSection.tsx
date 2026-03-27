'use client';
import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Loader2, ArrowRight, AlertCircle } from 'lucide-react';

const SERVICES = [
  'Innenanstrich / Wandanstrich','Deckenanstrich','Fassadenanstrich','Fassadensanierung',
  'Verputzarbeiten','Risssanierung','Gipsarbeiten / Abrieb','Renovation / Sanierung',
  'Farbberatung','Tapezierarbeiten','Holzschutz / Lackieren','Schimmelsanierung',
  'Neubau / Umbau','Gewerbe / Büro','Anderes',
];
const BUDGETS = ["Unter CHF 2'000","CHF 2'000 – 5'000","CHF 5'000 – 10'000","CHF 10'000 – 20'000","Über CHF 20'000","Noch nicht bekannt"];

export default function QuoteSection() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [files,  setFiles]  = useState<File[]>([]);
  const [privacy, setPrivacy] = useState(false);
  const [form, setForm] = useState({ name:'',phone:'',email:'',location:'',service:'',message:'',date:'',budget:'' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacy) { alert('Bitte stimmen Sie der Datenschutzerklärung zu.'); return; }
    setStatus('loading');
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k,v]) => fd.append(k === 'service' ? 'serviceType' : k, v));
      fd.append('locale', 'de');
      files.forEach(f => fd.append('files', f));
      const res = await fetch('/api/quote', { method: 'POST', body: fd });
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch { setStatus('error'); }
  };

  if (status === 'success') return (
    <section id="offerte" className="py-20 bg-white">
      <div className="container-main max-w-2xl text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Vielen Dank!</h2>
        <p className="text-gray-600 mb-8">Ihre Anfrage wurde direkt an info@din-maler.ch gesendet. Wir melden uns innert 24 Stunden.</p>
        <a href="tel:0767459013" className="btn-primary">📞 076 745 90 13</a>
      </div>
    </section>
  );

  return (
    <section id="offerte" className="py-20 lg:py-28 bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="card">
              <span className="badge bg-accent/10 text-accent mb-4">Kostenlos & unverbindlich</span>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-2">Kostenlose Offerte anfragen</h2>
              <p className="text-gray-500 mb-7">Direkt an info@din-maler.ch – Antwort innert 24 Stunden.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="form-label">Name *</label>
                    <input required type="text" placeholder="Elvir Beshiri" className="form-input"
                      value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))}/></div>
                  <div><label className="form-label">Telefon *</label>
                    <input required type="tel" placeholder="076 745 90 13" className="form-input"
                      value={form.phone} onChange={e => setForm(p => ({...p, phone: e.target.value}))}/></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="form-label">E-Mail *</label>
                    <input required type="email" placeholder="info@din-maler.ch" className="form-input"
                      value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))}/></div>
                  <div><label className="form-label">Ort / Adresse</label>
                    <input type="text" placeholder="8047 Zürich" className="form-input"
                      value={form.location} onChange={e => setForm(p => ({...p, location: e.target.value}))}/></div>
                </div>
                <div><label className="form-label">Art der Arbeit *</label>
                  <select required className="form-input bg-white" value={form.service} onChange={e => setForm(p => ({...p, service: e.target.value}))}>
                    <option value="">– Bitte auswählen –</option>
                    {SERVICES.map(o => <option key={o}>{o}</option>)}
                  </select></div>
                <div><label className="form-label">Projektbeschreibung *</label>
                  <textarea required rows={4} placeholder="Was soll gemacht werden?" className="form-input resize-none"
                    value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))}/></div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="form-label">Wunschtermin</label>
                    <input type="date" className="form-input" value={form.date} onChange={e => setForm(p => ({...p, date: e.target.value}))}/></div>
                  <div><label className="form-label">Budget (optional)</label>
                    <select className="form-input bg-white" value={form.budget} onChange={e => setForm(p => ({...p, budget: e.target.value}))}>
                      <option value="">– Optional –</option>
                      {BUDGETS.map(o => <option key={o}>{o}</option>)}
                    </select></div>
                </div>
                <div>
                  <label className="form-label">📷 Fotos hochladen (optional)</label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-5 text-center cursor-pointer hover:bg-gray-50 transition-all"
                    onClick={() => document.getElementById('file-in')?.click()}>
                    <p className="text-gray-500 text-sm">📁 Dateien ablegen oder <span className="text-accent font-semibold">auswählen</span></p>
                    <p className="text-gray-400 text-xs mt-1">JPG, PNG, PDF – max. 10 MB</p>
                  </div>
                  <input id="file-in" type="file" multiple accept=".jpg,.jpeg,.png,.pdf" className="hidden"
                    onChange={e => setFiles(Array.from(e.target.files || []))}/>
                  {files.length > 0 && (
                    <div className="mt-3 space-y-1">
                      {files.map(f => <div key={f.name} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">
                        <span>📎</span><span className="flex-1 truncate">{f.name}</span>
                        <span className="text-gray-400 text-xs">{(f.size/1024/1024).toFixed(1)} MB</span>
                      </div>)}
                    </div>
                  )}
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="priv" checked={privacy} onChange={e => setPrivacy(e.target.checked)}
                    className="w-5 h-5 mt-0.5 rounded border-gray-300 accent-primary cursor-pointer flex-shrink-0"/>
                  <label htmlFor="priv" className="text-sm text-gray-600 cursor-pointer">
                    Ich stimme zu, dass meine Daten zur Bearbeitung der Anfrage verwendet werden.
                    <Link href="/de/datenschutz" className="text-primary underline ml-1">Datenschutz</Link>
                  </label>
                </div>
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"/>
                    <p className="text-sm text-red-600">Fehler beim Senden. Bitte rufen Sie uns an: 076 745 90 13</p>
                  </div>
                )}
                <button type="submit" disabled={status === 'loading'}
                  className="btn-primary w-full text-base py-4 disabled:opacity-60">
                  {status === 'loading'
                    ? <><Loader2 className="w-5 h-5 animate-spin"/>Wird gesendet...</>
                    : <>Offerte anfragen – direkt senden <ArrowRight className="w-5 h-5"/></>}
                </button>
                <p className="text-xs text-gray-400 text-center">Kostenlos · Unverbindlich · Direkt an info@din-maler.ch</p>
              </form>
            </div>
          </div>
          <div className="space-y-5">
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-4">Direkt kontaktieren</h3>
              <div className="space-y-3">
                <a href="tel:0767459013" className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-primary/5 transition-colors group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">📞</div>
                  <div><p className="text-xs text-gray-500">Anrufen</p><p className="font-semibold text-sm group-hover:text-primary">076 745 90 13</p></div>
                </a>
                <a href="mailto:info@din-maler.ch" className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-primary/5 transition-colors group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">✉️</div>
                  <div><p className="text-xs text-gray-500">E-Mail</p><p className="font-semibold text-sm group-hover:text-primary">info@din-maler.ch</p></div>
                </a>
                <a href="https://wa.me/41767459013" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors group">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">💬</div>
                  <div><p className="text-xs text-gray-500">WhatsApp</p><p className="font-semibold text-sm group-hover:text-green-700">Direkt schreiben</p></div>
                </a>
              </div>
            </div>
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-3">Standorte</h3>
              <div className="space-y-3 text-sm">
                <div><p className="font-semibold text-primary text-xs uppercase tracking-wide mb-1">Hauptsitz</p>
                  <p className="text-gray-700">Anemonenstrasse 3<br/>8047 Zürich</p></div>
                <div className="border-t border-gray-100 pt-3"><p className="font-semibold text-primary text-xs uppercase tracking-wide mb-1">Filiale</p>
                  <p className="text-gray-700">9014 St. Gallen</p></div>
                <div className="border-t border-gray-100 pt-3 text-gray-500">⏰ Mo–Fr: 07:30–17:30</div>
              </div>
            </div>
            <div className="bg-primary text-white rounded-2xl p-6">
              <div className="text-yellow-400 text-lg mb-1">★★★★★</div>
              <p className="font-bold text-xl mb-0.5">4.9 / 5.0</p>
              <p className="text-white/60 text-sm">Google-Bewertungen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
