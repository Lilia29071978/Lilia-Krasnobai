import styles from './navbar.module.css'

function Navbar() {
    const menu = (
        <ul className={styles.menuClass}>
           <li className={styles.menu_item}><a href="#">Home</a></li>
           <li className={styles.menu_item}><a href="#">Services</a></li>
           <li className={styles.menu_item}><a href="#">Gallery</a></li>
           <li className={styles.menu_item}><a href="#">Contacts</a></li>
        </ul>
    )
    return <>
        {menu}
    </>
}


export default Navbar
