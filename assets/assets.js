import logo from './logo.png';
import logo_dark from './logo_dark.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import sun_icon from './sun_icon.png';
import moon_icon from './moon_icon.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import profile_pic from './profile_pic.jpg';
import hand_icon from './hand-icon.png';
import right_arrow_white from './right-arrow-white.png';
import right_arrow_dark from './right-arrow-dark.png';
import download_icon from './download-icon.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import salesforce from './salesforce.svg';
import isilon from './isilon.svg';
import putty from './putty.png';
import tailwind from './tailwind.png';
import mysql from './mysql.png';
import react from './react.png';
import nextjs from './nextjs.jpeg';
import slack from './slack.png';
import nodejs from './nodejs.png';
import motion from './motion.png';
import macos from './macos.png';
import macosDark from './macos-white.png';
import linux from './linux.png';
import expo from './expo-black.png';
import expoDark from './expo-white.png';
import github from './github.png';
import githubDark from './github-dark.png';
import rightArrow from './right-arrow.png';
import uiIcon from './ui-icon.png';
import mobileIcon from './mobile-icon.png';
import webIcon from './web-icon.png';
import webDev from './web-dev.png';
import panelsTopLeft from './panels-top-left.png';
import panelsTopLeftDark from './panels-top-left-dark.png';
import database from './database.png';
import databaseDark from './database-dark.png';
import workflow from './workflow.png';
import workflowDark from './workflow-dark.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import docker from './docker.png';
import backend from './backend.png';
import backend_dark from './backend-dark.png';
import winscp from './winscp.png';
import express from './expressjs.png';
import jwt from './jwt.webp';
import sequelize from './sequelize.svg';
import mail from './mail.png';
import mail_dark from './mail_dark.png';

export const assets = {
  right_arrow_bold,
  sequelize,
  mail,
  mail_dark,
  jwt,
  express,
  winscp,
  backend,
  backend_dark,
  docker,
  send_icon,
  workflow,
  workflowDark,
  logo,
  logo_dark,
  arrow_icon,
  arrow_icon_dark,
  sun_icon,
  moon_icon,
  menu_black,
  menu_white,
  close_black,
  close_white,
  profile_pic,
  hand_icon,
  right_arrow_white,
  right_arrow_dark,
  download_icon,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  firebase,
  figma,
  git,
  mongodb,
  vscode,
  salesforce,
  isilon,
  putty,
  tailwind,
  mysql,
  react,
  nextjs,
  slack,
  nodejs,
  motion,
  macos,
  macosDark,
  expo,
  expoDark,
  github,
  githubDark,
  rightArrow,
  uiIcon,
  mobileIcon,
  webIcon,
  webDev,
  panelsTopLeft,
  panelsTopLeftDark,
  database,
  databaseDark,
  linux,
};

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Frontend',
    description: 'JavaScript (ES6+), HTML5, CSS3, React, Next.js',
  },
  {
    icon: assets.backend,
    iconDark: assets.backend_dark,
    title: 'Backend',
    description: 'Node.js, Express, Python, RESTful, SOAP, JWT Auth',
  },
  {
    icon: assets.database,
    iconDark: assets.databaseDark,
    title: 'Databases',
    description: 'MySQL, MongoDB, SQLite',
  },
];

export const serviceData = [
  {
    icon: assets.panelsTopLeft,
    darkIcon: assets.panelsTopLeftDark,
    title: 'Web Development',
    description:
      'I design and build modern, responsive websites and web applications using React, Next.js, TailwindCSS, and JavaScript. From landing pages to full-featured apps, I focus on clean code and engaging user experiences.',
    link: '',
  },
  {
    icon: assets.database,
    darkIcon: assets.databaseDark,
    title: 'Backend & Databases',
    description:
      'I develop REST APIs and server-side solutions with Node.js and Express, and work with both SQL (MySQL) and NoSQL (MongoDB) databases. I can integrate external services and make sure everything runs smoothly behind the scenes.',
    link: '',
  },
  {
    icon: assets.workflow,
    darkIcon: assets.workflowDark,
    title: 'Automation & Tech Support',
    description:
      'I provide smart solutions for businesses. From Python scripts to automate tasks, to enterprise system integrations, I help optimize workflows and solve complex problems.',
    link: '',
  },
];

