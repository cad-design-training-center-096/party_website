import React, { useState } from 'react';
import { 
  FaRegClock, 
  FaShareAlt, 
  FaPlay, 
  FaTimes, 
  FaFileAlt, 
  FaMicrophone, 
  FaRegNewspaper, 
  FaBroadcastTower, 
  FaCheck, 
  FaDownload, 
  FaFacebookF, 
  FaYoutube 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

interface ArticleItem {
  id: string;
  title: string;
  date: string;
  category: 'press' | 'speech' | 'article';
  excerpt: string;
  content: string;
  author?: string;
}

export const PartyMediaBoard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'press' | 'speech' | 'article'>('press');
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);
  const [showAppModal, setShowAppModal] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isLivePlaying, setIsLivePlaying] = useState(false);

  const articlesData: Record<'press' | 'speech' | 'article', ArticleItem[]> = {
    press: [
      {
        id: 'pr-1',
        title: 'Press statement by Union Minister Shri Shivraj Singh Chouhan',
        date: 'Saturday, October 3, 2026',
        category: 'press',
        excerpt: 'Decisive policy interventions for rural employment generation and equitable agricultural credit nationwide.',
        content: `Union Minister Shri Shivraj Singh Chouhan addressed the media at the party central headquarters today, highlighting key welfare reforms rolled out for farmers and rural youth. He reiterated the party's unwavering dedication to transparent governance and decentralized agrarian support.

Key Highlights:
• Expansion of the direct benefit transfer mechanism to eliminate intermediary leakages.
• Dedicated grievance cell at every district headquarters to monitor village infrastructure projects.
• Enhanced allocations for soil health management and automated drip irrigation.

The Minister emphasized that citizen feedback collected during the national Jan Samvad drives remains the foundation for all upcoming legislative drafts.`
      },
      {
        id: 'pr-2',
        title: 'Press Release by BJYM',
        date: 'Saturday, October 3, 2026',
        category: 'press',
        excerpt: 'Bharatiya Janata Yuva Morcha launches nationwide campus internship and public policy mentorship initiative.',
        content: `The Bharatiya Janata Yuva Morcha (BJYM) announced the rollout of its flagship campus leadership fellowship across 400 universities. 

Under this initiative:
• 10,000 university students will receive direct training in municipal audits and legislative drafting.
• Young fellows will be paired with Members of Parliament to understand constituency management.
• Merit-based stipends will ensure equal opportunity for students from rural backgrounds.`
      },
      {
        id: 'pr-3',
        title: 'Press Release on National Executive Resolution on Economic Growth & MSMEs',
        date: 'Friday, October 2, 2026',
        category: 'press',
        excerpt: 'Working committee ratifies resolution commending indigenous manufacturing milestones and credit guarantees.',
        content: `The National Executive concluded its two-day consultative conclave with a resolution lauding the record growth in micro and small enterprise credit guarantees and export volumes across tier-2 cities.`
      },
      {
        id: 'pr-4',
        title: 'Press Release by Mahila Morcha on Women Self-Help Enterprises',
        date: 'Thursday, October 1, 2026',
        category: 'press',
        excerpt: 'Over 2.5 million women entrepreneurs supported with collateral-free micro-finance linkages.',
        content: `The Mahila Morcha celebrated the graduation of the third cohort of rural women entrepreneurs trained in regional food processing and digital payments.`
      }
    ],
    speech: [
      {
        id: 'sp-1',
        title: "PM Shri Narendra Modi's address at the National Governance Conclave",
        date: 'Saturday, October 3, 2026',
        category: 'speech',
        excerpt: 'Emphasizing the philosophy of Sabka Saath, Sabka Vikas through digital empowerment and last-mile connectivity.',
        content: `Prime Minister Shri Narendra Modi delivered a landmark address outlining the 2047 roadmap for self-reliant infrastructure, skill development, and transparent public services.

"Democracy strengthens when citizen grievances are heard with urgency and resolved with accountability," the Prime Minister stated.`
      },
      {
        id: 'sp-2',
        title: 'BJP National President Shri J.P. Nadda addresses the State Working Committee',
        date: 'Friday, October 2, 2026',
        category: 'speech',
        excerpt: 'Call to grassroots karyakartas to champion door-to-door welfare communication and social harmony.',
        content: `Party National President Shri J.P. Nadda urged all district unit leaders to maintain daily contact with village communities and prioritize service to the underprivileged.`
      }
    ],
    article: [
      {
        id: 'ar-1',
        title: 'Transforming Indian Logistics: The Multi-Modal Infrastructure Paradigm',
        date: 'Saturday, October 3, 2026',
        author: 'Editorial Board',
        category: 'article',
        excerpt: 'How modern dedicated freight corridors and highway networks are reducing turnaround times for Indian manufacturing.',
        content: `An in-depth analytical perspective on how unified logistics policies and highway modernization have cut interstate freight delays by over 40% in the last four years.`
      },
      {
        id: 'ar-2',
        title: 'Citizen-Centric Digital Public Infrastructure: A Global Model',
        date: 'Wednesday, September 30, 2026',
        author: 'Policy Research Cell',
        category: 'article',
        excerpt: 'Direct benefit transfers, unified payments, and public registries demonstrating governance integrity.',
        content: `India’s open protocol digital stack has empowered millions of ordinary citizens to access credit, subsidies, and healthcare without bureaucratic friction.`
      }
    ]
  };

  const handleShare = (title: string, id: string) => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const currentArticles = articlesData[activeTab];

  const socialVideos = [
    {
      id: 'v1',
      title: "PM Shri Narendra Modi's remarks at the 6th Eastern Economic Forum in Vladivostok, Russia",
      views: '1.2M views',
      duration: '24:18',
      speaker: 'PM Shri Narendra Modi',
      thumbnailBg: 'from-amber-700 to-slate-900',
      description: 'Prime Minister addresses the plenary session emphasizing multilateral trade corridors, clean energy partnership, and resilient global supply chains.'
    },
    {
      id: 'v2',
      title: 'PM Modi addresses inaugural conclave of Shikshak Parv, launches key initiatives in education sector',
      views: '840K views',
      duration: '38:05',
      speaker: 'PM Shri Narendra Modi',
      thumbnailBg: 'from-blue-900 to-slate-900',
      description: 'Launching five pathbreaking educational programs under the National Education Policy to foster regional language instruction and digital classrooms.'
    },
    {
      id: 'v3',
      title: 'BJP National President Shri J.P. Nadda addresses the State Working Committee',
      views: '490K views',
      duration: '42:10',
      speaker: 'Shri J.P. Nadda',
      thumbnailBg: 'from-orange-800 to-slate-900',
      description: 'Guiding party workers on reaching every household with welfare scorecards and grievance support kiosks.'
    }
  ];

  return (
    <section id="digital-hub" className="relative bg-[#0d1b2a] text-slate-800 pt-16 pb-20 border-t border-slate-800 overflow-hidden">
      {/* Decorative Tricolor Top Accent */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-100 to-emerald-600 shadow-sm" />

      {/* Subtle radial background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-700/80 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-900/60 border border-blue-400/30 text-[11px] font-bold text-amber-400 tracking-wider uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Official Communication Center
            </div>
            <h2 className="text-white text-2xl sm:text-3xl font-black tracking-tight">
              Party Information & Digital Media Hub
            </h2>
          </div>
          <div className="text-xs text-slate-400 font-mono flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Live Synced
            </span>
            <span>·</span>
            <span>PRESS RELEASES & BROADCASTS</span>
          </div>
        </div>

        {/* 3-Column Responsive Grid matching user's exact screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* COLUMN 1: PRESS RELEASE / SPEECH / ARTICLE */}
          <div className="bg-white rounded-md shadow-lg border border-slate-300 overflow-hidden flex flex-col h-[580px]">
            {/* Top Tabs */}
            <div className="grid grid-cols-3 text-center text-xs font-bold uppercase select-none">
              <button
                onClick={() => setActiveTab('press')}
                className={`py-3.5 relative transition-colors cursor-pointer ${
                  activeTab === 'press'
                    ? 'bg-[#0c2340] text-white shadow-inner font-extrabold'
                    : 'bg-[#153f70] text-slate-200 hover:bg-[#1c4d87]'
                }`}
              >
                PRESS RELEASE
                {activeTab === 'press' && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#0c2340] translate-y-full z-10"></span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('speech')}
                className={`py-3.5 relative transition-colors cursor-pointer ${
                  activeTab === 'speech'
                    ? 'bg-[#0c2340] text-white shadow-inner font-extrabold'
                    : 'bg-[#153f70] text-slate-200 hover:bg-[#1c4d87]'
                }`}
              >
                SPEECH
                {activeTab === 'speech' && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#0c2340] translate-y-full z-10"></span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('article')}
                className={`py-3.5 relative transition-colors cursor-pointer ${
                  activeTab === 'article'
                    ? 'bg-[#0c2340] text-white shadow-inner font-extrabold'
                    : 'bg-[#153f70] text-slate-200 hover:bg-[#1c4d87]'
                }`}
              >
                ARTICLE
                {activeTab === 'article' && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#0c2340] translate-y-full z-10"></span>
                )}
              </button>
            </div>

            {/* Orange/Saffron Visual Header Banner matching screenshot */}
            <div className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-6 py-6 text-white flex items-center justify-between shadow-sm overflow-hidden shrink-0">
              {/* Subtle floral watermark effect */}
              <div className="absolute right-2 -bottom-6 opacity-20 pointer-events-none">
                <svg className="w-32 h-32 fill-current" viewBox="0 0 100 100">
                  <path d="M50 0 C60 25 75 40 100 50 C75 60 60 75 50 100 C40 75 25 60 0 50 C25 40 40 25 50 0 Z" />
                </svg>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-white drop-shadow-sm flex items-center gap-3">
                  <span>
                    {activeTab === 'press' && 'PRESS RELEASE'}
                    {activeTab === 'speech' && 'SPEECHES'}
                    {activeTab === 'article' && 'ARTICLES & ESSAYS'}
                  </span>
                </div>
                <div className="text-[11px] text-amber-100 font-medium tracking-wide mt-0.5">
                  Official Communication Directorate
                </div>
              </div>

              <div className="w-12 h-12 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0 backdrop-blur-xs">
                {activeTab === 'press' && <FaFileAlt className="w-6 h-6" />}
                {activeTab === 'speech' && <FaMicrophone className="w-6 h-6" />}
                {activeTab === 'article' && <FaRegNewspaper className="w-6 h-6" />}
              </div>
            </div>

            {/* Scrollable list of items */}
            <div className="divide-y divide-slate-200 overflow-y-auto flex-1 bg-white p-2">
              {currentArticles.map((item) => (
                <div key={item.id} className="p-4 hover:bg-slate-50/80 transition-colors">
                  <h3 
                    onClick={() => setSelectedArticle(item)}
                    className="text-sm font-bold text-slate-900 leading-snug hover:text-[#0c2340] cursor-pointer mb-2 transition-colors line-clamp-2"
                  >
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                    <FaRegClock className="w-3 h-3 text-slate-400" />
                    <span>{item.date}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setSelectedArticle(item)}
                      className="text-xs font-bold text-red-700 hover:text-red-900 flex items-center gap-1 cursor-pointer"
                    >
                      Read more »
                    </button>

                    {/* Social share icons matching screenshot */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleShare(item.title, item.id)}
                        className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold hover:bg-blue-700 transition cursor-pointer"
                        title="Share on Facebook"
                        aria-label="Share on Facebook"
                      >
                        <FaFacebookF className="w-2.5 h-2.5" />
                      </button>
                      <button
                        onClick={() => handleShare(item.title, item.id)}
                        className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-[10px] font-bold hover:bg-sky-600 transition cursor-pointer"
                        title="Share on Twitter"
                        aria-label="Share on Twitter"
                      >
                        <FaXTwitter className="w-2.5 h-2.5" />
                      </button>
                      <button
                        onClick={() => handleShare(item.title, item.id)}
                        className="w-6 h-6 rounded-full bg-slate-600 text-white flex items-center justify-center hover:bg-slate-700 transition cursor-pointer"
                        title="Copy Article Link"
                        aria-label="Copy Article Link"
                      >
                        {copiedId === item.id ? (
                          <FaCheck className="w-2.5 h-2.5 text-emerald-300" />
                        ) : (
                          <FaShareAlt className="w-2.5 h-2.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 2: UPCOMING EVENTS (APP DOWNLOAD) + BJP LIVE */}
          <div className="flex flex-col gap-6 h-[580px]">
            
            {/* Box 1: UPCOMING EVENTS (App Download Graphic) */}
            <div className="bg-white rounded-md shadow-lg border border-slate-300 overflow-hidden flex flex-col flex-1">
              <div className="bg-[#0c2340] px-4 py-3 text-white text-xs font-bold tracking-wider uppercase flex items-center justify-between">
                <span>UPCOMING EVENTS</span>
                <span className="text-[10px] text-amber-400 font-normal">Official App</span>
              </div>

              {/* Graphic Banner matching the exact visual in screenshot */}
              <div className="p-4 bg-gradient-to-r from-amber-50 via-white to-amber-50 flex items-center justify-between gap-3 relative overflow-hidden flex-1">
                <div className="space-y-3 z-10">
                  <div className="leading-tight">
                    <div className="text-xs font-black uppercase tracking-wider text-orange-600">
                      BHARATIYA JANATA PARTY
                    </div>
                    <div className="text-xl font-black text-slate-900">
                      DOWNLOAD
                    </div>
                    <div className="text-sm font-medium text-slate-600">
                      The <span className="font-bold text-orange-600">App</span> Now
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="px-2 py-1 bg-slate-900 text-white rounded text-[9px] flex items-center gap-1 font-mono">
                      <span>▶</span> Google Play
                    </div>
                    <div className="px-2 py-1 bg-slate-900 text-white rounded text-[9px] flex items-center gap-1 font-mono">
                      <span></span> App Store
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => setShowAppModal(true)}
                      className="px-5 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-black uppercase rounded shadow-md tracking-wider transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      Click Here
                    </button>
                  </div>
                </div>

                {/* Smartphone Mockup */}
                <div className="relative w-28 sm:w-32 shrink-0">
                  <div className="bg-slate-900 p-1.5 rounded-2xl shadow-xl border-2 border-slate-700">
                    <div className="w-full aspect-[9/16] bg-gradient-to-b from-orange-500 via-white to-green-600 rounded-xl p-2 flex flex-col justify-between items-center text-center">
                      <div className="w-5 h-1 bg-slate-800 rounded-full mx-auto mb-1"></div>
                      
                      {/* Lotus / Party Emblem */}
                      <div className="my-auto">
                        <div className="text-2xl text-slate-900">🪷</div>
                        <div className="text-[7px] font-black text-slate-900 leading-tight uppercase mt-1">
                          भारतीय जनता पार्टी
                        </div>
                        <div className="text-[6px] font-bold text-slate-700 uppercase">
                          BHARATIYA JANATA PARTY
                        </div>
                      </div>

                      <div className="text-[5.5px] font-extrabold text-slate-800 bg-white/90 px-1 py-0.5 rounded shadow-xs uppercase leading-tight">
                        Welcome to the World's Largest Political Party
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2: BJP LIVE */}
            <div className="bg-white rounded-md shadow-lg border border-slate-300 overflow-hidden flex flex-col flex-1">
              <div className="bg-[#0c2340] px-4 py-3 text-white text-xs font-bold tracking-wider uppercase flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  BJP LIVE
                </span>
                <span className="text-[10px] text-red-400 font-mono">1080p HD</span>
              </div>

              {/* YouTube Screen Simulation matching screenshot */}
              <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-[#101726] text-white flex-1 p-4 flex flex-col justify-center items-center text-center overflow-hidden group">
                <div className="absolute inset-0 bg-radial from-red-950/20 via-transparent to-transparent pointer-events-none" />

                {isLivePlaying ? (
                  <div className="w-full h-full flex flex-col items-center justify-center p-2 text-white">
                    <div className="flex items-center gap-2 mb-2 text-red-400 text-xs font-bold uppercase tracking-wider">
                      <FaBroadcastTower className="w-3.5 h-3.5 animate-pulse" /> Live Transmission Active
                    </div>
                    <div className="text-xs text-slate-300 font-medium mb-3">
                      Addressing National Workers Conclave on Digital Governance
                    </div>
                    <button
                      onClick={() => setIsLivePlaying(false)}
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-bold transition cursor-pointer"
                    >
                      Pause Feed
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-center gap-1.5 text-white text-sm font-bold mb-2">
                      <div className="w-5 h-3.5 bg-red-600 rounded flex items-center justify-center">
                        <FaPlay className="w-2 h-2 text-white" />
                      </div>
                      <span className="tracking-tight">YouTube</span>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-1">
                      Official Broadcast Feed
                    </h4>
                    <p className="text-[11px] text-slate-400 max-w-xs mb-3">
                      Click below to watch the ongoing national address and press briefings.
                    </p>

                    <button
                      onClick={() => setIsLivePlaying(true)}
                      className="px-4 py-1.5 bg-white text-slate-900 hover:bg-slate-100 rounded-md text-xs font-bold shadow-md transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <FaPlay className="w-2.5 h-2.5" /> Start Live Stream
                    </button>
                  </>
                )}
              </div>
            </div>

          </div>

          {/* COLUMN 3: SOCIAL STREAM */}
          <div className="bg-white rounded-md shadow-lg border border-slate-300 overflow-hidden flex flex-col h-[580px]">
            {/* Header */}
            <div className="bg-[#0c2340] px-4 py-3 text-white text-xs font-bold tracking-wider uppercase flex items-center justify-between">
              <span>SOCIAL STREAM</span>
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                  <FaFacebookF className="w-2.5 h-2.5" />
                </span>
                <span className="w-5 h-5 rounded bg-red-600 text-white flex items-center justify-center text-[10px]">
                  <FaYoutube className="w-2.5 h-2.5" />
                </span>
                <span className="w-5 h-5 rounded bg-sky-500 text-white flex items-center justify-center text-[10px]">
                  <FaXTwitter className="w-2.5 h-2.5" />
                </span>
              </div>
            </div>

            {/* Scrollable list of video cards */}
            <div className="divide-y divide-slate-200 overflow-y-auto flex-1 p-2 bg-white space-y-3">
              {socialVideos.map((video) => (
                <div key={video.id} className="p-2 pt-3 hover:bg-slate-50 transition rounded-md group">
                  {/* YouTube Player Thumbnail Mockup */}
                  <div 
                    onClick={() => setActiveVideoModal(video.id)}
                    className={`relative aspect-[16/9] rounded-md overflow-hidden bg-gradient-to-r ${video.thumbnailBg} cursor-pointer shadow-sm border border-slate-200`}
                  >
                    {/* Top Channel Badge */}
                    <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-white text-[10px] font-medium z-10">
                      <div className="w-3.5 h-3.5 rounded-full bg-orange-500 text-[8px] flex items-center justify-center">
                        🪷
                      </div>
                      <span className="truncate max-w-[140px]">Bharatiya Janata Party</span>
                    </div>

                    {/* Red YouTube Play Button Centered */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-8 rounded-lg bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition duration-200">
                        <FaPlay className="w-3.5 h-3.5 ml-0.5" />
                      </div>
                    </div>

                    {/* Bottom Watch on YouTube button */}
                    <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-xs text-white text-[9px] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                      <span>Watch on</span>
                      <span className="text-red-400 font-bold">YouTube</span>
                    </div>

                    <div className="absolute bottom-2 left-2 text-[9px] text-white/90 bg-black/60 px-1.5 py-0.5 rounded font-mono">
                      {video.duration}
                    </div>
                  </div>

                  {/* Title & Metadata */}
                  <div className="mt-2.5">
                    <h3 
                      onClick={() => setActiveVideoModal(video.id)}
                      className="text-xs font-bold text-slate-900 leading-snug hover:text-blue-900 cursor-pointer line-clamp-2"
                    >
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                      <span>{video.speaker}</span>
                      <span className="font-mono text-slate-400">{video.views}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Footer with 'See more' link */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-medium">Updated 10m ago</span>
              <button
                onClick={() => setActiveVideoModal(socialVideos[0].id)}
                className="text-xs font-bold text-red-700 hover:text-red-900 hover:underline cursor-pointer"
              >
                See more
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100 mb-4">
              <div>
                <span className="text-xs font-extrabold uppercase text-orange-600 tracking-wider">
                  {selectedArticle.category.toUpperCase()} · OFFICIAL DISPATCH
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {selectedArticle.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                  <FaRegClock className="w-3 h-3" />
                  <span>{selectedArticle.date}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                aria-label="Close article modal"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>

            <div className="prose prose-sm text-slate-700 whitespace-pre-line leading-relaxed text-sm">
              {selectedArticle.content}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => handleShare(selectedArticle.title, selectedArticle.id)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer"
              >
                <FaShareAlt className="w-3.5 h-3.5" />
                <span>{copiedId === selectedArticle.id ? 'Link Copied!' : 'Share Statement'}</span>
              </button>

              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-[#0c2340] text-white rounded-lg text-xs font-bold hover:bg-slate-800 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal Player */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 text-white rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-700">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <span className="text-sm font-semibold truncate pr-4">
                {socialVideos.find(v => v.id === activeVideoModal)?.title}
              </span>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="text-slate-400 hover:text-white p-1 cursor-pointer"
                aria-label="Close video player"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>

            <div className="aspect-video bg-black relative flex items-center justify-center">
              <div className="relative text-center p-6">
                <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <FaPlay className="w-6 h-6 text-white ml-0.5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {socialVideos.find(v => v.id === activeVideoModal)?.title}
                </h4>
                <p className="text-xs text-slate-400 max-w-lg mx-auto">
                  {socialVideos.find(v => v.id === activeVideoModal)?.description}
                </p>
                <div className="mt-4 flex items-center justify-center gap-3 text-xs text-slate-300 font-mono">
                  <span>🔴 Official BJP Digital Stream</span>
                  <span>·</span>
                  <span>Full HD Audio & Video</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-950 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
              <span>Recorded live from New Delhi Headquarters</span>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded text-xs font-medium cursor-pointer"
              >
                Close Player
              </button>
            </div>
          </div>
        </div>
      )}

      {/* App Download Modal */}
      {showAppModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl border border-slate-200 text-center">
            <div className="flex justify-end">
              <button
                onClick={() => setShowAppModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center mx-auto mb-4 text-3xl shadow-lg">
              🪷
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Official Party Mobile App
            </h3>
            <p className="text-xs text-slate-600 mb-6 max-w-xs mx-auto">
              Get real-time speech notifications, volunteer task coordination, digital membership card, and direct feedback channels.
            </p>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setCopiedId('app-android')}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg flex items-center justify-center gap-2 font-medium text-xs cursor-pointer transition-colors"
              >
                <FaDownload className="w-3.5 h-3.5 text-emerald-400" /> 
                <span>{copiedId === 'app-android' ? 'Download link sent to device!' : 'Download for Android (Google Play)'}</span>
              </button>
              <button
                type="button"
                onClick={() => setCopiedId('app-ios')}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg flex items-center justify-center gap-2 font-medium text-xs cursor-pointer transition-colors"
              >
                <FaDownload className="w-3.5 h-3.5 text-emerald-400" /> 
                <span>{copiedId === 'app-ios' ? 'Download link sent to device!' : 'Download for iOS (App Store)'}</span>
              </button>
            </div>

            <div className="mt-4 text-[11px] text-slate-400">
              Version 4.2 · Secure · Over 10M+ Downloads
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
