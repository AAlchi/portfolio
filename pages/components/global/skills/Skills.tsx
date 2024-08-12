interface skillsInterface {
    _id: string;
    name: string;
}

const skillsProject: { frontend: skillsInterface[], backend: skillsInterface[], ds: skillsInterface[], os: skillsInterface[] } = {
    frontend: [
        {
            _id: "1",
            name: "HTML"
        },
        {
            _id: "2",
            name: "CSS"
        },
        {
            _id: "3",
            name: "JavaScript"
        },
        {
            _id: "4",
            name: "TypeScript"
        },
        {
            _id: "5",
            name: "CSS"
        },
        {
            _id: "6",
            name: "Swift"
        },
        {
            _id: "7",
            name: "Vite",
        },
        {
            _id: "8",
            name: "NextJS"
        },
        {
            _id: "9",
            name: "NextTS"
        },
        {
            _id: "10",
            name: "ReactJS"
        },
        {
            _id: "11",
            name: "ReactTS"
        }, {
            _id: "12",
            name: "JSON"
        },
        {
            _id: "13",
            name: "TailwindCSS"
        },
        {
            _id: "14",
            name: "Chakra UI"
        }
    ],
    backend: [
        {
            _id: "1",
            name: "PHP"
        },
        {
            _id: "2",
            name: "Python"
        },
        {
            _id: "3",
            name: "NodeJS"
        },
        {
            _id: "4",
            name: "Express"
        },
        {
            _id: "5",
            name: "MongoDB"
        },
        {
            _id: "6",
            name: "Firebase"
        },
        {
            _id: "7",
            name: "phpMyAdmin"
        },
        {
            _id: "8",
            name: "mySql"
        },
        {
            _id: "9",
            name: "Vercel"
        },
        {
            _id: "8",
            name: "Tensorflow"
        },
    ],
    ds: [
        {
            _id: "1",
            name: "GitHub"
        },
        {
            _id: "2",
            name: "Trello"
        },
        {
            _id: "3",
            name: "Postman"
        },
        {
            _id: "4",
            name: "RapidAPI"
        },
        {
            _id: "5",
            name: "DevTools"
        },
        {
            _id: "8",
            name: "VSCode"
        },
        {
            _id: "8",
            name: "XCode"
        },
        {
            _id: "8",
            name: "PyCharm"
        },
    ],
    os: [
        {
            _id: "1",
            name: "Productivity"
        },
        {
            _id: "2",
            name: "Time Management"
        },
        {
            _id: "3",
            name: "Collaboration"
        }
    ],
};

export default skillsProject