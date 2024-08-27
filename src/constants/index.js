import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `A web developer specializes in creating and maintaining websites and web applications, ensuring they are functional, user-friendly, and visually appealing. They work with languages like HTML, CSS, and JavaScript for front-end development and use back-end technologies such as Node.js or Django. Web developers focus on optimizing site performance, ensuring cross-device compatibility, and securing websites from potential threats. Their role demands a mix of technical expertise, creativity, and problem-solving skills.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked extensively with technologies like React, Next.js, and CSS frameworks. My journey in web development began with a deep curiosity for how things work, evolving into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects.`;

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
      "I spearheaded a high-impact project to develop a platform connecting part-time job seekers with job givers, achieving 87% accuracy in profile matching using vectorization and collaborative filtering. I designed the front end with React.js and HTML, increasing user interaction by 30% and reducing bounce rates by 25% through a responsive interface. The backend was built with Node.js, and MongoDB was employed for data storage. Additionally, I implemented machine learning algorithms to efficiently group profiles of 10+ job seekers for bulk part-time employee requirements.",
    technologies: ["React.js", "HTML", "MongoDB", "Node.js", "Machine Learning"],
  },
  {
    title: "SMART MOVIE RECOMMENDATION ENGINE",
    image: project2,
    description:
      "Spearheaded the design and deployment of a recommendation engine using Streamlit, resulting in the delivery of over 10 personalized recommendations, enhancing user engagement and driving a 25% increase in click-through rates.Fetched information on 500+ movies from the IMDB API and utilized HTML, React.js, and CSS to display details, including IMDB ratings for each movie on a scale of 1 to 10.Achieved a 40% increase in user engagement by optimizing machine learning algorithms such as Vectorization and cosine similarities, enhancing recommendation accuracy to 89%. ",
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
  {
    title: "JANGO: FOOD DELIVERY APP USING REACT NATIVE ",
    image: project3,
    description:
      "Developed Jango, a food delivery app using React Native and Nativewind CSS, offering 25+ food categories and features such as order tracking, customizable carts, and a user-friendly interface,which enhanced User Experience by 30%. Implemented Appwrite and MariaDB to store and retrieve data for over 200 food items, and leveraged them for authentication, enhancing security by 25% Managed app navigation with React Navigation for seamless routing across 4 screens, and used React Native Animatable for smooth transitions on 5+ components.",
    technologies: ["HTML", "CSS", "React", "Framer Motion"],
  },
];

export const CONTACT = {
  phoneNo: "+91 7795764438",
  email: "nandeshsahyadri@gmail.com",
};
