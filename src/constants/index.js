import { p } from "framer-motion/client";

export const myProjects = [
  {
    id: 1,
    title: "College Job Portal",
    description:
      "A platform for college students to find job opportunities, internships, and connect with potential employers.",
    subDescription: [
      "Job Portal is a full-stack web application that allows companies to post job listings and candidates to apply for them. It features user authentication via Clerk, image and resume uploads using Cloudinary, and stores data in MongoDB. Deployed using Vercel for production scalability.",  
    ],
    href: "job-portal-full-stack-client-olive.vercel.app",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "Clerk",
        path: "/assets/logos/clerk.svg",
      },
      {
        id: 6,
        name: "Cloudinary",
        path: "/assets/logos/cloudinary.svg",
      },
      {
        id: 7,
        name: "Framer Motion",
        path: "/assets/logos/framer-motion.svg",
      }
    ],
  },
  {
    id: 2,
    title: "Real Time Chat Application",
    description:
      "Real time chat application with authentication and websocket.io for seamless user management.",
    subDescription: [
      "A full-stack real-time messaging app where users can send and receive messages instantly without reloading the page. Implemented using Socket.IO for bi-directional communication between client and server. Includes user-friendly chat interface and is accessible online via deployment. Tech Stack: React.js, Node.js, Express.js, MongoDB, Socket.IO.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/node.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },{
        id: 5,
        name: "Socket.IO",
        path: "/assets/logos/socketio.svg",
      },{
        id: 6,
        name: "Express.js",
        path: "/assets/logos/express.svg",
      },
      {
        id: 7,
        name: "Framer Motion",
        path: "/assets/logos/framer-motion.svg",
      }
    ],
  },
  {
    id: 3,
    title: "LMS Study Website (Edemy)",
    description:
      "A Full Stack Learning Management System and e-Learning platform.",
    subDescription: [
      "A full-stack web application that connects job seekers with recruiters. Job seekers can search and apply for job listings, manage profiles, and upload resumes. Recruiters can post job openings, manage job posts, view applicant details, and accept/reject applications. Includes real-time performance monitoring and error tracking for better reliability.

    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/node.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },{
        id: 5,
        name:"Express.js",
        path: "/assets/logos/express.svg",
      },{
        id: 6,
        name:"Clerk",
        path: "/assets/logos/clerk.svg",
      }
    ],
  },
  {
  id: 4,
  title: "Gemini Clone",
  description:
    "A Gemini-powered AI web app that uses the Gemini API to fetch and display intelligent responses, built with React and styled using Tailwind CSS.",
  subDescription: [
    "Integrated Gemini API to fetch AI-generated responses and handle user prompts.",
    "Built a clean and responsive UI using React components and Tailwind CSS.",
    "Implemented real-time input handling and smooth output rendering.",
    "Designed for extensibility with support for multiple conversation threads.",
  ],
  href: "",
  logo: "",
  image: "/assets/projects/gemini-clone.jpg",
  tags: [
    {
      id: 1,
      name: "React",
      path: "/assets/logos/react.svg",
    },
    {
      id: 2,
      name: "JavaScript",
      path: "/assets/logos/javascript.svg",
    },
    {
      id: 3,
      name: "Tailwind CSS",
      path: "/assets/logos/tailwind.svg",
    },
    {
      id: 4,
      name: "Gemini API",
      path: "/assets/logos/api.svg",
    },
  ],
},
  {
  id: 5,
  title: "usePopcorn",
  description:
    "A modern movie browsing app that fetches and displays movie data with ratings using a public API.",
  subDescription: [
    "Built with React.js using functional components and hooks.",
    "Integrated OMDb API to search and fetch movie details and ratings.",
    "Implemented a responsive UI with dark/light theme toggling.",
    "Allowed users to rate movies and maintain a personal watchlist with local storage.",
  ],
  href: "",
  logo: "",
  image: "/assets/projects/usepopcorn.jpg",
  tags: [
    {
      id: 1,
      name: "React",
      path: "/assets/logos/react.svg",
    },
    {
      id: 2,
      name: "JavaScript",
      path: "/assets/logos/javascript.svg",
    },
    {
      id: 3,
      name: "OMDb API",
      path: "/assets/logos/api.svg",
    },
    {
      id: 4,
      name: "Tailwind CSS",
      path: "/assets/logos/tailwind.svg",
    },
  ],
},
  
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Car Manufacture",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
