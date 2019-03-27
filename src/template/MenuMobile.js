import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import ImgLogo from '../img/logo.png'

import LabelMenu from "../template/LabelMenu"
import LangueBtn from "../template/BoutonLangues.js"

import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom';

import '../scss/MobileApp.scss';
import '../scss/App.scss';


class MenuMobile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu() {
        this.setState({ menuOpen: false })
    }

    render() {

        return (

            <Menu
                right
                width={200}
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
            >
                <br />
                <NavLink to="/" className="Links">
                    <Button onClick={() => this.closeMenu()}>
                        <p>{i18n.t('HeaderAccueil')}</p>
                    </Button>
                </NavLink>
                {/* <NavLink to="/Rdy2Rent" className="Links">
                    <Button onClick={() => this.closeMenu()}>
                        <p>BuildConnect</p>
                    </Button>
                </NavLink> */}
                {/* <NavLink to="/Rdy2Use" className="Links">
                    <Button >
                        <p>Ready2Use</p>
                    </Button>
                </NavLink> */}

                <NavLink to="/AboutUs" className="Links">
                    <Button onClick={() => this.closeMenu()}>
                        <p>{i18n.t('HeaderAPropos')}</p>

                    </Button>
                </NavLink>
                <NavLink to="/Contact" className="Links">
                    <Button onClick={() => this.closeMenu()}>
                        <p>{i18n.t('HeaderContact')}</p>

                    </Button>
                </NavLink>
                <LangueBtn></LangueBtn>


            </Menu>
        );
    }
}

export default withNamespaces()(MenuMobile);