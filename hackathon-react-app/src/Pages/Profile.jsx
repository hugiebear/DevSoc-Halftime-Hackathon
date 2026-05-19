import styles from '../Styles/Profile.module.css'
import gif from '../assets/oliverluan.gif'
function Profile() {

    return (
        <>
            <div className={styles.profilePage}>
                <img src={gif} className={styles.pfp}></img>
                <div>John Smith</div>
                <div>Following: DevSoc</div>
                <div className={styles.secondRow}>
                    I like Games and developing stuff
                    
                </div>
                <button type="button" className={styles.button}>Edit Profile</button>
            </div>
        </>
    )
};

export default Profile


