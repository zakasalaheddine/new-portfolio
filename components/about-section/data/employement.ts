export type Employement = {
  position: string;
  company: string;
  timelaps: string;
  tasks: string[];
  tech: string;
}

export const EmployementData = [
  {
    position: "Full-Stack Web Developer (Freelancer)",
    company: "Upwork/Fiverr",
    timelaps: "2020 -PRESENT",
    tasks: [
      "Handling design changes with gatsby and Netlify CMS",
      "Adding features to Framer Studio Prototype project (Google Analytics ...)",
      "Handling Single Sign OAuth using SAML with NextJS"
    ],
    tech: "NextJS, Gatsby JS, Express.js, Netlify CMS, MDX, CSS, Media Queries, GraphQL, React, Zepline, Framer, OKTA"
  },
  {
    position: "Full-Stack Developer",
    company: "SAGATEC",
    timelaps: "2018 -2020",
    tasks: [
      "Build Self-Ordering Kiosk application to order with an existing POS System",
      "Add feature to an existing POS systems",
    ],
    tech: "ReactJS, React Router, Redux, Apollo, NestJS, GraphQL, Framer Motion, MySQL, MSSQL, C#, VB.NET, LARAVEL, Wordpress"
  },
  {
    position: "Full-Stack Web Developer",
    company: "HELPLINE",
    timelaps: "2017 -2018",
    tasks: [
      "Building Classifield ads platform ",
    ],
    tech: "Laravel, Vue JS, Socket.io, Pusher, MySQL"
  }
]