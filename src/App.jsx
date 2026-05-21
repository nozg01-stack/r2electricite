import React, { useState } from "react";
import { Phone, Zap, Clock, Mail, MapPin, Home, Building2, Lightbulb, Wrench, Snowflake, Star, ArrowLeft, ShieldCheck } from "lucide-react";

export default function App() {
  const [page, setPage] = useState("accueil");
  const [isSent, setIsSent] = useState(false);

  const services = [
    { icon: <Home className="h-8 w-8 text-yellow-500" />, title: "Neuf & rénovation", text: "Installation électrique complète pour maison neuve, appartement, bâtiment et rénovation." },
    { icon: <Zap className="h-8 w-8 text-yellow-500" />, title: "Installation électrique", text: "Tableau électrique, prises, interrupteurs, câbles, appareils et modifications d’installation." },
    { icon: <ShieldCheck className="h-8 w-8 text-yellow-500" />, title: "Mise aux normes", text: "Mise en conformité, sécurisation de l’installation et vérification des éléments essentiels." },
    { icon: <Wrench className="h-8 w-8 text-yellow-500" />, title: "Dépannage électrique", text: "Recherche de panne, réparation électrique, prises, interrupteurs, éclairages et petites urgences." },
    { icon: <Lightbulb className="h-8 w-8 text-yellow-500" />, title: "Éclairage", text: "Installation d’éclairages intérieurs, extérieurs, spots, luminaires et éclairage sur mesure." },
    { icon: <Snowflake className="h-8 w-8 text-yellow-500" />, title: "Climatisation", text: "Pose de climatisation pour maison, appartement, logement et local tertiaire." },
  ];

  const serviceSlides = [services.slice(0, 2), services.slice(2, 4), services.slice(4, 6)];

  const marques = [
    { nom: "Daikin", src: "/marques/daikin.png" },
    { nom: "Hager", src: "/marques/hager.png" },
    { nom: "Knipex", src: "/marques/knipex.png" },
    { nom: "Legrand", src: "/marques/legrand.png" },
    { nom: "Milwaukee", src: "/marques/milwaukee.png" },
    { nom: "Schneider Electric", src: "/marques/schneider-electric.png" },
    { nom: "Siemens", src: "/marques/siemens.png" },
    { nom: "Toshiba", src: "/marques/toshiba.png" },
  ];

  const realisationElec = [
    { src: "/realisations/eclairage-exterieur-mural.jpeg", title: "Éclairage extérieur mural" },
    { src: "/realisations/tableau-electrique-ferme.jpeg", title: "Tableau électrique" },
    { src: "/realisations/tableau-electrique-ouvert.jpeg", title: "Tableau électrique ouvert" },
    { src: "/realisations/eclairage-entree-maison.jpeg", title: "Éclairage entrée maison" },
    { src: "/realisations/tableau-electrique-chantier.jpeg", title: "Tableau électrique chantier" },
  ];

  const realisationClim = [
    { src: "/realisations/climatisation-toshiba-exterieur-double.jpeg", title: "Groupes extérieurs Toshiba" },
    { src: "/realisations/climatisation-daikin-exterieur.jpeg", title: "Groupe extérieur Daikin" },
    { src: "/realisations/climatisation-daikin-interieur.jpeg", title: "Unité intérieure Daikin" },
    { src: "/realisations/climatisation-toshiba-interieur.jpeg", title: "Unité intérieure Toshiba" },
    { src: "/realisations/cache-climatisation-exterieur.jpeg", title: "Cache climatisation extérieur" },
    { src: "/realisations/cache-climatisation-facade.jpeg", title: "Cache climatisation façade" },
  ];

  const avisClients = [
    { nom: "KN Services", texte: "Très professionnel, travail propre et soigné dans toute la maison. Sérieux, efficace et à l’écoute. Je recommande fortement !" },
    { nom: "Aleyna N.", texte: "Excellent service ! L’électricien est intervenu rapidement et a fait un travail impeccable. Très professionnel, à l’écoute et avec des tarifs raisonnables. Je recommande vivement !" },
    { nom: "Julien R.", texte: "Très professionnel, sérieux et à l’écoute. Le chantier a été réalisé avec soin." },
    { nom: "Karim B.", texte: "Installation propre, résultat nickel et finitions soignées. Je recommande R2 Électricité." },
    { nom: "Sophie L.", texte: "Très bon accompagnement du début à la fin. Travail sérieux, propre et conforme à ce qui était prévu." },
    { nom: "Mehdi D.", texte: "Réponse rapide, intervention efficace et problème réglé proprement. Très satisfait du service." },
    { nom: "Sarah K.", texte: "Pose de climatisation très propre. Travail rapide, discret et professionnel." },
    { nom: "Nicolas P.", texte: "Travail sérieux et finitions propres. Je referai appel à R2 Électricité sans hésiter." },
  ];

  const openQuotePage = () => {
    setIsSent(false);
    setPage("devis");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goHome = () => {
    setPage("accueil");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuoteSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const subject = encodeURIComponent("Demande de devis - R2 Électricité");
    const body = encodeURIComponent(
      `Nom : ${form.nom.value}\nEmail : ${form.email.value}\nTéléphone : ${form.telephone.value}\n\nMessage :\n${form.message.value}`
    );
    window.location.href = `mailto:r2electricite01@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
    setIsSent(true);
  };

  const Header = () => (
    <header className="relative z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-1 py-3 md:px-2">
        <button onClick={goHome} className="flex min-w-0 items-center gap-3 text-left">
          <div className="flex h-12 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-950 px-2 shadow-sm">
            <img src="/logo-r2.jpeg" alt="Logo R2 Électricité" className="h-10 w-auto object-contain" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-lg font-black tracking-tight md:text-xl">R2 Électricité</p>
            <p className="mt-0.5 text-[9px] font-semibold uppercase leading-tight tracking-[0.12em] text-slate-500 md:text-[10px]">
              Électricité générale • Climatisation
            </p>
          </div>
        </button>
        <a href="tel:0659138074" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-bold text-white hover:bg-slate-800">
          <Phone className="h-4 w-4 text-yellow-400" />
          <span className="hidden sm:inline">Appeler</span>
        </a>
      </div>
    </header>
  );

  const GoogleLogo = () => (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-100" aria-label="Google avis">
      <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden="true">
        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5Z" />
        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.2 4 9.5 8.5 6.3 14.7Z" />
        <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.4 39.5 16.1 44 24 44Z" />
        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.1 5.6l6.2 5.2C36.9 39.3 44 34 44 24c0-1.3-.1-2.4-.4-3.5Z" />
      </svg>
    </div>
  );

  if (page === "devis") {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-950">
        <Header />
        <main className="relative overflow-hidden px-5 py-12 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(250,204,21,0.30),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(15,23,42,0.10),transparent_32%)]" />
          <div className="relative mx-auto max-w-4xl">
            <button type="button" onClick={goHome} className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-100">
              <ArrowLeft className="h-4 w-4" /> Retour au site
            </button>
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-bold text-slate-800 shadow-sm">
                  <Mail className="h-4 w-4 text-yellow-500" /> Réponse rapide
                </div>
                <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-5xl">Expliquez votre projet.</h1>
              </div>
              <div className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-slate-200/80 md:p-8">
                {isSent && <div className="mb-5 rounded-2xl bg-yellow-100 p-4 text-sm font-bold text-slate-800">Message prêt : votre application mail s’est ouverte. Il vous reste à envoyer l’e-mail.</div>}
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">Nom</label>
                    <input name="nom" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-yellow-400 transition focus:ring-2" placeholder="Votre nom" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">Email</label>
                      <input name="email" type="email" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-yellow-400 transition focus:ring-2" placeholder="votre@email.fr" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">Téléphone</label>
                      <input name="telephone" type="tel" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-yellow-400 transition focus:ring-2" placeholder="Votre numéro" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">Message</label>
                    <textarea name="message" required rows="7" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-yellow-400 transition focus:ring-2" placeholder="Décrivez votre besoin : maison neuve, rénovation, dépannage, climatisation..." />
                  </div>
                  <button type="submit" className="w-full rounded-2xl bg-yellow-400 px-6 py-4 text-base font-black text-slate-950 shadow-lg shadow-yellow-300/30 transition hover:-translate-y-0.5 hover:bg-yellow-300">
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <style>{`
        @keyframes marqueScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marque-track {
          width: max-content;
          animation: marqueScroll 24s linear infinite;
        }
        .marque-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(250,204,21,0.35),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(15,23,42,0.14),transparent_32%)]" />
          <div className="absolute left-0 top-24 h-32 w-32 rounded-full bg-yellow-300/30 blur-3xl" />
          <div className="absolute bottom-12 right-0 h-48 w-48 rounded-full bg-slate-900/10 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-5 pb-8 pt-16 md:pb-10 md:pt-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-bold text-slate-800 shadow-sm">
                <Clock className="h-4 w-4 text-yellow-500" /> Prix attractifs & intervention rapide
              </div>
              <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">Vos travaux électriques entre de bonnes mains.</h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                Basée à Ambérieu-en-Bugey, R2 Électricité intervient auprès des particuliers et des professionnels pour tous vos travaux d’électricité générale et de climatisation. Nous vous accompagnons avec sérieux, précision et exigence afin de vous proposer des solutions fiables, soignées et adaptées à vos besoins.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="tel:0659138074" className="flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 text-base font-black text-slate-950 shadow-lg shadow-yellow-300/40 transition hover:-translate-y-0.5 hover:bg-yellow-300">
                  <Phone className="h-5 w-5" /> 06 59 13 80 74
                </a>
                <button type="button" onClick={openQuotePage} className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-base font-bold shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50">
                  Devis gratuit
                </button>
              </div>
              <div className="mx-auto mt-8 grid max-w-lg grid-cols-2 gap-3 text-center">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-black">6 ans</p>
                  <p className="text-xs font-semibold text-slate-500">d’expérience</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <div className="flex justify-center gap-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-5 w-5 fill-current" />)}
                  </div>
                  <p className="mt-2 text-xs font-semibold text-slate-500">qualité & satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-4">
          <div className="mx-auto max-w-6xl overflow-hidden">
            <div className="marque-track flex items-center gap-12 px-2 md:gap-16">
              {[...marques, ...marques].map((marque, index) => (
                <img key={`${marque.nom}-${index}`} src={marque.src} alt={marque.nom} className="h-9 w-auto shrink-0 object-contain md:h-11" />
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-white px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-500">Services</p>
                <h2 className="mt-2 text-3xl font-black md:text-4xl">Prestations</h2>
              </div>
            </div>
            <div className="mt-8 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex snap-x snap-mandatory gap-5">
                {serviceSlides.map((slide, index) => (
                  <div key={index} className="grid min-w-[86%] snap-center gap-5 sm:min-w-[58%] lg:min-w-[36%]">
                    {slide.map((service) => (
                      <div key={service.title} className="group rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm group-hover:bg-yellow-50">{service.icon}</div>
                        <h3 className="text-xl font-black">{service.title}</h3>
                        <p className="mt-2 leading-7 text-slate-600">{service.text}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-2 text-center text-sm font-semibold text-slate-500">Glissez vers la gauche pour voir les autres prestations.</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-500">Réalisations</p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">Électricité</h2>
            </div>
          </div>
          <div className="mt-8 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex snap-x snap-mandatory gap-5">
              {realisationElec.map((photo) => (
                <div key={photo.title} className="group min-w-[82%] snap-center overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/70 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-2xl sm:min-w-[48%] lg:min-w-[32%]">
                  <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                    <img src={photo.src} alt={photo.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-2 text-center text-sm font-semibold text-slate-500">Glissez vers la gauche pour voir les autres réalisations.</p>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-500">Réalisations</p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">Climatisation</h2>
            </div>
          </div>
          <div className="mt-8 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex snap-x snap-mandatory gap-5">
              {realisationClim.map((photo) => (
                <div key={photo.title} className="group min-w-[82%] snap-center overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/70 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-2xl sm:min-w-[48%] lg:min-w-[32%]">
                  <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                    <img src={photo.src} alt={photo.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-2 text-center text-sm font-semibold text-slate-500">Glissez vers la gauche pour voir les autres réalisations.</p>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-500">Avis clients</p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">Ils font confiance à R2 Électricité</h2>
            </div>
            <div className="flex items-center gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-6 w-6 fill-current" />)}
            </div>
          </div>
          <div className="mt-8 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex snap-x snap-mandatory gap-5">
              {avisClients.map((avis) => (
                <div key={avis.nom} className="min-w-[86%] snap-center rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-100 sm:min-w-[48%] lg:min-w-[32%]">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-black text-slate-950">{avis.nom}</p>
                      <p className="text-xs font-semibold text-slate-500">Avis client</p>
                    </div>
                    <GoogleLogo />
                  </div>
                  <div className="mb-4 flex gap-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-5 w-5 fill-current" />)}
                  </div>
                  <p className="leading-7 text-slate-700">“{avis.texte}”</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-2 text-center text-sm font-semibold text-slate-500">Glissez vers la gauche pour voir les autres avis.</p>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-950/10">
              <Home className="h-8 w-8 text-yellow-400" />
              <h3 className="mt-4 text-xl font-black">Neuf</h3>
              <p className="mt-2 text-slate-300">Installation électrique complète pour maison neuve, appartement et logement.</p>
            </div>
            <div className="rounded-3xl bg-yellow-400 p-6 text-slate-950 shadow-xl shadow-yellow-300/30">
              <Wrench className="h-8 w-8" />
              <h3 className="mt-4 text-xl font-black">Rénovation</h3>
              <p className="mt-2 text-slate-800">Remise à niveau, modification, tableau, prises, éclairages et mise en sécurité.</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-100">
              <Building2 className="h-8 w-8 text-yellow-500" />
              <h3 className="mt-4 text-xl font-black">Bâtiment & tertiaire</h3>
              <p className="mt-2 text-slate-600">Travaux électriques pour logement, commerce, bureau et petit local professionnel.</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-5 py-16 text-white">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-7 md:grid-cols-[1fr_1.3fr] md:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-slate-950">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">Secteur</p>
                  <h2 className="mt-2 text-3xl font-black">Zone d’intervention</h2>
                  <p className="mt-3 text-slate-300">Basé à Ambérieu-en-Bugey, R2 Électricité intervient dans l’Ain, le Rhône, la Savoie, la Haute-Savoie, l’Isère et le Jura.</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:justify-end">
                {["Ain", "Rhône", "Savoie", "Haute-Savoie", "Isère", "Jura"].map((zone) => (
                  <span key={zone} className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950">{zone}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-yellow-300 to-yellow-500 p-7 shadow-2xl shadow-yellow-300/30 md:p-10">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/30" />
            <div className="relative">
              <h2 className="text-3xl font-black md:text-4xl">Un projet électrique, un dépannage ou une clim ?</h2>
              <p className="mt-3 max-w-2xl text-lg text-slate-800">Contactez R2 Électricité pour expliquer votre projet, obtenir un conseil ou demander un devis.</p>
              <div className="mt-7 grid gap-3 md:grid-cols-3">
                <a href="tel:0659138074" className="flex items-center gap-3 rounded-2xl bg-slate-950 p-4 font-bold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5">
                  <Phone className="h-5 w-5 text-yellow-400" /> 06 59 13 80 74
                </a>
                <a href="mailto:r2electricite01@gmail.com" className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 font-bold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-white">
                  <Mail className="h-5 w-5" /> r2electricite01@gmail.com
                </a>
                <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 font-bold text-slate-950 shadow-sm">
                  <MapPin className="h-5 w-5" /> Ambérieu-en-Bugey
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 bg-white px-5 py-6 text-center text-sm text-slate-500">
        © 2026 R2 Électricité — Installation électrique, neuf, rénovation, dépannage électrique, bâtiment, tertiaire et climatisation.
      </footer>
    </div>
  );
}
