// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'xanderpero', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '15.819: Uber Marketing',
          description:
            'We created a Tableau dashboard to provide value from the perspective of an Uber manager. We focused on strategic and tactical planning objectives: quarterly market share, month-over-month demand changes, and weather effects.',
          imageUrl:
            'https://media.licdn.com/dms/image/D562DAQHNLTVjDhJ0_w/profile-treasury-image-shrink_800_800/0/1720533486618?e=1721160000&v=beta&t=PvQCmpSiJuRA5irCN-22sHIW-v2O6YCly5qsv_Jupb0',
          link: 'https://example.com',
        },
        {
          title: '15.773: ClueMaster-The LLM',
          description:
            'We devised an LLM-based New York Times Crossword solver and compared various prompting techniques, achieving a maximum accuracy of 47%.',
          imageUrl:
            'https://www.dropbox.com/scl/fi/mz8f5qb2ackowk1onx1hz/ClueMaster-Img.pdf?rlkey=h0xzhqasj6vkaeznvn6qoff64&st=2pmduvpk&dl=0',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Xander Pero\'s Portfolio',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'alexanderpero',
    twitter: 'xanderpero',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'xander@pero.tv',
  },
  resume: {
    fileUrl:
      'https://www.dropbox.com/scl/fi/89uw4lev4mnipp34y2gcb/Apr2024Resume.pdf?rlkey=ql56lrc3zksl9qkvzfcier489&st=1o83f6xw&dl=1', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'PySpark',
    'R',
    'Julia/JuMP',
    'SQL',
    'Git',
    'DataBricks',
    'Pycharm',
    'AWS',
    'Agile/Kanban',
    'Tableau',
    'FlexSim',
  ],
  experiences: [
    {
      company: 'MIT Sloan | MFS Investment Management',
      position: 'Capstone Project | Data Science Intern',
      from: 'February 2024',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Ameren',
      position: 'Data Innovation Intern',
      from: 'June 2021',
      to: 'December 2022',
      companyLink: '',
    },
    {
      company: 'Various article websites',
      position: 'Freelance Writer',
      from: 'January 2017',
      to: 'Present',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Massachusetts Institute of Technology Sloan',
      degree: 'Master of Business Analytics',
      from: 'August 2023',
      to: 'Present',
    },
    {
      institution: 'University of Illinois at Urbana-Champaign',
      degree: 'Bachelor of Science in Industrial Engineering',
      from: '2019',
      to: '2023',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: ''
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
