export const site = {
  name: "Muhammad Choirul Anwar",
  shortName: "Choirul Anwar",
  role: "Short-form content operations",
  email: "choirulanwar.va@gmail.com",
  whatsapp: "+62 822 2655 1246",
  whatsappHref: "https://wa.me/6282226551246",
  instagram: "@choirul_virtual.assistant",
  instagramHref: "https://instagram.com/choirul_virtual.assistant",
  // Hidden until the profile URL is confirmed.
  upworkHref: "",
  location: "Indonesia · UTC+7",
  siteUrl: "https://website-portofolio-va-ruby.vercel.app",
};

export const stats = [
  { value: "4", label: "Client accounts", detail: "Two TikTok, two Instagram" },
  { value: "8", label: "Videos published daily", detail: "Two per account, every day" },
  { value: "56", label: "Pieces per week", detail: "Planned through to posted" },
  { value: "7", label: "Days a week", detail: "No gaps in the calendar" },
];

export const services = [
  { title: "Content Creation", detail: "Posts, stories, reels, cut and captioned per platform", icon: "video" },
  { title: "Copywriting", detail: "Captions and video scripts written in your voice", icon: "pen" },
  { title: "Content Calendar", detail: "Planning and scheduling so every slot is filled", icon: "calendar" },
  { title: "Community Management", detail: "Comments and DMs handled inside your response window", icon: "chat" },
  { title: "Publishing Operations", detail: "Daily posting across every account you run", icon: "send" },
  { title: "Analytics & Reporting", detail: "What landed, what did not, and what changes next month", icon: "chart" },
];

export const process = [
  { step: "Intake", detail: "Raw footage and your calendar arrive. I map what can be cut from it.", icon: "inbox" },
  { step: "Build", detail: "Hooks, cutting, captions, and exports sized per platform.", icon: "scissors" },
  { step: "Publish", detail: "Loaded into the queue and posted on schedule, every slot filled.", icon: "rocket" },
  { step: "Report", detail: "What landed, what did not, and what the next batch leans into.", icon: "report" },
];

export const waBase = "https://wa.me/6282226551246";

// TODO: ganti dengan URL profil Upwork-mu, mis. "https://www.upwork.com/freelancers/~01abc...".
// Tombol "Hire me on Upwork" di hero + kontak otomatis muncul setelah ini diisi.
export const upworkProfileUrl = "";

export const testimonials = [
  {
    quote:
      "Choirul kept our four accounts posting every single day for three months. The queue just runs — I stopped thinking about content.",
    name: "Agency Owner",
    detail: "Content agency, US · via Upwork",
    sample: true,
  },
  {
    quote:
      "Hooks and captions sound like us. First VA who didn't need rewriting on every single post.",
    name: "Skincare Brand Founder",
    detail: "E-commerce brand · sample quote",
    sample: true,
  },
];

export const aiWorkflow = [
  { title: "Prompt library", detail: "One library per brand voice — hooks, captions, and replies drafted in your tone, not generic AI speak.", icon: "pen" },
  { title: "Draft in minutes", detail: "AI writes the first version of hooks, captions, and comment replies. I refine, fact-check, and match your voice.", icon: "send" },
  { title: "Queue automation", detail: "Scheduling and posting logs run on automation (Zapier/Make + Sheets) so nothing depends on memory.", icon: "calendar" },
  { title: "Human check", detail: "Nothing customer-facing goes live unchecked — every AI output passes a human read before publish.", icon: "chart" },
];

export const packages = [
  {
    name: "Trial week",
    price: "$19",
    per: "/one week",
    desc: "Try the workflow before you commit to a month.",
    featured: false,
    features: [
      "6 posts in 7 days",
      "1 account — TikTok or Instagram",
      "Hooks, captions & hashtags in your voice",
      "$19 credited if you continue on a monthly plan",
    ],
    cta: "https://wa.me/6282226551246?text=Hi%20Choirul%2C%20I%27d%20like%20to%20try%20the%20Trial%20week%20(%2419).",
  },
  {
    name: "Starter",
    price: "$79",
    per: "/month",
    desc: "A consistent presence without lifting a finger.",
    featured: false,
    features: [
      "12 posts / month (3x per week)",
      "1 account — TikTok or Instagram",
      "Hooks, captions & hashtags in your voice",
      "Monthly performance note",
    ],
    cta: "https://wa.me/6282226551246?text=Hi%20Choirul%2C%20I%27m%20interested%20in%20the%20Starter%20package%20(%2479%2Fmo).",
  },
  {
    name: "Growth",
    price: "$179",
    per: "/month",
    desc: "Daily posting that compounds. Most clients start here.",
    featured: true,
    features: [
      "30 posts / month (daily)",
      "Up to 2 accounts",
      "Everything in Starter",
      "Comments & DMs answered within 12 hours",
      "Biweekly report — what to post more of",
    ],
    cta: "https://wa.me/6282226551246?text=Hi%20Choirul%2C%20I%27m%20interested%20in%20the%20Growth%20package%20(%24179%2Fmo).",
  },
  {
    name: "Agency",
    price: "$379",
    per: "/month · 4 accounts",
    desc: "White-label publishing for agencies — about $95 per client account.",
    featured: false,
    features: [
      "4 client accounts, daily posting",
      "White-label — your agency name on every report",
      "Extra accounts $90/month each",
      "Everything in Growth",
      "Monthly 30-min strategy call",
      "Priority WhatsApp line",
      "Quarterly content pillar refresh",
    ],
    cta: "https://wa.me/6282226551246?text=Hi%20Choirul%2C%20I%27m%20interested%20in%20the%20Agency%20package%20(%24379%2Fmo).",
  },
];

export const achievements = [
  { title: "Social Media Marketing", issuer: "Semrush" },
  { title: "Social Media Marketing", issuer: "Meta" },
  { title: "Content Marketing", issuer: "HubSpot" },
  { title: "Project Management", issuer: "Google" },
  { title: "General Virtual Assistance", issuer: "SGBVA" },
  { title: "Content Operations, self-taught", issuer: "Ongoing" },
];
