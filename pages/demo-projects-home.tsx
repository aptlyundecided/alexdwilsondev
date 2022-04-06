import type { NextPage } from 'next'
import SiteNav from './general/site-nav';
import styles from '../styles/Home.module.css'
import blogStyles from '../styles/blog.module.css';
import 'terminal.css';

const BlogHome: NextPage = () => {
    return (
        <div className={styles.pageContainer}>
            <SiteNav activePage={'demo-projects'}></SiteNav>
            <header>
                <div className={'terminal-card ' + styles.headerCard}>
                    <header>
                        <h1>Demo Projects</h1>
                    </header>
                    <h2>Little Hobby Projects</h2>
                    <p>
                        Little projects meant to help me learn how to better implement solutions
                        using various web tech.
                    </p>
                </div>
            </header>
            <div className={'terminal-card ' + blogStyles.latestPosts}>
                <header>
                    <h3>Featured</h3>
                </header>
                &nbsp;
                <p><a href={'/demo-projects/canvas/fractal-changer'}>Fractal Slider</a></p>
                <p><a href={'/demo-projects/canvas/canvas-location'}>Particles Experiments</a></p>
                {/*<p><a href={'/blog/static-app-interest'}>Static App Interest</a></p>*/}
            </div>
        </div>
    )
}

export default BlogHome
