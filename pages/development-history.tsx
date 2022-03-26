import type { NextPage } from 'next'
import SiteNav from './general/site-nav';
import styles from '../styles/Home.module.css'
import 'terminal.css';

const DevelopmentHistory: NextPage = () => {
    return (
        <div className={styles.pageContainer}>
            <SiteNav activePage={'development-history'}></SiteNav>
            <header>
                <div className={'terminal-card ' + styles.headerCard}>
                    <h1>Development History</h1>
                    <h2>My Noteworthy Software Solutions</h2>
                    <p>
                        Disclaimer: The items below are built with various different programming languages and
                        environments.
                    </p>
                    <p>
                        They are listed to demonstrate proficiency and experience in software architectures, operational constraints,
                        and adapting to implement technologies that resulted in a robust production solution.
                    </p>
                </div>
            </header>
            <section>
                <div className={'terminal-timeline'}>
                    <div className={'terminal-card'}>
                        <header>Realtime Vehicle and Material Position Display (Angular)</header>
                        <div>
                            Created a top-view facility map that showed the realtime position
                            of various autonomous and manually driven vehicles, as well as customer
                            inventory in their production facility.  Location tech was driven by bluebotics, UI Layout
                            was built with Angular, and D3.js.
                        </div>
                    </div>

                    <div className={'terminal-card'}>
                        <header>Tik Tok Bookmarking Web App (Angular.js, Node.js)(Vue.js, Node.js)</header>
                        <div>
                            <p>
                                Created bookmarking application called <em><a href={'https://clockipedia.com'}>Clockipedia</a></em> for
                                bookmarking, tagging, and organizing TikToks into playlists.
                            </p>
                            <p>
                                The entire site is being rebuilt in Nuxt.js / Vue.js.  I want to make the tags I assign to
                                the bookmarks publicly searchable, so that other people can find or recommend tags for specific
                                TikToks.
                            </p>
                        </div>
                    </div>

                    <div className={'terminal-card'}>
                        <header>Dynamic SignalR API Subscription Endpoint Handling (Angular)</header>
                        <div>
                            Created Angular class which serves as a data-provider to any given angular
                            component, which manages its own subscription state as a signalR client, to
                            the server hub.

                            Would also do inbound data comparisons before triggering updates in Zone.js to
                            prevent exaggerated render as server would publish data on interval, rather than
                            on relevant data / state change.
                        </div>
                    </div>

                    <div className={'terminal-card'}>
                        <header>SignalR Hub Endpoint / API Updates (C#)</header>
                        <div>
                            Based on needs from the Front-End of the application, API endpoints would be updated to return
                            differently queried data, an updated DTO, or perhaps even the event handler and response names
                            needed updating.
                        </div>
                    </div>

                    <div className={'terminal-card'}>
                        <header>Azure Functions Serverless Microservice Setup (Node.js)</header>
                        <div>
                            These are incredibly useful and I have used them for a large number of use cases, but
                            the best production instance was for as a telemetry receiver.  The function would be invoked
                            by an observer PC, that collected process data from manufacturing machines.

                            This data would be validated in the server function, then loaded into either an Azure blob, SQL table,
                            or MongoDB Doc depending on the use-case by interfacing with respective DB API.
                        </div>
                    </div>

                    <div className={'terminal-card'}>
                        <header>OPC UA Client & Server (Python & Node.js)</header>
                        <div>
                            Created a custom OPC client and server for establishing communications to Siemens S7-1500 controller.
                            The server had the additional responsibility of broadcasting collected data via HTTP to an azure serverless function
                            so that it could be logged for machine OEE (Overall Equipment Effectiveness) analysis.
                        </div>
                    </div>

                    <div className={'terminal-card'}>
                        <header>Shuttle Pallet Delivery System (SCL | Pascal)</header>
                        <div>
                            Reverse engineered a shuttle delivery system for Wal-mart Refrigerated Storage division, to
                            receive pallets containing various food products, and shuttle these pallets to the appropriate
                            drop zones so they could be further allocated into 3D storage racks.
                        </div>
                    </div>

                    <div className={'terminal-card'}>
                        <header>Battery Cell Casing Cleaning, Inspection, and Packing (SCL | PASCAL)</header>
                        <div>
                            Developed various software solutions at Tesla Gigafactory Reno, for the handling of battery
                            cell casings.
                            Primarily focused on a machine called a palletizer which would receive trays of casings, and
                            neatly stack the trays on a pallet in preparation to be moved to the next part of the facility
                            so they could be used to house battery chemicals and components.
                        </div>
                    </div>

                    <div className={'terminal-card'}>
                        <header>Data Collection and Display System (Vue.js, Node.js, Azure)</header>
                        <div>
                            Used Node.js, Azure Functions, and Vue.js to create a data collection and display system that
                            showed production floor managers, and the manufacturing engineering team relevant performance
                            metrics, error states, and realtime production status for connected devices and machines.
                        </div>
                    </div>

                    <div className={'terminal-card'}>
                        <header>Bulb Integrity Testing System (Ladder Logic [Allen Bradley])</header>
                        <div>
                            <p>
                                Reprogrammed a Bulb Integrity evaluation system using Cognex Vision system.  This system
                                would heat a bulb to a specific temperature, observe changes in the bulb, allow the bulb to cool,
                                then observe again.
                            </p>
                            <p>
                                Based on the changes in the bulb it would be passed or failed to be installed into a Fire Sprinkler.
                            </p>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default DevelopmentHistory
