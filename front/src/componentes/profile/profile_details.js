import './Profile.css';

function ProfileDetails({ profile }) {
    return (
        <div className="profile-div">
            <div className="row">
                <div className="col s12 l4">
                    <div className="img-profile">
                        <div className="profile-pic">
                            <div className="container_1">
                                <img className="materialboxed" src={profile.image.link} alt="Profile" />
                            </div>
                        </div>
                        <h4 className="red-text text-darken-4">{profile.first_name} {profile.last_name}</h4>
                        <h4>{profile.campus[0].name}</h4>
                        <div className="level-bar">
                            <p>Level</p>
                            <div className="progress">
                                <div className="determinate" style={{ width: '500px' }}></div>
                            </div>
                            <p>Rank</p>
                            <div className="progress">
                                <div className="determinate" style={{ width: '10%' }}></div>
                            </div>
                            <p>Score</p>
                            <div className="progress">
                                <div className="determinate" style={{ width: '10%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 l5 offset-l2">
                    <h4 className="center red-text text-darken-4">Todos os jogadores</h4>
                    <table className="highlight">
                        <thead>
                            <tr>
                                <th>PIC PROFILE</th>
                                <th>CAMPUS</th>
                                <th>POINTS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Aqui você pode adicionar lógica para renderizar outros jogadores */}
                            <tr>
                                <td><i className="material-icons red-text">person</i></td>
                                <td>{profile.campus[0].name}</td>
                                <td>50pt</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProfileDetails;