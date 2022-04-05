import styles from "../../styles/Home.module.css";
import {NextComponentType, NextPage, NextPageContext} from "next";
import { PropsWithChildren } from "react";
import { ComponentType } from 'react';

interface SiteNavProps {
    activePage: string;
}


const SiteNav: any = (props: PropsWithChildren<any>) => {
    const inactive = 'menu-item';
    const active = 'menu-item active';
    let blogActive, aboutActive, homeActive, demoProjects, contactActive = 'menu-item';
    if (typeof props.activePage !== 'undefined') {
        homeActive = props.activePage === 'home' ? active : inactive;
        blogActive = props.activePage === 'blog' ? active : inactive;
        aboutActive = props.activePage === 'development-history' ? active : inactive;
        demoProjects = props.activePage === 'demo-projects' ? active : inactive;
        contactActive = props.activePage === 'contact' ? active : inactive;
    }
    return (
        <section>
            <div className={'terminal-card' + styles.headerCard}>
                <nav className={'terminal-menu'}>
                    <ul>
                        <li>
                            <a href={'/'} className={homeActive}>Home</a>
                        </li>
                        <li>
                            <a href={'/blog-overview'} className={blogActive}>Blog</a>
                        </li>
                        <li>
                            <a href={'/demo-projects/canvas/canvas-location'} className={demoProjects}>Demo Projects</a>
                        </li>
                        <li>
                            <a href={'/development-history'} className={aboutActive}>Development History</a>
                        </li>
                        <li>
                            <a href={'/contact'} className={contactActive}>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default SiteNav
