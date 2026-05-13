import React from "react";
import "./composites.css";

const ExecSummary: React.FC = () => (
  <div className="cmp-execsum-page">
    <div className="cmp-execsum-doc">
      <div className="cmp-execsum-eyebrow">Commercial review &middot; Q2 2026</div>
      <h2>CMDB data-quality executive summary</h2>

      <div className="cmp-execsum-takeaways">
        <ul>
          <li>
            Trust score up <b>+1.4 pts</b> to 62%; Payments is the primary drag.
          </li>
          <li>
            312 stale CIs (<b>+28 WoW</b>); 47 recommended for retirement with 92% confidence.
          </li>
          <li>Two reconciliation triggers need human review before Friday.</li>
        </ul>
      </div>

      <h3>KPI snapshot</h3>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Current</th>
            <th>Target</th>
            <th>&Delta; QoQ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Trust score</td>
            <td>62%</td>
            <td>95%</td>
            <td className="cmp-execsum-u">+1.4 pts</td>
          </tr>
          <tr>
            <td>Stale CIs</td>
            <td>312</td>
            <td>&lt;150</td>
            <td className="cmp-execsum-d">+28</td>
          </tr>
          <tr>
            <td>Orphans</td>
            <td>47</td>
            <td>0</td>
            <td className="cmp-execsum-u">&minus;8</td>
          </tr>
        </tbody>
      </table>

      <h3>Discussion flags</h3>
      <div className="cmp-execsum-flags">
        <div className="cmp-execsum-flag">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
          Payments owner email bouncing 2 days — blocks 47 retirement candidates.
        </div>
      </div>

      <h3>Recommendations embedded &middot; 2</h3>
      <div className="cmp-execsum-mini-rec">
        <div>
          <p className="cmp-execsum-rec-t">Retire 47 stale CIs &middot; payments-svc</p>
          <p className="cmp-execsum-rec-s">92% confidence &middot; +5.1 pts trust lift</p>
        </div>
        <button>Execute &rarr;</button>
      </div>
      <div className="cmp-execsum-mini-rec">
        <div>
          <p className="cmp-execsum-rec-t">Re-assign 8 logistics CI owners</p>
          <p className="cmp-execsum-rec-s">81% confidence &middot; unblocks Q3 review</p>
        </div>
        <button>Review &rarr;</button>
      </div>
    </div>
  </div>
);

export default ExecSummary;
