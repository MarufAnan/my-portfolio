// Portfolio data for easy updates
export const personalInfo = {
  name: "MARUF HALDER",
  title: "Frontend Developer",
  subtitle: "Building amazing digital experiences",
  bio: "I'm a passionate full-stack developer with expertise in modern web technologies. I love creating beautiful, functional, and user-friendly applications that solve real-world problems.",
  email: "marufhalder999@gmail.com",
  phone: "+91 8328760059",
  location: "Diamond Harbour,west bengal,INDIA",
  profileImage: "./profile.JPG",
  resume: "/myResume.pdf", 
  social: {
    github: "https://github.com/MarufAnan",
    linkedin: "https://www.linkedin.com/in/maruf-halder/",
    instagram: "https://www.instagram.com/i_am_maruf_00/"
  }
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "⚛️", level: 90 },
      { name: "JavaScript", icon: "🟨", level: 95 },
      { name: "HTML5", icon: "🌐", level: 95 },
      { name: "CSS3", icon: "🎨", level: 90 },
      { name: "Tailwind CSS", icon: "💨", level: 88 },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "🟢", level: 88 },
      { name: "Express.js", icon: "🚀", level: 85 },
      { name: "Python", icon: "🐍", level: 80 },
      { name: "Django", icon: "🎸", level: 75 },
      { name: "MongoDB", icon: "🍃", level: 82 },
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", icon: "📝", level: 90 },
      { name: "Figma", icon: "🎨", level: 85 },
      { name: "Linux", icon: "🐧", level: 78 }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "unbeatable TicTacToe",
    description: "This the TicTacToe game where user playing with AI. and the main thing is that user can't defeat the AI. the result is always either it's draw or the AI will win.",
    image: "./unbeatableTicTacToe.png",
    technologies: ["HTML","CSS","JavaScript"],
    github: "https://github.com/MarufAnan/TicTacToe/tree/main/Unbetable_TicTacToe",
    live: "https://marufanan.github.io/TicTacToe/Unbetable_TicTacToe/",
    featured: false
  }
];

export const experience = [
  {
    id: 1,
    company: "XYZ",
    position: "---",
    duration: "2023 - Present",
    description: "Lead development of web applications using React, Node.js, and cloud technologies. Mentor junior developers and collaborate with cross-functional teams.",
    technologies: ["React", "Node.js", "AWS", "TypeScript", "MongoDB"]
  }
];

