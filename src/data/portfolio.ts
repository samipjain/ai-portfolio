import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  person: {
    name: "Samip Jain",
    role: "3-time Founder · Solutions Lead · Builder",
    bio: [
      "Samip is a 3-time Founder, Solutions Lead and a Builder who believes technology should be designed with the user at the center. With a graduate degree from MIT, he brings this vision to life at the intersection of AI and enterprise strategy.",
      "He has led 30+ pre-sales engagements and a dozen enterprise integrations across payments and last-mile delivery — working with partners ranging from Apple and Oracle at Uber, to Shopify and Rectangle Health at Adyen.",
      "He has also built and mentored a team from 1 to 8 from scratch. Lately he's been deep in AI, building tools that help teams close deals faster and actually understand their customers."
    ],
    short:
      "Solutions Lead working at the intersection of AI and enterprise strategy. MIT graduate. Builder.",
  },

  projects: [
    {
      slug: "activity-tracker",
      title: "Uplift",
      kind: "personal",
      type: "personal",
      tags: ["Healthcare", "Wellness"],
      year: "2026",
      summary:
        "An activity tracking app with Duolingo-style streaks",
      description:
        "Uplift is a web app (iOS app in progress) that helps users stay consistent by tracking daily activities and building streaks. Instead of focusing on rigid habits, Uplift makes progress flexible—any completed activity counts toward your daily streak.",
      role: "Builder · Designer",
      stack: ["Next.js", "v0.dev", "shadcn/ui", "Supabase"],
    },
    {
      slug: "creditcard",
      title: "Luffi AI Wallet",
      kind: "personal",
      type: "personal",
      tags: ["Fintech"],
      year: "2025",
      summary:
        "An AI-powered wallet that helps you track and maximize the value of your credit cards",
      description:
        "Luffi is an AI-powered wallet that helps users get the most value out of their credit cards. It tracks rewards, benefits, and annual fee utilization to ensure users are getting a positive return on the cards they pay for.",
      role: "Builder · Designer",
      stack: ["Swift", "Claude Code", "Supabase"],
    },
    {
      slug: "respezy",
      title: "Respezy",
      kind: "founder",
      type: "founder",
      tags: ["Healthcare"],
      year: "2020",
      summary:
        "Respezy is an MIT delta v startup that scores students' COVID risk and helps colleges keep campuses safe.",
      description:
        "As we begin to reopen, it can be difficult to know what are the right things to do for our health. This fall, 5 million college students will be returning to campuses, creating concerns for student health and safety. At Respezy, our goal is to increase safety for students and reduce monitoring and enforcement challenges for colleges. The Respezy app uses a risk assessment model that produces an infection risk score based off of the student’s environment and activities. The app allows students to plan and track their daily behaviors and lower their health risks. The app can predict potential safety issues on campus and allow colleges to prevent them. After the pandemic, we plan on helping millennials adopt healthier behaviors by integrating more application and technology into our platform.",
      role: "Builder · Founder",
      stack: ["Swift", "Claude Code", "Supabase"],
    },
    {
      slug: "motorhood",
      title: "Motorhood",
      kind: "founder",
      type: "founder",
      tags: ["Automotive"],
      year: "2018",
      summary:
        "Motorhood is a digital platform where users can book a service for their vehicles with real-time tracking of an ongoing service.",
      description:
        "Motorhood is a digital platform where users can book a service for their vehicles with real-time tracking of an ongoing service.",
      role: "Builder · Designer",
      stack: ["Android"],
    },
    {
      slug: "pikachoo",
      title: "Pikachoo",
      kind: "founder",
      type: "founder",
      tags: ["ECommerce"],
      year: "2015",
      summary:
        "An e-commerce platform to enable local makers to sell products online",
      description:
        "An e-commerce platform to enable local makers to sell products online; onboarded 20 makers & reached 1k+ customers",
      role: "Builder · Designer",
      stack: ["Swift", "Claude Code", "Supabase"],
    },
    {
      slug: "patiencepod",
      title: "Patience Pod",
      kind: "personal",
      type: "personal",
      tags: ["AI", "Product"],
      year: "2025",
      summary:
        "An ambient AI companion that teaches focus and patience through guided sessions and gentle nudges.",
      description:
        "A vibe-coded experiment in calm-tech. Patience Pod is an ambient AI companion built to help you stay with a task longer. It uses short guided audio sessions, gentle haptic cues, and a visual rhythm that discourages context switching. Built in a weekend with Claude and Next.js.",
      role: "Designer · Builder",
      stack: ["Next.js", "OpenAI", "Tailwind", "Web Audio API"],
    },
    {
      slug: "savor",
      title: "Savor",
      kind: "personal",
      type: "personal",
      tags: ["AI", "Mobile"],
      year: "2025",
      summary:
        "A tasting journal that uses multimodal AI to log meals from a photo and surface patterns over time.",
      description:
        "Snap a photo, get structured flavor notes, and build a searchable taste memory. Savor is a personal project that pairs vision models with a simple journaling ritual — it's now my daily-driver food log.",
      role: "Solo — design, code, copy",
      stack: ["React Native", "GPT-4V", "Supabase"],
    },
    {
      slug: "dataviz",
      title: "Data Visualization Studio",
      kind: "personal",
      type: "personal",
      tags: ["AI", "Data"],
      year: "2024",
      summary:
        "A chat-first canvas for exploring a CSV. Describe the chart you want and iterate until it's right.",
      description:
        "An LLM-driven viz tool I built to explore my own datasets faster. Paste a CSV, describe the question, and iterate on charts through natural conversation. The generated code is always visible and editable.",
      role: "Solo",
      stack: ["D3", "Claude API", "Observable Plot"],
    },
    {
      slug: "powerpoint",
      title: "Deck Author",
      kind: "personal",
      type: "personal",
      tags: ["AI", "Multimodal"],
      year: "2024",
      summary:
        "Generate slides from a brief. Multimodal model produces layout, imagery, and speaker notes end-to-end.",
      description:
        "A tool for first-draft decks. Give it a topic and an audience; it produces a full deck with layout variance, speaker notes, and image placeholders. Built as an internal demo that kept getting requested.",
      role: "Designer · Engineer",
      stack: ["Python", "GPT-4", "python-pptx"],
    },
    {
      slug: "googleagent",
      title: "Google Agent",
      kind: "personal",
      type: "personal",
      tags: ["AI", "Agents"],
      year: "2024",
      summary:
        "A research agent that browses, takes notes, and files its findings back into your docs.",
      description:
        "An experiment in long-horizon research agents. The agent spawns sub-tasks, visits pages, reads selectively, and produces a structured brief with source links. Vibe-coded over a handful of evenings.",
      role: "Solo",
      stack: ["Playwright", "LangChain", "OpenAI"],
    },
    {
      slug: "uber-oracle",
      title: "Uber × Oracle Integration",
      kind: "work",
      type: "work",
      tags: ["Enterprise", "Integration"],
      year: "2024",
      summary:
        "Led technical architecture for enterprise-grade delivery integration across Oracle's hospitality stack.",
      description:
        "Partnered with Oracle to bring on-demand delivery into their hospitality POS systems. Owned the technical solution from API surface to rollout playbook. Work spanned authentication, dispatch, order lifecycle, and reconciliation.",
      role: "Solutions Lead",
      stack: ["REST APIs", "OAuth", "Webhooks"],
    },
    {
      slug: "uber-apple",
      title: "Uber × Apple Partnership",
      kind: "work",
      type: "work",
      tags: ["Enterprise", "Strategy"],
      year: "2023",
      summary:
        "Solutions lead for integration work with Apple, translating enterprise needs into shipped technical milestones.",
      description:
        "Worked closely with Apple's teams on a series of enterprise integrations. Responsible for the technical narrative, scoping, and cross-functional coordination between Apple and Uber engineering.",
      role: "Solutions Lead",
      stack: ["Internal Platforms"],
    },
    {
      slug: "adyen-shopify",
      title: "Adyen × Shopify",
      kind: "work",
      type: "work",
      tags: ["Payments", "Integration"],
      year: "2022",
      summary:
        "Solutions engineering on one of the largest payments integrations in commerce.",
      description:
        "Supported the Shopify × Adyen integration at a moment of rapid scale. Designed solutions for edge-case merchant flows, dispute handling, and local payment method rollouts.",
      role: "Solutions Engineer",
      stack: ["Payments APIs", "3DS2", "Java"],
    },
    {
      slug: "adyen-rectangle",
      title: "Adyen × Rectangle Health",
      kind: "work",
      type: "work",
      tags: ["Payments", "Healthcare"],
      year: "2021",
      summary:
        "Built the technical solution for a healthcare payments partner — compliance, tokenization, patient flows.",
      description:
        "Owned the Rectangle Health integration end-to-end. Navigated healthcare-specific compliance requirements, patient payment flows, and terminal fleet tokenization.",
      role: "Solutions Engineer",
      stack: ["Tokenization", "HIPAA-aware flows", "Terminal API"],
    },
    {
      slug: "hyperloop",
      title: "Hyperloop",
      kind: "work",
      type: "personal",
      tags: ["Manufacturing", "MIT"],
      year: "2019",
      summary:
        "Manufacturing and systems work on an MIT Hyperloop pod — from CAD to wind-tunnel.",
      description:
        "Contributor on an MIT Hyperloop pod team. Focused on manufacturing processes, structural analysis, and the design-for-assembly tradeoffs that come with building a one-off vehicle.",
      role: "Manufacturing Engineer",
      stack: ["SolidWorks", "ANSYS", "Machining"],
    },
    {
      slug: "augmentor",
      title: "Augmentor",
      kind: "work",
      type: "personal",
      tags: ["AR/VR", "UI/UX"],
      year: "2019",
      summary:
        "Spatial interface research — an AR tool for augmenting physical workflows with ambient guidance.",
      description:
        "A graduate research project on AR-augmented workflows. The system overlays step-by-step guidance onto physical tasks, adapting to user pace and skill level.",
      role: "Researcher · Designer",
      stack: ["Unity", "ARKit", "C#"],
    },
  ],

  press: [
    {
      outlet: "Adyen",
      title: "How Rectangle Health automates insurance reimbursements with embedded payments",
      year: "2025",
      url: "https://www.adyen.com/knowledge-hub/rectangle-health-automated-insurance-reimbursements-embedded-payments",
    },
    {
      outlet: "Uber / Oracle",
      title: "Uber and Oracle launch groundbreaking retail delivery service",
      year: "2023",
      url: "https://www.oracle.com/retail/oracle-uber-direct-collect-and-receive-delivery/",
    },
    {
      outlet: "PR Newswire",
      title: "Oracle and Uber Co-innovate to Transform Last Mile Delivery in Retail",
      year: "2023",
      url: "https://www.prnewswire.com/news-releases/oracle-and-uber-co-innovate-to-transform-last-mile-delivery-in-retail-301930940.html",
    },
    {
      outlet: "Uber / BBC News",
      title: "Uber powers emergency food deliveries in Ukraine",
      year: "2022",
      url: "https://www.bbc.com/news/technology-61717071",
    },
    {
      outlet: "MIT News",
      title: "A road paved with open learning",
      year: "2019",
      url: "https://news.mit.edu/2019/road-to-mit-paved-open-learning-0614",
    },
    {
      outlet: "MIT News",
      title: "Hyperloop: Overcoming obstacles with an electric hovercraft",
      year: "2019",
      url: "https://news.mit.edu/2019/overcoming-obstacles-hyperloop-competition-0828",
    },
  ],

  talks: [
    {
      venue: "ProductCamp",
      title: "AI-Powered Product Engine: Rapid Prototyping with PM + Engineer Collaboration",
      year: "2025",
      location: "Chicago",
      url: "https://www.productcampchicago.com/productcamp-2025"
    },
    {
      venue: "ProductCamp",
      title: "Bridging the Gap: Aligning Product Strategy with Customer-Facing teams",
      year: "2024",
      location: "Chicago",
      url: "https://www.productcampchicago.com/content/bridging-the-gap-aligning-product-strategy-2024-10-18"
    },
  ],
};
