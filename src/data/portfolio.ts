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
      slug: "platformdemo",
      title: "Adyen Platform Demo",
      kind: "personal",
      type: "personal",
      tags: ["Fintech"],
      year: "2024",
      summary:
        "A unified demo platform that brings Adyen for Platforms to life across pre- and post-sales.",
      description:
        "A vibe-coded experiment in fintech. A unified demo platform that brings Adyen for Platforms to life across pre- and post-sales.",
      role: "Designer · Builder",
      stack: ["Next.js", "v0.dev", "Vercel", "Supabase", "Cursor", "Claude Code"],
    },
    {
      slug: "patiencepod",
      title: "Patience Pod",
      kind: "personal",
      type: "personal",
      tags: ["Product Development", "Healthcare"],
      year: "2019",
      summary:
        "Patience Pod provides a multi-sensory, privacy headrest, improving patients' waiting experience",
      description:
        "Patience Pod provides a multi-sensory, privacy headrest, improving patients' waiting experience. We applied design thinking process to this challenge. We started with Research, Selection, Concept Generation, (Prototyping, Testing), Final Product",
      role: "Designer · Maker",
      stack: ["Product Design"],
    },
    {
      slug: "savor",
      title: "Savor",
      kind: "personal",
      type: "personal",
      tags: ["Product Development"],
      year: "2018",
      summary:
        "A playful, hand-crafted wooden spice set designed to bring family and friends together at the table.",
      description:
        "A playful spice set for your dining table hand-crafted from high quality wood for you and your loved ones to enjoy gathering around the table during any family occasion.",
      role: "Designer · Maker",
      stack: ["Product Design"],
    },
    {
      slug: "logistics-visualization-research",
      title: "Logistics Visualization Research",
      kind: "personal",
      type: "personal",
      tags: ["Supply Chain Logistics"],
      year: "2020",
      summary:
        "Interactive visualizations that make supply chain and logistics data easier to explore and act on.",
      description:
        "Developed and designed interactive visualization to improve data visibility, data analysis, and decision making for supply chain & logistics challenges.",
      role: "Research Assistant",
      stack: ["deck.gl", "Typescript", "Python"],
    },
    {
      slug: "slide-wave",
      title: "SlideWave",
      kind: "personal",
      type: "personal",
      tags: ["Deep Learning", "Multimodal"],
      year: "2019",
      summary:
        "Hand gesture recognition built with CNNs to navigate slides hands-free.",
      description:
        "A computer vision project that uses a convolutional neural network to recognize hand gestures in real time and map them to PowerPoint controls. Built to explore how deep learning can replace physical input devices, the model was trained on a custom gesture dataset and translates movements like swipes and pinches into slide navigation commands.",
      role: "AI Engineer",
      stack: ["Python", "CNN"],
    },
    {
      slug: "hyperloop",
      title: "Hyperloop",
      kind: "personal",
      type: "personal",
      tags: ["Automotive", "SpaceX"],
      year: "2019",
      summary:
        "The first air-levitated hyperloop pod, designed for SpaceX's Hyperloop Competition.",
      description:
        "Helped design and manufacture parts (3D printing, laser cutting) for MIT Hyperloop II — the only fully-levitating pod at the 2019 SpaceX Hyperloop Pod Competition and the top U.S. university entry.",
      role: "Manufacturing Engineer",
      stack: ["3D-Printing", "Machining"],
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
