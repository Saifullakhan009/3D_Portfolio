import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  // Project data
  const projects = [
    {
      id: "01",
      name: "SWIFT",
      category: "Computer Vision / Deep Learning",
      tools: "Python, SwinV2 Transformers, Fast Fourier Convolutions",
      image: "/images/swift.webp",
    },
    {
      id: "02",
      name: "BigHOST",
      category: "Big Data / Distributed Systems",
      tools: "Hadoop, Docker, Redis, Producer–Consumer Pattern",
      image: "/images/bighost.webp",
    },
    {
      id: "03",
      name: "Stock Market Prediction",
      category: "Machine Learning",
      tools: "Python, LSTM, Yahoo Finance API, React",
      image: "/images/stock.webp",
    },
    {
      id: "04",
      name: "Virtual Farming Assistance",
      category: "AgriTech / Web Development",
      tools: "React, Spring Boot APIs, Predictive Analytics",
      image: "/images/farming.webp",
    },
    {
      id: "05",
      name: "Prompt Engineering",
      category: "AI / Generative Models",
      tools: "DALL·E, Midjourney, Stable Diffusion, Git Workflows",
      image: "/images/prompt.webp",
    },
    {
      id: "06",
      name: "CoachIt Marketing",
      category: "Digital Marketing",
      tools: "Landing Pages, Email Automation, CRM Workflows",
      image: "/images/coachit.webp",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and Features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
