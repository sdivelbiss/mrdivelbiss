import NCLMain from '../images/NCL/main.png';
import NCLSecondary from '../images/NCL/secondary.png';
import GMIMain from '../images/GMI/main.png';
import GMIHistory from '../images/GMI/history.png';
import GMISecondary from '../images/GMI/secondary.png';
import GMIWorklists from '../images/GMI/worklists.png';
import MediaHubMain from '../images/MediaHub/main.png';
import MediaHubSecondary from '../images/MediaHub/secondary.png';
import DataVisualizerMain from '../images/DataVisualizer/main.png';
import ReChartsMain from '../images/ReCharts/main.png';

/**
 * App urls.
 * @type {Object}
 */
export const APP_URLS = {
  HOME: '/',
  EXPERIENCE: '/experience',
  PROJECTS: '/projects',
  // ABOUT: '/about',
  TECH: '/tech',
  CONTACT: '/contact',
};

export const EXPERIENCE = [
  {
    company: 'Gracenote - A Nielsen Company',
    title: 'Software Engineer II - Frontend',
    description:
      'Designed multiple packages that are in use across the company including utility tools and component libraries. Helped to mentor junior developers.',
    startDate: '06/2019',
    endDate: 'present',
    location: 'Emeryville, CA',
  },
  {
    company: 'Gracenote - A Nielsen Company',
    title: 'Software Engineer - Frontend',
    description:
      'At Gracenote I worked in a small frontend team using React, Redux, SCSS, Webpack, Babel to write highly performant frontend code. Worked on multiple high value projects integral to the core business of the company.',
    startDate: '09/2018',
    endDate: '06/2019',
    location: 'Emeryville, CA',
  },
  {
    company: 'Vlocity',
    title: 'UI Developer',
    description:
      'Worked with the client facing team to deliver incredible user interfaces with speed and efficiency. Worked with JavaScript and Angular to build frontend applications for use by large nationwide companies. Had a strong focus on cross browser compatibility as well as accessibility.',
    startDate: '06/2017',
    endDate: '09/2018',
    location: 'San Francisco, CA',
  },
];

export const PROJECTS = [
  {
    name: 'Content Link',
    description: 'Content Link is a schedule and program manager',
    mainImg: NCLMain,
    allImages: [NCLMain, NCLSecondary],
  },
  {
    name: 'Global Mapping Interface',
    description: 'App to map external data to internal metadata',
    mainImg: GMIMain,
    allImages: [GMIMain, GMIHistory, GMISecondary, GMIWorklists],
  },
  {
    name: 'Media Hub',
    description: 'Internal tool for media procurement and image editing',
    mainImg: MediaHubMain,
    allImages: [MediaHubMain, MediaHubSecondary],
  },
  {
    name: 'Data Visualizer',
    description: 'Visualize Internal Data Model',
    mainImg: DataVisualizerMain,
    allImages: [DataVisualizerMain],
  },
  {
    name: 'ReCharts',
    description: 'React Wrapper for echarts library',
    mainImg: ReChartsMain,
    allImages: [ReChartsMain],
  },
];

export const EDUCATION = [
  {
    name: 'UC Berkeley Extension',
    program: 'Software Development and Programming',
    startDate: '2018',
    endDate: 'present',
  },
  {
    name: 'State University of New York Empire State College',
    program: 'Bachelor of Business Administration - BBA',
    startDate: '2013',
    endDate: '2016',
  },
];

export const VOLUNTEER = [
  {
    name: 'Code Nation',
    description:
      'Code Nation equips students in under-resourced high schools with the skills, experiences, and connections that together create access to careers in tech.',
    startDate: '03/2019',
    endDate: 'present',
  },
];

export const TECH = [
  {
    name: 'Javascript',
    image: '',
  },
  {
    name: 'Node',
    image: '',
  },
  {
    name: 'Deno',
    image: '',
  },
  {
    name: 'React',
    image: '',
  },
  {
    name: 'Redux',
    image: '',
  },
  {
    name: 'Docker',
    image: '',
  },
  {
    name: 'Go',
    image: '',
  },
  {
    name: 'Git',
    image: '',
  },
  {
    name: 'Webpack',
    image: '',
  },
  {
    name: 'Storybook',
    image: '',
  },
  {
    name: 'Jest',
    image: '',
  },
  {
    name: 'Elastic Search',
    image: '',
  },
];

export const PEOPLE_I_FOLLOW = [
  {
    name: 'Kent C. Dodds',
    image: 'https://avatars3.githubusercontent.com/u/1500684?s=400&u=1c014810361080e75ad80cdb8577ced97da65b11&v=4',
    github: 'https://github.com/kentcdodds',
  },
  {
    name: 'Dan Abramov',
    image: 'https://avatars1.githubusercontent.com/u/810438?s=400&u=35ccd184f97ba62d6332c91d39168cae69602322&v=4',
    github: 'https://github.com/gaearon',
  },
  {
    name: 'Kyle Simpson',
    image: 'https://avatars0.githubusercontent.com/u/150330?s=400&u=41aa48771028d34bcf025eefe919bf75fbda77d4&v=4',
    github: 'https://github.com/getify',
  },
  {
    name: 'Jed Watson',
    image: 'https://avatars1.githubusercontent.com/u/872310?s=400&u=9548676d01f104232ee42e5ac0d985db77e6a5a4&v=4',
    github: 'https://github.com/JedWatson',
  },
];

export const PROJECT_I_FOLLOW = [
  {
    name: 'react-select',
    author: 'Jed Watson',
    github: 'https://github.com/JedWatson/react-select',
  },
  {
    name: 'Recoil',
    author: 'Facebook',
    github: 'https://github.com/facebookexperimental/Recoil',
  },
  {
    name: 'Luxon - DateTime',
    github: 'https://github.com/moment/luxon',
  },
  {
    name: 'Babel',
    github: 'https://github.com/babel/babel',
  },
  {
    name: 'Prettier',
    github: 'https://github.com/prettier/prettier',
  },
  {
    name: 'Husky',
    author: 'Typicode',
    github: 'https://github.com/typicode/husky',
  },
  {
    name: 'Redux',
    github: 'https://github.com/reduxjs/redux',
  },
  {
    name: 'Devt',
    author: 'Scott Divelbiss',
    github: 'https://github.com/sdivelbiss/devt',
  },
];