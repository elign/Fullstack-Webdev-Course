import './App.css'

function App() {

  const arr = ['HTML', 'CSS', 'Sass', 'JS', 'Redux', 'Node', 'MongoDB', 'Git', 'MySql', 'Java'];
  const skillsArray = arr.map(skill => <li key={skill}>{skill}</li>);

  return (
    <div className='app'>
      {/* Image */}
      <div className="profile">      
      </div>

      {/* Title & SubTitle */}
      <h2>Elizabeth Queen</h2>
      <span>Queen of England & Home-maker</span>

      {/* Skills */}
      <h2>SKILLS</h2>
      <div>
        <ul className='skills-list'>
          {skillsArray}
        </ul>
      </div>

      {/* Joining Date */}
      <span className='joining-date'>Joined on July 11, 2023</span>
    </div>
  )
}

export default App
