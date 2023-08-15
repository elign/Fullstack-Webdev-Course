import { useState } from 'react';
import './App.css'
import Profile from './components/Profile'
// import Colorbars from './components/Colorbars'
function App() {

  // const thisColors = ['#504099', '#614BC3', '#FE7BE5', '#C70039'];
  // const thisColorstwo = ['#F8DE22', '#DAC0A3', '#FFC6AC', '#F79BD3'];
  // const thisColorsthree = ['#C70039', '#F8DE22', '#DAC0A3', '#FFC6AC', '#F79BD3'];
  const [profiles, setProfiles] = useState([
    {
      name: "Elizabeth Queen",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      title: "Queen of England & Home-maker",
      skills: ['HTML', 'CSS', 'Sass', 'JS', 'Redux', 'Node', 'MongoDB', 'Git', 'MySql', 'Java'],
      joiningDate: "July 11, 2023",
      favouriteColor: "#EEE0C9"
    },
    {
      name: "John Smith",
      imageUrl: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80',
      title: "Software Engineer",
      skills: ['Python', 'Java', 'C++', 'SQL', 'React', 'Node.js', 'Docker', 'Git'],
      joiningDate: "August 5, 2022",
      favouriteColor: "#C8E4B2"
    },
    {
      name: "Emily Johnson",
      imageUrl: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      title: "Graphic Designer",
      skills: ['Adobe Photoshop', 'Illustrator', 'InDesign', 'Sketch', 'Typography', 'UI/UX Design'],
      joiningDate: "January 18, 2023",
      favouriteColor: "#F79BD3"

    },
    {
      name: "Michael Davis",
      imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      title: "Data Scientist",
      skills: ['Python', 'R', 'Machine Learning', 'Statistical Analysis', 'SQL', 'Tableau', 'Pandas'],
      joiningDate: "June 30, 2022",
      favouriteColor: "#EAC696"
    }
  ])
  const deleteProfile = (idx) => {
    const tempProfile = profiles.filter((val, i) => idx != i);
    setProfiles(tempProfile);
  }

  const profileArray = profiles.map((profile, idx) => {
    return (
      <Profile key={idx} profile={profile} idx={idx} deleteProfile={deleteProfile} />
    )
  })

  return (
    <div className='app'>
      {profileArray}
      {/* <Colorbars colors={thisColors}/>
      <Colorbars colors={thisColorstwo} />
      <Colorbars colors={thisColorsthree} /> */}
    </div>
  )
}

export default App
