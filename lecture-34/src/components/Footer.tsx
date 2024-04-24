import styles from './footer.module.css'


function Footer() {
    const contacts = (
       <div className={styles.contacts}>
            <a className={styles.link} href="mailto:lilichka29@ukr.net">lilichka29@ukr.net</a>
           <a className={styles.link} href="phone:+380964681298">+380964681298</a>
       </div>
    )
    return <>
        {contacts}
    </>
}

export default Footer
