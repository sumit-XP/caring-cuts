import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Heart, Home, MapPin, Menu, Phone, Scissors, Sparkles, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import campaignVideo from "@/assets/vvh-campaign.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Caring Cuts by Tracy du Feu | Mobile Senior Haircare in Ottawa" },
    { name: "description", content: "Gentle, one-on-one hairstyling for seniors in Ottawa and surrounding communities. Licensed hairstylist Tracy du Feu brings 30+ years of experience to home and retirement-residence appointments." },
    { property: "og:title", content: "Caring Cuts by Tracy du Feu | Ottawa Mobile Haircare" },
    { property: "og:description", content: "Haircuts, colouring and styling with kindness, dignity and personalized care. Home and retirement-residence appointments across Ottawa." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: CaringCuts,
});

const phone = "tel:+16138059971";
const navigation = [
  { label: "Our Services", href: "#services" },
  { label: "Meet Tracy", href: "#about" },
  { label: "Home Visits", href: "#visits" },
  { label: "Service Areas", href: "#areas" },
];
const services = [
  { name: "Women's haircuts", description: "A fresh cut shaped around your hair and personal style.", category: "Cuts & styling" },
  { name: "Men's haircuts", description: "A comfortable, one-on-one appointment for a tidy, refreshed look.", category: "Cuts & styling" },
  { name: "Shampoo & styling", description: "A wash and style to leave you feeling cared for.", category: "Cuts & styling" },
  { name: "Blowouts & blow-dry styling", description: "A polished finish for everyday confidence or a special occasion.", category: "Cuts & styling" },
  { name: "Hair colouring", description: "Personalized colour care with an experienced hairstylist.", category: "Colour & care" },
  { name: "Root touch-ups", description: "Refresh your roots and maintain your preferred colour.", category: "Colour & care" },
  { name: "Perms", description: "Discuss a curl and shape that suits your hair.", category: "Colour & care" },
  { name: "Conditioning treatments", description: "Extra care for hair that needs a little attention.", category: "Colour & care" },
  { name: "Beard trims", description: "A neat finish tailored to your preferred look.", category: "Cuts & styling" },
];

