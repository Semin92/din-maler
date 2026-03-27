'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Send, Phone, FileText } from 'lucide-react';
import { clsx } from 'clsx';
import { useLocale } from 'next-intl';

interface Msg { id: string; role: 'user' | 'assistant'; text: string; }

const FAQ = [
  { k:['leistung','service','bieten','angebot','welche','was','machen'], a:'🖌️ Innenmalerei (Wände, Decken, Lacke, Tapeten, Schimmelsanierung), Fassadenarbeiten, Gipsarbeiten, Renovation, Farbberatung und Holzschutz.' },
  { k:['offerte','preis','kosten','wie viel'], a:'📋 Offerte ist kostenlos. Anfrage senden → Besichtigung → Offerte innert 24h.' },
  { k:['zürich','st.gallen','st. gallen','winterthur','region','wo'], a:'📍 Hauptsitz: Anemonenstrasse 3, 8047 Zürich\nFiliale: 9014 St. Gallen\nGanze Agglomeration Zürich.' },
  { k:['dauer','lange','zeit','wann'], a:'⏱ Zimmer: 1–2 Tage. Fassaden: 1–3 Wochen.' },
  { k:['farbe','farbberatung'], a:'🎨 Ja! Elvir Beshiri berät Sie persönlich bei der Farbwahl.' },
  { k:['sprache','deutsch','französ','english'], a:'🌐 Deutsch, Französisch, Italienisch und Englisch.' },
  { k:['kontakt','tel','telefon','email','whatsapp'], a:'📞 076 745 90 13\n✉️ info@din-maler.ch\n💬 WhatsApp: wa.me/41767459013' },
  { k:['fassade','aussen'], a:'🏗️ Fassadenanstriche, Sanierungen, Verputz, Risssanierungen, Holzfassaden.' },
  { k:['notfall','dringend'], a:'🚨 Direkt anrufen: 076 745 90 13' },
  { k:['elvir','beshiri','villi','inhaber'], a:'👨‍💼 Elvir Beshiri ist Gründer und Inhaber von Din Maler.' },
  { k:['tiktok','tik tok'], a:'🎵 TikTok: @din_maler_villi – https://www.tiktok.com/@din_maler_villi' },
  { k:['instagram'], a:'📸 Instagram: @din.maler – https://www.instagram.com/din.maler/' },
];

function findAnswer(q: string): string {
  const n = q.toLowerCase().replace(/[äöü]/g, (c) => ({ä:'a',ö:'o',ü:'u'} as any)[c] || c);
  const words = n.split(/\s+/).filter((w) => w.length > 2);
  let best = 0, entry: any = null;
  for (const e of FAQ) {
    let score = 0;
    for (const w of words) for (const k of e.k) {
      const kn = k.replace(/[äöü]/g, (c) => ({ä:'a',ö:'o',ü:'u'} as any)[c] || c);
      if (kn === w) score += 3; else if (kn.includes(w) || w.includes(kn)) score += 2;
    }
    if (score > best) { best = score; entry = e; }
  }
  if (best >= 1 && entry) return entry.a;
  return '💡 Für eine genaue Antwort:\n📞 076 745 90 13\n✉️ info@din-maler.ch';
}

