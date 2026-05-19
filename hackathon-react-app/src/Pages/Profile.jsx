import styles from '../Styles/Profile.module.css'
import gif from '../assets/oliverluan.gif'
function Profile() {

    return (
        <>
            <div className={styles.profilePage}>
                <img src={gif} className={styles.pfp}></img>
                <div>Oliver Luan</div>
                <div>Following: 999</div>
                <div className={styles.secondRow}>
                    Hates Niggers
                    <button type="button" className={styles.button}>Edit Profile</button>
                </div>
            </div>
        </>
    )
};

export default Profile


