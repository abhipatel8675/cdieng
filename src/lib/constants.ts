import type { NavItem, Stat, Service, Value, ProcessStep, Differentiator, Office, ProjectCategory } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "/services" },
  {
    label: "About",
    href: "/cdi",
    children: [
      { label: "CDI", href: "/cdi" },
      { label: "Our Leadership", href: "/our-leadership" },
      { label: "Our Process", href: "/our-process" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "Commercial", href: "/projects/commercial" },
      { label: "Residential / ADU", href: "/projects/residential" },
      { label: "Cannabis", href: "/projects/cannabis" },
      { label: "Industrial", href: "/projects/industrial" },
      { label: "Photovoltaic", href: "/projects/photovoltaic" },
    ],
  },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export const STATS: Stat[] = [
  { value: 3000, suffix: "+", label: "Projects Completed" },
  { value: 120, suffix: "+", label: "Business Partners" },
  { value: 250, suffix: "+", label: "Cities Covered" },
];

export const SERVICES: Service[] = [
  {
    id: "mechanical",
    title: "Mechanical",
    description:
      "Enhancing comfort within buildings, particularly through efficient heating and cooling systems tailored to each project's unique requirements.",
    bullets: [
      "HVAC Design & Engineering",
      "Renovation & Replacement Systems",
      "LEED Project Design",
      "Chilled Water System Analysis",
      "Central Utility Plant Design",
      "Energy Compliance Calculations",
      "System Troubleshooting",
      "Title 24 Compliance",
    ],
    image: "/images/services-mechanical.jpg",
    icon: "thermometer",
  },
  {
    id: "electrical",
    title: "Electrical",
    description:
      "Powering devices and maintaining lighting with architectural lighting designs meticulously crafted to harmonize aesthetics with functionality.",
    bullets: [
      "Power Distribution Systems",
      "Architectural Lighting Design",
      "Electrical Load Calculations",
      "Energy Management Systems",
      "UPS & Generator Systems",
      "Arc Flash Analysis",
      "Protective Device Coordination",
      "Photovoltaic (Solar) Design",
    ],
    image: "/images/services-electrical.jpg",
    icon: "zap",
  },
  {
    id: "plumbing",
    title: "Plumbing",
    description:
      "Ensuring access to clean water and safe wastewater disposal is fundamental to human habitation, and our team delivers both with precision.",
    bullets: [
      "Hot & Cold Water Distribution",
      "Water Treatment Systems",
      "Sanitary & Vent Systems",
      "Grease Management",
      "Roof Drainage Design",
      "Natural Gas Piping",
      "Compressed Air Systems",
      "Backflow Prevention",
    ],
    image: "/images/services-plumbing.jpg",
    icon: "droplets",
  },
];

