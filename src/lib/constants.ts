import type { NavItem, Stat, Service, Value, ProcessStep, Differentiator, Office, ProjectCategory } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "/services" },
  {
    label: "About",
    href: "/company",
    children: [
      { label: "Company", href: "/company" },
      { label: "Our Leadership", href: "/our-leadership" },
      { label: "Our Process", href: "/our-process" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "Commercial", href: "/projects/commercial" },
      { label: "Residential & ADU", href: "/projects/residential" },
      { label: "Mixed-Use & Adaptive Reuse", href: "/projects/mixed-use" },
      { label: "Industrial", href: "/projects/industrial" },
      { label: "Hospitality & Retail", href: "/projects/hospitality" },
      { label: "Land Development", href: "/projects/land" },
    ],
  },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

// Retained for future use once real performance figures are available. Not currently rendered.
export const STATS: Stat[] = [];

export const SERVICES: Service[] = [
  {
    id: "site-selection",
    title: "Site Selection & Feasibility",
    description:
      "Every project begins with proving it works. We evaluate the land, the market, and the numbers before any capital is committed, giving you a clear picture of what a site can become and what it will return.",
    bullets: [
      "Site identification and acquisition support",
      "Market and financial feasibility analysis",
      "Development pro forma modeling",
      "Highest-and-best-use and zoning analysis",
      "Due diligence, title, and environmental review",
      "Capital structuring and investment coordination",
    ],
    image: "/images/services-feasibility.jpg",
    icon: "site-selection",
  },
  {
    id: "design-planning",
    title: "Design & Planning",
    description:
      "Great buildings start with buildable drawings. Our in-house design team coordinates architecture and engineering together, grounding every decision in real cost and schedule from the first sketch.",
    bullets: [
      "Conceptual and architectural design",
      "Space planning and unit programming",
      "Structural, MEP, and civil engineering coordination",
      "Construction documents and detailing",
      "Sustainability, Title-24, and LEED compliance",
      "Cost-informed value engineering",
    ],
    image: "/images/services-design.jpg",
    icon: "design-planning",
  },
  {
    id: "entitlements-permitting",
    title: "Entitlements & Permitting",
    description:
      "Approvals are where most projects stall. We manage the agencies, hearings, and paperwork so your schedule keeps its shape and your project stays on track.",
    bullets: [
      "Zoning and land-use approvals",
      "Conditional use permits and variances",
      "CEQA and environmental review",
      "Plan check and permit expediting",
      "Agency and jurisdiction coordination",
      "Community and stakeholder engagement",
    ],
    image: "/images/services-entitlements.jpg",
    icon: "entitlements",
  },
  {
    id: "construction",
    title: "Construction",
    description:
      "We build what we design. With one team from concept through the field, budgets stay honest and problems get solved on-site instead of in a claim.",
    bullets: [
      "General contracting and construction management",
      "Budget development, buyout, and cost control",
      "Master scheduling and trade sequencing",
      "Subcontractor procurement and management",
      "Quality assurance and site safety",
      "Owner reporting and change management",
    ],
    image: "/images/services-construction.jpg",
    icon: "construction",
  },
  {
    id: "project-delivery",
    title: "Project Delivery",
    description:
      "A finished building should be ready to open. We close out the work cleanly and stay available for the tenant improvements and asset decisions that follow.",
    bullets: [
      "Commissioning and systems startup",
      "Closeout, warranties, and as-built documentation",
      "Certificate of occupancy and owner turnover",
      "Tenant improvements and fit-out",
      "Property and asset management support",
      "Post-occupancy and warranty service",
    ],
    image: "/images/services-delivery.jpg",
    icon: "delivery",
  },
];

export const VALUES: Value[] = [
  {
    title: "Accountability",
    description: "One team, one number to call, one owner of the result.",
    icon: "target",
  },
  {
    title: "Cost Honesty",
    description: "Real pricing informs the design from day one.",
    icon: "check-square",
  },
  {
    title: "Quality",
    description: "Buildings meant to perform and last, not just to open.",
    icon: "cpu",
  },
  {
    title: "Partnership",
    description: "Your return is the measure of our success.",
    icon: "trending-up",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Discover",
    description:
      "We start with your goal and the site. We test feasibility, model the numbers, and confirm the project pencils before you commit.",
  },
  {
    number: 2,
    title: "Design",
    description:
      "Our team turns the feasibility into buildable drawings, coordinating architecture and engineering together and pressure-testing every choice against real cost and schedule.",
  },
  {
    number: 3,
    title: "Entitle",
    description:
      "We move the project through zoning, permitting, and environmental review, managing the agencies so approvals don't derail the timeline.",
  },
  {
    number: 4,
    title: "Build",
    description:
      "The same team that designed the project builds it, controlling budget, schedule, quality, and safety in the field.",
  },
  {
    number: 5,
    title: "Deliver",
    description:
      "We close out cleanly, commission the building, and hand you an asset that's ready to open — then stay available for what comes next.",
  },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: "one-team",
    heading: "One Team, Start to Finish",
    subheading: "Integration",
    description:
      "One team carries the project from acquisition through occupancy — the building you approve on paper is the building we hand you at completion, with nothing lost in the handoffs.",
    imageAlt: "One team from acquisition through occupancy",
    imagePosition: "right",
  },
  {
    id: "under-one-roof",
    heading: "Design and Construction Under One Roof",
    subheading: "Coordination",
    description:
      "Because the people who design a project and the people who build it answer to the same team, budgets are set on reality instead of hope, and decisions get made faster.",
    imageAlt: "Design and construction under a single roof",
    imagePosition: "left",
  },
  {
    id: "accountable",
    heading: "One Point of Accountability",
    subheading: "Ownership",
    description:
      "A single point of accountability for budget, schedule, and outcome — decisions made in Discovery are honored all the way through Delivery.",
    imageAlt: "A single point of accountability for budget, schedule, and outcome",
    imagePosition: "right",
  },
];

