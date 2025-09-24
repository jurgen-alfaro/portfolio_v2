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

export const assets = {
  right_arrow_bold,
  sequelize,
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
    details:
      'MOGEAS (Módulo de Gestión de Asadas) is a fullstack application developed for CISA in Costa Rica. The platform was designed to digitalize and centralize the management of Asadas, community-based water associations, providing both administrators and residents with modern tools to manage services efficiently.',
    techStack: [react, mysql, nodejs, express, jwt, sequelize, tailwind],
  },
];
