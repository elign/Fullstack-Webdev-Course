export default function Profile(props) {
    const profile = props?.profile;
    const name = profile.name;
    const title = profile.title;
    const skills = profile.skills;
    const imageUrl = profile.imageUrl;
    const joiningDate = profile.joiningDate;
    const bgColor = profile.favouriteColor;
    const skillsArray = skills.map(skill => <li key={skill}>{skill}</li>);
  
    return (
        <div style={{backgroundColor: bgColor}} className='profile-box'>
            {/* Image */}
            <div style={{backgroundImage: `url('${imageUrl}')`}}className="profile">
            </div>

            {/* Title & SubTitle */}
            <h2>{name}</h2>
            <span>{title}</span>

            {/* Skills */}
            <h2>SKILLS</h2>
            <div>
                <ul className='skills-list'>
                    {skillsArray}
                </ul>
            </div>

            {/* Joining Date */}
            <span className='joining-date'>Joined on {joiningDate}</span>
        </div>
    )
}