import type { NextPage } from 'next'
import SiteNav from './general/site-nav';
import styles from '../styles/Home.module.css'
import 'terminal.css';

const Home: NextPage = () => {
    return (
        <div className={styles.pageContainer}>
            <SiteNav activePage={'home'}></SiteNav>
            <header>
                <div className={'terminal-card ' + styles.headerCard}>
                    <h1>Alex Wilson</h1>
                    <h2>Software Engineer</h2>
                    <p>Writing code since 2012</p>
                </div>
            </header>
       </div>
    )
}

export default Home
