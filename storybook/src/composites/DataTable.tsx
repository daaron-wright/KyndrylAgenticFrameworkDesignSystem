import React from "react";
import "./composites.css";

const DataTable: React.FC = () => (
  <div className="cmp-table-page">
    <div className="cmp-table-card">
      <table>
        <thead>
          <tr>
            <th>Ticket</th>
            <th>Subcategory</th>
            <th>Priority</th>
            <th>CIs</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="cmp-table-mono">bINC4219003</td>
            <td>CMDB reconciliation drift</td>
            <td>
              <span className="cmp-table-pill cmp-table-crit">1- Immediate</span>
            </td>
            <td>47</td>
            <td>
              <span className="cmp-table-link">Investigate &rarr;</span>
            </td>
          </tr>
          <tr>
            <td className="cmp-table-mono">bINC4219040</td>
            <td>Orphaned discovery record</td>
            <td>
              <span className="cmp-table-pill cmp-table-high">2- Urgent</span>
            </td>
            <td>12</td>
            <td>
              <span className="cmp-table-link">Investigate &rarr;</span>
            </td>
          </tr>
          <tr>
            <td className="cmp-table-mono">bINC4219118</td>
            <td>Stale owner assignment</td>
            <td>
              <span className="cmp-table-pill cmp-table-high">3- High</span>
            </td>
            <td>8</td>
            <td>
              <span className="cmp-table-link">Investigate &rarr;</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default DataTable;