function CaringCuts() {
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("All services");
  return <div className="min-h-screen overflow-x-hidden bg-background">
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="flex min-h-8 items-center justify-center gap-2 bg-primary px-4 py-2 text-center text-xs text-primary-foreground"><Heart className="size-3 shrink-0 text-gold"/> Welcoming new clients across Ottawa & surrounding communities</div>
      <div className="h-20 border-b border-border/60 bg-surface/95 backdrop-blur-xl"><div className="page-shell flex h-full items-center justify-between gap-3">
        <a href="#top" aria-label="Caring Cuts by Tracy du Feu home" className="min-w-0"><strong className="block font-display text-2xl font-normal sm:text-3xl">Caring Cuts</strong><span className="block text-xs text-secondary">by Tracy du Feu</span></a>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">{navigation.map(n=><a key={n.href} href={n.href} className="text-sm hover:text-secondary">{n.label}</a>)}</nav>
        <div className="flex shrink-0 items-center gap-2"><Button asChild className="hidden sm:inline-flex"><a href={phone}><Phone className="size-4"/> Call Tracy</a></Button><Button asChild aria-label="Call Tracy" size="icon" variant="icon" className="sm:hidden"><a href={phone}><Phone className="size-5"/></a></Button><Button aria-label="Open menu" size="icon" variant="icon" className="lg:hidden" onClick={()=>setMenu(true)}><Menu/></Button></div>
      </div></div>
    </header>
    {menu && <div className="fixed inset-0 z-[60] overflow-y-auto bg-primary text-primary-foreground"><div className="page-shell flex h-24 items-center justify-between"><span className="font-display text-3xl">Caring Cuts</span><Button aria-label="Close menu" size="icon" variant="outline" onClick={()=>setMenu(false)}><X/></Button></div><nav aria-label="Mobile navigation" className="page-shell mt-10 flex flex-col">{[...navigation,{label:"Contact Tracy",href:"#contact"}].map(n=><a key={n.href} href={n.href} onClick={()=>setMenu(false)} className="border-b border-primary-foreground/20 py-6 font-display text-3xl">{n.label}</a>)}</nav></div>}
    <main id="top" className="pt-28">
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <video aria-label="Hairstyling film" autoPlay className="absolute inset-0 size-full object-cover" loop muted playsInline src={campaignVideo.url}/><div className="absolute inset-0 bg-primary/75"/>
        <div className="page-shell relative flex min-h-[min(760px,calc(100svh-10rem))] flex-col justify-end py-12 sm:py-16">
          <div className="max-w-3xl"><p className="mb-5 text-sm text-gold">Gentle hairstyling. Personal care. Right where you are.</p><h1 className="display-title text-4xl leading-tight sm:text-6xl">Caring Cuts<br/><em className="text-gold">by Tracy du Feu</em></h1><p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/90">Compassionate, one-on-one haircare for seniors in Ottawa. Enjoy a fresh cut, colour or style in the comfort of your home or retirement residence.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild variant="light"><a href={phone}><Phone className="size-4"/> Enquire about a visit</a></Button><Button asChild variant="outline"><a href="#services">Explore services <ArrowRight className="size-4"/></a></Button></div></div>
          <div className="mt-10 grid grid-cols-2 gap-5 border-t border-primary-foreground/25 pt-6 md:grid-cols-4">{[["30+ years","Hairstyling experience"],["Licensed stylist","Professional, personalized care"],["At-home visits","Comfort without the travel"],["Senior-focused","Kindness, patience & dignity"]].map(([title,copy])=><div key={title}><p className="font-display text-xl">{title}</p><p className="mt-2 text-xs leading-5 text-primary-foreground/75">{copy}</p></div>)}</div>
        </div>
      </section>

      <section id="visits" className="section-pad scroll-mt-32"><div className="page-shell"><SectionHead kicker="Care that comes to you" title="Your comfort comes first" copy="For seniors, their families, and the communities they call home."/><div className="grid gap-10 md:grid-cols-3">{[
        {icon:Home,title:"In-home hairstyling",copy:"Personal haircare in familiar surroundings, without a trip to a conventional salon."},
        {icon:Users,title:"Retirement-residence visits",copy:"Hairstyling for seniors in retirement and assisted-living communities, including Orchard Walk Retirement Residence."},
        {icon:Heart,title:"Care for someone you love",copy:"Arranging haircare for a parent or loved one? Speak with Tracy about their needs and where they feel most comfortable."},
      ].map(({icon:Icon,title,copy},i)=><div className="border-t border-border pt-6" key={title}><div className="mb-6 flex items-center justify-between"><Icon className="size-8 text-secondary"/><span className="text-sm text-muted-foreground">0{i+1}</span></div><h3 className="font-display text-2xl">{title}</h3><p className="mt-4 text-base leading-7 text-muted-foreground">{copy}</p><a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm text-secondary">Enquire about a visit <ArrowUpRight className="size-4"/></a></div>)}</div></div></section>

      <section id="services" className="section-pad scroll-mt-32 bg-surface-soft"><div className="page-shell"><SectionHead kicker="Haircare, thoughtfully tailored" title="A fresh look. A familiar feeling." copy="From a simple trim to a colour refresh, Tracy takes the time to listen to what feels right for you."/><div role="group" aria-label="Filter services" className="mb-8 flex flex-wrap gap-2 border-b pb-5">{["All services","Cuts & styling","Colour & care"].map(f=><Button key={f} aria-pressed={filter===f} variant={filter===f?"primary":"ghost"} onClick={()=>setFilter(f)} className="normal-case tracking-normal">{f}</Button>)}</div><div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">{services.filter(s=>filter==="All services"||s.category===filter).map(s=><article className="border-b py-6" key={s.name}><Scissors className="mb-4 size-5 text-secondary"/><h3 className="font-display text-2xl">{s.name}</h3><p className="mt-3 text-base leading-7 text-muted-foreground">{s.description}</p></article>)}</div><p className="mt-8 text-base leading-7 text-muted-foreground">Call Tracy to discuss pricing, availability, and which services are suitable for your home or residence appointment.</p></div></section>

      <section id="about" className="section-pad scroll-mt-32 bg-primary text-primary-foreground"><div className="page-shell grid gap-12 lg:grid-cols-2"><div><p className="eyebrow text-gold">Meet your hairstylist</p><h2 className="display-title mt-4 text-4xl sm:text-5xl">Experience in every cut.<br/><em className="text-gold">Kindness in every visit.</em></h2></div><div><p className="text-lg leading-8 text-primary-foreground/90">Tracy du Feu is a licensed hairstylist with over 30 years of experience. Through Caring Cuts, she brings gentle, personalized hairstyling to seniors in their homes and retirement residences.</p><p className="mt-6 text-base leading-8 text-primary-foreground/75">Her approach centres on patience, listening, and treating each person with dignity. More than a fresh hairstyle, every appointment is an opportunity to feel comfortable, refreshed, and confident.</p><Button asChild variant="light" className="mt-8"><a href={phone}>Speak with Tracy <ArrowRight className="size-4"/></a></Button></div></div></section>

      <section id="areas" className="section-pad scroll-mt-32"><div className="page-shell"><SectionHead kicker="Local care, close to home" title="Serving Ottawa & beyond" copy="Mobile hairstyling across Ottawa and surrounding communities. Contact Tracy to check a visit to your address."/><div className="grid grid-cols-2 gap-x-8 sm:grid-cols-3 lg:grid-cols-4">{["Ottawa","Kanata","Stittsville","Nepean","Bells Corners","Greely","Manotick","Surrounding communities"].map(area=><div className="flex items-start gap-3 border-t py-5" key={area}><MapPin className="mt-1 size-4 shrink-0 text-secondary"/><span className="text-base leading-6">{area}</span></div>)}</div><div className="mt-8 border-t pt-8"><h3 className="font-display text-2xl">Orchard Walk Retirement Residence</h3><p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">Tracy also provides hairstyling at Orchard Walk. Get in touch to discuss a residence appointment or haircare for your community.</p></div></div></section>

      <section className="section-pad bg-surface-soft"><div className="page-shell"><SectionHead kicker="Questions & care" title="Let's make your visit comfortable"/><div className="divide-y border-y">{[
        ["Can I arrange an appointment for my parent?","Yes. Family members are welcome to contact Tracy to discuss haircare for a parent or loved one, including their location and personal needs."],
        ["Do you visit retirement residences?","Tracy offers retirement-residence and assisted-living hairstyling and works at Orchard Walk Retirement Residence. Call to discuss a visit to your community."],
        ["What if travelling to a salon is difficult?","In-home appointments bring haircare to you. Discuss any mobility or comfort needs with Tracy so you can decide whether a visit is suitable."],
        ["How much does a home visit cost?","Contact Tracy for service pricing and any travel costs for your location. Prices and appointment availability are discussed directly."],
        ["Can I arrange regular appointments?","Speak with Tracy about your preferred schedule and whether recurring visits are available."],
      ].map(([q,a])=><details className="group py-5" key={q}><summary className="cursor-pointer font-display text-xl leading-7 marker:text-secondary">{q}</summary><p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">{a}</p></details>)}</div></div></section>
    </main>

    <footer id="contact" className="scroll-mt-32 bg-surface"><div className="border-y py-16"><div className="page-shell grid items-center gap-8 lg:grid-cols-2"><div><p className="eyebrow">A little care makes a difference</p><h2 className="display-title mt-3 text-4xl">Let's arrange your haircare</h2><p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">For yourself, someone you love, or your retirement community. Call Tracy to discuss services and appointment availability.</p></div><div className="lg:justify-self-end"><Button asChild><a href={phone}><Phone className="size-4"/> 613-805-9971</a></Button><p className="mt-4 text-sm text-muted-foreground">Ottawa, Ontario · Welcoming new clients</p></div></div></div><div className="page-shell py-10"><div className="flex flex-col justify-between gap-8 md:flex-row"><div><span className="font-display text-3xl">Caring Cuts</span><p className="mt-1 text-sm text-secondary">by Tracy du Feu</p><p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">Senior-focused mobile hairstyling.<br/>Kindness, dignity, and personalized care.</p></div><nav aria-label="Footer navigation" className="flex flex-wrap content-start gap-x-6 gap-y-4">{navigation.map(n=><a key={n.href} href={n.href} className="text-sm hover:text-secondary">{n.label}</a>)}</nav></div><p className="mt-10 border-t pt-6 text-xs text-muted-foreground">© 2026 Caring Cuts by Tracy du Feu. All rights reserved.</p></div></footer>
  </div>;
}

function SectionHead({kicker,title,copy}:{kicker:string;title:string;copy?:string}) {
  return <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><div><p className="eyebrow">{kicker}</p><h2 className="display-title mt-3 text-3xl leading-tight sm:text-4xl">{title}</h2></div>{copy&&<p className="max-w-md text-base leading-7 text-muted-foreground">{copy}</p>}</div>;
}
