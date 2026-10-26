import { useState } from 'react'
import { STAGES, SHIPMENTS, WA } from './data.js'
export default function Tracker() {
  const [v, setV] = useState('')
  const [res, setRes] = useState(null)
  const go = (e, val = v) => {
    e?.preventDefault()
    const k = val.trim().toUpperCase()
    setRes(k ? (SHIPMENTS[k] || 'none') : null)
  }
  return (
    <div className="mx-auto mt-6 max-w-[520px]">
      <form onSubmit={go} className="flex gap-1.5 rounded-full bg-soft p-1.5">
        <input value={v} onChange={e => setV(e.target.value)} placeholder="Enter tracking number" aria-label="Tracking number"
          className="min-w-0 flex-1 bg-transparent px-4 text-[15px] font-medium outline-none" />
        <button className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white">Track →</button>
      </form>
      <div className="mt-3 text-left" aria-live="polite">
        {res === 'none' && <><p className="text-xl font-bold">We can’t find that one 🤔</p>
          <p className="text-xs text-mute">Check the number or <a className="text-brand" href={WA}>ask us on WhatsApp</a>.</p></>}
        {res && res !== 'none' && <><p className="text-xl font-bold">{res.eta}</p>
          <ul className="my-3.5">{STAGES.map((s, i) => (
            <li key={s} className={`relative pb-3.5 pl-7 text-sm last:pb-0 ${i <= res.step ? 'text-ink' : 'text-mute'}`}>
              <span className={`absolute left-0 top-0.5 h-4 w-4 rounded-full border-2 ${i <= res.step ? 'border-brand bg-brand' : 'border-line bg-white'}`} />
              {i < STAGES.length - 1 && <span className="absolute bottom-[-2px] left-[7px] top-5 w-0.5 bg-line" />}
              {s}</li>))}</ul></>}
      </div>
      <p className="mt-2 text-xs text-mute">Demo: try <button type="button" className="text-brand underline" onClick={e => { setV('UK2Y-1024'); go(e, 'UK2Y-1024') }}>UK2Y-1024</button>. Live tracking connects once your shipment system is linked.</p>
    </div>
  )
}
