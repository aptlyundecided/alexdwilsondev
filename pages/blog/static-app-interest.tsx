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
                        <h1>Static Site / Application Interest</h1>
                    </header>
                    <div>
                        <p>
                            Up until very recently I wasn't terribly interested in static pages and apps because they felt
                            limiting, and purpose built for a blog.
                        </p>
                        <p>
                            But after reading more about the powers of next.js, nuxt.js, and Angular Universal, I decided
                            it was time to invest some time and understand more about it.
                        </p>
                        <p>
                            I noticed that the static app allows me to do mostly the same stuff (if not exactly) as what I
                            would do in a SPA.  My component behavior and design could be very similar, especially if interfacing
                            directly with the server or a proxy server.
                        </p>
                        <p>
                            I also feel that the structure of next/nuxt promotes the "First Repeat Yourself Then Refactor"
                            version of DRY.  I love this because I find early generalization of components and classes to be
                            a time-suck that often bares no fruit.
                        </p>
                        <p>
                            The static app also implies simpler maintenance than running a Server Side Rendered app, because
                            the paradigm of state management is more constrained.  To this developer, the constraints result
                            in a simpler system, with nearly identical feeling features.
                        </p>
                        <p>
                            I feel liberated in managing components and services in the framework because it all
                            integrates so perfectly.  This is only speaking to next/nuxt as I have not yet delved into
                            Angular Universal.
                        </p>
                        <p>So this is more of a farewell to the SPA from me.  "Goodbye, World!" Says the express servers hosting my SPA apps.</p>
                    </div>
                </div>
                <div className={'terminal-card'}>
                    <h3>Other Posts:</h3>
                    <p><a href={'/blog/precision-positioning-with-canvas'}>Precision Positioning with Canvas</a></p>
                </div>
            </section>
        </div>
    )
}

export default StaticAppInterest
