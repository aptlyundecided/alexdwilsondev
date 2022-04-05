import type { NextPage } from 'next'
import 'terminal.css';
import SiteNav from '../../general/site-nav';
import styles from '../../../styles/Home.module.css'
import { Canvas } from '../../modules/canvas';

const Dyn = Canvas.Particles.NonInteractive.DynamicThemedParticles;

const FirstCanvas: NextPage = () => {
    return (
        <div className={'canvas-container'}>
            <div style={{top: '0px', position: 'fixed', left: '0px', zIndex: 0}}>

            </div>
            <div className={styles.pageContainer} style={{zIndex: 10}}>
                <SiteNav activePage={'demo-projects'}></SiteNav>
                <header>
                    <div className={'terminal-card ' + styles.headerCard}>
                        <header>
                            <h1>Canvas Animations</h1>
                        </header>
                        <h2>Move Items Within a 2D Coordinate System</h2>
                    </div>
                </header>
                <br />
                <div className={'terminal-card ' + styles.headerCard}>
                    <header>
                        <h2>Randomized Positions, Vectors, Size, and Colors</h2>
                    </header>
                    <p>
                        I found this animation concept from <a href={'https://www.youtube.com/c/ChrisCourses'}>Chris Courses</a> but
                        I've modified it, and adapted it to work within react / next.js here.
                    </p>
                    <p>
                        Move mouse or Tap below:
                    </p>
                </div>
                <div className={'terminal-card ' } >
                    <Dyn></Dyn>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default FirstCanvas
