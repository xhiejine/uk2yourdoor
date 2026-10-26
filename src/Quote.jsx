import { useState } from 'react'
import { WA } from './data.js'
const inp = 'w-full rounded-[10px] bg-soft p-2.5 text-[13px] font-medium text-ink'
export default function Quote() {
  const [f, setF] = useState({ name: '', from: 'UK', mode: 'Air', kg: 10 })
  const set = k => e => setF({ ...f, [k]: e.target.value })
  const send = () => {
    const m = `Hello UK2YourDoor, I’m ${f.name || 'a customer'}. Quote please: ${f.kg}kg from ${f.from} to Lagos by ${f.mode} freight.`
    navigator.clipboard?.writeText(m).catch(() => {}); window.open(WA, '_blank')
  }
  return (
    <section id="quote" className="py-16"><div className="mx-auto max-w-[1120px] px-5">
      <div className="rounded-[30px] bg-ink p-6 text-center text-white sm:p-14">
        <h2 className="text-[clamp(30px,5.5vw,48px)]">Request a Free Quote</h2>
        <p className="mx-auto mb-8 mt-3 max-w-[520px] text-[#bbb]">Tell us what you’re shipping and we’ll reply on WhatsApp with your price.</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-2 rounded-[20px] bg-white p-2.5 text-left text-ink">
          <label className="text-[10px] text-mute">Name<input className={inp} value={f.name} onChange={set('name')} placeholder="Your name" /></label>
          <label className="text-[10px] text-mute">Shipping from<select className={inp} value={f.from} onChange={set('from')}>{['UK','USA','China','Canada'].map(o => <option key={o}>{o}</option>)}</select></label>
          <label className="text-[10px] text-mute">Method<select className={inp} value={f.mode} onChange={set('mode')}><option>Air</option><option>Sea</option></select></label>
          <label className="text-[10px] text-mute">Weight (kg)<input className={inp} type="number" min="1" value={f.kg} onChange={set('kg')} /></label>
          <button onClick={send} className="m-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white">Submit Now</button>
        </div>
        <p className="mt-2 text-xs text-[#999]">Opens WhatsApp; your details are copied so you can paste them in chat.</p>
      </div></div></section>
  )
}
