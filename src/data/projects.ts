interface mainProjectStructure {
  _id: string;
  name: string;
  img: string[];
  description: string;
}

const dataProject: { projects: mainProjectStructure[] } = {
  projects: [
    {
      _id: "1",
      name: "Name For It",
      img: [
        "./imgs/pageOneCoding.jpg",
        "./imgs/pageOneCoding.jpg",
        "./imgs/pageOneCoding.jpg",
        "./imgs/pageOneCoding.jpg",
        "./imgs/pageOneCoding.jpg",
        "./imgs/pageOneCoding.jpg",
      ],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio corporis qui inventore eius quidem laudantium distinctio, numquam perferendis explicabo eligendi dolor odit voluptates nulla hic. Illum omnis facere qui itaque",
    },
    {
      _id: "2",
      name: "Name For I2",
      img: ["./imgs/pageOneCoding.jpg"],
      description:
        "Lorem ipsum dolor,rdnsrphgisrphis sit amet consectetur adipisicing elit. Optio corporis qui inventore eius quidem laudantium distinctio, numquam perferendis explicabo eligendi dolor odit voluptates nulla hic. Illum omnis facere qui itaque",
    },
  ],
};

export default dataProject;
