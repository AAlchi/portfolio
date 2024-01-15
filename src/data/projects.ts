interface mainProjectStructure {
  _id: string;
  name: string;
  img: string[];
  description: string;
  languages: string[]
}

const dataProject: { projects: mainProjectStructure[] } = {
  projects: [
    {
      _id: "1",
      name: "HS Social",
      img: [
        "./imgs/one-one.png",
        "./imgs/one-two.png",
        "./imgs/one-three.png",
        "./imgs/one-four.png",
        "./imgs/one-five.png",
        "./imgs/one-six.png",
        "./imgs/one-seven.png",
        "./imgs/one-eight.png",
        "./imgs/one-nine.png",
        "./imgs/one-ten.png",
      ],
      description:
        "Social media site created with Next Typescript because of a global organization called Hack Club. Built for school Hack Club as the social media platforom to communicate with each other and upload announcements and reminders.",
      languages: ["NextTS", "TypeScript", "CSS", "Tailwind", "MongoDB", "Firebase", "Prisma"]
      },
    {
      _id: "2",
      name: "MTT Bank",
      img: [
        "./imgs/two-three.png",
        "./imgs/two-four.png",
        "./imgs/two-six.png",
        "./imgs/two-five.png",

        "./imgs/two-one.png",
        "./imgs/two-two.png", 
      ],
      description:
        "Fantasy banking website coded with HTML, CSS, and PHP made for people to learn how banks work and prepare you for real life.",
      languages: ["HTML", "CSS", "PHP", "MongoDB"]
    },
    {
      _id: "3",
      name: "MTT Chat",
      img: [
        "./imgs/three-one.png",
        "./imgs/three-two.png",
        "./imgs/three-three.png",
      ],
      description:
        "Website coded in MERN used to chat with your friends. You can send texts, along with images, and add friends.",
        languages: ["ReactJS", "CSS", "JavaScript", "MongoDB", "Firebase"]
    },
    // {
    //   _id: "4",
    //   name: "MTT Movies",
    //   img: [
    //     "./imgs/four-one.png",
    //     "./imgs/four-two.png",
    //     "./imgs/four-three.png",
    //     "./imgs/four-four.png",
    //     "./imgs/four-five.png",
    //   ],
    //   description:
    //     "Fantasy movie booking website coded using react that allows you to book movies using your credit card from MTT Bank. Helps people learn the responsibiliy of booking something and using their own fake credit cards from MTT Bank to book a movie ticket.",
    //   languages: ["HTML", "CSS", "PHP"]
    //   },
      {
        _id: "5",
        name: "Music from Spotify",
        img: [
          "./imgs/five-one.png",
          "./imgs/five-two.png", 
        ],
        description:
          "Using Spotify's API, this fetches the data associated with your account and displays it. This includes playlists, music, and your username.",
        languages: ["NextTS", "TypeScript", "Tailwind", "CSS", "Spotify's API"]
        },
    {
      _id: "6",
      name: "Want to see more projects? Please contact me.",
      img: [
      ],
      description:
        "",
      languages: ["If you are interested in my services, please contact me. I have created many more projects."]
    },
  ],
};

export default dataProject;
