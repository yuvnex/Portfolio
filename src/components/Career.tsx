import "./styles/Career.css";
import InboxAIUI from "./InboxAIUI";

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
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Email Assistant</h4>
                <h5>InboxAI</h5>
              </div>
              <h3>Dec 2025 - Feb 2026</h3>
            </div>
            <div className="career-desc" style={{ width: '40%', display: 'flex', flexDirection: 'column' }}>
              <p style={{ width: '100%' }}>
                Reduced email drafting effort by ~60% by developing InboxAI, an AI-powered email assistant.
                Improved response efficiency through automated email generation, summarization, and context-aware replies.
                Integrated Gmail API and Google Calendar API to support email automation and scheduling assistance.
              </p>
              <div className="career-links" style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <a href="https://github.com/yuvnex/AI-Email-Assitant" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accentColor)', textDecoration: 'none', borderBottom: '1px solid var(--accentColor)' }}>GitHub Repo</a>
                <a href="https://inboxai.streamlit.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accentColor)', textDecoration: 'none', borderBottom: '1px solid var(--accentColor)' }}>Live Project</a>
              </div>
              <InboxAIUI />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
