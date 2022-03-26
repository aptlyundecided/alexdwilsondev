import type { NextPage } from 'next'
import SiteNav from './general/site-nav';
import styles from '../styles/Home.module.css'
import 'terminal.css';

const BlogHome: NextPage = () => {
    return (
        <div className={styles.pageContainer}>
            <SiteNav activePage={'blog'}></SiteNav>
            <header>
                <div className={'terminal-card ' + styles.headerCard}>
                    <header>
                        <h1>Blog Overview</h1>
                    </header>
                    <h2>Keeping Myself Honest</h2>
                    <p>If I can't describe it in writing then I will not claim to know it.</p>
                </div>
            </header>
            <div>
                
            </div>
        </div>
    )
}

export default BlogHome
