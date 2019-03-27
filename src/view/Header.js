import React, { Component } from 'react';
import { NavLink  } from 'react-router-dom';

// import ChooseLanguage from "../template/ChooseLanguage";

import LangueBtn from "../template/BoutonLangues.js"

import '../scss/App.scss';

import ImgLogo from '../img/logo.png'

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';

import LabelMenu from "../template/LabelMenu"



function Header({ t }) {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }


    return (
        <div className="Header">
            <AppBar className="HeaderAppBar">
                <div className="ContainerAppBar">
                    <Grid container>
                        <Grid xs={2} sm={2}>
                            <div>
                                <NavLink to="/">
                                    <Button>
                                        <img src={ImgLogo} alt="Image logo" width="62" />
                                    </Button>
                                </NavLink>
                            </div>
                        </Grid>
                        <Grid xs={10} sm={10}>
                            <div className="Langue">
                                <LangueBtn></LangueBtn>
                            </div>
                            <NavLink to="/Contact">
                                <Button className="boutonsHeader">
                                    <p>{t('HeaderContact')}</p>
                                </Button>
                            </NavLink>
                            <NavLink to="/AboutUs">
                                <Button className="boutonsHeader">
                                    <p> {t('HeaderAPropos')} </p>
                                </Button>
                            </NavLink>
                            <NavLink to='/Rdy2Rent'>
                                 <Button className="boutonsHeader">
                                     <p>Label</p>
                                 </Button>
                            </NavLink>
                            <NavLink to="/">
                                <Button className="boutonsHeader">
                                    <p> {t('HeaderAccueil')} </p>
                                </Button>
                            </NavLink>
                        </Grid>
                    </Grid>

                </div>
            </AppBar>
        </div>
    );
}


export default withNamespaces()(Header);
