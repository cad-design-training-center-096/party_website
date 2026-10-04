import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/Button';
import { StatCard } from '../components/home/StatCard';
import { PartyMediaBoard } from '../components/home/PartyMediaBoard';
import { ContactSection } from '../components/home/ContactSection';
import { Footer } from '../components/layout/Footer';
import statisticsData from '../data/statistics.json';
import { 
  FaArrowRight, 
  FaPlayCircle, 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaUsers, 
  FaTimes, 
  FaBroadcastTower, 
  FaBookOpen, 
  FaFileAlt, 
  FaVoteYea, 
  FaRegLightbulb, 
  FaExternalLinkAlt 
} from 'react-icons/fa';

interface HomeProps {
  isJoinModalOpen?: boolean;
  onOpenJoinModal?: () => void;
  onCloseJoinModal?: () => void;
}

export const Home: React.FC<HomeProps> = ({ 
  isJoinModalOpen: externalJoinModalOpen, 
  onOpenJoinModal, 
  onCloseJoinModal 
}) => {
  const { t } = useTranslation();
  
  // State for interactive features
  const [selectedStat, setSelectedStat] = useState<typeof statisticsData.keyStats[0] | null>(null);
  const [selectedRegionIndex, setSelectedRegionIndex] = useState(0);
  const [isLiveStreamOpen, setIsLiveStreamOpen] = useState(false);
  const [localJoinModalOpen, setLocalJoinModalOpen] = useState(false);
  
  const isJoinModalVisible = externalJoinModalOpen || localJoinModalOpen;

  const handleOpenJoin = () => {
    if (onOpenJoinModal) {
      onOpenJoinModal();
    }
    setLocalJoinModalOpen(true);
  };

  const handleCloseJoin = () => {
    setLocalJoinModalOpen(false);
    setFormSubmitted(false);
    if (onCloseJoinModal) {
      onCloseJoinModal();
    }
  };
  
  // Join form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    state: 'Delhi',
    interest: 'Grassroots Organizing'
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  const activeRegion = statisticsData.regionalBreakdown[selectedRegionIndex] || statisticsData.regionalBreakdown[0];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-800">
      
      {/* Hero Section */}
      <header id="hero" className="relative bg-[#1a365d] py-20 lg:py-28 overflow-hidden text-white">
        {/* Subtle geometric pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true" 
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-400/20 text-xs font-semibold text-blue-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              2026 National People's Movement
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6 text-white text-balance">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-xl font-normal leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                variant="secondary" 
                size="lg" 
                className="gap-2 text-slate-950 font-bold shadow-lg shadow-amber-500/20 cursor-pointer"
                onClick={handleOpenJoin}
              >
                {t('hero.joinCta')} <FaArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => setIsLiveStreamOpen(true)}
                className="border-white/80 text-white hover:bg-white hover:text-[#1a365d] transition-all gap-2 cursor-pointer"
              >
                <FaPlayCircle className="w-4 h-4 text-amber-400" /> {t('hero.watchLive')}
              </Button>
            </div>

            {/* Quick bullet points */}
            <div className="mt-10 pt-8 border-t border-blue-800/60 grid grid-cols-2 gap-4 text-xs text-blue-200">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Zero Corporate Dark Money</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>100% Audited Online Accounts</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700 ease-out transform group-hover:scale-105" 
                alt="Vikas Jan Parishad National Assembly"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('hero-img-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div 
                id="hero-img-fallback"
                style={{ display: 'none' }}
                className="w-full h-full bg-gradient-to-br from-[#152a48] to-[#0c192d] p-8 flex flex-col justify-center items-center text-center"
              >
                <FaUsers className="w-14 h-14 text-amber-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Vijaya Janata Party</h3>
                <p className="text-sm text-blue-200 max-w-sm">
                  People's convention for democratic reform and transparent public policy.
                </p>
              </div>

              {/* Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent flex items-center justify-between text-xs text-slate-300">
                <span className="font-medium text-white">74th National Assembly · New Delhi</span>
                <span className="text-amber-400 font-mono">OCT 2026</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section: Loaded dynamically from statistics.json into StatCard components */}
      <section id="statistics" className="relative z-20 -mt-10 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 md:divide-x divide-slate-100">
            {statisticsData.keyStats.map((stat) => (
              <StatCard 
                key={stat.id}
                label={t(`stats.${stat.id}`, stat.label)}
                value={stat.value}
                sublabel={stat.sublabel}
                trend={stat.trend}
                description={stat.description}
                onClick={() => setSelectedStat(stat)}
              />
            ))}
          </div>

          {/* Quick interactive hint */}
          <div className="px-6 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Verified by Independent Civic Registry & State Chapters</span>
            <span className="text-blue-700 font-medium">Click any metric for details · Updated daily</span>
          </div>
        </div>
      </section>

      {/* Impact Milestones & Highlights */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider font-bold text-[#1a365d]">
            Grassroots Proof of Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Governance measured in citizen lives touched
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Unlike traditional rhetoric, our civic performance is audited through open registers and citizen councils.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statisticsData.impactMilestones.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-50/70 hover:bg-white p-6 rounded-xl border border-slate-200/80 transition-all duration-200 hover:shadow-md"
            >
              <div className="text-3xl font-extrabold text-[#1a365d] tabular-nums mb-2 font-mono">
                {item.metric}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Regional Footprint Breakdown (Interactive from JSON) */}
      <section id="breakdown" className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-blue-700">
                Regional Distribution
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                State-wise Presence & Grassroots Hubs
              </h2>
            </div>
            
            {/* Interactive zone tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg overflow-x-auto">
              {statisticsData.regionalBreakdown.map((zone, idx) => (
                <button
                  key={zone.region}
                  onClick={() => setSelectedRegionIndex(idx)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                    selectedRegionIndex === idx
                      ? 'bg-[#1a365d] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {zone.region}
                </button>
              ))}
            </div>
          </div>

          {/* Active Zone Detail Card */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm grid lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                <FaMapMarkerAlt className="w-3.5 h-3.5 text-red-500" />
                <span>Zone Coverage</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {activeRegion.region}
              </h3>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeRegion.states.map((st) => (
                  <span 
                    key={st}
                    className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-medium"
                  >
                    {st}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 p-4 bg-slate-50 rounded-lg border border-slate-100">
              <div>
                <span className="text-xs text-slate-500 font-medium">Registered Cadre</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1a365d] tabular-nums mt-1">
                  {activeRegion.members}
                </div>
                <span className="text-[11px] text-emerald-600 font-medium">Active Members</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-medium">Field Organizers</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 tabular-nums mt-1">
                  {activeRegion.volunteers}
                </div>
                <span className="text-[11px] text-slate-500 font-medium">Ground Volunteers</span>
              </div>
            </div>

            <div className="space-y-2 lg:border-l lg:pl-8 border-slate-200">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Current Regional Directive
              </span>
              <p className="text-sm font-semibold text-slate-800">
                {activeRegion.primaryFocus}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Coordinated with district magistrate representations, local trade associations, and village councils.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleOpenJoin}
                className="mt-3 gap-1.5 text-xs text-[#1a365d] border-[#1a365d]/30 hover:bg-[#1a365d]/5"
              >
                Join {activeRegion.region} Chapter <FaArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Commitments / Manifesto Section */}
      <section id="commitments" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider font-bold text-[#1a365d]">
            Our People's Compact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Four Pillars of Systematic Reform
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Policies drafted through direct citizen consultation and expert evaluation, ensuring immediate feasibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors bg-white">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1a365d] flex items-center justify-center mb-6">
              <FaVoteYea className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              01. Transparent Civic Budgets & Direct Auditing
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Mandatory digital dashboards for every panchayat and municipality where citizens can track work orders, contractor payments, and project timelines in real-time.
            </p>
            <ul className="text-xs text-slate-500 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                Public social audits conducted quarterly at townhalls
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                Whistleblower legal protections backed by party cadre
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors bg-white">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-6">
              <FaBookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              02. Youth Employment & Public Apprenticeships
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Direct connection between regional polytechnics, universities, and municipal public works to guarantee 12-month paid public apprenticeships for graduates.
            </p>
            <ul className="text-xs text-slate-500 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                District Innovation & Skill Incubators
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                Zero examination application fees for government posts
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors bg-white">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6">
              <FaFileAlt className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              03. Agrarian Security & Water Commons
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Legally guaranteed Minimum Support Price frameworks backed by decentralized cold-chain storage and public grain procurement hubs in every taluka.
            </p>
            <ul className="text-xs text-slate-500 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Solar micro-grids for agricultural water pumping
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Direct farmer-to-consumer cooperative retail stalls
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors bg-white">
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center mb-6">
              <FaRegLightbulb className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              04. Quality Healthcare & Neighborhood Clinics
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Free primary diagnostic clinics and essential medicines within a 15-minute walking distance for every urban and rural ward.
            </p>
            <ul className="text-xs text-slate-500 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                Digitally integrated health cards with complete privacy
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                Emergency response ambulance network under 10 minutes
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dispatches & Upcoming Assemblies */}
      <section id="updates" className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                Official Bulletins
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Latest Dispatches & Assemblies
              </h2>
            </div>
            <button 
              onClick={() => setIsLiveStreamOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#1a365d] hover:underline"
            >
              Watch live archives <FaExternalLinkAlt className="w-3 h-3 ml-1" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-xs text-slate-400 mb-2">October 2, 2026 · New Delhi</div>
              <h4 className="text-base font-bold text-slate-900 mb-2 hover:text-[#1a365d] transition-colors">
                National Executive concludes session on Youth Employment Guarantee
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                The working committee approved the draft white-paper proposing public apprenticeships across urban municipalities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-xs text-slate-400 mb-2">September 28, 2026 · Lucknow</div>
              <h4 className="text-base font-bold text-slate-900 mb-2 hover:text-[#1a365d] transition-colors">
                Public Audit exposed ₹42 Crore irrigation disparity in Bundelkhand
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                VJP volunteers presented verified ground receipts proving non-operational borewells funded by state agencies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-xs text-slate-400 mb-2">Upcoming · October 15, 2026</div>
              <h4 className="text-base font-bold text-slate-900 mb-2 hover:text-[#1a365d] transition-colors">
                Bengaluru Civic Dialogue: Urban Flooding & Municipal Accountability
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Open to all residents, resident welfare associations, and urban planners. Free registration required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct CTA Section */}
      <section className="bg-[#1a365d] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Democracy is not a spectator sport.
          </h2>
          <p className="text-base text-blue-100 mb-8 max-w-xl mx-auto leading-relaxed">
            Join over 10 million citizens working together across all 28 states to bring accountability and honest leadership to India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={handleOpenJoin}
              className="gap-2 text-slate-950 font-bold"
            >
              Enroll as Member / Volunteer <FaArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => setIsLiveStreamOpen(true)}
              className="border-white/80 text-white hover:bg-white hover:text-[#1a365d]"
            >
              Watch VJP Live Broadcast
            </Button>
          </div>
        </div>
      </section>

      {/* Party Information & Digital Media Hub (3-column board placed directly before footer) */}
      <PartyMediaBoard />

      {/* Contact Us Section matching uploaded reference image */}
      <ContactSection />

      {/* Footer matching uploaded reference image */}
      <Footer />

      {/* Stat Card Detail Modal */}
      {selectedStat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">Metric Verification</span>
              </div>
              <button 
                onClick={() => setSelectedStat(null)}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                aria-label="Close metric modal"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
            
            <div className="py-6">
              <div className="text-5xl font-black text-[#1a365d] tabular-nums mb-1 font-mono">
                {selectedStat.value}
              </div>
              <div className="text-lg font-bold text-slate-900 mb-1">
                {selectedStat.label} · {selectedStat.sublabel}
              </div>
              <div className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded mb-4">
                Trend: {selectedStat.trend}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {selectedStat.description}
              </p>
              <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-500 border border-slate-100">
                Audited via monthly roll call across 740 district units and verified through voter card authentication.
              </div>
            </div>

            <div className="flex gap-2">
              <Button 
                variant="primary" 
                size="md" 
                className="w-full"
                onClick={() => {
                  setSelectedStat(null);
                  handleOpenJoin();
                }}
              >
                Join This Cadre
              </Button>
              <Button 
                variant="outline" 
                size="md" 
                onClick={() => setSelectedStat(null)}
              >
                Dismiss
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Watch VJP Live Modal */}
      {isLiveStreamOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 text-white rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-700">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-600 text-white text-xs font-bold uppercase tracking-wider">
                  <FaBroadcastTower className="w-3 h-3 animate-pulse" /> LIVE
                </span>
                <span className="text-sm font-semibold">VJP National Assembly & Townhall Feed</span>
              </div>
              <button 
                onClick={() => setIsLiveStreamOpen(false)}
                className="text-slate-400 hover:text-white p-1 cursor-pointer"
                aria-label="Close livestream modal"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
            
            {/* Live Video Feed Simulator */}
            <div className="aspect-video bg-black relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="relative text-center p-6 z-10">
                <div className="w-16 h-16 rounded-full bg-red-600/20 text-red-500 border border-red-500/30 flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <FaBroadcastTower className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Live Transmission: Civic Dialogue 2026</h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Keynote Address by National Convenor on Agricultural Fair Price Mechanisms and Public Welfare Audits.
                </p>
                <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-300">
                  <span className="tabular-nums">🔴 48,219 viewers</span>
                  <span>·</span>
                  <span>1080p HD Stream</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-950 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Active commentary channel available on Official VJP App</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setIsLiveStreamOpen(false)}
                className="border-slate-700 text-white hover:bg-slate-800"
              >
                Close Stream
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Join the Movement Modal */}
      {isJoinModalVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {t('joinModal.title')}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {t('joinModal.subtitle')}
                </p>
              </div>
              <button 
                onClick={handleCloseJoin}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                aria-label="Close join modal"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <FaCheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Welcome to Vijaya Janata Party!</h4>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your membership request for the <strong>{formData.state}</strong> unit has been recorded. Our district convenor will contact you at <strong>{formData.phone}</strong>.
                </p>
                <Button 
                  variant="primary" 
                  size="md" 
                  onClick={handleCloseJoin}
                  className="mt-4"
                >
                  Return to Portal
                </Button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="py-4 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="citizen@domain.org"
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      State / UT
                    </label>
                    <select 
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a365d] bg-white"
                    >
                      <option value="Delhi">Delhi</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Other">Other State/UT</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Area of Contribution
                    </label>
                    <select 
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a365d] bg-white"
                    >
                      <option value="Grassroots Organizing">Grassroots Organizing</option>
                      <option value="Policy Research">Policy Research</option>
                      <option value="Legal & Auditing Aid">Legal & Auditing Aid</option>
                      <option value="Youth & Student Wing">Youth & Student Wing</option>
                      <option value="Digital Media">Digital Media</option>
                    </select>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 pt-2">
                  By submitting, you pledge adherence to the constitutional principles of non-violence, transparency, and secular democracy.
                </div>

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full justify-center"
                  >
                    Complete Enrollment
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
