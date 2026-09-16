import { Persona, KeywordItem, SocialPillar, RoadmapPhase } from '../types';

export const PERSONAS: Persona[] = [
  {
    id: 'eleanor',
    name: 'Eleanor Vance',
    role: 'University Lecturer & Essayist',
    segment: 'The Enthusiast',
    age: '32–45 Years',
    badgeColor: 'bg-primary text-secondary-fixed',
    readingInterests: 'Booker Prize longlists, European translated prose, vintage leatherbound classics, literary journals.',
    purchasingBehavior: 'Purchases 3–4 premium hardcovers monthly. Prioritizes jacket aesthetic and tactile paper weight over discount retail. Attends evening author salons.',
    channels: ['Email Dispatch', 'Instagram', 'Literary Podcasts'],
    ltv: '$980 / yr',
    quote: '“There is an irreplaceable romance in running a fingertip along a row of foil-stamped spines while rain taps on cobblestone.”',
    favoriteGenre: 'Literary Fiction & Historical Memoir',
    typicalBasket: ['New Booker longlist hardcover ($32)', 'Artisanal loose-leaf Darjeeling tin ($14)', 'Embossed leather bookmark ($9)']
  },
  {
    id: 'liam',
    name: 'Liam Chen',
    role: 'Humanities Graduate Researcher',
    segment: 'The Scholar',
    age: '18–26 Years',
    badgeColor: 'bg-secondary text-surface',
    readingInterests: 'Continental philosophy, historical sociology, affordable trade paperbacks, second-hand poetry chapbooks.',
    purchasingBehavior: 'High volume, price conscious. Driven by loyalty point redemptions, student discounts, and semester-opening course pack bundles.',
    channels: ['WhatsApp Alerts', 'TikTok / Reels', 'Google Maps'],
    ltv: '$540 / yr',
    quote: '“PageTurner has the rare out-of-print philosophical texts that major chains never bother keeping in stock.”',
    favoriteGenre: 'Philosophy, Critical Theory & Poetry',
    typicalBasket: ['2x Used Penguin Classics ($16)', 'Thesis reading syllabus paperback ($22)', 'Drip coffee at the reading bar ($3.50)']
  },
  {
    id: 'sarah-toby',
    name: 'Sarah & Toby Jenkins',
    role: 'Marketing Director & Young Family',
    segment: 'The Family',
    age: '30–42 Years',
    badgeColor: 'bg-tertiary-container text-on-tertiary-container',
    readingInterests: 'Illustrated children’s fiction, early STEAM discovery books, bedtime fables, mindful parenting essays.',
    purchasingBehavior: 'Frequent basket-builders (canvas totes, wooden puzzles, artisan bookmarks). Relies heavily on Saturday morning Story Hour for screen-free outings.',
    channels: ['Facebook Groups', 'Meta Feed Ads', 'Parent Word-of-Mouth'],
    ltv: '$760 / yr',
    quote: '“Saturday Story Hour is our family anchor. The kids choose two books, and we grab tea before walking the canal.”',
    favoriteGenre: 'Children’s Illustrated & Nature Guides',
    typicalBasket: ['2x Hardcover illustrated picture books ($36)', 'Illustrated animal flashcard set ($15)', 'Pastry & herbal tea ($12)']
  }
];

export const KEYWORDS: KeywordItem[] = [
  { id: '1', query: '"independent bookstore near me"', volume: 4400, kd: 28, intent: 'High Footfall Intent', category: 'footfall' },
  { id: '2', query: '"rare and first edition books [City]"', volume: 850, kd: 14, intent: 'Niche High-AOV', category: 'collector' },
  { id: '3', query: '"bookstore with cafe reading nook"', volume: 1900, kd: 22, intent: 'Experiential', category: 'experience' },
  { id: '4', query: '"local author book signings this weekend"', volume: 720, kd: 18, intent: 'Event Driver', category: 'events' },
  { id: '5', query: '"children\'s story hour Saturday morning"', volume: 1100, kd: 15, intent: 'Family Audience', category: 'events' },
  { id: '6', query: '"used college philosophy textbooks"', volume: 2100, kd: 35, intent: 'Student Budget', category: 'students' },
  { id: '7', query: '"blind date with a book gift pack"', volume: 1600, kd: 20, intent: 'Social Viral', category: 'experience' },
  { id: '8', query: '"buy books local support indie bookstore"', volume: 950, kd: 19, intent: 'Conscious Shopper', category: 'footfall' },
  { id: '9', query: '"artisan bookmark and bookish gifts"', volume: 1400, kd: 26, intent: 'AOV Expansion', category: 'collector' },
  { id: '10', query: '"signed editions literary fiction"', volume: 600, kd: 12, intent: 'Collector Prestige', category: 'collector' }
];

