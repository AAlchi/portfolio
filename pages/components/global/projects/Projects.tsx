interface mainProjectStructure {
    _id: string;
    name: string;
    img: string[];
    description: string;
    languages: string[]
    github: string
  } 

const dataProject: { projects: mainProjectStructure[] } = {
    projects: [
      {
        _id: "1",
        name: "HS Social",
        img: [
          "./imgs/one/one-one.png",
          "./imgs/one/one-two.png",
          "./imgs/one/one-three.png",
          "./imgs/one/one-four.png",
          "./imgs/one/one-five.png",
          "./imgs/one/one-six.png",
          "./imgs/one/one-seven.png",
          "./imgs/one/one-eight.png",
          "./imgs/one/one-nine.png",
          "./imgs/one/one-ten.png",
        ],
        description:
          "Social media site created with Next Typescript because of a global organization called Hack Club. Built for school Hack Club as the social media platforom to communicate with each other and upload announcements and reminders.",
        languages: ["NextJS", "TypeScript", "CSS", "TailwindCSS", "MongoDB", "Firebase", "Prisma"],
        github: "https://github.com/AAlchi/HSSocial"
        },
      {
        _id: "2",
        name: "MTT Bank",
        img: [
          "./imgs/two/two-one.png",
          "./imgs/two/two-two.png", 
          "./imgs/two/two-three.png",
          "./imgs/two/two-four.png" 
        ],
        description:
          "Fantasy banking website for people to learn how banks work and prepare you for real life.",
        languages: ["NextJS", "TailwindCSS", "Chakra UI", "MongoDB", "Prisma", "CSS"],
        github: "https://github.com/AAlchi/mttbank"
      },
      {
        _id: "3",
        name: "MTT Chat",
        img: [
          "./imgs/three/three-one.png",
          "./imgs/three/three-two.png",
          "./imgs/three/three-three.png",
        ],
        description:
          "Website coded in MERN used to chat with your friends. You can send texts, along with images, and add friends.",
          languages: ["ReactJS", "NodeJS", "CSS", "JavaScript", "MongoDB", "Firebase"],
          github: "https://github.com/AAlchi/mttChat"
  
      }, 
        {
          _id: "5",
          name: "Music from Spotify",
          img: [
            "./imgs/five/five-one.png",
            "./imgs/five/five-two.png", 
          ],
          description:
            "Using Spotify's API, this fetches the data associated with your account and displays it. This includes playlists, music, and your username.",
          languages: ["NextJS", "TypeScript", "TailwindCSS", "CSS", "SpotifyAPI"],
          github: "https://github.com/AAlchi/Music"
          }, 
    ],
  };

  export default dataProject