export const toolsData = [
  {
    icon: assets.vscode,
    iconDark: assets.vscode,
    displayName: 'Visual Studio Code',
  },
  // {
  //   icon: assets.firebase,
  //   iconDark: assets.firebase,
  //   displayName: 'Firebase',
  // },
  {
    icon: assets.mongodb,
    iconDark: assets.mongodb,
    displayName: 'MongoDB',
  },
  // {
  //   icon: assets.figma,
  //   iconDark: assets.figma,
  //   displayName: 'Figma',
  // },
  {
    icon: assets.git,
    iconDark: assets.git,
    displayName: 'Git',
  },
  {
    icon: assets.github,
    iconDark: assets.githubDark,
    displayName: 'GitHub',
  },
  {
    icon: assets.salesforce,
    iconDark: assets.salesforce,
    displayName: 'Salesforce',
  },
  {
    icon: assets.isilon,
    iconDark: assets.isilon,
    displayName: 'Isilon/PowerScale',
  },
  {
    icon: assets.putty,
    iconDark: assets.putty,
    displayName: 'PuTTy',
  },
  {
    icon: assets.tailwind,
    iconDark: assets.tailwind,
    displayName: 'Tailwind',
  },
  {
    icon: assets.mysql,
    iconDark: assets.mysql,
    displayName: 'MySQL',
  },
  {
    icon: assets.react,
    iconDark: assets.react,
    displayName: 'React',
  },
  {
    icon: assets.nextjs,
    iconDark: assets.nextjs,
    displayName: 'NextJS',
  },
  {
    icon: assets.docker,
    iconDark: assets.docker,
    displayName: 'Docker',
  },
  {
    icon: assets.slack,
    iconDark: assets.slack,
    displayName: 'Slack',
  },
  {
    icon: assets.nodejs,
    iconDark: assets.nodejs,
    displayName: 'NodeJS',
  },
  {
    icon: assets.motion,
    iconDark: assets.motion,
    displayName: 'Framer Motion',
  },
  {
    icon: assets.linux,
    iconDark: assets.linux,
    displayName: 'Linux',
  },
  {
    icon: assets.macos,
    iconDark: assets.macosDark,
    displayName: 'macOS',
  },
  {
    icon: assets.expo,
    iconDark: assets.expoDark,
    displayName: 'Expo',
  },
  {
    icon: assets.winscp,
    iconDark: assets.winscp,
    displayName: 'WinSCP',
  },
];

