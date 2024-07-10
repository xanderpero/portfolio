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
          title: 'MIT Sloan | Bacardi - Analytics Lab Project',
          description:
            'A full-semester, Analytics Lab project I worked with 3 other MIT Master of Business Analytics students. The main problem we solved was determining key demographic features that drive alcohol sales primarily using census data. We used PySpark within Databricks for data preprocessing and our final random forest model. We shared our findings with the Sr. Data Scientist and Data & Analytics team.',
          imageUrl:
            'https://www.dropbox.com/scl/fi/q8dgixcpng1ohclfxjygv/ALab.png?rlkey=b3g869ha0n308pgvw8c2in95u&st=rlsbaaxu&dl=1',
          link: 'https://www.linkedin.com/in/alexanderpero/details/projects/',
        },
        {
          title: 'UIUC Senior Design: Assembly Line Material Flow Improvement',
          description:
            'Worked on a team of four to improve the material flow on a manual assembly line for Illinois Tool Works. This involved introducing a water spider, a.k.a a material handler, which will restock workstations and break down cardboard boxes. We modeled the current state using simulation, drafted rebalance proposals, and validated them using simulation of the future state that involves water spiders.',
          imageUrl:
            'https://www.dropbox.com/scl/fi/hu4p5umpdye3ibktcojwm/UIUC_SR.png?rlkey=u7396lojqvoukd7qn710xlgef&st=bwoxrjt3&dl=1',
          link: 'https://www.linkedin.com/in/alexanderpero/details/projects/',
        },
        {
          title: '15.819: Uber Marketing',
          description:
            'We created a Tableau dashboard to provide value from the perspective of an Uber manager. We focused on strategic and tactical planning objectives: quarterly market share, month-over-month demand changes, and weather effects.',
          imageUrl:
            'https://media.licdn.com/dms/image/D562DAQHNLTVjDhJ0_w/profile-treasury-image-shrink_800_800/0/1720533486618?e=1721160000&v=beta&t=PvQCmpSiJuRA5irCN-22sHIW-v2O6YCly5qsv_Jupb0',
          link: 'https://www.linkedin.com/in/alexanderpero/details/projects/',
        },
        {
          title: '15.773: ClueMaster-The LLM',
          description:
            'We devised an LLM-based New York Times Crossword solver and compared various prompting techniques, achieving a maximum accuracy of 47%.',
          imageUrl:
            'https://www.dropbox.com/scl/fi/9eg6tavge3936v1l9se2g/ClueMaster.png?rlkey=sr2vfbqt7wez2z6clugnlhctk&st=gt2xa1v2&dl=1',
          link: 'https://www.linkedin.com/in/alexanderpero/details/projects/',
        },
        {
          title: '15.072: Is your Computer Safe from Viruses?',
          description:
            'We applied various classification techniques, namely XGBoost, Random Forest, Optimal Classification Trees, and ensemble approaches to the Microsoft Malware Prediction dataset, achieving a AUC of 0.674 on a held-out portion of the labeled dataset.',
          imageUrl:
            'https://www.dropbox.com/scl/fi/5tw9t57qn5djs2bsdqtrp/Edge.png?rlkey=jj3iccpsf1647of201yx6o9nh&st=rv014uig&dl=1',
          link: 'https://www.linkedin.com/in/alexanderpero/details/projects/',
        },
        {
          title: '15.093: US College Visit Route Optimization',
          description:
            'We created a route optimization model for college visits with gas stops along the way. Users can provide their own list of college destinations or use the GoogeMaps API using an address.',
          imageUrl:
            'https://www.dropbox.com/scl/fi/lztqzimwalgtu30zoriuu/Optimization.png?rlkey=l0mf95ijlczbomfqks12tbujh&st=xlvrfcbp&dl=1',
          link: 'https://www.linkedin.com/in/alexanderpero/details/projects/',
        },
        {
          title: '15.095: Prescribing Play Calls in College Football',
          description:
            'Using Optimal Prescriptive Trees, we created a model to choose between passing, rushing, punting, and field goals based on field position, score, and team. Compared against a naive punt/FG 4th down strategy, we achieved an expected 18% increase in points per play.',
          imageUrl:
            'https://www.dropbox.com/scl/fi/dmrf8zqfx425bk680t47c/MLOpt.png?rlkey=8atdkmr8q9g2v5k6tx4gindwz&st=q4y9xakd&dl=1',
          link: 'https://www.linkedin.com/in/alexanderpero/details/projects/',
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
      'https://www.dropbox.com/scl/fi/p1al2dppo5oneqowf9w9v/XanderPero_Resume.pdf?rlkey=99lk41hba1puz8s631v26aizp&st=036tzpbl&dl=1', // Empty fileUrl will hide the `Download Resume` button.
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
