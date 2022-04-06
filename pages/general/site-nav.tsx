import styles from "../../styles/Home.module.css";
import { PropsWithChildren, useState, useEffect } from "react";

const SiteNav: any = (props: PropsWithChildren<any>) => {
    const [menu, setMenu] = useState(false);
    const [onLoad, setOnLoad] = useState(false);
    const inactive = 'menu-item';
    const active = 'menu-item active';
    let blogActive, aboutActive, homeActive, demoProjects, contactActive = 'menu-item';

    useEffect(() => {
        if (!onLoad) {
            if (window.innerWidth > 800) {
                setMenu(true);
            }
        }

        setOnLoad(true);
    }, [onLoad]);

    if (typeof props.activePage !== 'undefined') {
        homeActive = props.activePage === 'home' ? active : inactive;
        blogActive = props.activePage === 'blog' ? active : inactive;
        aboutActive = props.activePage === 'development-history' ? active : inactive;
        demoProjects = props.activePage === 'demo-projects' ? active : inactive;
        contactActive = props.activePage === 'contact' ? active : inactive;
    }

    return (
        <nav className={'site-menu'}>
            <p className={'terminal-prompt ' + 'menu-btn'} onClick={() => {setMenu(!menu)}}>
                <span>{menu ? 'Close Menu' : 'Open Menu'}</span>
            </p>
            <div className={'terminal-card' + styles.headerCard} style={menu ? {display: 'block'} : {display: 'none'}}>
                <nav className={'terminal-menu'} >
                    <ul>
                        <li>
                            <a href={'/'} className={homeActive}>Home</a>
                        </li>
                        <li>
                            <a href={'/blog-overview'} className={blogActive}>Blog</a>
                        </li>
                        <li>
                            <a href={'/demo-projects-home'} className={demoProjects}>Demo Projects</a>
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
        </nav>
    )
}

export default SiteNav
