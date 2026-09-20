import React from 'react'
const toolset = [{pname:"Languages", info:"Python, PHP, C, C++, Java, SQL (MySQL and SQLAlchemy), JavaScript"},
  {pname:"Developer Tools", info:"Visual Studio Code, CLion, IntelliJ, PyCharm"}, 
  {pname:"Operating Systems", info:"Windows 11, Ubuntu"},
  {pname:"Libraries", info:"Flask, Librosa, NumPy, React, Tensorflow"},
]
const Card = ({ card, index }) => (
  <div className="toolCard" key = {index}>
    
      <div className="toolTitle">{card.pname}</div>
      <p className='toolContent'>{card.info}</p>
    
  </div>
);
function Tools() {
  return (
    <div class="about-container">
      <div>
    {toolset.map((card, index) => (
        <Card card={card} key={index} />
      ))}
  </div>
    </div>
  )
}

export default Tools