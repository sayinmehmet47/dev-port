import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Mehmet Sayin',
  title: 'Welcome.',
  description:
    'I am a Full Stack Developer with experience in various technologies including Nx Monorepo, NestJS, Tailwind CSS, Next.js, PostgreSQL, Single SPA, Monorepo, GraphQL, SCSS, ReactJS, Redux, NodeJS, MongoDB, TypeScript, and Docker. I have a strong focus on writing robust, user-friendly applications and efficient end-to-end testing with Cypress and Playwright.',
  resumeLink: 'https://sayinmehmet47.github.io/resume/',
};

export const openSource = {
  githubUserName: 'sayinmehmet47',
};

export const contact = {
  email: 'sayinmehmet47@gmail.com',
};

export const socialLinks = {
  github: 'https://github.com/sayinmehmet47',
  linkedin: 'https://www.linkedin.com/in/sayinmehmet/',
};

export const skillsSection = {
  title: 'What I do',
  subTitle:
    'Dedicated Full Stack Developer with a passion for exploring diverse technologies',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/webdev.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in building robust and user-friendly applications using Nx Monorepo, NestJS, Tailwind CSS, Next.js, and PostgreSQL.'
        ),
        emoji(
          '⚡ Proficient in Full Stack Development with technologies like Single SPA, Monorepo, NestJS, Graphql, SCSS, NextJS, PostgreSQL, Docker.'
        ),
        emoji(
          '⚡ Skilled in writing end-to-end tests with Cypress and Playwright to ensure the scalability and quality of applications.'
        ),
        emoji(
          '⚡ Expertise in building user interfaces for websites and/or web applications using ReactJS, Redux, NodeJS, MongoDB, TypeScript.'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'logos:javascript',
        },
        {
          skillName: 'NestJS',
          fontAwesomeClassname: 'logos:nestjs',
        },
        {
          skillName: 'TypeScript',
          fontAwesomeClassname: 'logos:typescript-icon',
        },
        {
          skillName: 'Nx',
          fontAwesomeClassname: 'logos:nx',
        },
        {
          skillName: 'Playwright',
          fontAwesomeClassname: 'logos:playwright',
        },
        {
          skillName: 'Jest',
          fontAwesomeClassname: 'logos:jest',
        },
        {
          skillName: 'reactjs',
          fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'angularjs',
          fontAwesomeClassname: 'devicon:angularjs',
        },
        {
          skillName: 'nodejs',
          fontAwesomeClassname: 'logos:nodejs-icon',
        },
        {
          skillName: 'npm',
          fontAwesomeClassname: 'logos:npm-icon',
        },
        {
          skillName: 'yarn',
          fontAwesomeClassname: 'logos:yarn',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassname: 'logos:postgresql',
        },
        {
          skillName: 'MySQL-icon',
          fontAwesomeClassname: 'logos:mysql-icon',
        },
        {
          skillName: 'Vercel',
          fontAwesomeClassname: 'logos:vercel-icon',
        },
        {
          skillName: 'NextJS',
          fontAwesomeClassname: 'logos:nextjs-icon',
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassname: 'logos:mongodb-icon',
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: 'Programming',
  },
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
  },
  {
    Stack: 'Backend',
  },
  {
    Stack: 'Testing',
  },
];

export const educationInfo = [
  {
    schoolName: 'Turkish Military Academy - Ankara',
    subHeader: 'Bachelor of Science: Industrial and Systems Engineering',
    duration: '2009 - 2013',
    grade: '3.20/4.00',
    desc: 'Bachelor of Science in Industrial and Systems Engineering',
    descBullets: [],
    github: '',
  },
  {
    schoolName: 'Social Hackers Academy - Athens',
    subHeader: 'Full Stack Development',
    duration: '03/2021 – 11/2021',
    desc: 'Learned Html, Sass, CSS, JS, ReactJS,NextJS, Redux, NodeJS, TypeScript, Strapi. Firebase, MongoDB, TypeOrm, PostgreSQL, Docker',
    descBullets: [],
    github: '',
  },
];