export const SOCIAL_PILLARS: SocialPillar[] = [
  {
    platform: 'Instagram',
    handle: '@PageTurnerBooks',
    badge: 'Visual Storytelling',
    schedule: '5 Posts / Week + Daily Stories',
    kpiHighlight: '+180% Engagement',
    kpiDetail: 'Target 12,000 engaged local followers with 4.2% save rate',
    contentPillars: [
      'Aesthetic “Shelfie” photography bathed in morning cafe sunlight',
      '“Staff Pick of the Week” video pairings with recommended teas',
      'Live unboxing of small-press indie deliveries & foil hardcovers',
      'Patron UGC reposts tagged with #ReadPageTurner community tag'
    ],
    previewContent: {
      title: 'Staff Pick Spotlight: The Shadow of the Wind',
      caption: '“There are few things as pure as the smell of aged paper on an autumn afternoon.” Julian from our second-floor fiction floor reviews Carlos Ruiz Zafón’s masterpiece. Available on the front table with our spiced plum black tea. 📖☕ #Bookstagram #IndieBookseller #HistoricMillQuarter',
      timestamp: '2 hours ago',
      metrics: '842 likes • 64 comments • 118 saves'
    }
  },
  {
    platform: 'Facebook',
    handle: 'PageTurner Book Club & Events',
    badge: 'Community Retention',
    schedule: '3 Long-Form Posts + Event RSVPs',
    kpiHighlight: '450+ Active Members',
    kpiDetail: '28% conversion from event RSVP to in-store purchase',
    contentPillars: [
      'Monthly Book Club chapter discussion threads and moderation',
      'Event page RSVPs for poetry slams, signings & acoustic sessions',
      'Historic Mill Quarter photo retrospectives and archival prints',
      'Patron polls to democratically dictate next season’s stock'
    ],
    previewContent: {
      title: 'October Book Club: Discussing Claire Keegan’s Small Things Like These',
      caption: 'Join 35 fellow bibliophiles this Thursday at 7:00 PM by the hearth. We’ll be discussing moral bravery, quiet prose, and Irish history. Complimentary mulled cider will be poured for all attendees who RSVP through the event link.',
      timestamp: 'Yesterday at 3:15 PM',
      metrics: '78 going • 142 interested • 32 comments'
    }
  },
  {
    platform: 'WhatsApp',
    handle: 'The Reader\'s Circle VIP Broadcast',
    badge: 'High-Intent Conversational',
    schedule: '1 Curated Broadcast / Week (Strict No-Spam)',
    kpiHighlight: '94% Open Rate',
    kpiDetail: '32% direct-to-till sales conversion rate within 48 hours',
    contentPillars: [
      '24-hr advance reserve alerts for signed first editions & rare finds',
      'Intimate front-row seats for visiting author intimate salons',
      'One-on-one personal concierge recommendations via text',
      'Surprise flash weekend bundles with complimentary bakery treats'
    ],
    previewContent: {
      title: 'VIP Alert: 12 Signed Copies of Kazuo Ishiguro Arrived',
      caption: 'Good morning Reader’s Circle. We just received 12 author-signed copies of Kazuo Ishiguro’s latest collection. VIP members have first claim until 4 PM today. Reply "RESERVE" with your name to hold yours behind the till.',
      timestamp: 'Today at 9:02 AM',
      metrics: 'Delivered to 520 VIP patrons • 94% open • 11 claimed in 1 hr'
    }
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: 'Phase 1',
    months: 'Months 1–2',
    title: 'Digital Foundation & Hyper-Local SEO',
    focus: 'Capture existing high-intent search traffic and optimize digital touchpoints.',
    milestones: [
      'Complete Google Business Profile audit (NAP consistency, photos, 360° virtual tour)',
      'Deploy BookStore JSON-LD schema with live stock availability markup',
      'Launch "The PageTurner Dispatch" weekly newsletter and in-store QR signup cards',
      'Roll out the WhatsApp VIP Reader\'s Circle with an exclusive welcome bookmark gift'
    ],
    expectedGain: '+25% organic map visits, 600 initial email subscribers'
  },
  {
    phase: 'Phase 2',
    months: 'Months 3–4',
    title: 'Paid Acquisition & Community Amplification',
    focus: 'Drive targeted footfall through Meta hyper-local ads and experiential events.',
    milestones: [
      'Launch hyper-local Meta ad campaign ($1,200/mo spend, 5-mile radius, voucher incentive)',
      'Host bi-weekly Thursday Author Salons & Saturday Morning Children\'s Story Hour',
      'Implement "Blind Date with a Book" display table with viral unboxing social prompts',
      'Establish student discount partnership with the nearby University Humanities faculty'
    ],
    expectedGain: '+35% in-store foot traffic, 4.8x projected ROAS on paid campaigns'
  },
  {
    phase: 'Phase 3',
    months: 'Months 5–6',
    title: 'Loyalty Engine & Scaled Revenue Diversification',
    focus: 'Maximize customer lifetime value through recurring subscriptions and corporate gifting.',
    milestones: [
      'Launch quarterly "Quarterly Folio" curated subscription book box',
      'Roll out the digital Reader\'s Guild loyalty card with tier-based rewards',
      'Partner with local boutique cafes and wine bars for cross-promotional reading bundles',
      'Publish inaugural Holiday Gifting Catalog featuring rare bindings & curated care packs'
    ],
    expectedGain: '+45% overall revenue uplift, 42% repeat patron rate'
  }
];