export const OFFICES: Office[] = [
  {
    city: "City of Industry, California",
    address: "1201 John Reed Ct., City of Industry, CA 91745",
    country: "USA (HQ)",
  },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    slug: "commercial",
    label: "Commercial",
    description:
      "Office, retail, and mixed-use developments — from ground-up construction to repositioning and tenant improvements — designed to perform for owners and tenants alike.",
    projects: [
      {
        id: "pacific-plaza",
        title: "Pacific Plaza Retail Center",
        location: "Irvine, CA",
        category: "Commercial",
        description: "A 45,000 sq ft ground-up neighborhood retail center featuring premium storefronts and integrated parking.",
        image: "/images/projects/project-commercial-2.jpg",
      },
      {
        id: "metro-heights",
        title: "Metro Heights Office Complex",
        location: "Pasadena, CA",
        category: "Commercial",
        description: "A modern three-story office complex featuring a shared courtyard, energy-efficient glazing, and custom interiors.",
        image: "/images/projects/project-commercial-1.jpg",
      },
    ],
  },
  {
    slug: "residential",
    label: "Residential & ADU",
    description:
      "Multifamily, condominium, infill, and accessory dwelling unit projects that add housing while meeting the demands of California's zoning and design standards.",
    projects: [
      {
        id: "oak-crest",
        title: "The Oak Crest Residences",
        location: "Glendale, CA",
        category: "Residential & ADU",
        description: "A 12-unit luxury condominium building with private terraces, high-end finishes, and underground parking.",
        image: "/images/projects/project-residential-1.jpg",
      },
      {
        id: "infill-adu",
        title: "Infill Backyard ADU Portfolio",
        location: "City of Industry, CA",
        category: "Residential & ADU",
        description: "A series of modern detached accessory dwelling units designed and built to maximize suburban lot values.",
        image: "/images/projects/project-residential-2.jpg",
      },
    ],
  },
  {
    slug: "mixed-use",
    label: "Mixed-Use & Adaptive Reuse",
    description:
      "Underused commercial buildings and infill sites reimagined as vibrant residential and mixed-use assets, turning obsolete space into new value.",
    projects: [
      {
        id: "union-lofts",
        title: "The Union Lofts",
        location: "Los Angeles, CA",
        category: "Mixed-Use & Adaptive Reuse",
        description: "Adaptive reuse conversion of a historic warehouse into 24 live-work loft spaces and ground-level retail.",
        image: "/images/projects/project-mixed-use-1.jpg",
      },
    ],
  },
  {
    slug: "industrial",
    label: "Industrial",
    description:
      "Warehouse, light industrial, and logistics facilities built for operators and tenants, with an emphasis on speed to occupancy and long-term flexibility.",
    projects: [
      {
        id: "logistics-hub",
        title: "Logistics Hub West",
        location: "Ontario, CA",
        category: "Industrial",
        description: "A 150,000 sq ft high-bay distribution warehouse built for maximum speed-to-occupancy and flexible operations.",
        image: "/images/projects/project-industrial-1.jpg",
      },
      {
        id: "tech-valley",
        title: "Tech Valley Data Center & Solar Roof",
        location: "Irvine, CA",
        category: "Industrial",
        description: "A mission-critical data center featuring redundant power supply infrastructure and an extensive rooftop solar panel system.",
        image: "/images/projects/project-industrial-2.jpg",
      },
    ],
  },
  {
    slug: "hospitality",
    label: "Hospitality & Retail",
    description:
      "Guest-facing and destination projects where design quality and execution directly drive the return.",
    projects: [
      {
        id: "aura-hotel",
        title: "Aura Boutique Hotel & Lounge",
        location: "Santa Monica, CA",
        category: "Hospitality & Retail",
        description: "A premium 45-room boutique hotel and dining lounge with architectural facades that capture coastal sunlight.",
        image: "/images/projects/project-hospitality-1.jpg",
      },
    ],
  },
  {
    slug: "land",
    label: "Land Development",
    description:
      "Raw and entitled land taken through planning, entitlement, and vertical delivery — unlocking sites from opportunity to finished project.",
    projects: [
      {
        id: "highland-valley",
        title: "Highland Valley Entitlements",
        location: "Riverside, CA",
        category: "Land Development",
        description: "Master planning, CEQA coordination, and subdivision entitlement approvals for a 20-acre vertical development parcel.",
        image: "/images/projects/project-land-1.jpg",
      },
    ],
  },
];

export const CLIENT_NAMES: string[] = [
  "Hilton Worldwide",
  "Marriott International",
  "Denny's Restaurants",
  "Wendy's Company",
  "Chevron Corporation",
  "Fender Musical Instruments",
  "85°C Daily Cafe",
  "CBRE Group",
  "Honeywell",
  "Vanguard Development",
  "Southern California Edison",
  "Apex Investments",
];

export const COMPANY_INFO = {
  name: "TianCheng Development Group",
  shortName: "TianCheng Development Group",
  tagline: "Integrated real estate development — from first drawing to finished building.",
  mission:
    "TianCheng Development Group is a full-cycle real estate development firm that takes projects the entire distance: feasibility, design, entitlements, and construction, delivered by one accountable team. Where most projects lose time and money in the handoffs between planners, designers, and builders, we own every phase in sequence — so the building you approve on paper is the building we hand you at completion.",
  phone: "",
  email: "TianChengDevelopment@gmail.com",
  address: "1201 John Reed Ct., City of Industry, CA 91745",
  founded: "",
};
