import { images } from "./images";

export const siteConfig = {
  name: "Foundation Horizon",
  tagline:
    "A humanitarian organization dedicated to building schools, clinics, boreholes, and life-changing infrastructure for underserved communities.",
  email: "hello@foundationhorizon.org",
  phone: "+1 (555) 482-9100",
  address: "240 Meridian Way, Suite 400, Washington, DC 20005",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects & Impact" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

export const impactStats = [
  { value: 127, suffix: "", label: "Schools built", description: "Classrooms serving rural learners" },
  { value: 84, suffix: "", label: "Clinics opened", description: "Primary care within walking distance" },
  { value: 312, suffix: "", label: "Boreholes drilled", description: "Clean water for thousands daily" },
  { value: 48, suffix: "K+", label: "Lives reached", description: "Across 14 countries since 2009" },
];

export const impactMetrics = [
  {
    title: "Communities reached",
    value: "214",
    detail: "Villages and settlements with active or completed infrastructure programs.",
    image: images.impact.communities,
  },
  {
    title: "Children educated",
    value: "31,200+",
    detail: "Students enrolled in schools we built or renovated since 2009.",
    image: images.impact.education,
  },
  {
    title: "Water access",
    value: "142K",
    detail: "Daily liters of clean water delivered through boreholes and pipelines.",
    image: images.impact.water,
  },
  {
    title: "Healthcare outreach",
    value: "890K",
    detail: "Patient visits recorded at clinics and mobile health posts annually.",
    image: images.impact.health,
  },
];

export const projects = [
  {
    id: "sunrise-academy",
    title: "Sunrise Academy",
    category: "Education",
    location: "Northern Ghana",
    year: "2024",
    image: images.projects.school1,
    excerpt:
      "Eight classrooms, a library, and solar power brought education within reach for 640 children who once walked three hours to the nearest school.",
  },
  {
    id: "meridian-clinic",
    title: "Meridian Community Clinic",
    category: "Healthcare",
    location: "Eastern Kenya",
    year: "2024",
    image: images.projects.clinic1,
    excerpt:
      "A 12-bed maternal ward and vaccination center now serves 12,000 residents with round-the-clock care staffed by local nurses.",
  },
  {
    id: "kavango-borehole",
    title: "Kavango Water Initiative",
    category: "Water",
    location: "Kavango Region, Namibia",
    year: "2023",
    image: images.projects.water1,
    excerpt:
      "Six deep boreholes and hand-washing stations ended a decade of seasonal water scarcity for pastoral communities.",
  },
  {
    id: "riverbend-primary",
    title: "Riverbend Primary School",
    category: "Education",
    location: "Malawi",
    year: "2023",
    image: images.projects.school2,
    excerpt:
      "Renovated dormitories and science labs doubled enrollment while keeping girls in school through safe boarding facilities.",
  },
  {
    id: "hope-valley-health",
    title: "Hope Valley Health Post",
    category: "Healthcare",
    location: "Sierra Leone",
    year: "2023",
    image: images.projects.clinic2,
    excerpt:
      "Mobile outreach teams trained 40 community health workers to detect malnutrition and malaria in remote villages.",
  },
  {
    id: "oasis-well-network",
    title: "Oasis Well Network",
    category: "Water",
    location: "Somali Region, Ethiopia",
    year: "2022",
    image: images.projects.water2,
    excerpt:
      "A gravity-fed pipeline connected four villages to a protected spring, cutting water collection time from four hours to twenty minutes.",
  },
  {
    id: "horizon-learning-hub",
    title: "Horizon Learning Hub",
    category: "Education",
    location: "Uganda",
    year: "2022",
    image: images.projects.school3,
    excerpt:
      "Digital literacy labs and teacher housing attracted qualified educators to a district that had lost half its teaching staff.",
  },
  {
    id: "greenfield-transformation",
    title: "Greenfield Village Transformation",
    category: "Community",
    location: "Mozambique",
    year: "2021",
    image: images.projects.community1,
    excerpt:
      "Integrated school, clinic, and market infrastructure lifted an entire settlement from aid dependency to self-sustaining local enterprise.",
  },
  {
    id: "savanna-maternal",
    title: "Savanna Maternal Center",
    category: "Healthcare",
    location: "South Sudan",
    year: "2021",
    image: images.projects.clinic3,
    excerpt:
      "Emergency obstetric care reduced maternal mortality by 61 percent in the first eighteen months of operation.",
  },
];

export const testimonials = [
  {
    quote:
      "Before the clinic opened, mothers traveled two days for a simple delivery. Now our daughters give birth safely at home in our own community.",
    name: "Amara Osei",
    role: "Community elder, Eastern Kenya",
    image: images.testimonials[0],
  },
  {
    quote:
      "Foundation Horizon did not drop buildings and leave. They trained our teachers, funded maintenance, and listened when we said what our children needed.",
    name: "James Mwangi",
    role: "Headteacher, Riverbend Primary",
    image: images.testimonials[1],
  },
  {
    quote:
      "Our partnership funded boreholes that serve 8,400 people daily. The reporting was transparent, timely, and grounded in real outcomes—not vanity metrics.",
    name: "Elena Vasquez",
    role: "Program Director, Meridian Development Fund",
    image: images.testimonials[2],
  },
  {
    quote:
      "I volunteered on the Greenfield build. Watching a village gain dignity through infrastructure changed how I think about philanthropy forever.",
    name: "David Chen",
    role: "Volunteer architect, 2022 cohort",
    image: images.testimonials[3],
  },
];

export const partners = [
  "Meridian Development Fund",
  "Global Water Alliance",
  "East Africa Health Coalition",
  "Build Forward Initiative",
  "Horizon Trust",
  "Riverside Philanthropy",
];

export const team = [
  {
    name: "Dr. Naomi Okonkwo",
    role: "Founder & Executive Director",
    bio: "Former WHO field coordinator with twenty years leading infrastructure programs across sub-Saharan Africa.",
    image: images.team[0],
  },
  {
    name: "Marcus Lindstrom",
    role: "Director of Operations",
    bio: "Civil engineer who has overseen 200+ construction projects in conflict-affected and rural regions.",
    image: images.team[1],
  },
  {
    name: "Fatima Al-Rashid",
    role: "Head of Community Partnerships",
    bio: "Anthropologist specializing in participatory design with local governance bodies and women's cooperatives.",
    image: images.team[2],
  },
  {
    name: "Thomas Berg",
    role: "Chief Financial Officer",
    bio: "Chartered accountant ensuring 91 cents of every dollar reaches program delivery with full audit transparency.",
    image: images.team[3],
  },
];

export const timelineMilestones = [
  { year: "2009", title: "Foundation established", description: "First school built in rural Malawi with 12 local volunteers." },
  { year: "2012", title: "Healthcare expansion", description: "Opened five community clinics across East Africa." },
  { year: "2015", title: "Water access program", description: "Launched borehole initiative reaching 50,000 people." },
  { year: "2018", title: "Regional headquarters", description: "Opened coordination hub in Nairobi for faster response." },
  { year: "2021", title: "Integrated village model", description: "Pioneered school-clinic-water bundles in Mozambique." },
  { year: "2024", title: "48,000 lives milestone", description: "Surpassed cumulative reach across 14 partner countries." },
];

export const values = [
  {
    title: "Dignity first",
    description: "Communities lead every decision. We build with people, never over them.",
  },
  {
    title: "Radical transparency",
    description: "Published financials, open procurement, and field reports donors can verify.",
  },
  {
    title: "Lasting infrastructure",
    description: "Maintenance funds and local training ensure projects endure for generations.",
  },
  {
    title: "Measured impact",
    description: "Outcomes tracked in health, education, and water access—not outputs alone.",
  },
];

export const donationTiers = [
  {
    amount: "$50",
    title: "Classroom supplies",
    impact: "Books, chalkboards, and learning materials for 25 students for one term.",
  },
  {
    amount: "$250",
    title: "Medical outreach",
    impact: "Funds a mobile clinic visit serving 150 patients in remote villages.",
  },
  {
    amount: "$1,000",
    title: "Clean water access",
    impact: "Covers drilling survey and pump installation for one community borehole.",
  },
  {
    amount: "$5,000",
    title: "School room sponsor",
    impact: "Names and funds construction of one fully equipped classroom with solar lighting.",
  },
];

export const faqs = [
  {
    question: "How much of my donation goes to programs?",
    answer:
      "91% of unrestricted donations fund direct program costs—construction, materials, local wages, and training. Administrative and fundraising costs are capped and published in our annual report.",
  },
  {
    question: "Can I designate my gift to a specific project?",
    answer:
      "Yes. You may direct gifts toward education, healthcare, water, or a named campaign. Restricted funds are tracked separately and reported quarterly.",
  },
  {
    question: "Do you accept corporate matching?",
    answer:
      "We participate in most major employer matching programs. Contact our partnerships team with your employer name for setup assistance.",
  },
  {
    question: "How do you select communities?",
    answer:
      "Selection follows a needs assessment co-developed with local leaders, government partners, and our regional field offices. Vulnerability, feasibility, and community commitment are weighted equally.",
  },
  {
    question: "Can I visit a project site?",
    answer:
      "Donors giving $2,500 or more annually may join guided field visits twice per year. Safety protocols and community consent are required before any visit.",
  },
];

export const galleryImages = [
  {
    src: images.gallery[0],
    alt: "Children operating a community hand pump with clean water flowing",
  },
  { src: images.gallery[1], alt: "Young people gathered overlooking a lake at sunset" },
  { src: images.gallery[2], alt: "Village gathering near new community infrastructure" },
];

export const beforeAfter = {
  before: {
    src: images.beforeAfter.before,
    alt: "Cleared land with smoldering stumps and smoke from deforestation before restoration",
  },
  after: {
    src: images.beforeAfter.after,
    alt: "Restored forest with sunlight streaming through the canopy after Greenfield Village work",
  },
};

export const communities = [
  {
    name: "Kavango pastoral settlements",
    story:
      "Seasonal migration ended for water collection. Children attend school year-round while herds graze nearby.",
    stat: "6 boreholes",
    image: images.communities.water,
  },
  {
    name: "Riverbend district",
    story:
      "Girl enrollment rose 78% after safe dormitories opened. Three graduates now study medicine at national university.",
    stat: "640 students",
    image: images.communities.school,
  },
  {
    name: "Greenfield cooperative",
    story:
      "A women's market collective beside the new clinic now helps fund daily school meals. The community fully repaid its village micro-loan in fourteen months.",
    stat: "Self-sustaining",
    image: images.communities.market,
  },
];
