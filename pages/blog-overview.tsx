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
                    <h2>Documenting the Journey</h2>
                    <p>
                        I learn better when writing about what I am tinkering with. Maybe not tutorials or
                        code examples, but generally speaking about sticking points, or parts of the tech that
                        I love or hate.
                    </p>
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
