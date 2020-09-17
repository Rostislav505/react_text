import React from 'react';
import Navigation from '../nav-list';
import ContentBlock from '../content-block';
import SeeAlso from '../see';
import Footer from '../footer-bar';
import './app.css';

const App = () => {
    return(
        <div className="wrapper">
            <div className="header">
                <div className="before-line"></div>
                <h1 className="heading">GameHunt</h1>
                <div className="after-line"></div>
                <Navigation />
                <div className="content">
                    <ContentBlock />
                    <ContentBlock />
                    <ContentBlock />
                    <ContentBlock />
                </div>
                <div className="inner-heading">
                    <h2>See also:</h2>
                </div>
                <div className="news-content">
                    <SeeAlso />
                    <SeeAlso />
                    <SeeAlso />
                </div>
                <div className="footer-elem">
                    <Footer />
                </div>
            </div>
        </div>
    
    )
}

export default App;