export const experience = [
  {
    role: 'Junior Full Stack Developer',
    company: 'Steiner AG',
    companylogo: '/img/icons/common/steiner.svg',
    date: '10/2022 - 02/2024',
    desc: "Contributed to the development of Collab Room, a robust and user-friendly application that meets the construction industry's project management needs. Worked closely with a cross-functional team to build the application using technologies like Nx Monorepo, NestJS, Tailwind CSS, Next.js, and PostgreSQL. Additionally, used Playwright to develop and maintain end-to-end tests to ensure the scalability and quality of the application.",
  },
  {
    role: 'Junior Full Stack Developer',
    company: 'Roambee',
    companylogo: '/img/icons/common/roambee.png',
    date: '05/2022–09/2022',
    descBullets: [
      'Worked with Single SPA, Monorepo, NestJS, Graphql, SCSS, NextJS, PostgreSQL, Docker.',
      'Wrote some E2E tests with Cypress.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'XYZ Reality',
    companylogo: '/img/icons/common/xyz.png',
    date: '06/2021 – 09/2021',
    descBullets: [
      'Built user interfaces for websites and/or web applications.',
      'Worked with ReactJS, Redux, NodeJS, MongoDB, TypeScript.',
      'Created self-contained, reusable, and testable modules and components.',
      'Wrote some end-to-end tests on Cypress, JestJS.',
    ],
  },
];

export const projects = [
  {
    name: 'Book Worms',
    desc: 'Book Worms is a comprehensive web application designed for book enthusiasts. It allows users to search and download their desired books with ease. The application is built using a robust tech stack including ReactJS, TypeScript, NodeJS, ExpressJS, MongoDB, and is containerized using Docker and orchestrated with Kubernetes. The application is hosted on Vercel and the source code is available on GitHub. It showcases the use of modern web development practices and tools, and serves as a great example of a full-stack JavaScript application.',
    link: 'https://kitap-kurdu-bx87.vercel.app/',
    github: 'https://github.com/sayinmehmet47/kitapKurdu',
    tags: [
      'ReactJS',
      'TypeScript',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
      'Kubernetes',
      'Docker',
    ],
  },
  {
    name: 'Currency Portfolio',
    desc: 'Currency Portfolio is a web application that allows users to manage and track their currency investments. It provides real-time data on various currencies, enabling users to make informed decisions. The application is built using ReactJS, TypeScript, NodeJS, ExpressJS, and MongoDB. It showcases the use of modern web development practices and tools, and serves as a great example of a full-stack JavaScript application.',
    github: 'https://github.com/sayinmehmet47/currency-portfolio',
    link: 'https://currency-portfolio.netlify.app/',
    tags: ['ReactJS', 'TypeScript', 'NodeJS', 'ExpressJS', 'MongoDB'],
  },
  {
    name: 'Electronic Products',
    desc: 'A web application for browsing and purchasing electronic products. Includes an admin panel for product management and PayPal integration for payments. Built with ReactJS, TypeScript, NodeJS, ExpressJS, MongoDB, and React Admin.',
    github: 'https://github.com/sayinmehmet47/electronic-products47',
    link: 'https://electronic-products47.vercel.app/',
    tags: [
      'ReactJS',
      'TypeScript',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
      'React Admin',
      'PayPal',
    ],
  },
  {
    name: 'Netflix Clone',
    desc: 'A clone of the Netflix Official Website. Features include user authentication with Google, GitHub, and email, movie browsing by categories, and detailed movie information. Built with NextJS, Prisma, Tailwind CSS, NextAuth, TypeScript, PostgreSQL, and Jest for testing. Movie data is fetched from moviedb.',
    github: 'https://github.com/sayinmehmet47/netflix-clone',
    link: 'https://netflix-clone-47.vercel.app/',
    tags: [
      'NextJS',
      'Prisma',
      'Tailwind CSS',
      'NextAuth',
      'TypeScript',
      'PostgreSQL',
      'Jest',
    ],
  },
];

export const feedbacks = [
  {
    name: 'Austin Coontz',
    feedback:
      'I was trying to make a website that is blazingly fast. I had no idea where to start. What did I do? Called my friend Brendan. I had no Idea what i Was doing! He fixed it. Website? Fast. Blazingly. Done.',
  },
  {
    name: 'Andrew Rose',
    feedback:
      'Brendan Glancy, the website developer I worked with was exceptional. He took the time to understand my needs and goals, and created a website that not only met, but exceeded my expectations. Their communication was clear and timely throughout the process, and I would highly recommend them to anyone in need of an exceptional website.',
  },
];

export const seoData = {
  title: 'Mehmet Sayin Portfolio',
  description: 'Full Stack Developer showcasing my work and experience.',
  image: 'https://avatars.githubusercontent.com/sayinmehmet47',
  url: 'https://sayinmehmet47.github.io/resume/',
  keywords: [
    'Mehmet Sayin',
    'Portfolio',
    'Full Stack Developer',
    'Open to work',
    'Switzerland',
    'Developer',
    'web developer',
  ],
};
