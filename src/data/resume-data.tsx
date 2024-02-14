import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Adam Butler",
  initials: "AB",
  location: "Bristol, UK",
  locationLink: "https://www.google.com/maps/place/bristol",
  about:
    "Full Stack Engineer specialising in Ruby, JavaScript and React Native. Father, organiser of Bristol JS, photographer, creative coder and hardware hacker.",
  summary:
    "I'm a product-focused Full Stack Engineer and love building highly effective and happy engineering teams building great products. I've built many products and teams from scratch and led teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with Ruby, TypeScript and React Native. However, over my 16 years of experience I've bootstraped startups, delivered enterprise platforms, critical fintech tooling, IoT products, games, and mobile apps. I'm a father to my 2-year-old daughter Ada and in my spare time am an organiser of Bristol JS, photographer, creative coder, hardware hacker and occasional speaker at meetups and conferences.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1238468?v=4",
  personalWebsiteUrl: "https://labfoo.dev",
  contact: {
    email: "adam@labfoo.dev",
    tel: "(+44) 07445 288532",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/adambutler",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/butleradam/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/labfoo",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Bath",
      degree: "BA, Digital Design",
      start: "2007",
      end: "2010",
    },
  ],
  work: [
    {
      company: "BBC Maestro",
      link: "https://www.bbcmaestro.com/",
      badges: ["Remote"],
      title: "Chief Technology Officer",
      start: "Dec 2021",
      end: "Feb 2024",
      description:
        "Built a high-performing and happy team of engineers to build a platform for online learning with courses from the world's greatest minds. Technologies: Ruby on Rails, Stimulus.js, ViewComponent, Turbo, TypeScript, React Native, GraphQL.",
    },
    {
      company: "Carescribe",
      link: "https://carescribe.io/",
      badges: ["Contract", "Hybrid"],
      title: "Senior Ruby & JavaScript Engineer",
      start: "Jan 2021",
      end: "Nov 2021",
      description:
        "During my time with the team at Carescribe, I worked alongside the CTO to help define the company's engineering practices, project planning, tracking tools and supproted with hiring. Furthermore, I worked on and built many parts of the Carescribe platform. This included the transcoding service, auto-summarisation AI tooling, infrastructure, a note-taking tool, a partner portal, and mobile/browser/desktop applications.",
    },
    {
      company: "TechTalks.io",
      link: "https://techtalks.io/",
      badges: ["Founder"],
      title: "Director",
      start: "May 2020",
      end: "Present",
      description:
        "TechTalks is a community of engineering, design, product and UX experts. You can watch and discuss talks, get involved with a community and share your ideas.",
    },
    {
      company: "Freeagent",
      link: "https://www.freeagent.com/",
      badges: ["Contract"],
      title: "Senior Ruby Engineer",
      start: "Jul 2020",
      end: "Dec 2020",
      description:
        "During this 6-month contract with FreeAgent, I worked as part of the Banking experience team on a Cashflow feature aimed at supporting small businesses.",
    },
    {
      company: "Ordoo",
      link: "http://ordoo3.webflow.io/",
      badges: [],
      title: "Chief Technology Officer",
      start: "Apr 2018",
      end: "Jul 2020",
      description:
        "Ordoo is a mobile ordering and payment platform for cafes, coffee shops, and restaurants. Technologies: Ruby on Rails, React Native, JSON:API, OAuth 2.0, Node.js.",
    },
    {
      company: "Nexmo (now Vonage)",
      link: "https://developer.vonage.com",
      badges: [],
      title: "Developer Centre Technical Lead",
      start: "Jan 2017",
      end: "Apr 2018",
      description:
        "I built an innovative developer centre with rich documentation and interactive API examples. Technologies: Ruby on Rails, React, Node.js, GraphQL.",
    },
    {
      company: "Simpleweb",
      link: "https://simpleweb.co.uk/",
      badges: [],
      title: "Full-Stack Developer",
      start: "Feb 2012",
      end: "Jan 2017",
      description:
        "I worked as a full-stack developer at Simpleweb. A purpose-driven software agency that specialises in new technologies, product development, and human interaction.",
    },
    {
      company: "Duo",
      link: "https://duoboots.com/",
      badges: [],
      title: "Web Designer & Development Co-ordinator",
      start: "Apr 2018",
      end: "Jul 2020",
      description:
        "I worked as a web developer building highly bespoke campaign tooling for an e-commerce company.",
    },
  ],
  skills: [
    "Leadership",
    "Building happy and productive teams",
    "System Architecture",
    "Ruby / Ruby on Rails",
    "JavaScript / TypeScript",
    "React / Next.js / React Native",
    "Node.js",
    "GraphQL",
    "Stimulus.js",
    "Turbo / Hotwire",
    "Turbo Native  / Strada",
    "ViewComponent",
  ],
  projects: [
    {
      title: "BBC Maestro",
      techStack: [
        "Ruby on Rails",
        "TypeScript",
        "Turbo / Hotwired",
        "Stumulus.js",
        "ViewComponent",
        "GraphQL",
        "React Native",
        "AWS (S3, CloudFront, MediaConvert)",
        "Docker",
      ],
      description:
        "Enable people to discover and hone their passions with support, inspiration and guidance from the most credible talent in the world.",
      link: {
        label: "bbcmaestro.com",
        href: "https://bbcmaestro.com/",
      },
    },
    {
      title: "Luca",
      techStack: [
        "Ruby on Rails",
        "TypeScript",
        "Turbo / Hotwired",
        "Turbo Native / Strada",
        "ViewComponent",
        "Kamal",
        "Docker",
      ],
      description:
        "Luca is a mobile app and PWA for personal training. It allows trainers and their clients to track progress and manage their workouts, training plan and appointments.",
      link: {
        label: "luca.labfoo.dev",
        href: "https://luca.labfoo.dev/",
      },
    },
    {
      title: "TechTalks.io",
      techStack: [
        "Side Project",
        "Ruby on Rails",
        "Turbo / Hotwired",
        "Stumulus.js",
        "ViewComponent",
      ],
      description:
        "Join a community of engineering, design, product and UX experts. Watch and discuss talks. Get involved with a community. Share your ideas.",
      link: {
        label: "techtalks.io",
        href: "https://techtals.io/",
      },
    },
    {
      title: "Bristol JS",
      techStack: ["Meetup Community", "Organiser"],
      description:
        "The main organiser of Bristol JS, a community of JavaScript developers with over 2,350 members running since 2012.",
      link: {
        label: "meetup.com/bristoljs",
        href: "https://www.meetup.com/BristolJS/",
      },
    },
  ],
} as const;