export const VALUES: Value[] = [
  {
    title: "Responsiveness",
    description:
      "We provide prompt reactions to client needs across all locations, ensuring no request goes unanswered.",
    icon: "zap",
  },
  {
    title: "Accurate Speed Delivery",
    description:
      "We combine precision with timely project completion — because quality and speed are not mutually exclusive.",
    icon: "timer",
  },
  {
    title: "Proactive Value-Driven",
    description:
      "We anticipate problems before they arise and deliver solutions that maximize value within your budget.",
    icon: "target",
  },
  {
    title: "Technical Expertise",
    description:
      "Engineering excellence achieved through current tools, methodologies, and industry-leading professionals.",
    icon: "cpu",
  },
  {
    title: "Standardization",
    description:
      "Consistency through adherence to industry best practices, ensuring reliable outcomes on every project.",
    icon: "check-square",
  },
  {
    title: "Continuous Improvement",
    description:
      "Ongoing refinement of our processes and methodologies keeps us at the forefront of MEP engineering.",
    icon: "trending-up",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Initial Consultation",
    description:
      "We meet with clients to understand project scope, budget, timeline, and technical requirements.",
  },
  {
    number: 2,
    title: "Scope & Proposal",
    description:
      "Our team prepares a detailed scope of work and proposal tailored to your project's specific needs.",
  },
  {
    number: 3,
    title: "Design Development",
    description:
      "Engineers develop MEP design documents using current software and coordinated with all disciplines.",
  },
  {
    number: 4,
    title: "Review & Coordination",
    description:
      "A rigorous double-review process ensures error-free plans and proper coordination with all project stakeholders.",
  },
  {
    number: 5,
    title: "Delivery & Support",
    description:
      "Final documents are delivered on time and our team remains available for clarifications through construction.",
  },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: "speed",
    heading: "Why We're Faster",
    subheading: "Speed",
    description:
      "CDI operates 20 hours a day across offices in California, New Jersey, and Vietnam. While competitors are limited to an 8-hour workday, we span multiple time zones to dramatically reduce turnaround times and keep your projects on schedule.",
    imageAlt: "CDI fast project delivery process",
    imagePosition: "right",
  },
  {
    id: "responsiveness",
    heading: "How We Stay Responsive",
    subheading: "Responsiveness",
    description:
      "Dedicated MEP project managers serve as consistent client contacts throughout the life of every project. This single point of contact facilitates smooth communication, eliminates information gaps, and ensures streamlined workflows from kickoff to delivery.",
    imageAlt: "CDI project management responsiveness",
    imagePosition: "left",
  },
  {
    id: "accuracy",
    heading: "Why We're More Accurate",
    subheading: "Accuracy",
    description:
      "Our rigorous double-review process involves both project management and senior engineering professionals on every deliverable. This multi-layer quality control ensures error-free plans and proper MEP coordination with all other project disciplines.",
    imageAlt: "CDI accuracy and quality review process",
    imagePosition: "right",
  },
];

