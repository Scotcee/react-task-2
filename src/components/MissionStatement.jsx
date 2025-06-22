import React from "react";
import "../styles/MissionStatement.css";

export default function MissionStatement() {
  return (
    <div>
      <div className="mission-container">
        <div className="heading">
          <h1>Main Focus / Mission Statement</h1>
        </div>

        <div className="text-section-mission">
          <div className="mission-statement1">
            <div className="mission-item">
              <div className="bullet-number">
                <h1>1</h1>
              </div>
              <div className="mission-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, lectus et facilisis placerat.
                </p>
              </div>
            </div>
          </div>

          <div className="mission-statement2">
            <div className="mission-item">
              <div className="bullet-number">
                <h1>2</h1>
              </div>
              <div className="mission-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, lectus et facilisis placerat, magna mauris
                  porttitor tortor, a auctor est felis ut nisl.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
