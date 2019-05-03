import React from 'react'

const MobileMiniHeadlines = props => {
  const { circleArr, i, handleClick } = props;
  return (
    <section className="circleContainer">
      {circleArr.map( (circle, index) => (
                <div key={index} className={ (i === index) ? "selected-circle" : "circle"} onClick={() => handleClick(index)}>{circle}</div>
              ))}
    </section>
    );
}

export default MobileMiniHeadlines;
