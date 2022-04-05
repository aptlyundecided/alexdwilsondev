import styles from "../../styles/Home.module.css";
import { PropsWithChildren } from "react";
import SiteNav from '../general/site-nav';
import 'terminal.css';

const StaticAppInterest: any = (props: PropsWithChildren<any>) => {
    return (
        <div className={styles.pageContainer}>
            <SiteNav activePage={'blog'}></SiteNav>
            <section>
                <div className={'terminal-card'}>
                    <header>
                        <h1>Precision Positioning in HTML Canvas</h1>
                    </header>
                    <div>
                        <p>
                            I've done a fair amount of work in SVG over the past few years.  But I decided that I want
                            to learn more about Canvas, because I am very interested in WebGL, and I want to learn a
                            bit more about how to make more graphical things happen in the Browser.
                        </p>
                        <p>
                            Manipulating a Canvas feels a lot like using D3, but something I'm immediately missing is
                            the ability to query the Canvas for my elements within it.
                        </p>
                        <p>
                            I've relied heavily in the past on finding a specific element from within an SVG, or a group
                            tag within an SVG.  Learning how to make these types of updates without modifying a target
                            element is going to be interesting.
                        </p>
                        <p>
                            But this makes perfect sense, because if you are updating the state of canvas, you can just
                            clear the entire canvas, and re-create from scratch the existing state of a given 'view'.
                        </p>
                        <h3>The Plan</h3>
                        <p>
                            I'll handle precision positioning by scaling the 'state-objects' real-world or simulated
                            positions against the size of the Canvas.
                            Updating their positions
                            will just rely on clearing the canvas, and re-rendering the target elements / items.
                        </p>
                        <h3>
                            Best Practices
                        </h3>
                        <p>
                            <i>
                            <a href={'https://stackoverflow.com/questions/8205828/html5-canvas-performance-and-optimization-tips-tricks-and-coding-best-practices'}>Gold Star BP's:</a>
                            </i>
                        </p>
                        <p>
                            I think in order to reference specific 'items' I think it might be needed to layer canvases,
                            and draw specific entity 'groups' within a set layer.
                        </p>
                        <p>
                            So rather than querying an item and moving it individually to save performance, it makes
                            more sense to give items which do not need specific control to be grouped into a canvas,
                            then group specific controlled items into another canvas which is transparent, and layered
                            on top.
                        </p>
                    </div>
                    <div>&nbsp;</div>
                </div>
                <div className={'terminal-card'}>
                    <h3>Other Posts:</h3>
                    <p><a href={'/blog/static-app-interest'}>Static App Interest</a></p>
                </div>
            </section>
        </div>
    )
}

export default StaticAppInterest
