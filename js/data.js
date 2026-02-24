/**
 * Portfolio data – profile, skills, experience, education, repos, posts.
 * Edit these objects to update the site content.
 */

const PROFILE = {
  displayName: "Joseph Montshetsa Mokgokong",
  username: "@Montshepetsa",
  bio: "Full-Stack Engineer | AWS Production Infrastructure",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D4D03AQGPCshgtK6QbQ/profile-displayphoto-shrink_800_800/B4DZT.RqWwG8Ac-/0/1739432833837?e=1773273600&v=beta&t=kNZfUG3i3EB_5L9VWugBvKS4DEu_AIdXU5g54_spVx0",
  location: "Johannesburg, South Africa",
  phone: "+27 67 675 2684",
  email: "jmmokgokong@gmail.com",
  statsLine: "",
  links: [
    { label: "github.com/Montshepetsa", url: "https://github.com/Montshepetsa" },
    { label: "montshepetsa.github.io", url: "https://montshepetsa.github.io/" },
    { label: "linkedin.com/in/j-mokgokong", url: "https://linkedin.com/in/j-mokgokong" },
    { label: "Download CV (PDF)", url: "https://montshepetsa.github.io/Joseph_Mokgokong_CV_.pdf" }
  ]
};

const SKILLS = [
  { name: "React", icon: "fa-brands fa-react", color: "#b9f3a9" },
  { name: "Next.js", icon: "fa-solid fa-layer-group", color: "#d3f9c7" },
  { name: "React Native", icon: "fa-solid fa-mobile-screen-button", color: "#9afc7f" },
  { name: "Redux Toolkit", icon: "fa-solid fa-code-branch", color: "#b9f3a9" },
  { name: "TypeScript", icon: "fa-solid fa-file-code", color: "#d3f9c7" },
  { name: "Node.js", icon: "fa-brands fa-node-js", color: "#9afc7f" },
  { name: "Express", icon: "fa-solid fa-server", color: "#b9f3a9" },
  { name: "REST APIs", icon: "fa-solid fa-plug", color: "#d3f9c7" },
  { name: "OpenAPI/Swagger", icon: "fa-solid fa-book-open", color: "#9afc7f" },
  { name: "AWS Lambda", icon: "fa-brands fa-aws", color: "#b9f3a9" },
  { name: "EC2", icon: "fa-solid fa-microchip", color: "#d3f9c7" },
  { name: "ECS", icon: "fa-solid fa-cubes", color: "#9afc7f" },
  { name: "RDS", icon: "fa-solid fa-database", color: "#b9f3a9" },
  { name: "S3", icon: "fa-solid fa-box-archive", color: "#d3f9c7" },
  { name: "CloudWatch", icon: "fa-solid fa-chart-line", color: "#9afc7f" },
  { name: "API Gateway", icon: "fa-solid fa-network-wired", color: "#b9f3a9" },
  { name: "GitHub Actions", icon: "fa-brands fa-github", color: "#d3f9c7" },
  { name: "PostgreSQL", icon: "fa-solid fa-database", color: "#9afc7f" },
  { name: "MongoDB", icon: "fa-solid fa-leaf", color: "#b9f3a9" },
  { name: "Incident Response", icon: "fa-solid fa-triangle-exclamation", color: "#d3f9c7" }
];

const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "Kraalworks / Pblicize",
    period: "Sept 2025 - Present",
    highlights: [
      "Built production frontend features using React, Next.js, and TypeScript.",
      "Translated Figma designs into reusable and accessible UI components.",
      "Improved API error handling and resilience across user-facing flows.",
      "Contributed to backend endpoints supporting production systems."
    ]
  },
  {
    role: "Software Engineer",
    company: "AURA",
    period: "July 2020 - Aug 2025",
    highlights: [
      "Owned production backend services using Node.js, TypeScript, and PostgreSQL.",
      "Designed and deployed serverless APIs using AWS Lambda and API Gateway.",
      "Maintained infrastructure across EC2, ECS, and RDS environments.",
      "Managed secrets and environment variables across staging and production.",
      "Participated in production releases and deployment validation.",
      "Monitored logs and resolved live incidents via CloudWatch.",
      "Contributed to React Native apps and deployed releases to app stores."
    ]
  }
];

const EDUCATION = [
  {
    label: "Full Stack Coding Bootcamp - The Coding Ground (2017 - 2019)",
    icon: "fa-solid fa-laptop-code",
    color: "#9afc7f"
  }
];

