interface mainProjectStructure {
    _id: string;
    phone?: boolean;
    name: string;
    img: string[];
    description: string;
    languages: string[]
    github: string
}

interface skillsInterface {
    _id: string;
    name: string;
}

const data = () => {
    const skills: { frontend: skillsInterface[], backend: skillsInterface[], ds: skillsInterface[], os: skillsInterface[] } = {
        frontend: [
            { _id: "1", name: "HTML" },
            { _id: "2", name: "CSS" },
            { _id: "3", name: "JavaScript" },
            { _id: "4", name: "TypeScript" },
            { _id: "5", name: "CSS" },
            { _id: "6", name: "Swift" },
            { _id: "7", name: "Vite", },
            { _id: "8", name: "NextJS" },
            { _id: "9", name: "NextTS" },
            { _id: "10", name: "ReactJS" },
            { _id: "11", name: "ReactTS" },
            { _id: "12", name: "JSON" },
            { _id: "13", name: "TailwindCSS" },
            { _id: "14", name: "Chakra UI" }
        ],
        backend: [
            { _id: "1", name: "PHP" },
            { _id: "2", name: "Python" },
            { _id: "3", name: "NodeJS" },
            { _id: "4", name: "Express" },
            { _id: "5", name: "MongoDB" },
            { _id: "6", name: "Firebase" },
            { _id: "7", name: "phpMyAdmin" },
            { _id: "8", name: "mySql" },
            { _id: "9", name: "Vercel" },
            { _id: "8", name: "Tensorflow" },
        ],
        ds: [
            { _id: "1", name: "GitHub" },
            { _id: "2", name: "Trello" },
            { _id: "3", name: "Postman" },
            { _id: "4", name: "RapidAPI" },
            { _id: "5", name: "DevTools" },
            { _id: "8", name: "VSCode" },
            { _id: "8", name: "XCode" },
            { _id: "8", name: "PyCharm" },
        ],
        os: [
            { _id: "1", name: "Productivity" },
            { _id: "2", name: "Time Management" },
            { _id: "3", name: "Collaboration" }
        ],
    };
    const icons = (arg: string) => {
        const iconDict: { [key: string]: string } = {
            "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
            "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
            "ReactJS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            "NextJS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
            "TailwindCSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
            "Prisma": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
            "SpotifyAPI": "/imgs/icons/spotify.jpg",
            "NodeJS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
            "Swift": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
            "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
            "NextTS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
            "ReactTS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            "JSON": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
            "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
            "phpMyAdmin": "/imgs/icons/phpMyAdmin.png",
            "mySql": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
            "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
            "Tensorflow": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
            "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
            "Trello": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg",
            "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
            "RapidAPI": "https://www.vectorlogo.zone/logos/rapidapi/rapidapi-icon.svg",
            "DevTools": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg",
            "VSCode": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
            "XCode": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg",
            "PyCharm": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg",
            "Chakra UI": "https://www.vectorlogo.zone/logos/chakra-ui/chakra-ui-icon.svg"
        }

        return iconDict[arg] || "Not Found"
    }

    const projects: { projects: mainProjectStructure[] } = {
        projects: [
            {
                _id: "1",
                name: "ZoneMaze",
                img: [
                    "./imgs/zonemaze/z-0.png", 
                    "./imgs/zonemaze/z-1.png", 
                    "./imgs/zonemaze/z-2.png", 
                    "./imgs/zonemaze/z-3.png", 
                    "./imgs/zonemaze/z-4.png", 
                    "./imgs/zonemaze/z-5.png", 
                    "./imgs/zonemaze/z-6.png", 
                    "./imgs/zonemaze/z-7.png", 
                ],
                phone: true,
                description:
                    "ZoneMaze is an app built for ADHD, where users are able to organize their lives, get emotional support, and more.",
                languages: ["Swift", "Firebase"],
                github: "https://github.com/AAlchi/ZoneMaze"
            },
            {
                _id: "2",
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
                _id: "3",
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
                _id: "4",
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
    return { skills, icons, projects };
}

export default data
 