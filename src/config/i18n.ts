import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        brand: 'Vijaya Janata Party',
        home: 'Home',
        statistics: 'Statistics',
        manifesto: 'Manifesto',
        initiatives: 'Initiatives',
        mediaHub: 'Media Hub',
        contact: 'Contact Us',
        join: 'Join Movement'
      },
      hero: {
        title: 'Building a Progressive, Accountable Republic',
        subtitle: 'A grassroots political movement dedicated to transparent governance, youth employment, universal healthcare, and citizen empowerment across every constituency.',
        joinCta: 'Join the Movement',
        watchLive: 'Watch VJP Live'
      },
      stats: {
        sectionTitle: 'Our National Footprint',
        sectionSubtitle: 'Audited numbers from verified grassroots district units and active volunteer chapters.',
        viewBreakdown: 'Explore Regional Breakdown',
        members: 'Members',
        volunteers: 'Volunteers',
        states: 'States',
        growth: 'Growth'
      },
      initiatives: {
        title: 'Core Commitments for 2026',
        subtitle: 'Practical policy architectures built with citizen working groups, not backroom committees.'
      },
      joinModal: {
        title: 'Enroll as a VJP Member / Volunteer',
        subtitle: 'Contribute your skills, time, or voice to transform Indian democratic representation.'
      }
    }
  },
  hi: {
    translation: {
      nav: {
        brand: 'विजया जनता पार्टी',
        home: 'मुख्य पृष्ठ',
        statistics: 'आंकड़े',
        manifesto: 'संकल्प पत्र',
        initiatives: 'पहल व कार्य',
        mediaHub: 'मीडिया हब',
        contact: 'संपर्क',
        join: 'आंदोलन से जुड़ें'
      },
      hero: {
        title: 'एक प्रगतिशील एवं जवाबदेह राष्ट्र का निर्माण',
        subtitle: 'पारदर्शी शासन, युवा रोजगार, सार्वभौमिक स्वास्थ्य और नागरिक सशक्तिकरण के लिए हर निर्वाचन क्षेत्र में समर्पित एक जन आंदोलन।',
        joinCta: 'आंदोलन से जुड़ें',
        watchLive: 'VJP लाइव देखें'
      },
      stats: {
        sectionTitle: 'हमारा राष्ट्रीय प्रभाव',
        sectionSubtitle: 'सत्यापित जमीनी जिला इकाइयों और सक्रिय स्वयंसेवक अध्यायों के प्रमाणित आंकड़े।',
        viewBreakdown: 'क्षेत्रीय विवरण देखें',
        members: 'सदस्य',
        volunteers: 'स्वयंसेवक',
        states: 'राज्य',
        growth: 'वृद्धि'
      },
      initiatives: {
        title: '2026 के लिए हमारे मुख्य संकल्प',
        subtitle: 'बंद कमरों में नहीं, बल्कि सीधे नागरिक कार्य समूहों के साथ मिलकर तैयार की गई नीति।'
      },
      joinModal: {
        title: 'VJP सदस्य / स्वयंसेवक के रूप में जुड़ें',
        subtitle: 'भारतीय लोकतांत्रिक व्यवस्था को सशक्त बनाने के लिए अपनी प्रतिभा और समय का योगदान दें।'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
