import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Prompt Engineering Intern */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Prompt Engineering Intern</h4>
                <h5>Mysore Consulting Group – Mysore, India</h5>
              </div>
              <h3>Apr 2025 – Present</h3>
            </div>
            <p>
              Designed and optimized 150+ AI prompts using DALL·E, Midjourney,
              Stable Diffusion, and Leonardo AI, improving accuracy by 35% and
              reducing revision time by 20%. Applied advanced prompt engineering
              techniques and Git-based workflows to ensure reproducibility,
              collaboration, and efficient iterations.
            </p>
          </div>

          {/* Marketing Team Member */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Marketing Team Member</h4>
                <h5>CoachIt – Leeds, England</h5>
              </div>
              <h3>Jan 2024 – Oct 2024</h3>
            </div>
            <p>
              Executed targeted digital marketing campaigns within Agile sprints,
              driving coaches to $10K+ monthly revenue in under 100 days through
              optimized landing pages, automated email funnels, and CRM
              workflows. Leveraged Git-based version control, CI/CD automation,
              and data-driven feedback loops to enhance ad performance, lead
              conversion rates, and client engagement metrics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
