import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anthony Bello",
  initials: "DV",
  url: "https://smartbello.io",
  location: "Johns Creek, GA",
  locationLink: "https://www.google.com/maps/place/johnscreek",
  description:
    "Senior Software Engineer. I love building things and helping people.",
  summary:
    "🚀 Senior Software Engineer with 10+ years of web and mobile development expertise, delivering superior products with a proven track record. 🌐 Demonstrated proficiency in the Agile development process, consistently achieving excellent results in diverse organizations. 🛠️ Qualifications strengthened by a deep understanding of JavaScript libraries and frameworks, including React.js, React Native, Next.js, and Node. Ready to elevate your tech game! 💻🌟",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Typescript",
    "Web3",
    "Python",
    "MongoDB",
    "SQL",
    "AWS",
    "Docker",
    "Agile",
    "Communication",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://smartbello.short.gy/github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://smartbello.short.gy/linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://smartbello.short.gy/twitter",
        icon: Icons.x,

        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://smartbello.short.gy/telegram",
        icon: Icons.telegram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Clevertech",
      href: "https://lumenalta.com",
      badges: [],
      location: "New York, NY",
      title: "Senior Software Engineer",
      logoUrl: "/clevertech.jpg",
      start: "Oct 2020",
      end: "Apr 2025",
      description:
        "Delivered secure web and mobile apps using React, Next.js, React Native, GraphQL, TypeScript, and AWS. Built platforms for healthcare, SaaS, and Web3—ranging from prescription tools to blockchain-based fan engagement. Optimized performance with Apollo GraphQL, automated CI/CD with Jenkins and AWS CodePipeline.",
    },
    {
      company: "ClearSlide",
      badges: [],
      href: "https://www.clearslide.com",
      location: "San Francisco, CA",
      title: "Senior Software Engineer",
      logoUrl: "/clearslide.jpg",
      start: "Oct 2018",
      end: "Sep 2020",
      description:
        "Built a scalable sales engagement platform using Node.js, Django, and microservices with MongoDB, MySQL, and PostgreSQL. Improved SEO and UX with Tailwind CSS, responsive design, and metadata optimization; ensured quality with automated testing. Managed Docker/Kubernetes deployments, used Terraform for infrastructure, and supported agile workflows with Jira and Git.",
    },
    {
      company: "Baytech Consulting",
      href: "https://www.baytechconsulting.com",
      badges: [],
      location: "Irivine, CA",
      title: "Full Stack Developer",
      logoUrl: "/baytech.jpg",
      start: "Aug 2015",
      end: "Oct 2018",
      description:
        "Developed performant, component-based websites with optimized state management and reusable frontend architecture. Migrated APIs from REST to GraphQL for improved data fetching and created reusable Django components to speed up backend work. Worked closely with Product and Design to translate wireframes into maintainable, user-centric code.",
    },
  ],
  education: [
    {
      school: "Bloom Tech",
      href: "https://www.bloomtech.com",
      degree: "Computer Programming",
      logoUrl: "/bloomtech.jpg",
      start: "2017",
      end: "2017",
    },
    {
      school: "West Georgia Technical College",
      href: "https://www.westgatech.edu",
      degree: "Associate Degree of Computer Science",
      logoUrl: "/westgeorgia.jpg",
      start: "2013",
      end: "2015",
    },
  ],
  projects: [
    {
      title: "Cary RX",
      href: "https://caryrx.com",
      dates: "Jan 2021 - Oct 2022",
      active: true,
      description:
        "CaryRx is a digital pharmacy platform that streamlines prescription management and delivery with a patient-first approach. Founded in 2017 in Washington, D.C., it leverages technology to enhance care for both patients and providers.",
      technologies: [
        "React.js",
        "React Native",
        "Typescript",
        "MongoDB",
        "Express.js",
        "PostgreSQL",
        "Django",
        "TailwindCSS",
        "AWS",
        "Twilio",
        "Stripe",
        "HIPAA",
      ],
      links: [
        {
          type: "Website",
          href: "https://caryrx.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/caryrx",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/screen_caryrx.jpg",
      video: "",
    },
    {
      title: "Moonwalk",
      href: "https://moonwalk.com",
      dates: "Nov 2022 - Sep 2023",
      active: true,
      description:
        "Moonwalk is a Web3 platform that lets brands, creators, and sports teams build on-chain fan engagement ecosystems. Founded in 2020 in Miami, it enables branded digital experiences to drive community interaction and loyalty.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "PostgreSQL",
        "Prisma",
        "Apollo GraphQL",
        "Web3.js",
        "Wallet Connect",
        "AWS Lambda",
        "AWS S3",
      ],
      links: [
        {
          type: "Website",
          href: "https://moonwalk.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/screen_moonwalk.jpg",
      video: "",
    },
    {
      title: "Startly",
      href: "https://startly.com",
      dates: "Dec 2023 - Apr 2025",
      active: true,
      description:
        "Startly is an all-in-one ITSM and Professional Services platform that streamlines project, support, change, asset, and finance management. It helps service organizations improve operations and track profitability in one integrated system.",
      technologies: [
        "React.js",
        "Redux",
        "Material UI",
        "SASS",
        "Typescript",
        ".NET",
        "MS SQL",
        "Microsoft Azure",
        "Stripe",
        "Socket.io",
        "Jest",
        "Webpack",
        "Mobile Friendly",
      ],
      links: [
        {
          type: "Website",
          href: "https://startly.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/screen_startly.jpg",
      video: "",
    },
    {
      title: "ClearSlide",
      href: "https://clearslide.com",
      dates: "Oct 2018 - Sep 2020",
      active: true,
      description:
        "ClearSlide is a robust Sales Engagement Platform that improves interactions between sales, marketing teams, and customers. It combines content management, communication tools, and analytics to streamline the entire sales process.",
      technologies: [
        "React.js",
        "Python",
        "PostgresSQL",
        "Redis",
        "WebSocket",
        "Bootstrap",
        "SASS",
        "AWS",
        "Docker",
        "Jenkins",
        "ELK stack",
        "Salesforce",
        "SMTP",
      ],
      links: [
        {
          type: "Website",
          href: "https://clearslide.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ClearSlide",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/screen_clearslide.jpg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "FirstNet Hackathon for Public Safety",
      dates: "March 23rd - 24th, 2015",
      location: "San Francisco, California",
      description:
        "Developed a mobile application that transmits a victim's medical data from an ambulance to hospital doctors in real time.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Coding Hackathon",
      dates: "February 7th - 8th, 2015",
      location: "San Francisco, California",
      description:
        "Developed a web application that aggregates social media data related to cryptocurrencies and forecasts future price trends.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [],
    },
    {
      title: "MHacks 9 Hackathon",
      dates: "March 25th - 26th, 2015",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website introducing users to air traffic control, built with THREE.js and a Node.js backend.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [],
    },
  ],
} as const;
