import React from "react";
import "./templates.css";

export const ReviewTemplate: React.FC = () => (
  <div className="tpl-review">
    <div className="tpl-hdr" style={{ marginBottom: 10 }}>
      <h2>ReviewQueueTemplate</h2>
      <span>Access Review · Change Requests · Correction Requests share this</span>
    </div>

    <div className="tpl-col">
      {/* Filter bar */}
      <div className="tpl-slot">FilterBar · state · owner · age · risk</div>

      {/* Queue + inspector */}
      <div className="tpl-review-row">
        {/* Queue rows */}
        <div className="tpl-col">
          <div className="tpl-slot tpl-review-queue-row">
            QueueRow · Pending · bCRQ-3102 · owner · reason
          </div>
          <div className="tpl-slot tpl-review-queue-row">
            QueueRow · Approved · bCRQ-3085 · audit link
          </div>
          <div className="tpl-slot tpl-review-queue-row">
            QueueRow · Executed · bCRQ-3072 · +2.1 pts
          </div>
        </div>

        {/* Inspector drawer */}
        <div className="tpl-col">
          <div className="tpl-slot" style={{ minHeight: 40 }}>
            InspectorDrawer · selected row
          </div>
          <div className="tpl-slot" style={{ minHeight: 50 }}>
            decisionForm · reason (required) · approver
          </div>
          <div className="tpl-slot" style={{ minHeight: 40 }}>
            actionBar · Approve · Reject · Defer
          </div>
          <div className="tpl-slot" style={{ minHeight: 40 }}>
            auditTrail
          </div>
        </div>
      </div>
    </div>
  </div>
);
