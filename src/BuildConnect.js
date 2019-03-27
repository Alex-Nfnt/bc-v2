import React, { Component } from 'react';
import './scss/App.scss';

import Header from './view/Header'
import Footer from './view/Footer'
import Home from './view/Home'
import Contact from './view/Contact'
import AboutUs from './view/AboutUs'
import ReadyToRent from './view/Rdy2Rent'
import ReadyToUse from './view/Rdy2Use'

// import ReadyToRent from './view/Rdy2Rent'
import ScrollToTop from "./template/ScrollToTop"
import { HashRouter, Route } from 'react-router-dom';

import HeaderMobile from "./view/HeaderMobile"
import MediaQuery from 'react-responsive';


class BuildConnect extends Component {
  render() {
    return (
      <div className="BuildConnect">
        <HashRouter>
          <ScrollToTop>

            <div>
              <MediaQuery query="(min-width: 750px)">
                <Header></Header>
              </MediaQuery>
              <MediaQuery query="(max-width: 750px)">
                <HeaderMobile></HeaderMobile>
              </MediaQuery>
              <Route exact path="/" component={Home} />
              <Route exact path="/Rdy2Rent" component={ReadyToRent} />
              <Route exact path="/Rdy2Use" component={ReadyToUse} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/AboutUs" component={AboutUs} />

              <Footer></Footer>
            </div>
          </ScrollToTop>

        </HashRouter>

      </div>
    );
  }
}

export default BuildConnect;
