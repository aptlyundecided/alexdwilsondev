import type { NextPage } from 'next'
import SiteNav from './general/site-nav';
import styles from '../styles/Home.module.css'
import 'terminal.css';
import { useState, useEffect } from 'react';


let stringData = `
Hi!

To get a description of things I've worked on, checkout the Development History section. 

The blog will have my ramblings,as well as self-teaching entries, as I find I learn things better if I have to be able to explain what and why something 
is happening. 

I plan to implement a Demo Projects section soon to showcase what I can do with SVG / D3.js, and also to teach myself a 
bit more about WebGL, using three.js
`;
let testStringState = '';
let myInterval: number;

const Home: NextPage = () => {
    const [testString, setTestString] = useState(testStringState);
    const [triggered, setTriggered] = useState(false);

    const f = (y: string): void => {
        if (stringData.length < 1) {
            clearInterval(myInterval)
            return;
        }
        console.log('wut?');
        const a = stringData.split('');
        testStringState = testStringState + a[0];
        setTestString(testStringState);
        const b = a.slice(1);
        stringData = b.join('');
    }

    const append = (): void=> {
        myInterval = setInterval(f, 20);
        setTriggered(true);
    }


    return (
        <div className={styles.pageContainer}>
            <SiteNav activePage={'home'}></SiteNav>
            <header>
                <div className={'terminal-card ' + styles.headerCard}>
                    <h1>Alex Wilson</h1>
                    <h2>Software Engineer</h2>
                </div>
            </header>
            <section>

                <table>
                    <caption>My Current Interests</caption>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Point Of Focus</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Software Architecture</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Static Site Applications</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Popular JS Frameworks</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Microservices & Cloud Service Integrations</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>HTML Canvas, WebGL, and SVG Manipulation</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Interesting Integration Testing & Code Interrogation Techniques</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <div className={'terminal-card ' + styles.headerCard}>
                    <p>
                        I like to build software tooling for data manipulation, as well as building
                        neat looking dashboards and graphical layouts.
                    </p>

                </div>
            </section>
       </div>
    )
}

export default Home
