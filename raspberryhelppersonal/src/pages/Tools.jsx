import React from 'react'
const toolset = [{pname:"Languages", info:"Python, PHP, C/C++, Java, SQL (MySQL, SQLAlchemy, Transact-SQL), JavaScript, Excel VBA"},
  {pname:"Developer Tools", info:"Visual Studio Code, CLion, IntelliJ, PyCharm"}, 
  {pname:"Operating Systems", info:"Windows 11, Ubuntu"},
  {pname:"Libraries", info:"lask, Librosa, NumPy, Pandas, Matplotlib, React, Tensorflow, PyQt6, OpenGL, Geopandas, SciPy,Shapely"},
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