import Tracker from './Tracker.jsx'
import Quote from './Quote.jsx'
import { WA, steps, faqs, services, latest, stats } from './data.js'

const W = 'mx-auto max-w-[1120px] px-5'
const H2 = 'text-[clamp(30px,5.5vw,48px)]'
const Btn = ({ href, children, cls = 'bg-ink text-white' }) =>
  <a href={href} className={`inline-flex items-center gap-1.5 rounded-full px-5 py-[11px] text-sm font-semibold ${cls}`}>{children}</a>

export default function App() {
  return (<div className="pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
    <nav className="sticky top-0 z-10 bg-white/85 backdrop-blur"><div className={`${W} flex h-16 items-center justify-between`}>
      <a href="#top" className="flex items-center gap-2 text-lg font-extrabold"><img src="/images/logo.jpg" alt="UK2YourDoor logo" className="h-[34px] w-[34px] rounded-full" />UK2YourDoor</a>
      <div className="hidden gap-1 rounded-full border border-line bg-white p-1 text-xs font-semibold md:flex">
        {[['Home','#top'],['How it works','#how'],['Services','#services'],['Why us','#why'],['Contact','#quote']].map(([t,h],i) =>
          <a key={t} href={h} className={`rounded-full px-3.5 py-[7px] ${i===0?'bg-soft':''}`}>{t}</a>)}
      </div>
      <Btn href="#top">Track</Btn></div></nav>

    <header id="top" className="pb-5 pt-11 text-center"><div className={W}>
      <h1 className="mx-auto mb-3.5 max-w-[820px] text-[clamp(40px,8vw,76px)]">Seamless Cargo, Faster <em>Deliveries</em></h1>
      <p className="mx-auto max-w-[480px] text-mute">Freight from the UK, US, China and Canada to your door, with tracking you can trust.</p>
      <Tracker />
      <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-[32px] bg-soft">
        <img src="/images/hero.jpg" alt="UK2YourDoor courier holding a parcel" className="h-full w-full object-cover object-[50%_30%]" />
        <div className="absolute left-1/2 top-0 flex -translate-x-1/2 gap-2 rounded-b-3xl bg-white px-5 py-3.5">
          <Btn href="#services" cls="bg-brand text-white">Our Services</Btn>
          <Btn href="#quote" cls="border-2 border-brand bg-white text-ink">Contact Us</Btn></div>
        <span className="absolute bottom-3.5 left-3.5 rounded-2xl bg-white/80 px-3.5 py-2 text-xs font-bold backdrop-blur">✈ Air &amp; 🚢 Sea</span>
        <span className="absolute bottom-3.5 right-3.5 rounded-2xl bg-white/80 px-3.5 py-2 text-xs font-bold backdrop-blur">220+ countries</span>
      </div></div></header>

    <section id="how" className="py-16"><div className={W}>
      <h2 className={`${H2} text-center`}>Import in three easy steps</h2>
      <p className="mx-auto mb-8 mt-3 max-w-[520px] text-center text-mute">Tell us what you need, send it to our London hub, and we’ll handle the rest.</p>
      <div className="grid gap-3.5 sm:grid-cols-3">{steps.map(([n,i,t,d]) =>
        <div key={n} className="relative flex min-h-[230px] flex-col rounded-[22px] border border-line p-6">
          <span className="absolute right-5 top-2.5 text-[44px] font-extrabold text-black/10">{n}</span>
          <div className="mb-auto grid h-[42px] w-[42px] place-items-center rounded-xl bg-soft text-xl">{i}</div>
          <h3 className="mb-1.5 mt-8 text-xl">{t}</h3><p className="text-[13.5px] text-mute">{d}</p>
          <a href="#quote" className="mt-3 text-[13px] font-bold">Read More →</a></div>)}</div></div></section>

    <section id="why" className="pb-16 pt-5"><div className={`${W} grid items-center gap-7 md:grid-cols-2`}>
      <div><h2 className={H2}>Trusted by importers &amp; senders</h2>
        <p className="mb-5 mt-2.5 text-mute">Reliable cargo and freight from a London-based team who answer your messages.</p>
        {faqs.map(([q,a],i) => <details key={q} open={i===0} className="border-b border-line py-3.5">
          <summary className="flex cursor-pointer justify-between text-[19px] font-bold">{q}<span>⌄</span></summary>
          <p className="mt-2 text-sm text-mute">{a}</p></details>)}</div>
      <img src="/images/customer-service.jpg" alt="UK2YourDoor customer service" className="aspect-square w-full rounded-[22px] object-cover" /></div></section>

    <section id="services" className="py-16"><div className={W}>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4"><h2 className={H2}>Comprehensive<br />Cargo Services</h2>
        <div className="max-w-[340px] text-sm text-mute"><Btn href="#quote" cls="bg-brand text-white">Get a quote</Btn><p className="mt-3">Air, sea, door-to-door and worldwide export, all in one place.</p></div></div>
      <div className="grid gap-3.5 sm:grid-cols-3">{services.map(([i,t,d],k) =>
        <div key={t} className={`flex min-h-[230px] flex-col rounded-[22px] border p-6 ${k===0?'border-ink bg-ink text-white':'border-line'}`}>
          <div className={`mb-auto grid h-[42px] w-[42px] place-items-center rounded-xl text-xl ${k===0?'bg-white text-ink':'bg-soft'}`}>{i}</div>
          <h3 className="mb-1.5 mt-8 text-xl">{t}</h3><p className={`text-[13.5px] ${k===0?'text-[#bbb]':'text-mute'}`}>{d}</p></div>)}</div></div></section>

    <div className="bg-gradient-to-b from-[#2a1a14] via-[#b4461c] to-[#ff9a4d] py-[90px] text-white"><div className={W}>
      <p className="max-w-[620px] text-[clamp(24px,4.4vw,40px)] font-semibold leading-tight">Moving your world with care, clarity and a team that always replies.</p></div></div>

    <section className="py-16"><div className={`${W} grid grid-cols-2 gap-4 text-center sm:grid-cols-4`}>{stats.map(([n,l]) =>
      <div key={l}><b className="block text-[clamp(38px,7vw,60px)] tracking-tighter">{n}</b><span className="text-[13px] text-mute">{l}</span></div>)}</div></section>

    <section id="latest" className="pb-16"><div className={W}>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4"><h2 className={H2}>Latest from<br />UK2YourDoor</h2>
        <p className="max-w-[340px] text-sm text-mute">Fresh updates from our Instagram: new routes, pickups and service news.</p></div>
      <div className="grid gap-3.5 sm:grid-cols-3">{latest.map(([src,t,d]) =>
        <a key={t} href="#quote" className="group block"><img src={src} alt={t} className="mb-3 w-full rounded-[22px] transition group-hover:-translate-y-1" />
          <h3 className="text-[19px]">{t}</h3><p className="text-[13.5px] text-mute">{d}</p></a>)}</div></div></section>

    <Quote />

    <footer className="overflow-hidden pt-12"><div className={W}>
      <div className="grid gap-6 text-[13.5px] text-mute sm:grid-cols-4">
        <div><a href="#top" className="flex items-center gap-2 text-lg font-extrabold text-ink"><img src="/images/logo.jpg" alt="" className="h-[34px] w-[34px] rounded-full" />UK2YourDoor</a>
          <p className="mt-2.5">Cargo &amp; freight company in London. Import UK/US/CH/CA. Exports to 220+ countries.</p></div>
        <div><h4 className="mb-2.5 text-[15px] font-bold text-ink">Navigation</h4>{[['Home','#top'],['How it works','#how'],['Services','#services'],['Latest','#latest'],['Contact','#quote']].map(([t,h]) => <a key={t} href={h} className="my-1.5 block">{t}</a>)}</div>
        <div><h4 className="mb-2.5 text-[15px] font-bold text-ink">Import from</h4>{['United Kingdom','United States','China','Canada'].map(t => <a key={t} href="#quote" className="my-1.5 block">{t}</a>)}</div>
        <div><h4 className="mb-2.5 text-[15px] font-bold text-ink">Contact</h4>
          <a className="my-1.5 block" href={WA}>WhatsApp us</a><a className="my-1.5 block" href="tel:+2347081016005">+234 708 101 6005</a><a className="my-1.5 block" href="tel:+2348059459026">+234 805 945 9026</a><a className="my-1.5 block" href="tel:+447498687272">+44 74986 87272</a>
          <a className="my-1.5 block" href="mailto:uk2yourdoor@gmail.com">uk2yourdoor@gmail.com</a><a className="my-1.5 block" href="https://instagram.com/uk2yourdoor">Instagram @uk2yourdoor</a>
          <p>Block A, Unit 7 Maben Terraces, off Northern Foreshore Estate, Chevron Drive, Lekki, Lagos.</p></div></div>
      <div aria-hidden className="mt-8 translate-y-[14%] whitespace-nowrap text-center text-[clamp(60px,19vw,230px)] font-extrabold leading-[.85] tracking-[-.06em] text-[#f0f0f0]">UK2YourDoor</div></div>
      <div className="border-t border-line p-4 text-center text-xs text-mute">© 2026 UK2YourDoor Services LTD</div></footer>
  </div>)
}