export default function ChatWidget() {
  const locale = useLocale();
  const [open,   setOpen]   = useState(false);
  const [msgs,   setMsgs]   = useState<Msg[]>([]);
  const [input,  setInput]  = useState('');
  const [typing, setTyping] = useState(false);
  const [bubble, setBubble] = useState(true);
  const endRef   = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs]);
  useEffect(() => { const t = setTimeout(() => setBubble(false), 6000); return () => clearTimeout(t); }, []);
  useEffect(() => {
    if (open && msgs.length === 0) {
      setMsgs([{ id:'w', role:'assistant', text:'Hallo! Ich bin Vili Jr., der Assistent von Elvir Beshiri – Din Maler. 👋\n\nWie kann ich helfen?\n• Offerte anfragen\n• Leistungen kennenlernen\n• Preise & Ablauf' }]);
    }
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open, msgs.length]);

  const send = useCallback(async () => {
    const text = input.trim(); if (!text) return;
    setInput('');
    setMsgs((p) => [...p, { id:`u${Date.now()}`, role:'user', text }]);
    setTyping(true);
    await new Promise((r) => setTimeout(r, 700));
    setTyping(false);
    setMsgs((p) => [...p, { id:`b${Date.now()}`, role:'assistant', text: findAnswer(text) }]);
  }, [input]);

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden lg:bottom-8"
          style={{ height:'490px' }}>
          <div className="bg-primary px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image src="/images/villi.jpg" alt="Vili Jr." width={40} height={40}
                  className="w-10 h-10 rounded-full object-cover object-top border-2 border-accent"/>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-primary rounded-full"/>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Vili Jr. 👋</p>
                <p className="text-white/60 text-xs"><span className="text-green-400">●</span> Elvir Beshiri · Online</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white p-1 rounded"><X className="w-5 h-5"/></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {msgs.map((m) => (
              <div key={m.id} className={clsx('flex items-end gap-2', m.role==='user' ? 'justify-end' : 'justify-start')}>
                {m.role==='assistant' && <Image src="/images/villi.jpg" alt="" width={28} height={28} className="w-7 h-7 rounded-full object-cover object-top flex-shrink-0"/>}
                <div className={clsx('max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line',
                  m.role==='user' ? 'bg-primary text-white rounded-br-sm' : 'bg-white text-gray-800 rounded-bl-sm shadow-sm')}>
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex items-end gap-2">
                <Image src="/images/villi.jpg" alt="" width={28} height={28} className="w-7 h-7 rounded-full object-cover object-top flex-shrink-0"/>
                <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                  <div className="flex gap-1">{[0,1,2].map(i => <div key={i} className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay:`${i*0.15}s`}}/>)}</div>
                </div>
              </div>
            )}
            <div ref={endRef}/>
          </div>
          <div className="px-3 py-2 flex gap-2 border-t border-gray-100 bg-white flex-shrink-0">
            <Link href={`/${locale}/offerte`} className="flex-1 flex items-center justify-center gap-1 text-xs text-white bg-accent hover:bg-orange-500 rounded-lg py-2 font-semibold transition-colors">
              <FileText className="w-3.5 h-3.5"/> Offerte
            </Link>
            <a href="tel:0767459013" className="flex-1 flex items-center justify-center gap-1 text-xs text-gray-600 hover:text-primary bg-gray-50 hover:bg-gray-100 rounded-lg py-2 transition-colors">
              <Phone className="w-3.5 h-3.5"/> 076 745 90 13
            </a>
            <a href="https://wa.me/41767459013" target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1 text-xs text-white bg-green-500 hover:bg-green-600 rounded-lg py-2 transition-colors">
              💬 WhatsApp
            </a>
          </div>
          <div className="px-3 pb-3 flex gap-2 bg-white flex-shrink-0">
            <input ref={inputRef} type="text" value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if(e.key==='Enter') send(); }} placeholder="Frage an Vili Jr. ..."
              className="flex-1 px-3 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-gray-400"/>
            <button onClick={send} disabled={!input.trim() || typing}
              className="w-10 h-10 bg-primary hover:bg-primary-light text-white rounded-xl flex items-center justify-center disabled:opacity-40 flex-shrink-0 transition-colors">
              <Send className="w-4 h-4"/>
            </button>
          </div>
        </div>
      )}
      <div className="fixed bottom-20 right-4 sm:right-6 z-50 lg:bottom-6 flex flex-col items-center gap-1.5">
        {bubble && !open && (
          <div className="bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-primary/20 whitespace-nowrap">
            👋 Vili Jr. – Fragen?
          </div>
        )}
        <button onClick={() => setOpen(!open)}
          className="w-16 h-16 rounded-full shadow-xl border-4 border-white overflow-hidden vili-pulse transition-all"
          aria-label={open ? 'Chat schliessen' : 'Chat öffnen'}>
          {open
            ? <div className="w-full h-full bg-gray-700 flex items-center justify-center"><X className="w-6 h-6 text-white"/></div>
            : <Image src="/images/villi.jpg" alt="Vili Jr." width={64} height={64} className="w-full h-full object-cover object-top"/>
          }
        </button>
      </div>
    </>
  );
}
