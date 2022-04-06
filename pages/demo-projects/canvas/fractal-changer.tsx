import type { NextPage } from 'next'
import 'terminal.css';
import SiteNav from '../../general/site-nav';
import styles from '../../../styles/Home.module.css'
import { Canvas } from '../../../modules/canvas';
import {} from '../../../modules/canvas';
const TreeOne = Canvas.Fractals.Trees.One;

const FractalChanger: NextPage = () => {
    return (
        <div className={'canvas-container'}>
            <div style={{top: '0px', position: 'fixed', left: '0px', zIndex: 0}}>

            </div>
            <div className={styles.pageContainer} style={{zIndex: 10}}>
                <SiteNav activePage={'demo-projects'}></SiteNav>
                <header>
                    <div className={'terminal-card ' + styles.headerCard}>
                        <header>
                            <h1>Fractal Sliders</h1>
                        </header>
                        <h2>Modify Fractal Effect with Sliders</h2>
                    </div>
                </header>
                <br />
                <div className={'terminal-card ' + styles.headerCard}>
                    <header>
                        <h2>Fractal Tree Draw Function</h2>
                    </header>
                    <p>
                        The angle and length provided from the draw function changes with
                        the slider values.
                    </p>
                    <p>
                        Move the sliders to see the result of the fractal function
                        change in real time.
                    </p>

                </div>
                <div className={styles.tallContainer}>
                    <TreeOne></TreeOne>
                </div>
                {/*<Dyn></Dyn>*/}

            </div>
        </div>
    )
}

export default FractalChanger
