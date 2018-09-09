import React from 'react';
import './Title.css';

const Title = (props) => {
  return (
    <div className="titleSelection">
      <h2
        style={props.titleStyle}
        id="versionStatement"
      >
        {props.children}
      </h2>
      {/* <p
        onClick={props.onClick}
        id="upgradeButton"

        // classではなく className!
        className="upgrade-button"
      >
        Upgrade
      </p> */}
    </div>
  )
}

export default Title;