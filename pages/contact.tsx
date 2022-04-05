import type { NextPage } from 'next'
import SiteNav from './general/site-nav';
import styles from '../styles/Home.module.css'
import 'terminal.css';

const Contact: NextPage = () => {
    return (
        <div className={styles.pageContainer}>
            <SiteNav activePage={'contact'}></SiteNav>
            <header>
                <div className={'terminal-card ' + styles.headerCard}>
                    <h1>Contact Me</h1>
                </div>
            </header>
            <section>
                <div className={'terminal-card ' + styles.headerCard}>
                    <p><i><a href={'mailto:adwilson0286@gmail.com'}>Email</a></i></p>
                    <p><i><a href={'https://www.linkedin.com/in/alexander-wilson-47417a4b/'}>LinkedIn</a></i></p>
                </div>
            </section>
        </div>
    )
}

export default Contact
