import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import ImgLogo from '../img/logo.png'
import MenuMobile from '../template/MenuMobile'
import { NavLink } from 'react-router-dom';


import { withNamespaces } from 'react-i18next';
import AppBar from '@material-ui/core/AppBar';

import '../scss/MobileApp.scss';

class HeaderMobile extends Component {


    render() {

        return (
            <AppBar className="HeaderMobile">
                <Grid container>
                    <Grid xs={6}>
                        <NavLink to="/">
                            <img src={ImgLogo} alt="Image logo" width="62" />
                        </NavLink>
                    </Grid>
                    <Grid xs={6}>
                        <MenuMobile></MenuMobile>
                    </Grid>
                </Grid>
            </AppBar>
        );
    }
}

export default withNamespaces()(HeaderMobile);