export const workData = [
  {
    title: 'MOGEAS - Módulo de Gestión de Asadas',
    description:
      'Fullstack platform for managing water associations (Asadas) in Costa Rica, developed for CISA.',
    bgImage: '/cisa.jpg',
    slug: 'mogeas-fullstack-app',
    category: 'Web Application',
    client: 'CISA Costa Rica',
    role: 'Full Stack Developer',
    duration: '6 months',
    status: 'Completed',
    featured: true,
    problem:
      'Water associations (Asadas) in Costa Rica were managing operations manually with paper-based systems, leading to inefficiencies, lack of centralized data, and poor transparency for community members. There was no digital tool for residents to access information or make payments online.',
    solution:
      'Developed MOGEAS, a comprehensive fullstack web platform that digitizes all association operations. The system includes an admin dashboard for managing members, services, billing, and reports, plus a resident portal for viewing account information and making payments. Built with React for dynamic UI, Node.js/Express for robust API, and MySQL for reliable data management.',
    features: [
      'User authentication and role-based access control with JWT',
      'Real-time member management and service tracking',
      'Automated billing and payment processing',
      'Administrative dashboard with analytics',
      'Resident self-service portal',
      'Mobile-responsive design for accessibility',
      'Comprehensive reporting system',
    ],
    techStack: [react, mysql, nodejs, express, jwt, sequelize, tailwind],
    tags: [
      'Full Stack',
      'Web App',
      'Authentication',
      'Database Design',
      'API Development',
    ],
    links: {
      live: null,
      github: null,
      demo: null,
    },
    screenshots: null,
    details:
      'MOGEAS (Módulo de Gestión de Asadas) is a fullstack application developed for CISA in Costa Rica. The platform was designed to digitalize and centralize the management of Asadas, community-based water associations, providing both administrators and residents with modern tools to manage services efficiently. The system handles everything from member registration to billing cycles, with a focus on transparency and ease of use. Built with modern technologies and best practices, it demonstrates proficiency in database design, RESTful API development, authentication systems, and responsive UI implementation.',
  },
  {
    title: 'D&D Initiative Master',
    description:
      'Real-time combat tracker for Dungeons & Dragons 5e with synchronized multi-device support.',
    bgImage: '/dnd-init-master-bg.png',
    slug: 'dnd-initiative-master',
    category: 'Web Application',
    client: null,
    role: 'Full Stack Developer',
    duration: '3 months',
    status: 'In Progress',
    featured: true,
    problem:
      'Traditional pen-and-paper combat tracking in D&D sessions creates confusion and delays, especially in remote games where multiple participants need to stay synchronized. Manual record-keeping of initiative order, hit points, and conditions leads to errors and slows down gameplay, diminishing the gaming experience.',
    solution:
      'Built a modern, real-time web application that replaces manual combat tracking with an automated, synchronized digital solution. The platform uses Next.js server actions and a PostgreSQL database to manage combat state, while a polling-based sync system ensures all players see updates within 3 seconds. DMs get full control through intuitive modals, while players receive view-only access via shareable party codes.',
    features: [
      'Automatic initiative sorting and turn-based combat management',
      'Real-time synchronization across multiple devices with 6-character party codes',
      'Complete D&D 5e combat system: HP tracking, AC, temporary HP, and all 14 official conditions',
      'Separate DM and player permission modes for controlled access',
      'Responsive design supporting mobile, tablet, and desktop gameplay',
      'Optimistic UI updates for instant feedback on actions',
      'Navigation guards and delete confirmations to prevent data loss',
      'localStorage-based party resumption for quick access to recent sessions',
    ],
    techStack: [nextjs, react, tailwind, nodejs],
    tags: [
      'Next.js',
      'Real-time',
      'TypeScript',
      'Full Stack',
      'PostgreSQL',
      'Gaming',
    ],
    links: {
      live: null,
      github: 'https://github.com/jurgen-alfaro/dnd-initiative-master',
      demo: null,
    },
    screenshots: [
      '/screenshots/dnd-party-view-dm.png',
      '/screenshots/dnd-party-view-player.png',
      '/screenshots/dnd-edit-max-hp.png',
      '/screenshots/dnd-add-combatant.png',
      '/screenshots/dnd-remove-combatant.png',
      '/screenshots/dnd-heal-or-dmg.png',
      '/screenshots/dnd-edit-condition.png',
      '/screenshots/dnd-condition-details.png',
      '/screenshots/dnd-edit-name-or-type.png',
    ],
    details:
      'D&D Initiative Master is a sophisticated combat tracking solution built with Next.js 16 and React 19, designed specifically for Dungeons & Dragons 5th Edition gameplay. The application leverages modern web technologies including TypeScript for type safety, Drizzle ORM for database operations, and Neon PostgreSQL for serverless data storage. The platform implements the complete D&D 5e combat ruleset, including complex mechanics like temporary HP absorption and all 14 official conditions with clickable descriptions. The real-time synchronization system uses a polling-based approach with optimistic UI updates, ensuring smooth gameplay without websocket complexity. Built with accessibility in mind using Radix UI and shadcn/UI components, the application provides an intuitive experience for both dungeon masters managing combat and players following along. The project demonstrates advanced full-stack development skills, including server actions, database schema design with Drizzle ORM, state synchronization patterns, and responsive UI development.',
  },
];
