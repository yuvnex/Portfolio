import "./styles/InboxAIUI.css";
import { FaInbox, FaRegPaperPlane, FaRegStar, FaWandMagicSparkles } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const InboxAIUI = () => {
  return (
    <div className="inboxai-mockup">
      {/* Sidebar */}
      <div className="inboxai-sidebar">
        <div className="inboxai-logo">
          <MdOutlineMail /> InboxAI
        </div>
        <div className="inboxai-nav">
          <div className="inboxai-nav-item active"><FaInbox /> Inbox</div>
          <div className="inboxai-nav-item"><FaRegStar /> Starred</div>
          <div className="inboxai-nav-item"><FaRegPaperPlane /> Sent</div>
        </div>
      </div>
      
      {/* List Feed */}
      <div className="inboxai-feed">
        <div className="inboxai-search">
          <input type="text" placeholder="Search emails..." />
        </div>
        <div className="inboxai-email active">
          <h4>Sarah Jenkins</h4>
          <h5>Project Update</h5>
          <p>Hi team, I wanted to quickly follow up...</p>
        </div>
        <div className="inboxai-email">
          <h4>Client Support</h4>
          <h5>Issue #1042</h5>
          <p>We are encountering a crash when...</p>
        </div>
      </div>
      
      {/* Detail Window */}
      <div className="inboxai-detail">
        <div className="inboxai-message">
          <div className="inboxai-message-header">
            <h3>Project Update & Quarterly Review</h3>
            <span>Today, 10:45 AM</span>
          </div>
          <div className="inboxai-message-body">
            <p>Hi there,</p>
            <p>Can we please schedule a quick check-in to review our Q3 targets before the board meeting? I want to make sure all pending action items are properly accounted for.</p>
            <p>Best, Sarah</p>
          </div>
        </div>
        
        {/* AI Action Box */}
        <div className="inboxai-action">
          <div className="inboxai-action-header">
             <FaWandMagicSparkles className="magic-icon" /> AI Reply Draft
          </div>
          <div className="inboxai-action-body">
            <p>Hi Sarah,</p>
            <p>Absolutely. I have reviewed the Q3 targets and everything is on track. Are you available for a brief sync tomorrow at 10 AM EST?</p>
            <p>Best regards,</p>
          </div>
          <div className="inboxai-action-footer">
             <button className="btn-secondary">Edit Draft</button>
             <button className="btn-primary">Send Reply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxAIUI;
