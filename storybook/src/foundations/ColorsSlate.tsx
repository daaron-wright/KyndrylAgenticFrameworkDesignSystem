import React from "react";
import "./foundations.css";

export const ColorsSlate: React.FC = () => (
  <div className="fdn-colors-slate">
    <div className="fdn-group">
      <h4>Dark Stone — default UI neutral</h4>
      <p className="fdn-desc">Text, borders, default surfaces. The workhorse.</p>
      <div className="fdn-row">
        <div className="fdn-sw fdn-light" style={{ background: "var(--k-dark-stone-10)" }}>#F5F5F5</div>
        <div className="fdn-sw fdn-light" style={{ background: "var(--k-dark-stone-20)" }}>#E6E6E6</div>
        <div className="fdn-sw fdn-light" style={{ background: "var(--k-dark-stone-30)" }}>#CFCFCF</div>
        <div className="fdn-sw fdn-light" style={{ background: "var(--k-dark-stone-40)" }}>#A8A8A8</div>
        <div className="fdn-sw fdn-dark" style={{ background: "var(--k-dark-stone-50)" }}>#808080</div>
        <div className="fdn-sw fdn-dark" style={{ background: "var(--k-dark-stone-60)" }}>#5C5C5C</div>
        <div className="fdn-sw fdn-dark" style={{ background: "var(--k-dark-stone-70)" }}>#3D3D3D</div>
        <div className="fdn-sw fdn-dark" style={{ background: "var(--k-dark-stone-80)" }}>#242424</div>
        <div className="fdn-sw fdn-dark" style={{ background: "var(--k-dark-stone-90)" }}>#141414</div>
        <div className="fdn-sw fdn-dark" style={{ background: "var(--k-dark-stone-100)" }}>#000000</div>
      </div>
      <div className="fdn-labels fdn-g10">
        <div>10</div><div>20</div><div>30</div><div>40</div><div>50</div>
        <div>60</div><div>70</div><div>80</div><div>90</div><div>100</div>
      </div>
    </div>

    <div className="fdn-group">
      <h4>Cool Gray — dashboards, charts, chrome</h4>
      <p className="fdn-desc">Dashboard chrome, table stripe, chart axes.</p>
      <div className="fdn-row">
        <div className="fdn-sw fdn-light" style={{ background: "var(--k-cool-gray-10)" }}>#F2F4F5</div>
        <div className="fdn-sw fdn-light" style={{ background: "var(--k-cool-gray-20)" }}>#E1E5E8</div>
        <div className="fdn-sw fdn-light" style={{ background: "var(--k-cool-gray-30)" }}>#C1C8CD</div>
        <div className="fdn-sw fdn-light" style={{ background: "var(--k-cool-gray-40)" }}>#98A3AB</div>
        <div className="fdn-sw fdn-dark" style={{ background: "var(--k-cool-gray-50)" }}>#6B7780</div>
        <div className="fdn-sw fdn-dark" style={{ background: "var(--k-cool-gray-60)" }}>#4F5A63</div>
        <div className="fdn-sw fdn-dark" style={{ background: "var(--k-cool-gray-70)" }}>#3A434B</div>
        <div className="fdn-sw fdn-dark" style={{ background: "var(--k-cool-gray-80)" }}>#252B31</div>
        <div className="fdn-sw fdn-dark" style={{ background: "var(--k-cool-gray-90)" }}>#161A1E</div>
      </div>
      <div className="fdn-labels fdn-g9">
        <div>10</div><div>20</div><div>30</div><div>40</div><div>50</div>
        <div>60</div><div>70</div><div>80</div><div>90</div>
      </div>
    </div>

    <div className="fdn-group">
      <h4>Warm Gray — marketing / brand surfaces</h4>
      <p className="fdn-desc">Reserved for brand and marketing surfaces only.</p>
      <div className="fdn-row">
        <div className="fdn-sw fdn-light" style={{ background: "var(--k-warm-gray-10)" }}>#F5F3F0</div>
        <div className="fdn-sw fdn-light" style={{ background: "var(--k-warm-gray-20)" }}>#E7E3DD</div>
        <div className="fdn-sw fdn-light" style={{ background: "var(--k-warm-gray-30)" }}>#CFC8BD</div>
        <div className="fdn-sw fdn-dark" style={{ background: "var(--k-warm-gray-50)" }}>#857E73</div>
        <div className="fdn-sw fdn-dark" style={{ background: "var(--k-warm-gray-70)" }}>#40382D</div>
      </div>
      <div className="fdn-labels fdn-g5">
        <div>10</div><div>20</div><div>30</div><div>50</div><div>70</div>
      </div>
    </div>
  </div>
);