export const BUDGET_ALLOCATION = [
  { category: 'Hyper-Local Meta Ads', percentage: 35, amount: 420, description: 'Targeted feed ads driving voucher claims & in-store visits' },
  { category: 'SEO, Schema & Editorial Content', percentage: 25, amount: 300, description: 'Weekly blog dispatch, local citations, schema maintenance' },
  { category: 'Events & Story Hour Materials', percentage: 20, amount: 240, description: 'Author hospitality, tea bar supplies, children’s activity crafts' },
  { category: 'Email & WhatsApp VIP Retention', percentage: 15, amount: 180, description: 'CRM automation software, printed stationery & voucher collateral' },
  { category: 'Micro-Influencer & UGC Seeding', percentage: 5, amount: 60, description: 'Complimentary review copies gifted to local bookstagrammers' }
];

export const CASE_STUDY_EXECUTIVE_BRIEF = {
  title: 'PageTurner Books: Independent Bookseller Digital Revival',
  subtitle: 'An Applied Marketing Strategy & Commercial Turnaround Plan',
  institution: 'Department of Retail Strategy & Applied Marketing Studies',
  author: 'Academic Strategy Working Group • Case Study No. 1998-PT',
  abstract: `This applied case study develops a comprehensive omni-channel marketing strategy for PageTurner Books, a cherished independent bookstore established in 1998 in the Historic Mill District. Despite a high-affinity brand identity and devoted local patron base, the retailer faces stagnating discovery from younger demographics, heightened competition from algorithmic e-commerce conglomerates, and an under-monetized customer lifetime value (LTV).

By formulating a synchronized framework uniting hyper-local search engine optimization (SEO), community-first social content pillars, high-converting paid social acquisition with in-store redemption triggers, and an artisanal weekly editorial newsletter, this strategy projects a +45% overall revenue uplift and a 4.8x Return on Ad Spend (ROAS) over a 6-month execution horizon.`,
  coreObjectives: [
    'Expand qualified local in-store footfall by 42% through targeted 5-mile geo-fencing and GBP local 3-pack dominance.',
    'Build a durable, zero-party retention audience of 2,500+ active email subscribers and 500+ WhatsApp VIP patrons.',
    'Increase Average Order Value (AOV) from $26.40 to $38.20 through curated gift packaging, artisanal tea pairings, and cross-merchandising.',
    'Establish PageTurner Books as the premier cultural and literary epicenter for the greater metropolitan district.'
  ]
};
