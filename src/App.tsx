import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cake, 
  Award, 
  Utensils, 
  CalendarDays, 
  Cookie, 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Copy, 
  Check, 
  Code, 
  Sparkles, 
  CheckCircle,
  Menu,
  X,
  FileCode,
  CheckCircle2
} from 'lucide-react';
import { OFFERS, CAKES, BENEFITS } from './data';
import { RAW_HTML_CODE } from './rawHtml';

export default function App() {
  const [showExporter, setShowExporter] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'cake' | 'savory'>('all');

  // Handle ESC key to close exporter modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowExporter(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(RAW_HTML_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getOfferIcon = (iconName: string) => {
    switch (iconName) {
      case 'cake':
        return <Cake className="w-6 h-6 text-brand-primary" />;
      case 'award':
        return <Award className="w-6 h-6 text-brand-primary" />;
      case 'utensils':
        return <Utensils className="w-6 h-6 text-brand-primary" />;
      case 'chef':
        return <CheckCircle2 className="w-6 h-6 text-brand-primary" />;
      case 'calendar':
        return <CalendarDays className="w-6 h-6 text-brand-primary" />;
      case 'cookie':
        return <Cookie className="w-6 h-6 text-brand-primary" />;
      default:
        return <Cake className="w-6 h-6 text-brand-primary" />;
    }
  };

  return (
    <div className="min-h-screen bg-linen font-sans text-brand-text selection:bg-brand-accent/20 selection:text-brand-primary">
      
      {/* EXPORTER FLOATING TRIGGER (Premium Developer Utility) */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowExporter(true)}
          className="flex items-center gap-2.5 bg-brand-primary hover:bg-brand-primary/95 text-white px-5 py-3.5 rounded-full shadow-2xl border border-brand-accent/30 font-semibold text-sm transition-all cursor-pointer group"
          id="btn-exporter-trigger"
        >
          <Code className="w-4 h-4 text-brand-accent animate-pulse group-hover:rotate-12 transition-transform" />
          <span>Gotowy Kod HTML (1 plik)</span>
        </motion.button>
      </div>

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 bg-brand-bg/95 backdrop-blur-md border-b border-brand-primary/10 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative">
              <img 
                src="https://i.ibb.co/3xM8Xkv/586384734-3210949255741841-807157120297580569-n.jpg" 
                alt="Swojskie Tradycje Logo" 
                className="w-11 h-11 rounded-full object-cover border-2 border-brand-accent transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute -inset-1 rounded-full border border-brand-accent/30 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
            </div>
            <div>
              <span className="font-display font-bold text-lg md:text-xl text-brand-primary tracking-wide block leading-tight">
                Swojskie Tradycje
              </span>
              <span className="text-[10px] uppercase tracking-wider text-brand-accent font-semibold block mt-0.5">
                Swojskie Wyroby • Ciasta • Garmażeria
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#o-nas" className="text-sm font-medium hover:text-brand-primary relative py-2 group">
              O nas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#oferta" className="text-sm font-medium hover:text-brand-primary relative py-2 group">
              Nasza oferta
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#nasze-ciasta" className="text-sm font-medium hover:text-brand-primary relative py-2 group">
              Nasze ciasta
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#dlaczego-my" className="text-sm font-medium hover:text-brand-primary relative py-2 group">
              Dlaczego warto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#kontakt" className="text-sm font-medium hover:text-brand-primary relative py-2 group">
              Kontakt
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:508474898" 
              className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-light text-brand-secondary px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 text-brand-accent" />
              <span>508 474 898</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-brand-primary hover:bg-brand-secondary rounded-lg transition-colors cursor-pointer"
            id="btn-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-brand-primary/10 bg-brand-bg/98"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                <a 
                  href="#o-nas" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium py-2 hover:text-brand-primary border-b border-brand-primary/5"
                >
                  O nas
                </a>
                <a 
                  href="#oferta" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium py-2 hover:text-brand-primary border-b border-brand-primary/5"
                >
                  Nasza oferta
                </a>
                <a 
                  href="#nasze-ciasta" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium py-2 hover:text-brand-primary border-b border-brand-primary/5"
                >
                  Nasze ciasta
                </a>
                <a 
                  href="#dlaczego-my" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium py-2 hover:text-brand-primary border-b border-brand-primary/5"
                >
                  Dlaczego warto
                </a>
                <a 
                  href="#kontakt" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium py-2 hover:text-brand-primary border-b border-brand-primary/5"
                >
                  Kontakt
                </a>
                
                <div className="pt-4 flex flex-col gap-3">
                  <a 
                    href="tel:508474898" 
                    className="flex items-center justify-center gap-2 bg-brand-primary text-brand-secondary py-3.5 rounded-full text-base font-semibold shadow"
                  >
                    <Phone className="w-5 h-5 text-brand-accent" />
                    <span>Zadzwoń: 508 474 898</span>
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61584089489554" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#1877f2] text-white py-3.5 rounded-full text-base font-semibold shadow"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Odwiedź Facebook</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-16 md:py-28 overflow-hidden bg-brand-secondary/40">
        {/* Subtle decorative ornaments */}
        <div className="absolute top-10 right-[-100px] opacity-[0.06] pointer-events-none rotate-45 select-none hidden lg:block">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10C50 10 35 30 35 50C35 70 50 90 50 90C50 90 65 70 65 50C65 30 50 10 50 10Z" stroke="#8b5e34" strokeWidth="2" strokeDasharray="3 3"/>
            <path d="M10 50H90" stroke="#8b5e34" strokeWidth="1"/>
          </svg>
        </div>
        <div className="absolute bottom-[-100px] left-[-100px] opacity-[0.06] pointer-events-none -rotate-12 select-none hidden lg:block">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10C50 10 35 30 35 50C35 70 50 90 50 90C50 90 65 70 65 50C65 30 50 10 50 10Z" stroke="#8b5e34" strokeWidth="2"/>
            <circle cx="50" cy="50" r="5" fill="#8b5e34"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side: Text & Badges */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-brand-secondary border border-brand-accent/25 px-4 py-2 rounded-full text-brand-primary text-xs md:text-sm font-semibold uppercase tracking-wider mb-6"
              >
                <Sparkles className="w-4 h-4 text-brand-accent fill-brand-accent" />
                <span>Domowe receptury • Tradycyjny smak</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-brand-primary tracking-tight leading-[1.1] mb-4"
              >
                Swojskie Tradycje
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-lg md:text-2xl text-brand-accent font-semibold tracking-wide uppercase mb-6"
              >
                Swojskie Wyroby • Ciasta • Garmażeria
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base md:text-lg text-brand-text/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Tworzymy z pasją to, co najlepsze — domowe wypieki, tradycyjne wyroby oraz świeżą garmażerię przygotowywaną według staropolskich i sprawdzonych, rodzinnych przepisów, tak jak u mamy.
              </motion.p>

              {/* Grid of benefits */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 mb-10 max-w-xl mx-auto lg:mx-0 text-left"
              >
                {[
                  'Domowe receptury',
                  'Świeże składniki',
                  'Tradycyjny smak',
                  'Robione na bieżąco',
                  'Wołomin i okolice'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-primary">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sm font-medium text-brand-text">{benefit}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <a 
                  href="tel:508474898" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-primary hover:bg-brand-primary-light text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 group"
                >
                  <Phone className="w-5 h-5 text-brand-accent animate-bounce group-hover:rotate-12" />
                  <div className="text-left">
                    <span className="block text-[11px] uppercase tracking-wider text-brand-accent font-medium leading-none mb-0.5">Zadzwoń do nas</span>
                    <span className="text-base font-bold">508 474 898</span>
                  </div>
                </a>
                <a 
                  href="#nasze-ciasta" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-brand-primary/5 text-brand-primary hover:text-brand-primary border-2 border-brand-primary rounded-full font-bold transition-all hover:-translate-y-0.5"
                >
                  Zobacz nasze wypieki
                </a>
              </motion.div>
            </div>

            {/* Right side: Appetiizing Image Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-[420px]">
                {/* Decorative border layout */}
                <div className="absolute -inset-4 rounded-[40px] bg-brand-accent opacity-15 rotate-3 z-0" />
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-8 border-white bg-white z-10 aspect-square">
                  <img 
                    src="https://i.ibb.co/3xM8Xkv/586384734-3210949255741841-807157120297580569-n.jpg" 
                    alt="Swojskie Tradycje Prezentacja" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SEKCJA 2 – O NAS */}
      <section className="py-20 md:py-28 bg-brand-bg" id="o-nas">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side: Grid of layered photos */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative w-full h-[400px] md:h-[480px]">
                <div className="absolute top-0 left-0 w-3/4 h-[320px] md:h-[360px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src="https://i.ibb.co/LD1wQ8DZ/588394097-122097555447136316-4601116834085491923-n.jpg" 
                    alt="Domowe wypieki" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-3/5 h-[220px] md:h-[260px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
                  <img 
                    src="https://i.ibb.co/s79hwtd/588722105-122097555549136316-241752297020309244-n.jpg" 
                    alt="Sernik rzemieślniczy" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right side: Detailed presentation */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-1 bg-brand-secondary border border-brand-accent/20 px-3.5 py-1.5 rounded-full text-brand-primary text-xs font-semibold uppercase tracking-wider mb-6">
                Szacunek Do Tradycji
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-brand-primary leading-tight mb-6">
                Smak tradycji w nowoczesnym wydaniu
              </h2>
              <p className="text-brand-text/80 leading-relaxed mb-6">
                Swojskie Tradycje powstały z wielkiej, rodzinnej pasji do gotowania oraz miłości do czystych, tradycyjnych smaków, które większość z nas pamięta z rodzinnego domu. Naszą misją jest powrót do naturalności – pieczemy i gotujemy tak, jak dawniej robiono to w najlepszych polskich domach.
              </p>
              
              <blockquote className="border-l-4 border-brand-accent pl-5 py-2 font-display italic text-lg text-brand-primary bg-brand-secondary/30 rounded-r-lg mb-6">
                "Każde ciasto, każda potrawa i wypiek okolicznościowy to u nas oddzielna historia, którą piszemy ręcznie z dbałością o perfekcyjny smak."
              </blockquote>

              <p className="text-brand-text/80 leading-relaxed mb-8">
                Eliminujemy sztuczne barwniki, ulepszacze, tłuszcze utwardzane i gotowe proszki. Używamy wyłącznie prawdziwego masła, wiejskich jaj, rzemieślniczych mąk oraz sezonowych owoców. Gwarantujemy, że różnicę poczujesz już przy pierwszym kęsie.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-brand-secondary/50 border border-brand-primary/5 rounded-2xl p-4">
                  <h4 className="font-display font-bold text-brand-primary text-sm uppercase tracking-wider mb-1">Ręczne Wykonanie</h4>
                  <p className="text-xs text-brand-text/70">Wszystko od zera – od zagniatania ciasta po dekorowanie.</p>
                </div>
                <div className="bg-brand-secondary/50 border border-brand-primary/5 rounded-2xl p-4">
                  <h4 className="font-display font-bold text-brand-primary text-sm uppercase tracking-wider mb-1">Lokalna Działalność</h4>
                  <p className="text-xs text-brand-text/70">Dbamy o świeżość, realizując zamówienia w Wołominie i okolicach.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEKCJA 3 – NASZA OFERTA */}
      <section className="py-20 md:py-28 bg-brand-secondary/30" id="oferta">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex bg-brand-secondary border border-brand-accent/25 px-4 py-1.5 rounded-full text-brand-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Domowa Spiżarnia & Pracownia
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-brand-primary leading-tight mb-4">
              Nasza bogata oferta
            </h2>
            <p className="text-brand-text/70">
              Dbamy o to, aby każda okazja w Twoim życiu miała najwspanialszą kulinarną oprawę. Poznaj nasze rzemieślnicze specjały przygotowywane na zamówienie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OFFERS.map((offer, index) => (
              <motion.div 
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-brand-primary/5 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                
                <div className="w-12 h-12 rounded-2xl bg-brand-secondary flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  {getOfferIcon(offer.iconName)}
                </div>

                <h3 className="font-display font-bold text-xl text-brand-primary mb-3">
                  {offer.title}
                </h3>
                
                <p className="text-sm text-brand-text/70 leading-relaxed">
                  {offer.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SEKCJA 4 – NASZE CIASTA (KLUCZOWA SEKCJA) */}
      <section className="py-20 md:py-28 bg-brand-bg" id="nasze-ciasta">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex bg-brand-secondary border border-brand-accent/25 px-4 py-1.5 rounded-full text-brand-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Słodki Raj
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-brand-primary leading-tight mb-4">
              Nasze pyszne ciasta
            </h2>
            <p className="text-brand-text/70">
              Oto najpopularniejsze kompozycje słodkie z naszej domowej cukierni, wybrane przez naszych stałych gości. Każdy kęs to esencja doskonałego smaku.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CAKES.map((cake, index) => (
              <motion.div 
                key={cake.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-brand-primary/5 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-secondary">
                  <img 
                    src={cake.image} 
                    alt={cake.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm border border-brand-accent/30 text-brand-primary font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Pyszny Wybór
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display font-bold text-lg md:text-xl text-brand-primary mb-2 group-hover:text-brand-accent transition-colors">
                    {cake.name}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-text/70 leading-relaxed mb-4 flex-grow">
                    {cake.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SEKCJA 5 – DLACZEGO WARTO */}
      <section className="py-20 md:py-28 bg-brand-secondary/30" id="dlaczego-my">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex bg-brand-secondary border border-brand-accent/25 px-4 py-1.5 rounded-full text-brand-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Gwarancja Satysfakcji
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-brand-primary leading-tight mb-4">
              Dlaczego warto nas wybrać?
            </h2>
            <p className="text-brand-text/70">
              Tradycyjne polskie rzemiosło i pełne zaangażowanie to fundamenty każdej potrawy i ciasta, które opuszczają naszą kuchnię.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white border border-brand-primary/5 rounded-2xl p-6 hover:shadow-md transition-all duration-300 hover:border-brand-accent/50 group"
              >
                <div className="w-9 h-9 rounded-full bg-brand-accent/15 text-brand-primary flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  {index + 1}
                </div>
                <h3 className="font-display font-bold text-base text-brand-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs text-brand-text/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SEKCJA 6 – GALERIA SMAKU (MASONRY GALLERY) */}
      <section className="py-20 md:py-28 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex bg-brand-secondary border border-brand-accent/25 px-4 py-1.5 rounded-full text-brand-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Uczta Dla Oka
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-brand-primary leading-tight mb-4">
              Galeria smaku
            </h2>
            <p className="text-brand-text/70">
              Nasze rzemieślnicze wyroby to nie tylko niezrównany smak, ale też estetyka podania. Zobacz zbliżenia naszych pysznych realizacji.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Gallery Item 1 (Tall) */}
            <div className="relative rounded-3xl overflow-hidden group shadow-sm md:row-span-2">
              <img 
                src="https://i.ibb.co/3xM8Xkv/586384734-3210949255741841-807157120297580569-n.jpg" 
                alt="Wizytówka Swojskie Tradycje" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Gallery Item 2 */}
            <div className="relative rounded-3xl overflow-hidden group shadow-sm">
              <img 
                src="https://i.ibb.co/LD1wQ8DZ/588394097-122097555447136316-4601116834085491923-n.jpg" 
                alt="Ciasto Orzechowe z Karmelem z bliska" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/30 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white font-display font-bold text-lg">Orzechowe z karmelem</h4>
                <p className="text-brand-secondary text-xs">Złocisty, aksamitny domowy karmel</p>
              </div>
            </div>

            {/* Gallery Item 3 (Wide on desktop) */}
            <div className="relative rounded-3xl overflow-hidden group shadow-sm sm:col-span-2 md:col-span-1 md:row-span-2">
              <img 
                src="https://i.ibb.co/hJdSCpYJ/587055399-122097547683136316-2858735629695295399-n.jpg" 
                alt="Ciasto Pomarańczowe świeżość" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/30 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white font-display font-bold text-lg">Ciasto pomarańczowe</h4>
                <p className="text-brand-secondary text-xs">Orzeźwiający, lekki krem i owoce</p>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="relative rounded-3xl overflow-hidden group shadow-sm">
              <img 
                src="https://i.ibb.co/s79hwtd/588722105-122097555549136316-241752297020309244-n.jpg" 
                alt="Aksamitny Sernik Oreo" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/30 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white font-display font-bold text-lg">Sernik Oreo</h4>
                <p className="text-brand-secondary text-xs">Spód z ciasteczek i kremowy aksamit</p>
              </div>
            </div>

            {/* Gallery Item 5 */}
            <div className="relative rounded-3xl overflow-hidden group shadow-sm">
              <img 
                src="https://i.ibb.co/1YSkY0Mb/588478057-122097555459136316-5872430428203881493-n-1.jpg" 
                alt="Mocno czekoladowe ciasto" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/30 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white font-display font-bold text-lg">Ciasto czekoladowe</h4>
                <p className="text-brand-secondary text-xs">Intensywne kakao uwielbiane przez dzieci</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SEKCJA 7 – OBSZAR DZIAŁANIA */}
      <section className="py-20 md:py-24 bg-brand-secondary/30 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none hidden lg:block">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10C50 10 35 30 35 50C35 70 50 90 50 90C50 90 65 70 65 50C65 30 50 10 50 10Z" fill="#8b5e34"/>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-brand-primary/5">
            <span className="inline-flex items-center gap-1.5 bg-brand-secondary border border-brand-accent/20 px-3.5 py-1.5 rounded-full text-brand-primary text-xs font-semibold uppercase tracking-wider mb-6">
              <MapPin className="w-4 h-4 text-brand-accent" />
              <span>Wołomin i okolice</span>
            </span>
            <h3 className="font-display font-bold text-2xl md:text-3.5xl text-brand-primary mb-4">
              Gdzie realizujemy zamówienia?
            </h3>
            <p className="text-brand-text/75 leading-relaxed text-sm md:text-base max-w-2xl mx-auto mb-8">
              Swoje rzemieślnicze wypieki i domową garmażerię przygotowujemy oraz dostarczamy na terenie miasta Wołomin oraz do sąsiednich miejscowości w powiecie wołomińskim.
            </p>

            <div className="flex flex-wrap justify-center gap-2.5 mb-8">
              {['Wołomin', 'Kobyłka', 'Zielonka', 'Ząbki', 'Marki', 'Radzymin', 'Duczki'].map((town, i) => (
                <span key={i} className="bg-brand-secondary text-brand-primary font-semibold text-xs md:text-sm px-5 py-2.5 rounded-full border border-brand-primary/10 shadow-sm hover:border-brand-accent/40 transition-colors">
                  {town}
                </span>
              ))}
            </div>

            <p className="text-sm font-semibold text-brand-accent">
              Mieszkasz w sąsiedniej gminie? Zadaj nam pytanie, chętnie pomożemy w transporcie!
            </p>
          </div>
        </div>
      </section>

      {/* SEKCJA 9 – CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-primary to-brand-primary/95 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#d89b45_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5.5xl text-white mb-4 leading-tight">
            Masz ochotę na domowe wypieki?
          </h2>
          <p className="text-brand-secondary/90 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Zadzwoń do nas lub napisz! Pomożemy dobrać pakiety ciast oraz potraw garmażeryjnych na zbliżające się uroczystości, przyjęcia rodzinne lub spotkania z bliskimi.
          </p>

          <a 
            href="tel:508474898" 
            className="inline-flex items-center gap-3 bg-white hover:bg-brand-secondary text-brand-primary px-8 py-4.5 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-transform hover:scale-[1.03] duration-300"
          >
            <Phone className="w-5 h-5 text-brand-accent fill-brand-accent animate-pulse" />
            <span>Zadzwoń: 508 474 898</span>
          </a>
        </div>
      </section>

      {/* SEKCJA 10 – KONTAKT */}
      <section className="py-20 md:py-28 bg-brand-bg" id="kontakt">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex bg-brand-secondary border border-brand-accent/25 px-4 py-1.5 rounded-full text-brand-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Porozmawiajmy o Menu
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-brand-primary leading-tight mb-4">
              Skontaktuj się z nami
            </h2>
            <p className="text-brand-text/70">
              Chętnie odpowiemy na każde pytanie i ustalimy szczegóły Twojego zamówienia. Wybierz dogodną dla siebie formę kontaktu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
            {/* Left side: Coordinates */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-brand-primary/5 flex flex-col gap-8 justify-center">
              
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-secondary flex items-center justify-center text-brand-primary flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base md:text-lg text-brand-primary mb-1">Zadzwoń i zamów</h3>
                  <p className="text-lg font-bold text-brand-text hover:text-brand-primary transition-colors">
                    <a href="tel:508474898">508 474 898</a>
                  </p>
                  <p className="text-xs text-brand-text/50 mt-1">Przyjmujemy zamówienia codziennie w godzinach 8:00 - 20:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-secondary flex items-center justify-center text-brand-primary flex-shrink-0">
                  <Mail className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base md:text-lg text-brand-primary mb-1">Napisz e-mail</h3>
                  <p className="text-sm md:text-base font-semibold text-brand-text hover:text-brand-primary transition-colors">
                    <a href="mailto:swojskietradycje@gmail.com">swojskietradycje@gmail.com</a>
                  </p>
                  <p className="text-xs text-brand-text/50 mt-1">Odpowiadamy najszybciej jak to możliwe</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-secondary flex items-center justify-center text-brand-primary flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base md:text-lg text-brand-primary mb-1">Obszar i odbiory</h3>
                  <p className="text-sm md:text-base font-semibold text-brand-text">
                    Wołomin i okolice (województwo mazowieckie)
                  </p>
                  <p className="text-xs text-brand-text/50 mt-1">Dowozimy bezpośrednio pod Twoje drzwi w umówionym terminie</p>
                </div>
              </div>

            </div>

            {/* Right side: Facebook Card */}
            <div className="bg-brand-secondary/40 border border-brand-accent/20 rounded-3xl p-8 md:p-10 flex flex-col justify-center items-center text-center">
              <img 
                src="https://i.ibb.co/3xM8Xkv/586384734-3210949255741841-807157120297580569-n.jpg" 
                alt="Profil Facebook" 
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md mb-6"
              />
              <h3 className="font-display font-bold text-xl md:text-2xl text-brand-primary mb-2">
                Znajdziesz nas na Facebooku!
              </h3>
              <p className="text-xs md:text-sm text-brand-text/70 mb-6 max-w-sm">
                Śledź nasze najświeższe wypieki, sezonowe menu, promocje świąteczne i zobacz kulisy naszej rzemieślniczej cukierni.
              </p>

              <a 
                href="https://www.facebook.com/profile.php?id=61584089489554" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877f2] hover:bg-[#166fe5] text-white px-6 py-3.5 rounded-full font-semibold shadow hover:shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <Facebook className="w-4 h-4 fill-white text-[#1877f2]" />
                <span>Odwiedź profil Swojskie Tradycje</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* STOPKA */}
      <footer className="bg-[#24160b] text-white/90 border-t-4 border-brand-accent py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start mb-12">
            
            <div className="md:col-span-6">
              <h2 className="font-display font-bold text-2xl text-brand-accent mb-4 tracking-wide">
                Swojskie Tradycje
              </h2>
              <p className="text-sm text-brand-secondary/80 leading-relaxed max-w-md">
                Nasza rodzinna pasja to tradycyjne, polskie smaki wypieków, wyrobów i pysznej garmażerii. Przygotowujemy potrawy, które przywołują miłe wspomnienia rodzinnego stołu i domowego ciepła.
              </p>
            </div>

            <div className="md:col-span-3">
              <h3 className="font-display font-semibold text-lg text-white mb-4">Szybkie linki</h3>
              <ul className="flex flex-col gap-2.5 text-sm">
                <li><a href="#o-nas" className="text-brand-secondary/70 hover:text-brand-accent hover:pl-1 transition-all">O nas</a></li>
                <li><a href="#oferta" className="text-brand-secondary/70 hover:text-brand-accent hover:pl-1 transition-all">Nasza oferta</a></li>
                <li><a href="#nasze-ciasta" className="text-brand-secondary/70 hover:text-brand-accent hover:pl-1 transition-all">Nasze ciasta</a></li>
                <li><a href="#dlaczego-my" className="text-brand-secondary/70 hover:text-brand-accent hover:pl-1 transition-all">Dlaczego warto</a></li>
                <li><a href="#kontakt" className="text-brand-secondary/70 hover:text-brand-accent hover:pl-1 transition-all">Kontakt</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h3 className="font-display font-semibold text-lg text-white mb-4">Kontakt z nami</h3>
              <p className="text-sm text-brand-secondary/70 mb-2 leading-relaxed">
                Wołomin i okolice
              </p>
              <p className="text-sm text-brand-secondary/70 mb-2">
                Telefon: <strong className="text-brand-accent">508 474 898</strong>
              </p>
              <p className="text-sm text-brand-secondary/70 mb-2">
                E-mail: <a href="mailto:swojskietradycje@gmail.com" className="text-brand-accent hover:underline">swojskietradycje@gmail.com</a>
              </p>
              <p className="text-sm text-brand-secondary/70">
                Facebook: <a href="https://www.facebook.com/profile.php?id=61584089489554" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">Swojskie Tradycje</a>
              </p>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 text-center text-xs text-brand-secondary/50">
            <p>© 2026 Swojskie Tradycje. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>

      {/* MODAL / SIDEBAR CODE EXPORTER (Gotowy Kod HTML Single-File) */}
      <AnimatePresence>
        {showExporter && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowExporter(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div 
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-brand-accent/30 overflow-hidden flex flex-col max-h-[85vh] z-10"
            >
              {/* Header */}
              <div className="bg-brand-secondary p-6 border-b border-brand-accent/25 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-brand-accent shadow">
                    <FileCode className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg md:text-xl text-brand-primary leading-tight">
                      Kod HTML Strony Swojskie Tradycje
                    </h3>
                    <p className="text-xs text-brand-text/60 mt-0.5">
                      1 plik • Bez bibliotek • Bez JavaScript • Wszystkie style CSS wbudowane • Schema.org SEO
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowExporter(false)}
                  className="p-2 hover:bg-brand-primary/10 rounded-full transition-colors cursor-pointer text-brand-primary"
                  id="btn-close-exporter"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Informational Warning */}
              <div className="bg-[#fdfbf7] p-5 border-b border-brand-primary/5 flex items-start gap-3.5 text-xs text-brand-text/80">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-primary font-bold mt-0.5">
                  !
                </div>
                <div>
                  <p className="font-semibold text-brand-primary">Szybki start dla Twojej domeny:</p>
                  <p className="mt-1 leading-relaxed text-brand-text/70">
                    Ten kod to dokładnie to, o co prosiłeś – w 100% zoptymalizowany, lekki kod HTML5 + CSS3 z mikrodanymi Schema.org LocalBusiness, tagami Open Graph i kompletną grafiką. Możesz skopiować go jednym kliknięciem i bezpośrednio umieścić na serwerze jako plik <code className="bg-brand-secondary text-brand-primary px-1.5 py-0.5 rounded font-mono font-bold">index.html</code>.
                  </p>
                </div>
              </div>

              {/* Code Preview */}
              <div className="p-6 overflow-y-auto flex-grow bg-[#1e1e1e] text-zinc-300 font-mono text-[11px] md:text-xs leading-relaxed select-text select-all">
                <pre className="whitespace-pre-wrap">{RAW_HTML_CODE}</pre>
              </div>

              {/* Footer Actions */}
              <div className="bg-brand-bg p-6 border-t border-brand-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-brand-text/50">
                  Kod zawiera oryginalne zdjęcia produktów i ikony wektorowe SVG.
                </div>
                
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <button 
                    onClick={() => setShowExporter(false)}
                    className="w-full sm:w-auto px-5 py-3 rounded-full hover:bg-brand-secondary text-brand-primary text-sm font-semibold transition-colors border border-brand-primary/10 cursor-pointer"
                  >
                    Zamknij podgląd
                  </button>
                  <button 
                    onClick={handleCopyCode}
                    className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm shadow transition-all duration-300 cursor-pointer ${
                      copied 
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20' 
                        : 'bg-brand-accent hover:bg-brand-accent-light text-brand-primary shadow-brand-accent/20'
                    }`}
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>Skopiowano pomyślnie!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Skopiuj cały kod HTML</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
