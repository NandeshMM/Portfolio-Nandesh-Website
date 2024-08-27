import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jun 2017 - Sep 2017",
    role: "Data Analyst Intern",
    company: "NOVIGO SOLUTIONS",
    description: `Developed an innovative Streamlit-based movie recommendation system implementing collaborative filtering, vectorization, and cosine similarities, delivering data-driven movie suggestions. Achieved an 80% success rate in effectively resolving no-match scenarios, contributing to a 35% increase in user satisfaction through sophisticated algorithm integration.
    ->The efficient coordination of high-quality data collection through the implementation of stringent validation procedures and systematic organization using descriptive labels resulted in a 30% improvement in data accuracy and a 50% reduction in preprocessing time, thereby enhancing the precision of feature extraction by 90% and boosting model performance.
    ->Enhancing predictive accuracy by 25% through systematic testing, validation, and implementation of optimized data handling technique significantly enhances the overall performance and reliability of the recommendation system`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "PARTTIMEMATCH: PART-TIME JOB MATCHING PLATFORM WITH MACHINE LEARNING",
    image: project1,
    description:
      "Spearheaded a high-impact project to develop a platform connecting part-time job seekers with job givers. Utilized vectorization and collaborative filtering machine learning techniques to achieve 90% accuracy in matching profiles. We utilized React.js and HTML to develop the front end, MongoDB for data storage, and Node.js for the backend of this project. Additionally, we implemented machine learning algorithms to efficiently group profiles of 10+ job seekers for bulk part-time employee requirements.",
    technologies: ["React.js", "HTML", "MongoDB", "Node.js", "Machine Learning"],
  },
  {
    title: "SMART MOVIE RECOMMENDATION ENGINE",
    image: project2,
    description:
      "As part of a 4-person team, spearheaded the design and implementation of a recommendation engine utilizing Streamlit. Successfully deployed the system to provide over 100 personalized recommendations.Optimized machine learning algorithms like Vectorization and cosine similarities, leading to a significant improvement in recommendation accuracy to 98%. Achieved a 50% increase in user retention and satisfaction rates through enhanced algorithmic performance.",
    technologies: ["Machine Learning", "StreamLit"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Framer Motion"],
  },
  {
    title: "PNEUMONIA DETECTION USING DEEP LEARNING",
    image: project4,
    description:
      "PNEUMONIA DETECTION USING DEEP LEARNING Jan 2024.Analyzed and processed chest X-ray images, achieving an 84% reduction in preprocessing time. Implemented convolutional neural network (CNN) models achieving 97% accuracy in pneumonia detection.Applied TensorFlow and Keras, leading platforms for deep learning, to enhance pneumonia detection reliability by 55% in the project. Implemented advanced techniques that significantly improved the accuracy and reliability of the detection syste",
    technologies: ["CNN", "TensorFlow", "Keras", "Deep Learning", "Machine Learning"],
  },
];

export const CONTACT = {
  phoneNo: "+91 7795764438",
  email: "nandeshsahyadri@gmail.com",
};
