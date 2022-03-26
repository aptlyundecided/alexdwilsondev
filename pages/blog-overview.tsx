import type { NextPage } from 'next'
import SiteNav from './general/site-nav';
import styles from '../styles/Home.module.css'
import blogStyles from '../styles/blog.module.css';
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
            <div className={'terminal-card ' + blogStyles.latestPosts}>
                <header>
                    <h3>Latest Posts</h3>
                </header>
                &nbsp;
                <p><a href={'/blog/static-app-interest'}>Static App Interest</a></p>
            </div>
        </div>
    )
}

export default BlogHome
