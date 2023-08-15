export default function Profile(props) {
    const {name, title, skills, imageUrl, joiningDate, favouriteColor: bgColor} = props.profile;
    const deleteProfile = props.deleteProfile;
    const idx = props.idx;
    const skillsArray = skills.map(skill => <li key={skill}>{skill}</li>);
  
    return (
        <div style={{backgroundColor: bgColor}} className='profile-box'>
            <button className="cross" onClick={() => deleteProfile(idx)}>X</button>
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