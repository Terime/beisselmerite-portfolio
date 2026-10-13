import React, { useState, useEffect, useRef } from "react";
import {
  Code2,
  Bot,
  Palette,
  Network,
  Layers,
  Cpu,
  GraduationCap,
  ArrowUpRight,
  Sun,
  Moon,
  Menu,
  Mail,
  Phone,
  MapPin,
  X,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";

/* =========================================================================
   CONTENT — edit the text below to update the site (FR / EN)
   ========================================================================= */
const dict = {
  fr: {
    skip: "Aller au contenu principal",
    brand: "Beissel",
    "nav.about": "À propos",
    "nav.education": "Parcours",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.cta": "Me contacter",
    "hero.kicker": "Disponible pour discuter de vos projets",
    "hero.title":
      'Je transforme des idées en <span class="grad">produits numériques</span>.',
    "hero.lead":
      "Étudiant en informatique et réseaux, je conçois des applications web, j'automatise des flux avec des agents IA et j'administre des infrastructures.",
    "hero.cta1": "Voir mes réalisations",
    "hero.cta2": "Me contacter",
    "hero.chip1": "Full-Stack",
    "hero.chip2": "Réseaux",
    "hero.chip3": "Agent IA",
    "overview.chip": "Vue d'ensemble",
    "overview.title": "Qui je suis, en un coup d'œil",
    "about.title": "À propos de moi",
    "about.p1":
      "Étudiant en informatique et réseaux, je conçois des apps web/mobile modernes, j'intègre des solutions IA et j'administre des infrastructures avec un vrai souci du détail visuel.",
    "stat1.label": "domaines de connaissances",
    "stat2.label": "langages et outils",
    "avail.title": "Disponibilité",
    "avail.v": "Ouvert aux stages et alternances",
    "skills.title": "Langages",
    "frameworks.title": "Frameworks",
    "tools.title": "Outils et systèmes",
    "edu.chip": "Parcours",
    "edu.title": "Parcours scolaire et formation",
    "edu.y1": "2027",
    "edu.h1": "DST — Réseau Informatique & Télécommunication et Systèmes Industriels (En cours)",
    "edu.org1": "École Supérieure De Technologie Du Littoral",
    "edu.p1":
      "Programmation (C, Python, Java), structures de données et configuration des services réseaux sous Linux/Windows.",
    "edu.y2": "2026",
    "edu.h2": "Formation Développement Web",
    "edu.org2": "Organisation internationale de la Francophonie",
    "edu.p2": "Programme intensif en développement web full-stack.",
    "edu.y3": "2022",
    "edu.h3": "Bac Scientifique (Série D)",
    "edu.org3": "Complexe Scolaire La Grâce Etonnante",
    "edu.p3":
      "Bases scientifiques en sciences de la vie et de la terre, mathématiques et sciences physiques.",
    "proj.chip": "Réalisations",
    "proj.title": "Projets & réalisations",
    "proj.techlabel": "Technologies clés",
    "proj.close": "Fermer",
    "proj.viewonline": "Discuter de ce projet",
    "proj.details": "Détails",
    "proj.prev": "Image précédente",
    "proj.next": "Image suivante",
    "contact.title": "Parlons de votre projet",
    "contact.sub":
      "Une opportunité de stage, une question, une idée de collaboration ? N'hésitez pas à écrire.",
    "contact.loc": "Pointe-Noire, Congo",
    "contact.name": "Votre nom",
    "contact.email": "Votre email",
    "contact.msg": "Message",
    "contact.msgph": "Décrivez votre projet ou votre offre ici...",
    "contact.send": "Envoyer le message",
    "contact.success":
      "Votre client mail va s'ouvrir pour envoyer le message.",
    "filters.all": "Tous",
    "filters.web": "Web",
    "filters.ai": "Agents IA",
    "filters.network": "Réseaux",
    "filters.design": "UI/UX",
  },
  en: {
    skip: "Skip to main content",
    brand: "Beissel",
    "nav.about": "About",
    "nav.education": "Education",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.cta": "Contact me",
    "hero.kicker": "Available to talk about your projects",
    "hero.title":
      'I turn ideas into <span class="grad">digital products</span>.',
    "hero.lead":
      "A CS & networking student, I build web apps, automate workflows with AI agents, and administer infrastructure.",
    "hero.cta1": "See my work",
    "hero.cta2": "Contact me",
    "hero.chip1": "Full-Stack",
    "hero.chip2": "Networks",
    "hero.chip3": "AI Agents",
    "overview.chip": "Overview",
    "overview.title": "Who I am, at a glance",
    "about.title": "About me",
    "about.p1":
      "A CS & networking student, I build modern web/mobile apps, integrate AI solutions, and administer infrastructure — with a real eye for visual detail.",
    "stat1.label": "areas of knowledge",
    "stat2.label": "languages & tools",
    "avail.title": "Availability",
    "avail.v": "Open to internships & co-ops",
    "skills.title": "Languages",
    "frameworks.title": "Frameworks",
    "tools.title": "Tools & systems",
    "edu.chip": "Education",
    "edu.title": "Education & training",
    "edu.y1": "2027",
    "edu.h1": "DST — Computer Networks, Telecommunications & Industrial Systems (In progress)",
    "edu.org1": "École Supérieure De Technologie Du Littoral",
    "edu.p1":
      "Programming (C, Python, Java), data structures and configuring network services on Linux/Windows.",
    "edu.y2": "2026",
    "edu.h2": "Web Development Training",
    "edu.org2": "International Organisation of La Francophonie",
    "edu.p2": "Intensive full-stack web development program.",
    "edu.y3": "2022",
    "edu.h3": "Scientific Baccalaureate (Series D)",
    "edu.org3": "Complexe Scolaire La Grâce Etonnante",
    "edu.p3":
      "Scientific foundations in life and earth sciences, mathematics, and physical sciences.",
    "proj.chip": "Work",
    "proj.title": "Projects & work",
    "proj.techlabel": "Key technologies",
    "proj.close": "Close",
    "proj.viewonline": "Discuss this project",
    "proj.details": "Details",
    "proj.prev": "Previous image",
    "proj.next": "Next image",
    "contact.title": "Let's talk about your project",
    "contact.sub":
      "An internship opportunity, a question, an idea for collaboration? Feel free to write.",
    "contact.loc": "Pointe-Noire, Congo",
    "contact.name": "Your name",
    "contact.email": "Your email",
    "contact.msg": "Message",
    "contact.msgph": "Describe your project or offer here...",
    "contact.send": "Send message",
    "contact.success": "Your mail client will open to send the message.",
    "filters.all": "All",
    "filters.web": "Web",
    "filters.ai": "AI Agents",
    "filters.network": "Networks",
    "filters.design": "UI/UX",
  },
};

const tagSets = {
  languages: ["HTML", "CSS3", "Python", "C", "PHP", "JavaScript", "Java"],
  frameworks: ["Laravel", "React JS", "Tailwind CSS", "Bootstrap"],
  tools: ["Docker", "VirtualBox", "Figma", "Kali Linux", "MySQL", "Wireshark"],
};

const eduMeta = [
  { yearKey: "edu.y1", titleKey: "edu.h1", orgKey: "edu.org1", descKey: "edu.p1", grad: "var(--violet), var(--violet-2)" },
  { yearKey: "edu.y2", titleKey: "edu.h2", orgKey: "edu.org2", descKey: "edu.p2", grad: "var(--coral), var(--violet-2)" },
  { yearKey: "edu.y3", titleKey: "edu.h3", orgKey: "edu.org3", descKey: "edu.p3", grad: "var(--mint), var(--violet-2)" },
];

/* =========================================================================
   PROJETS — chaque projet a une liste `images` (autant que tu veux).
   Place les fichiers dans public/projects/ et indique leur nom ici.
   La 1ʳᵉ image sert de couverture sur la carte ; toutes s'affichent dans
   la fenêtre "Détails". Une image introuvable est simplement ignorée.
   ========================================================================= */
const projectsData = [
  {
    id: 1,
    category: "web",
    Icon: Code2,
    color: "var(--violet), var(--violet-2)",
    images: [
      "/projects/twins-front.jpeg",
      "/projects/twins-back.jpeg",
    ],
    title_fr: "Twins Manager — Application web hôtelière",
    title_en: "Twins Manager — Hotel Management Web App",
    tag_fr: "Dev Web Full-Stack",
    tag_en: "Full-Stack Web Dev",
    desc_fr:
      "Application web de gestion hôtelière complète développée en architecture MVC (PHP/Laravel) avec tableau de bord administratif moderne.",
    desc_en:
      "A complete hotel management web application built with an MVC architecture (PHP/Laravel), featuring a modern admin dashboard.",
    tech: ["PHP", "Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
  },
  {
    id: 2,
    category: "ai",
    Icon: Bot,
    color: "var(--coral), #FFA36C",
    images: [
      "/projects/n8n-workflow.png",
      "/projects/n8n-2.png",
      "/projects/n8n-3.png",
    ],
    title_fr: "Agent IA & workflows n8n",
    title_en: "AI Agent & n8n Workflows",
    tag_fr: "Agents IA",
    tag_en: "AI Agents",
    desc_fr:
      "Mise en place d'un agent intelligent connecté à une application web de gestion d'hôtel pour automatiser la rédaction et l'envoi des rapports journaliers via l'API Gmail et Gemini.",
    desc_en:
      "Setting up an intelligent agent connected to a hotel management web app to automate writing and sending daily reports via the Gmail and Gemini API.",
    tech: ["n8n", "Gemini", "Webhooks"],
  },
  {
    id: 3,
    category: "design",
    Icon: Palette,
    color: "var(--mint), #6FE3B8",
    images: [
      "/projects/ecommerce-ui.jpg",
      "/projects/ecommerce-ui-2.jpg",
      "/projects/ecommerce-ui-3.jpg",
    ],
    title_fr: "Maquette UI/UX — application mobile de transfert de sportif",
    title_en: "UI/UX Mockup — Athlete Transfer Mobile App",
    tag_fr: "Graphisme & UI/UX",
    tag_en: "Graphic & UI/UX Design",
    desc_fr:
      "Conception complète du parcours utilisateur, wireframes et écrans haute fidélité d'une application mobile sous Figma.",
    desc_en:
      "Full user-journey design, wireframes and high-fidelity screens for a mobile app, built in Figma.",
    tech: ["Figma", "Adobe Photoshop", "UI/UX Design"],
  },
  {
    id: 4,
    category: "web",
    Icon: Code2,
    color: "var(--violet-2), var(--violet)",
    images: [
      "/projects/scool-app.jpeg",
      "/projects/scool-app-2.jpeg",
    ],
    title_fr: "Application web de gestion scolaire",
    title_en: "School management web application",
    tag_fr: "Dev Web Full-Stack",
    tag_en: "Full-Stack Web Dev",
    desc_fr:
      "Développement full stack d'une application web de gestion scolaire pour le Complexe Scolaire Le Rêve De Jean Christophe.",
    desc_en:
      "Full stack development of a school management web app for Le Rêve De Jean Christophe Complex.",
    tech: ["Laravel", "ReactJS", "Tailwind CSS", "MySQL"],
  },
  {
    id: 5,
    category: "web",
    Icon: Code2,
    color: "var(--violet-2), var(--violet)",
    images: [
      "/projects/r-plus-services.jpeg",
      "/projects/r-plus-services-2.jpeg",
    ],
    title_fr: "Site web vitrine",
    title_en: "Showcase website",
    tag_fr: "Dev Web Front-end",
    tag_en: "Front-end Web Dev",
    desc_fr:
      "Développement du site vitrine pour le compte de R-Plus Services, une société du secteur tertiaire créée pour garantir l'hygiène des lieux qui leur sont confiés pour un entretien.",
    desc_en:
      "Development of a showcase website for R-Plus Services, a company in the service sector created to ensure the cleanliness of the places entrusted to them for maintenance.",
    tech: ["ReactJS", "Tailwind CSS"],
  },
];

const filtersMeta = [
  { id: "all", key: "filters.all" },
  { id: "web", key: "filters.web" },
  { id: "ai", key: "filters.ai" },
  { id: "network", key: "filters.network" },
  { id: "design", key: "filters.design" },
];

/* =========================================================================
   STYLES — plain CSS (no Tailwind needed), injected once via <style>
   ========================================================================= */
const CSS = `
:root{
  --font: 'Fredoka', ui-rounded, ui-sans-serif, system-ui, sans-serif;
  --violet:#5B5BD6; --violet-2:#8B7CF6; --coral:#FF7A59; --mint:#2FBE8F;
  --header-h:76px; --safe-t:env(safe-area-inset-top,0px); --safe-b:env(safe-area-inset-bottom,0px);
  --r-l:34px; --r-m:22px; --r-s:14px;
}
:root, :root[data-theme="light"]{
  --bg:#F5F5FA; --bg-2:#FFFFFF; --ink:#16161F; --dim:#5B5B6B; --faint:#8A8A9A;
  --line:rgba(22,22,31,.10); --line-strong:rgba(22,22,31,.20);
  --surface:rgba(255,255,255,.7); --surface-strong:#FFFFFF;
  --shadow:0 20px 50px -20px rgba(30,30,60,.20); --shadow-lift:0 26px 60px -18px rgba(30,30,60,.28);
}
:root[data-theme="dark"]{
  --bg:#101018; --bg-2:#181822; --ink:#F1F1F6; --dim:#B4B3C4; --faint:#75748A;
  --line:rgba(241,241,246,.10); --line-strong:rgba(241,241,246,.20);
  --surface:rgba(255,255,255,.045); --surface-strong:rgba(255,255,255,.07);
  --shadow:0 20px 50px -20px rgba(0,0,0,.5); --shadow-lift:0 26px 60px -18px rgba(0,0,0,.6);
}
*{box-sizing:border-box;}
html{scroll-behavior:smooth; scroll-padding-top:calc(var(--header-h) + 26px + var(--safe-t));}
body{margin:0; background:var(--bg); color:var(--ink); font-family:var(--font); font-weight:400; line-height:1.55; -webkit-font-smoothing:antialiased; padding-top:var(--safe-t); padding-bottom:var(--safe-b); overflow-x:hidden;}
h1,h2,h3{margin:0; font-weight:600; letter-spacing:-0.01em;}
p{margin:0;} a{color:inherit;} button{font-family:inherit; cursor:pointer; background:none; border:none; color:inherit;}
img,svg{max-width:100%; display:block;}
.wrap{max-width:1180px; margin:0 auto; padding:0 24px;}
.visually-hidden{position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap;}
::selection{background:var(--violet); color:#fff;}
.skip-link{position:absolute; left:12px; top:-48px; z-index:110; background:var(--violet); color:#fff; padding:10px 18px; border-radius:100px; font-weight:600; font-size:14px; transition:top .2s ease;}
.skip-link:focus{top:calc(12px + var(--safe-t));}
:focus-visible{outline:2.5px solid var(--violet); outline-offset:3px; border-radius:8px;}
.glow{position:fixed; width:420px; height:420px; border-radius:50%; pointer-events:none; z-index:1; background:radial-gradient(circle, color-mix(in srgb, var(--violet) 18%, transparent) 0%, transparent 70%); transform:translate(-50%,-50%); transition:opacity .3s; opacity:0;}
@media (hover:hover){.glow.show{opacity:1;}}
header{position:fixed; top:16px; left:0; right:0; z-index:60; display:flex; justify-content:center; padding:0 16px; padding-top:var(--safe-t); transition:top .3s;}
.nav-pill{display:flex; align-items:center; gap:6px; height:64px; padding:0 10px 0 20px; border-radius:100px; background:var(--surface); backdrop-filter:blur(18px); -webkit-backdrop-filter:blur(18px); border:1px solid var(--line); box-shadow:var(--shadow); max-width:100%; transition:box-shadow .3s;}
header.scrolled .nav-pill{box-shadow:var(--shadow-lift);}
.logo{display:flex; align-items:center; gap:9px; font-weight:700; font-size:16px; text-decoration:none; margin-right:8px; white-space:nowrap;}
.logo-mark{width:30px; height:30px; border-radius:50%; background:linear-gradient(135deg, var(--violet), var(--violet-2)); flex-shrink:0;}
nav.primary{display:none; gap:2px; align-items:center;}
nav.primary a{font-size:13.5px; font-weight:500; text-decoration:none; color:var(--dim); padding:9px 14px; border-radius:100px; transition:background .2s, color .2s; white-space:nowrap;}
nav.primary a:hover{background:var(--surface-strong); color:var(--ink);}
@media (min-width:900px){nav.primary{display:flex;}}
.headctl{display:flex; align-items:center; gap:6px; margin-left:8px;}
.icon-btn{width:40px; height:40px; border-radius:50%; border:1px solid var(--line); background:var(--surface-strong); display:flex; align-items:center; justify-content:center; transition:transform .2s; flex-shrink:0;}
.icon-btn:hover{transform:scale(1.08);}
.icon-btn svg{width:16px; height:16px;}
.lang-switch{display:flex; border-radius:100px; background:var(--surface-strong); border:1px solid var(--line); padding:3px;}
.lang-switch button{padding:7px 11px; font-size:11.5px; font-weight:700; color:var(--dim); border-radius:100px;}
.lang-switch button[aria-pressed="true"]{background:var(--violet); color:#fff;}
.btn-cta{display:none; padding:11px 20px; border-radius:100px; background:var(--ink); color:var(--bg); text-decoration:none; font-weight:600; font-size:13.5px; white-space:nowrap;}
@media (min-width:640px){.btn-cta{display:inline-flex; align-items:center;}}
.menu-btn{display:flex;}
@media (min-width:900px){.menu-btn{display:none;}}
.mobile-backdrop{position:fixed; inset:0; z-index:55; background:transparent;}
.mobile-panel{position:fixed; top:calc(16px + 64px + 10px + var(--safe-t)); left:16px; right:16px; z-index:59; background:var(--surface-strong); border:1px solid var(--line); border-radius:24px; box-shadow:var(--shadow-lift); padding:10px; display:flex; flex-direction:column; gap:2px; opacity:0; transform:translateY(-8px); pointer-events:none; transition:opacity .2s ease, transform .2s ease;}
.mobile-panel.open{opacity:1; transform:none; pointer-events:auto;}
.mobile-panel a{padding:15px 18px; border-radius:16px; font-weight:500; font-size:15.5px; color:var(--ink); text-decoration:none;}
.mobile-panel a:hover{background:color-mix(in srgb, var(--ink) 5%, transparent);}
@media (min-width:900px){.mobile-panel, .mobile-backdrop{display:none;}}
main{padding-top:calc(var(--header-h) + 26px);}
section{padding:70px 0; position:relative; z-index:2;}
.chip{display:inline-flex; align-items:center; gap:8px; font-size:13px; font-weight:600; color:var(--violet); background:color-mix(in srgb, var(--violet) 12%, transparent); border:1px solid color-mix(in srgb, var(--violet) 25%, transparent); padding:8px 16px; border-radius:100px; margin-bottom:22px;}
.scalein{opacity:0; transform:scale(.92) translateY(14px); transition:opacity .55s cubic-bezier(.2,.8,.2,1), transform .55s cubic-bezier(.2,.8,.2,1);}
.scalein.inview{opacity:1; transform:none;}
.hero-grid{display:grid; grid-template-columns:1fr; gap:44px; align-items:center;}
@media (min-width:940px){.hero-grid{grid-template-columns:1.1fr 0.9fr; gap:30px;}}
h1.hero-h{font-size:clamp(38px,6.4vw,64px); line-height:1.08; font-weight:600;}
h1.hero-h .grad{background:linear-gradient(100deg, var(--violet), var(--coral)); -webkit-background-clip:text; background-clip:text; color:transparent;}
.hero-lead{margin-top:22px; max-width:460px; font-size:17px; color:var(--dim);}
.hero-actions{margin-top:32px; display:flex; flex-wrap:wrap; gap:14px;}
.btn{position:relative; overflow:hidden; display:inline-flex; align-items:center; gap:9px; padding:15px 26px; border-radius:100px; font-weight:600; font-size:15px; text-decoration:none; z-index:1;}
.btn-fill{background:var(--ink); color:var(--bg); transition:transform .2s;}
.btn-fill:hover{transform:translateY(-2px);}
.btn-soft{background:var(--surface-strong); border:1px solid var(--line); color:var(--ink); transition:transform .2s, border-color .2s;}
.btn-soft:hover{transform:translateY(-2px); border-color:var(--line-strong);}
.blob-wrap{position:relative; max-width:340px; margin:0 auto;}
.blob-shape{aspect-ratio:1; border-radius:62% 38% 55% 45% / 45% 55% 45% 55%; background:linear-gradient(150deg, var(--violet), var(--violet-2) 55%, var(--coral)); animation:blobmorph 12s ease-in-out infinite alternate; padding:10px; box-shadow:var(--shadow-lift);}
@keyframes blobmorph{0%{border-radius:62% 38% 55% 45% / 45% 55% 45% 55%;} 50%{border-radius:42% 58% 68% 32% / 55% 40% 60% 45%;} 100%{border-radius:55% 45% 40% 60% / 38% 58% 42% 62%;}}
.blob-inner{width:100%; height:100%; border-radius:inherit; overflow:hidden; background:var(--bg-2); display:flex; align-items:center; justify-content:center;}
.blob-inner img{width:100%; height:100%; object-fit:cover;}
.float-chip{position:absolute; padding:10px 16px; border-radius:100px; background:var(--surface-strong); border:1px solid var(--line); box-shadow:var(--shadow); font-size:12.5px; font-weight:600; display:flex; align-items:center; gap:7px; animation:floaty 4s ease-in-out infinite;}
.float-chip.a{top:6%; right:-6%; animation-delay:0s;}
.float-chip.b{bottom:8%; left:-8%; animation-delay:1.4s;}
.float-chip.c{bottom:-4%; right:8%; animation-delay:0.7s;}
@keyframes floaty{0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);}}
.float-dot{width:8px; height:8px; border-radius:50%; background:var(--mint);}
.photo-note{text-align:center; margin-top:20px; font-size:12px; color:var(--faint);}
.bento{display:grid; grid-template-columns:repeat(4,1fr); gap:18px;}
@media (max-width:900px){.bento{grid-template-columns:repeat(2,1fr);}}
@media (max-width:560px){.bento{grid-template-columns:1fr;}}
.tile{background:var(--bg-2); border:1px solid var(--line); border-radius:var(--r-l); padding:28px; box-shadow:var(--shadow); transition:transform .3s, box-shadow .3s;}
.tile:hover{transform:translateY(-4px); box-shadow:var(--shadow-lift);}
.tile.span2{grid-column:span 2;}
.tile.span4{grid-column:span 4;}
@media (max-width:900px){.tile.span4{grid-column:span 2;}}
@media (max-width:560px){.tile.span2,.tile.span4{grid-column:span 1;}}
.tile h3{font-size:19px;}
.tile p{margin-top:10px; color:var(--dim); font-size:14.5px;}
.tile-icon{width:46px; height:46px; border-radius:16px; display:flex; align-items:center; justify-content:center; margin-bottom:16px;}
.big-num{font-size:44px; font-weight:600; line-height:1;}
.big-num small{font-size:20px; color:var(--violet);}
.tag-row{display:flex; flex-wrap:wrap; gap:8px; margin-top:14px;}
.tag-row span{font-size:12px; font-weight:500; padding:6px 12px; border-radius:100px; background:color-mix(in srgb, var(--ink) 5%, transparent); color:var(--dim);}
.avail-dot{width:9px; height:9px; border-radius:50%; background:var(--mint); box-shadow:0 0 0 0 rgba(47,190,143,.5); animation:pulse-dot 2s infinite; display:inline-block; margin-right:8px;}
@keyframes pulse-dot{0%{box-shadow:0 0 0 0 rgba(47,190,143,.5);} 70%{box-shadow:0 0 0 8px rgba(47,190,143,0);} 100%{box-shadow:0 0 0 0 rgba(47,190,143,0);}}
.section-head{margin-bottom:34px; max-width:600px;}
.section-head h2{font-size:clamp(26px,3.6vw,36px);}
.section-head p{margin-top:10px; color:var(--dim); font-size:15.5px;}
.edu-list{display:flex; flex-direction:column; gap:14px;}
.edu-card{display:flex; gap:20px; align-items:flex-start; background:var(--bg-2); border:1px solid var(--line); border-radius:var(--r-m); padding:24px 26px; box-shadow:var(--shadow);}
.edu-year{flex-shrink:0; width:74px; height:74px; border-radius:var(--r-s); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:600; font-size:14px; text-align:center;}
.edu-card h3{font-size:19px;}
.edu-card .org{font-size:12.5px; color:var(--faint); margin-top:3px; display:block;}
.edu-card p.desc{margin-top:10px; color:var(--dim); font-size:14px;}
.filters{display:flex; flex-wrap:wrap; gap:8px; margin-bottom:30px;}
.filter-btn{padding:9px 17px; border-radius:100px; font-size:13px; font-weight:600; background:var(--surface-strong); border:1px solid var(--line); color:var(--dim);}
.filter-btn[aria-pressed="true"]{background:var(--ink); color:var(--bg); border-color:var(--ink);}
.proj-grid{display:grid; grid-template-columns:1fr; gap:20px;}
@media (min-width:760px){.proj-grid{grid-template-columns:1fr 1fr;}}
.proj-card{background:var(--bg-2); border:1px solid var(--line); border-radius:var(--r-l); overflow:hidden; text-align:left; width:100%; box-shadow:var(--shadow); transition:transform .3s, box-shadow .3s;}
.proj-card:hover{transform:translateY(-5px); box-shadow:var(--shadow-lift);}
.proj-cover{height:160px; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;}
.proj-cover img{width:100%; height:100%; object-fit:cover; position:absolute; inset:0; transition:transform .4s;}
.proj-card:hover .proj-cover img{transform:scale(1.06);}
.proj-cover .cover-overlay{position:absolute; inset:0; background:linear-gradient(0deg, rgba(0,0,0,.35), rgba(0,0,0,.05));}
.proj-cover .cover-icon{position:relative; z-index:1;}
.proj-count{position:absolute; bottom:12px; right:12px; z-index:2; display:flex; align-items:center; gap:6px; font-size:11.5px; font-weight:600; padding:6px 11px; border-radius:100px; background:rgba(0,0,0,.45); color:#fff; backdrop-filter:blur(6px);}
.proj-tag{position:absolute; top:14px; left:14px; font-size:11.5px; font-weight:600; padding:7px 13px; border-radius:100px; background:rgba(255,255,255,.22); color:#fff; backdrop-filter:blur(6px);}
.proj-body{padding:24px;}
.proj-body h3{font-size:19px;}
.proj-body p{margin-top:9px; font-size:14px; color:var(--dim); display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;}
.proj-foot{margin-top:16px; padding-top:14px; border-top:1px solid var(--line); display:flex; align-items:center; justify-content:space-between; gap:10px;}
.proj-techs{display:flex; flex-wrap:wrap; gap:6px;}
.proj-techs span{font-size:10.5px; font-weight:500; padding:5px 10px; border-radius:100px; background:color-mix(in srgb, var(--ink) 5%, transparent); color:var(--faint);}
.proj-link{font-size:12.5px; font-weight:600; color:var(--violet); display:flex; align-items:center; gap:5px; flex-shrink:0;}
.modal-backdrop{position:fixed; inset:0; z-index:90; background:rgba(10,10,20,.55); backdrop-filter:blur(8px); display:flex; align-items:center; justify-content:center; padding:18px; padding-top:calc(18px + var(--safe-t)); padding-bottom:calc(18px + var(--safe-b));}
.modal{background:var(--bg-2); border:1px solid var(--line); border-radius:var(--r-l); max-width:640px; width:100%; max-height:88vh; display:flex; flex-direction:column; overflow:hidden; box-shadow:var(--shadow-lift);}
.modal-head{display:flex; align-items:flex-start; justify-content:space-between; gap:14px; padding:22px 24px; border-bottom:1px solid var(--line);}
.modal-head h3{font-size:22px; margin-top:6px;}
.modal-body{padding:24px; overflow-y:auto;}
.m-cover{height:250px; border-radius:var(--r-m); display:flex; align-items:center; justify-content:center; margin-bottom:20px; position:relative; overflow:hidden;}
.m-cover img{width:100%; height:100%; object-fit:cover; position:absolute; inset:0;}
.m-cover .cover-overlay{position:absolute; inset:0; background:linear-gradient(0deg, rgba(0,0,0,.35), rgba(0,0,0,.05));}
.m-cover .cover-icon{position:relative; z-index:1;}
.m-cover img{animation:imgfade .35s ease;}
@keyframes imgfade{from{opacity:0;} to{opacity:1;}}
.m-nav{position:absolute; top:50%; transform:translateY(-50%); z-index:3; width:40px; height:40px; border-radius:50%; background:rgba(0,0,0,.42); color:#fff; border:1px solid rgba(255,255,255,.25); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(6px); transition:background .2s, transform .2s;}
.m-nav:hover{background:var(--violet); transform:translateY(-50%) scale(1.08);}
.m-nav.prev{left:12px;} .m-nav.next{right:12px;}
.m-counter{position:absolute; bottom:12px; right:14px; z-index:3; font-size:12px; font-weight:600; padding:5px 12px; border-radius:100px; background:rgba(0,0,0,.5); color:#fff;}
.m-thumbs{display:flex; gap:10px; margin:-6px 0 20px; overflow-x:auto; padding:4px 2px 8px;}
.m-thumbs button{flex:0 0 auto; width:84px; height:58px; border-radius:14px; overflow:hidden; border:2.5px solid transparent; opacity:.6; transition:opacity .2s, border-color .2s, transform .2s; padding:0;}
.m-thumbs button:hover{opacity:1; transform:translateY(-2px);}
.m-thumbs button.active{opacity:1; border-color:var(--violet);}
.m-thumbs img{width:100%; height:100%; object-fit:cover;}
.m-techs{display:flex; flex-wrap:wrap; gap:8px; margin-top:14px;}
.m-techs span{font-size:12px; padding:7px 13px; border-radius:100px; background:color-mix(in srgb, var(--ink) 5%, transparent); color:var(--dim);}
.modal-foot{padding:18px 24px; border-top:1px solid var(--line); display:flex; align-items:center; justify-content:space-between; gap:12px;}
.contact-panel{border-radius:var(--r-l); overflow:hidden; background:var(--bg-2); border:1px solid var(--line); box-shadow:var(--shadow-lift); display:grid; grid-template-columns:1fr;}
@media (min-width:880px){.contact-panel{grid-template-columns:1fr 1.25fr;}}
.contact-info{padding:44px 40px; background:linear-gradient(160deg, var(--violet), var(--violet-2)); color:#fff; position:relative; overflow:hidden;}
.contact-info::after{content:""; position:absolute; bottom:-60px; right:-60px; width:200px; height:200px; border-radius:50%; background:rgba(255,255,255,.12);}
.contact-info h2{font-size:clamp(28px,3.6vw,38px); position:relative;}
.contact-info p.sub{margin-top:14px; color:rgba(255,255,255,.85); font-size:15px; max-width:340px; position:relative;}
.cinfo-row{display:flex; align-items:center; gap:12px; margin-top:18px; font-size:13.5px; position:relative;}
.ci-icn{width:36px; height:36px; border-radius:12px; background:rgba(255,255,255,.16); display:flex; align-items:center; justify-content:center; flex-shrink:0;}
.ci-icn svg{width:16px; height:16px;}
.social-row{display:flex; gap:10px; margin-top:24px; position:relative;}
.social-row a{width:40px; height:40px; border-radius:50%; background:rgba(255,255,255,.16); display:flex; align-items:center; justify-content:center; text-decoration:none; transition:transform .2s;}
.social-row a:hover{transform:translateY(-3px); background:rgba(255,255,255,.28);}
.social-row svg{width:18px; height:18px;}
form.contact-form{padding:44px 40px; display:flex; flex-direction:column; gap:16px;}
.field label{display:block; font-size:13px; font-weight:600; color:var(--dim); margin-bottom:8px;}
.field input, .field textarea{width:100%; padding:14px 18px; border-radius:16px; background:color-mix(in srgb, var(--ink) 4%, transparent); border:1.5px solid transparent; color:var(--ink); font-family:inherit; font-size:15px; resize:vertical; transition:border-color .2s, background .2s;}
.field input:focus, .field textarea:focus{outline:none; border-color:var(--violet); background:var(--bg-2);}
.row2{display:grid; grid-template-columns:1fr; gap:16px;}
@media (min-width:560px){.row2{grid-template-columns:1fr 1fr;}}
.submit-btn{padding:16px; border-radius:100px; background:var(--ink); color:var(--bg); font-weight:600; font-size:15px; transition:transform .2s;}
.submit-btn:hover{transform:translateY(-2px);}
.success-msg{display:flex; align-items:center; gap:10px; padding:14px 18px; border-radius:14px; background:color-mix(in srgb, var(--mint) 14%, transparent); border:1px solid color-mix(in srgb, var(--mint) 35%, transparent); color:var(--ink); font-size:13.5px;}
.success-msg svg{width:19px; height:19px; flex-shrink:0; color:var(--mint);}
footer{padding:34px 0; padding-bottom:calc(34px + var(--safe-b)); text-align:center;}
footer p{font-size:13px; color:var(--faint);}
@media (prefers-reduced-motion: reduce){*{animation-duration:.001ms !important; transition-duration:.001ms !important; scroll-behavior:auto !important;}}
`;

/* =========================================================================
   COMPONENT
   ========================================================================= */
export default function Portfolio() {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("fr");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const glowRef = useRef(null);
  const lastFocused = useRef(null);
  const modalCloseRef = useRef(null);
  const [imgIndex, setImgIndex] = useState(0);
  const [failedImgs, setFailedImgs] = useState({});
  const touchStartX = useRef(null);

  const t = dict[lang];

  /* ---- inject Google Font once ---- */
  useEffect(() => {
    const l1 = document.createElement("link");
    l1.rel = "preconnect";
    l1.href = "https://fonts.googleapis.com";
    const l2 = document.createElement("link");
    l2.rel = "preconnect";
    l2.href = "https://fonts.gstatic.com";
    l2.crossOrigin = "anonymous";
    const l3 = document.createElement("link");
    l3.rel = "stylesheet";
    l3.href =
      "https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap";
    document.head.append(l1, l2, l3);
    return () => {
      l1.remove();
      l2.remove();
      l3.remove();
    };
  }, []);

  /* ---- theme + lang: load saved preference on mount ---- */
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem("bm_theme");
      const systemLight =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches;
      setTheme(storedTheme || (systemLight ? "light" : "dark"));
      const storedLang = localStorage.getItem("bm_lang");
      if (storedLang) setLang(storedLang);
    } catch (e) {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("bm_theme", theme);
    } catch (e) {}
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("bm_lang", lang);
    } catch (e) {}
  }, [lang]);

  /* ---- close mobile menu on Escape or on resize past breakpoint ---- */
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 900) setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileOpen]);

  /* ---- header shrink on scroll ---- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---- cursor glow (desktop only) ---- */
  useEffect(() => {
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hover = window.matchMedia && window.matchMedia("(hover:hover)").matches;
    if (reduce || !hover) return;
    const onMove = (e) => {
      const el = glowRef.current;
      if (el) {
        el.style.left = e.clientX + "px";
        el.style.top = e.clientY + "px";
        el.classList.add("show");
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* ---- scroll reveal ---- */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("inview");
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".scalein").forEach((el) => io.observe(el));
    return () => io.disconnect();
    // re-run whenever visible content changes shape
  }, [lang, activeFilter]);

  /* ---- modal: escape key + focus handling ---- */
  useEffect(() => {
    if (!selectedProject) return;
    document.body.style.overflow = "hidden";
    modalCloseRef.current && modalCloseRef.current.focus();
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") setImgIndex((i) => i + 1);
      if (e.key === "ArrowLeft") setImgIndex((i) => Math.max(i - 1, 0));
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProject]);

  const openModal = (project) => {
    lastFocused.current = document.activeElement;
    setImgIndex(0);
    setSelectedProject(project);
  };
  const closeModal = () => {
    setSelectedProject(null);
    if (lastFocused.current) lastFocused.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      (lang === "fr" ? "Contact portfolio — " : "Portfolio contact — ") +
        formData.name
    );
    const body = encodeURIComponent(
      formData.message +
        "\n\n" +
        (lang === "fr" ? "De" : "From") +
        ": " +
        formData.name +
        " (" +
        formData.email +
        ")"
    );
    try {
      window.location.href = `mailto:beisselmerite12mb@gmail.com?subject=${subject}&body=${body}`;
    } catch (err) {}
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setFormData({ name: "", email: "", message: "" });
  };

  const markFailed = (src) =>
    setFailedImgs((prev) => (prev[src] ? prev : { ...prev, [src]: true }));
  const availableImages = (p) =>
    ((p && p.images) || []).filter((src) => !failedImgs[src]);

  const modalImages = selectedProject ? availableImages(selectedProject) : [];
  const imgCount = modalImages.length;
  const safeIndex = imgCount ? Math.min(imgIndex, imgCount - 1) : 0;
  const goPrev = () => setImgIndex((i) => (i - 1 + imgCount) % imgCount);
  const goNext = () => setImgIndex((i) => (i + 1) % imgCount);

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <>
      <style>{CSS}</style>

      <a href="#main" className="skip-link">
        {t.skip}
      </a>
      <div ref={glowRef} className="glow" aria-hidden="true" />

      <header className={scrolled ? "scrolled" : ""}>
        <div className="nav-pill">
          <a href="#top" className="logo">
            <span className="logo-mark" aria-hidden="true" />
            <span>{t.brand}</span>
          </a>
          <nav className="primary" aria-label="Navigation principale">
            <a href="#overview">{t["nav.about"]}</a>
            <a href="#education">{t["nav.education"]}</a>
            <a href="#projects">{t["nav.projects"]}</a>
            <a href="#contact">{t["nav.contact"]}</a>
          </nav>
          <div className="headctl">
            <div className="lang-switch" role="group" aria-label="Langue / Language">
              <button
                type="button"
                aria-pressed={lang === "fr"}
                onClick={() => setLang("fr")}
              >
                FR
              </button>
              <button
                type="button"
                aria-pressed={lang === "en"}
                onClick={() => setLang("en")}
              >
                EN
              </button>
            </div>
            <button
              type="button"
              className="icon-btn"
              aria-label="Basculer le thème clair/sombre"
              onClick={() => setTheme((p) => (p === "dark" ? "light" : "dark"))}
            >
              {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button
              type="button"
              className="icon-btn menu-btn"
              aria-label="Ouvrir le menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((p) => !p)}
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
            <a href="#contact" className="btn-cta">
              {t["nav.cta"]}
            </a>
          </div>
        </div>
        {mobileOpen && (
          <div
            className="mobile-backdrop"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}
        <nav
          className={`mobile-panel${mobileOpen ? " open" : ""}`}
          aria-label="Navigation mobile"
        >
          <a href="#overview" onClick={() => setMobileOpen(false)}>
            {t["nav.about"]}
          </a>
          <a href="#education" onClick={() => setMobileOpen(false)}>
            {t["nav.education"]}
          </a>
          <a href="#projects" onClick={() => setMobileOpen(false)}>
            {t["nav.projects"]}
          </a>
          <a href="#contact" onClick={() => setMobileOpen(false)}>
            {t["nav.contact"]}
          </a>
        </nav>
      </header>

      <main id="main">
        {/* HERO */}
        <section id="top">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <span className="chip scalein">
                  <span className="avail-dot" />
                  <span>{t["hero.kicker"]}</span>
                </span>
                <h1
                  className="hero-h scalein"
                  dangerouslySetInnerHTML={{ __html: t["hero.title"] }}
                />
                <p className="hero-lead scalein">{t["hero.lead"]}</p>
                <div className="hero-actions scalein">
                  <a href="#projects" className="btn btn-fill">
                    <span>{t["hero.cta1"]}</span>
                  </a>
                  <a href="#contact" className="btn btn-soft">
                    <span>{t["hero.cta2"]}</span>
                  </a>
                </div>
              </div>
              <div className="scalein">
                <div className="blob-wrap">
                  <div className="blob-shape">
                    <div className="blob-inner">
                      {/* ============================================================
                          EMPLACEMENT PHOTO : remplace le src ci-dessous par ta photo,
                          par ex. src="/photo.png" (place le fichier dans /public).
                          Le cadre organique (blob) s'adapte automatiquement.
                      ============================================================= */}
                      <img
                        src="/photo.png"
                        onError={(e) => {
                          e.currentTarget.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 320'%3E%3Crect width='320' height='320' fill='%23EDEBFB'/%3E%3Ccircle cx='160' cy='140' r='52' fill='none' stroke='%235B5BD6' stroke-width='3'/%3E%3Cpath d='M78 300c0-56 36-90 82-90s82 34 82 90' fill='none' stroke='%235B5BD6' stroke-width='3'/%3E%3C/svg%3E";
                        }}
                        alt="Photo de profil"
                      />
                    </div>
                  </div>
                  <div className="float-chip a">
                    <span className="float-dot" />
                    <span>{t["hero.chip1"]}</span>
                  </div>
                  <div className="float-chip b"><span className="float-dot" /><span>{t["hero.chip2"]}</span></div>
                  <div className="float-chip c"><span className="float-dot" /><span>{t["hero.chip3"]}</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW BENTO */}
        <section id="overview">
          <div className="wrap">
            <div className="section-head scalein">
              <span className="chip">{t["overview.chip"]}</span>
              <h2>{t["overview.title"]}</h2>
            </div>
            <div className="bento">
              <div className="tile span2 scalein">
                <div
                  className="tile-icon"
                  style={{
                    background: "color-mix(in srgb, var(--violet) 14%, transparent)",
                    color: "var(--violet)",
                  }}
                >
                  <Code2 size={22} />
                </div>
                <h3>{t["about.title"]}</h3>
                <p>{t["about.p1"]}</p>
              </div>
              <div className="tile scalein">
                <div className="big-num">4</div>
                <p>{t["stat1.label"]}</p>
              </div>
              <div className="tile scalein">
                <div className="big-num">
                  9<small>+</small>
                </div>
                <p>{t["stat2.label"]}</p>
              </div>
              <div className="tile span2 scalein">
                <div
                  className="tile-icon"
                  style={{
                    background: "color-mix(in srgb, var(--coral) 16%, transparent)",
                    color: "var(--coral)",
                  }}
                >
                  <Layers size={22} />
                </div>
                <h3>{t["skills.title"]}</h3>
                <div className="tag-row">
                  {tagSets.languages.map((it) => (
                    <span key={it}>{it}</span>
                  ))}
                </div>
              </div>
              <div className="tile span2 scalein">
                <div
                  className="tile-icon"
                  style={{
                    background: "color-mix(in srgb, var(--violet) 14%, transparent)",
                    color: "var(--violet)",
                  }}
                >
                  <Layers size={22} />
                </div>
                <h3>{t["frameworks.title"]}</h3>
                <div className="tag-row">
                  {tagSets.frameworks.map((it) => (
                    <span key={it}>{it}</span>
                  ))}
                </div>
              </div>
              <div className="tile span4 scalein">
                <div
                  className="tile-icon"
                  style={{
                    background: "color-mix(in srgb, var(--mint) 16%, transparent)",
                    color: "var(--mint)",
                  }}
                >
                  <Cpu size={22} />
                </div>
                <h3>{t["tools.title"]}</h3>
                <div className="tag-row">
                  {tagSets.tools.map((it) => (
                    <span key={it}>{it}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education">
          <div className="wrap">
            <div className="section-head scalein">
              <span className="chip">{t["edu.chip"]}</span>
              <h2>{t["edu.title"]}</h2>
            </div>
            <div className="edu-list">
              {eduMeta.map((it, i) => (
                <div className="edu-card scalein" key={i}>
                  <div
                    className="edu-year"
                    style={{ background: `linear-gradient(150deg, ${it.grad})` }}
                  >
                    {t[it.yearKey]}
                  </div>
                  <div>
                    <h3>{t[it.titleKey]}</h3>
                    <span className="org">{t[it.orgKey]}</span>
                    <p className="desc">{t[it.descKey]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="wrap">
            <div className="section-head scalein">
              <span className="chip">{t["proj.chip"]}</span>
              <h2>{t["proj.title"]}</h2>
            </div>
            <div className="filters" role="group" aria-label="Filtrer les projets">
              {filtersMeta.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  className="filter-btn"
                  aria-pressed={activeFilter === f.id}
                  onClick={() => setActiveFilter(f.id)}
                >
                  {t[f.key]}
                </button>
              ))}
            </div>
            <div className="proj-grid">
              {filteredProjects.map((p) => {
                const Icon = p.Icon;
                return (
                  <button
                    type="button"
                    className="proj-card scalein"
                    key={p.id}
                    onClick={() => openModal(p)}
                  >
                    <div
                      className="proj-cover"
                      style={{ background: `linear-gradient(135deg, ${p.color})` }}
                    >
                      {availableImages(p)[0] && (
                        <img
                          src={availableImages(p)[0]}
                          alt=""
                          onError={() => markFailed(availableImages(p)[0])}
                        />
                      )}
                      <div className="cover-overlay" />
                      {availableImages(p).length > 1 && (
                        <span className="proj-count">
                          <Images size={13} /> {availableImages(p).length}
                        </span>
                      )}
                      <span className="proj-tag">
                        {lang === "fr" ? p.tag_fr : p.tag_en}
                      </span>
                      <Icon
                        className="cover-icon"
                        size={48}
                        color="#fff"
                        strokeWidth={1.8}
                      />
                    </div>
                    <div className="proj-body">
                      <h3>{lang === "fr" ? p.title_fr : p.title_en}</h3>
                      <p>{lang === "fr" ? p.desc_fr : p.desc_en}</p>
                      <div className="proj-foot">
                        <div className="proj-techs">
                          {p.tech.slice(0, 3).map((tc) => (
                            <span key={tc}>{tc}</span>
                          ))}
                        </div>
                        <span className="proj-link">
                          {t["proj.details"]} <ArrowUpRight size={13} />
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="wrap">
            <div className="contact-panel scalein">
              <div className="contact-info">
                <h2>{t["contact.title"]}</h2>
                <p className="sub">{t["contact.sub"]}</p>
                <div className="cinfo-row">
                  <span className="ci-icn">
                    <Mail size={16} />
                  </span>
                  <span>beisselmerite12mb@gmail.com</span>
                </div>
                <div className="cinfo-row">
                  <span className="ci-icn">
                    <Phone size={16} />
                  </span>
                  <span>+242 06 774 7275</span>
                </div>
                <div className="cinfo-row">
                  <span className="ci-icn">
                    <MapPin size={16} />
                  </span>
                  <span>{t["contact.loc"]}</span>
                </div>
                <div className="social-row">
                  <a href="https://wa.me/242067747275" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/beissel-merite-mboungou-1822873aa/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="https://github.com/Terime" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row2">
                  <div className="field">
                    <label htmlFor="f-name">{t["contact.name"]}</label>
                    <input
                      id="f-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Junior Biwidi"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="f-email">{t["contact.email"]}</label>
                    <input
                      id="f-email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="junior@gmail.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="f-msg">{t["contact.msg"]}</label>
                  <textarea
                    id="f-msg"
                    rows={4}
                    required
                    placeholder={t["contact.msgph"]}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <button type="submit" className="submit-btn">
                  {t["contact.send"]}
                </button>
                {submitted && (
                  <div className="success-msg" role="status">
                    <CheckCircle2 size={19} />
                    <span>{t["contact.success"]}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <p>© 2026 · Beissel Merite Mboungou</p>
        </div>
      </footer>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="modal">
            <div className="modal-head">
              <div>
                <span className="chip" style={{ marginBottom: 8 }}>
                  {lang === "fr" ? selectedProject.tag_fr : selectedProject.tag_en}
                </span>
                <h3 id="modal-title">
                  {lang === "fr" ? selectedProject.title_fr : selectedProject.title_en}
                </h3>
              </div>
              <button
                type="button"
                className="icon-btn"
                aria-label="Fermer"
                ref={modalCloseRef}
                onClick={closeModal}
              >
                <X size={18} />
              </button>
            </div>
            <div className="modal-body">
              <div
                className="m-cover"
                style={{ background: `linear-gradient(135deg, ${selectedProject.color})` }}
                onTouchStart={(e) => {
                  touchStartX.current = e.touches[0].clientX;
                }}
                onTouchEnd={(e) => {
                  if (touchStartX.current === null || imgCount < 2) return;
                  const dx = e.changedTouches[0].clientX - touchStartX.current;
                  if (Math.abs(dx) > 40) (dx < 0 ? goNext : goPrev)();
                  touchStartX.current = null;
                }}
              >
                {imgCount > 0 ? (
                  <img
                    key={modalImages[safeIndex]}
                    src={modalImages[safeIndex]}
                    alt={`${lang === "fr" ? selectedProject.title_fr : selectedProject.title_en} (${safeIndex + 1}/${imgCount})`}
                    onError={() => markFailed(modalImages[safeIndex])}
                  />
                ) : (
                  <selectedProject.Icon
                    className="cover-icon"
                    size={56}
                    color="#fff"
                    strokeWidth={1.8}
                  />
                )}
                {imgCount > 1 && (
                  <>
                    <button
                      type="button"
                      className="m-nav prev"
                      aria-label={t["proj.prev"]}
                      onClick={goPrev}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      className="m-nav next"
                      aria-label={t["proj.next"]}
                      onClick={goNext}
                    >
                      <ChevronRight size={20} />
                    </button>
                    <span className="m-counter">
                      {safeIndex + 1} / {imgCount}
                    </span>
                  </>
                )}
              </div>
              {imgCount > 1 && (
                <div className="m-thumbs">
                  {modalImages.map((src, i) => (
                    <button
                      type="button"
                      key={src}
                      className={i === safeIndex ? "active" : ""}
                      aria-label={`Image ${i + 1}`}
                      onClick={() => setImgIndex(i)}
                    >
                      <img src={src} alt="" onError={() => markFailed(src)} />
                    </button>
                  ))}
                </div>
              )}
              <p style={{ color: "var(--dim)", fontSize: 15 }}>
                {lang === "fr" ? selectedProject.desc_fr : selectedProject.desc_en}
              </p>
              <h4
                style={{
                  fontSize: 13,
                  color: "var(--faint)",
                  margin: "18px 0 8px",
                  fontWeight: 600,
                }}
              >
                {t["proj.techlabel"]}
              </h4>
              <div className="m-techs">
                {selectedProject.tech.map((tc) => (
                  <span key={tc}>{tc}</span>
                ))}
              </div>
            </div>
            <div className="modal-foot">
              <button type="button" className="btn btn-soft" onClick={closeModal}>
                {t["proj.close"]}
              </button>
              <a
                href="#contact"
                className="btn btn-fill"
                onClick={closeModal}
              >
                {t["proj.viewonline"]}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