const CERTIFICATIONS = [
  {
    label: "AWS Certified Cloud Practitioner",
    icon: "fa-brands fa-aws",
    color: "#b9f3a9"
  },
  {
    label: "AWS Certified Solutions Architect - Associate",
    icon: "fa-brands fa-aws",
    color: "#b9f3a9"
  }
];

const REPOSITORIES = [
  {
    name: "portfolio",
    visibility: "Public",
    description: "GitHub-inspired personal portfolio with cinematic interactions and static deploy.",
    language: "HTML",
    stars: "1.3k",
    forks: 240,
    url: "https://github.com/Montshepetsa/montshepetsa.github.io",
    updatedAt: "Updated 3 days ago"
  },
  {
    name: "agent-toolbox",
    visibility: "Public",
    description: "Utilities and scripts for coding-agent workflows and DX automation.",
    language: "TypeScript",
    stars: 872,
    forks: 114,
    url: "https://github.com/Montshepetsa/agent-toolbox",
    updatedAt: "Updated 1 week ago"
  },
  {
    name: "system-design-notes",
    visibility: "Public",
    description: "Practical architecture notes, diagrams, and implementation checklists.",
    language: "Markdown",
    stars: 522,
    forks: 78,
    url: "https://github.com/Montshepetsa/system-design-notes",
    updatedAt: "Updated 2 weeks ago"
  },
  {
    name: "frontend-lab",
    visibility: "Public",
    description: "Interactive experiments in animation systems, layout, and web performance.",
    language: "JavaScript",
    stars: 657,
    forks: 93,
    url: "https://github.com/Montshepetsa/frontend-lab",
    updatedAt: "Updated 5 days ago"
  }
];

const POSTS = [
  {
    title: "Designing Motion That Supports UX",
    date: "2026-02-20",
    tags: ["Animation", "UX", "Frontend"],
    summary: "A practical framework for deciding where motion helps clarity and where it creates noise.",
    url: "#"
  },
  {
    title: "Shipping Static Sites Like Products",
    date: "2026-01-12",
    tags: ["GitHub Pages", "Architecture"],
    summary: "How to structure static projects with maintainable data contracts and release discipline.",
    url: "#"
  },
  {
    title: "When To Move From JSON To APIs",
    date: "2025-12-05",
    tags: ["Data", "Scaling"],
    summary: "A migration path from local content objects to live APIs without rewriting your UI.",
    url: "#"
  },
  {
    title: "Code Review Heuristics That Catch Real Bugs",
    date: "2025-11-14",
    tags: ["Engineering", "Review"],
    summary: "A checklist for high-signal reviews that prioritizes correctness and regressions.",
    url: "#"
  }
];

/**
 * Spotify – optional playlist embed + suggested tracks.
 * - Set SPOTIFY_PLAYLIST_ID to your playlist ID (from Share → Embed in Spotify) to show an embed.
 * - Add tracks to SPOTIFY_TRACKS; get artworkUrl from right‑clicking album art in Spotify → Copy image address.
 */
const SPOTIFY_PLAYLIST_ID = ""; // e.g. "37i9dQZF1DXcBWIGoYBM5M" or your own playlist ID
const SPOTIFY_TRACKS = [
  {
    title: "Treasure",
    artist: "Sampha",
    url: "https://open.spotify.com/track/6mtnu7p8tkUzlDO3KOoaTY",
    artworkUrl: ""
  },
  {
    title: "Are We Safe",
    artist: "Lemon & Herb, Miči",
    url: "https://open.spotify.com/track/62j32msf0jZZvCrk3khw4l",
    artworkUrl: ""
  },
  {
    title: "Ever Been",
    artist: "Exte C",
    url: "https://open.spotify.com/track/5BhezP7O06NbULp3NLIbvc",
    artworkUrl: ""
  },
  {
    title: "Don't Be Afraid",
    artist: "Exte C, TimAdeep",
    url: "https://open.spotify.com/track/5WvMiDYG8119e1yxM5YXCY",
    artworkUrl: ""
  },
  {
    title: "Reformed Church (Album Mix)",
    artist: "ZuluMafia, Thee Trinity",
    url: "https://open.spotify.com/track/4rk06ZhW1ckeJFfJEkF5wj",
    artworkUrl: ""
  }
];

const LANG_COLORS = {
  JavaScript: "#9afc7f",
  TypeScript: "#b9f3a9",
  HTML: "#d3f9c7",
  CSS: "#b2beb0",
  Markdown: "#8c968f"
};