export const OFFICES: Office[] = [
  {
    city: "Irvine, California",
    address: "9890 Research Dr. Suite 100, Irvine, CA 92618",
    phone: "949-336-6636",
    email: "dkang@cdieng.com",
    country: "USA (HQ)",
  },
  {
    city: "Edison, New Jersey",
    address: "Edison, NJ",
    country: "USA",
  },
  {
    city: "Ho Chi Minh City",
    address: "Floor 3 – 65 Tran Nao, An Khanh Ward, Thu Duc City, HCMC",
    country: "Vietnam",
  },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    slug: "commercial",
    label: "Commercial",
    description:
      "Office buildings, retail spaces, restaurants, hotels, and mixed-use developments across the United States.",
    projects: [
      { id: "c1", title: "Office Complex — Irvine, CA", location: "Irvine, CA", category: "commercial", description: "Full MEP design for a 4-story Class-A office building." },
      { id: "c2", title: "Retail Center Renovation", location: "Los Angeles, CA", category: "commercial", description: "Complete HVAC and electrical upgrade for a 120,000 sq ft retail center." },
      { id: "c3", title: "Hotel Tower — Las Vegas, NV", location: "Las Vegas, NV", category: "commercial", description: "MEP engineering services for a 22-story hotel and convention facility." },
      { id: "c4", title: "Restaurant Group Rollout", location: "Various, CA", category: "commercial", description: "Standardized MEP template design deployed across 30+ restaurant locations." },
      { id: "c5", title: "Corporate Campus", location: "San Jose, CA", category: "commercial", description: "Energy-efficient MEP systems for a 250,000 sq ft tech campus." },
      { id: "c6", title: "Mixed-Use Development", location: "San Diego, CA", category: "commercial", description: "Integrated MEP coordination for a residential and retail mixed-use tower." },
    ],
  },
  {
    slug: "residential",
    label: "Residential / ADU",
    description:
      "Single-family homes, multi-family developments, and accessory dwelling unit designs for residential clients.",
    projects: [
      { id: "r1", title: "Luxury Residence — Newport Beach", location: "Newport Beach, CA", category: "residential", description: "Custom MEP design for a 6,000 sq ft luxury single-family home." },
      { id: "r2", title: "ADU Statewide Program", location: "California", category: "residential", description: "Streamlined MEP design package for accessory dwelling units." },
      { id: "r3", title: "Multi-Family Complex", location: "Anaheim, CA", category: "residential", description: "Plumbing and electrical design for a 48-unit apartment complex." },
      { id: "r4", title: "Townhome Community", location: "Riverside, CA", category: "residential", description: "MEP systems for a 60-unit townhome development." },
    ],
  },
  {
    slug: "cannabis",
    label: "Cannabis",
    description:
      "Specialized MEP engineering for licensed cannabis cultivation, processing, and dispensary facilities.",
    projects: [
      { id: "ca1", title: "Cultivation Facility — Desert", location: "Coachella Valley, CA", category: "cannabis", description: "High-precision HVAC and humidity control for indoor cultivation." },
      { id: "ca2", title: "Dispensary Build-Out", location: "Los Angeles, CA", category: "cannabis", description: "Full MEP build-out for a state-licensed cannabis dispensary." },
      { id: "ca3", title: "Processing & Distribution Center", location: "Sacramento, CA", category: "cannabis", description: "Industrial MEP design for a cannabis processing and distribution hub." },
      { id: "ca4", title: "Greenhouse Complex", location: "Santa Barbara, CA", category: "cannabis", description: "Hybrid greenhouse MEP systems for year-round cannabis production." },
    ],
  },
  {
    slug: "industrial",
    label: "Industrial",
    description:
      "Warehouses, manufacturing plants, distribution centers, and specialized industrial facility designs.",
    projects: [
      { id: "i1", title: "Distribution Center", location: "Ontario, CA", category: "industrial", description: "Mechanical and electrical systems for a 500,000 sq ft logistics facility." },
      { id: "i2", title: "Food Processing Plant", location: "Fresno, CA", category: "industrial", description: "Specialized plumbing and HVAC for FDA-compliant food processing." },
      { id: "i3", title: "Cold Storage Warehouse", location: "Long Beach, CA", category: "industrial", description: "Refrigeration and MEP systems for a large-scale cold storage facility." },
      { id: "i4", title: "Manufacturing Facility", location: "Torrance, CA", category: "industrial", description: "Full MEP engineering for an advanced electronics manufacturing plant." },
    ],
  },
  {
    slug: "photovoltaic",
    label: "Photovoltaic",
    description:
      "Solar photovoltaic system design and engineering for commercial, industrial, and utility-scale installations.",
    projects: [
      { id: "pv1", title: "Rooftop Solar — Office Campus", location: "Irvine, CA", category: "photovoltaic", description: "1.2 MW rooftop solar array design for a corporate campus." },
      { id: "pv2", title: "Ground-Mount Solar Farm", location: "Riverside County, CA", category: "photovoltaic", description: "5 MW ground-mount photovoltaic installation." },
      { id: "pv3", title: "Carport Solar Array", location: "Los Angeles, CA", category: "photovoltaic", description: "Solar carport system providing shading and clean energy generation." },
      { id: "pv4", title: "Industrial Solar + Storage", location: "San Bernardino, CA", category: "photovoltaic", description: "PV and battery storage system for an industrial manufacturing facility." },
    ],
  },
];

export const CLIENT_NAMES = [
  "Honeywell International",
  "B/E Aerospace",
  "Cushman & Wakefield",
  "CBRE Group",
  "JLL",
  "Hines",
  "Lennar Corporation",
  "KB Home",
  "Marriott International",
  "Hilton Hotels",
  "Whole Foods Market",
  "Target Corporation",
];

export const COMPANY_INFO = {
  name: "Circa Domini International Inc.",
  shortName: "CDI Engineering",
  tagline: "Fast, Affordable and Reliable MEP Experts",
  mission:
    "Circa Domini International Inc. is an Irvine, California-based MEP engineering design and consulting firm. With innovation at our core, we deliver maximum value within budget — coast to coast and internationally.",
  phone: "949-336-6636",
  email: "dkang@cdieng.com",
  address: "9890 Research Dr. Suite 100, Irvine, CA 92618",
  founded: "2010",
};
