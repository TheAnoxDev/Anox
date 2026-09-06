export interface Translation {


  lang: "en" | "fa";



  nav: {

    home: string;

    about: string;

    technology: string;

    projects: string;

    contact: string;

    login: string;

    register: string;

    store: string;

    platform: string;

  };




  hero: {

    badge: string;

    title: string;

    subtitle: string;

    highlight: string;

    description: string;

    primary: string;

    secondary: string;

    button: string;


    stats: {

      value: string;

      label: string;

    }[];

  };





  about: {

    badge: string;

    title: string;

    description: string;


    visionTitle: string;

    visionDescription: string;


    missionTitle: string;

    missionDescription: string;


    ai: string;

    cyber: string;

    software: string;

  };






  technology: {


    badge: string;

    title: string;

    description: string;


    aiTitle: string;

    aiDesc: string;


    cyberTitle: string;

    cyberDesc: string;


    softwareTitle: string;

    softwareDesc: string;


    cloudTitle: string;

    cloudDesc: string;


    automationTitle: string;

    automationDesc: string;


    webTitle: string;

    webDesc: string;


  };







  architecture: {


    heroTitle: string;

    heroDescription: string;



    core: {

      user: string;

      application: string;

      engine: string;

      infrastructure: string;

    };




    layersTitle: string;

    layersDescription: string;



    layers: {


      user: {

        title:string;

        desc:string;

      };


      application: {

        title:string;

        desc:string;

      };


      ai: {

        title:string;

        desc:string;

      };


      security: {

        title:string;

        desc:string;

      };


      cloud: {

        title:string;

        desc:string;

      };


      data: {

        title:string;

        desc:string;

      };


    };





    stackTitle:string;



    stack: {

      ai:string;

      cloud:string;

      security:string;

      distributed:string;

      automation:string;

      data:string;

    };




    securityTitle:string;

    securityDescription:string;


  };









  projects: {


    title:string;

    subtitle:string;

    close:string;



    intelligence: {

      title:string;

      desc:string;

    };



    shield: {

      title:string;

      desc:string;

    };



    future: {

      title:string;

      desc:string;

    };


  };








  services:{


    title:string;

    description:string;



    aiTitle:string;

    aiDesc:string;



    cyberTitle:string;

    cyberDesc:string;



    softwareTitle:string;

    softwareDesc:string;



    cloudTitle:string;

    cloudDesc:string;


  };









  why:{


    title:string;

    description:string;



    features:{


      technology: {

        title:string;

        text:string;

      };


      security: {

        title:string;

        text:string;

      };


      performance: {

        title:string;

        text:string;

      };


      future: {

        title:string;

        text:string;

      };


    };


  };









  store:{


    title:string;

    description:string;

    buy:string;

    popular:string;


  };









  auth:{


    loginTitle:string;

    registerTitle:string;



    email:string;

    password:string;

    name:string;



    login:string;

    register:string;



    forgotPassword:string;



    google:string;

    github:string;


  };









  dashboard:{


    title:string;

    welcome:string;

    profile:string;

    settings:string;

    logout:string;


  };









  contact:{


    badge:string;


    title:string;


    description:string;



    conversation:string;


    conversationDescription:string;



    email:string;


    location:string;


    locationValue:string;



    namePlaceholder:string;


    emailPlaceholder:string;


    messagePlaceholder:string;



    send:string;


    sending:string;


    success:string;


  };









  privacy:{


    title:string;


    description:string;



    sections:{


      collect:string;


      security:string;


      usage:string;


      cookies:string;


      rights:string;


    };


    updated:string;


  };








  terms:{


    title:string;


    description:string;


    acceptance:string;


    usage:string;


    liability:string;


    updated:string;


  };









  footer:{


    description:string;


    company:string;


    resources:string;


    links:string;



    about:string;


    technology:string;


    projects:string;


    contact:string;



    privacy:string;


    terms:string;



    follow:string;



    copyright:string;



    rights:string;



    backToTop:string;


  };








  common:{


    loading:string;


    close:string;


    next:string;


    previous:string;


    submit:string;


    cancel:string;


  };



}