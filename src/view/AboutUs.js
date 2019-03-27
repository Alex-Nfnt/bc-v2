import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import '../scss/App.scss';

import BuildConnect from "../img/logo.png"
import Opera    from "../img/bigPictureOPERA2.jpg"

import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';


class AboutUs extends Component {
    render() {
        return (
            <div className="AboutUs">
                    <h2> {i18n.t('AboutUsQuiSommesNous')} </h2>
                    <div className="AboutUsGrid">
                        <Grid container className="AboutUsGridContainer">
                            <Grid item xs={12} sm={12} md={7}>
                                <h3>{i18n.t('AboutUsBuildConnect')}</h3>
                                <p> {i18n.t('AboutUsBuildConnectTexte1')} </p>
                                <p> {i18n.t('AboutUsBuildConnectTexte2')} </p>
                                <p> {i18n.t('AboutUsBuildConnectTexte3')} </p>
                                <p> {i18n.t('AboutUsBuildConnectTexte4')} </p>
                            </Grid>
                            <Grid item xs={12} sm={12} md={5}>
                                <img src={BuildConnect} alt="Body 1" />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="AboutUsGridGrey">
                        <Grid container className="AboutUsGridContainer">
                            <Grid item xs={12} sm={5}>
                                <img src={Opera} alt="image Opera" width="100%"/>
                        </Grid>
                            <Grid item xs={12} sm={7}>
                                <h3> {i18n.t('AboutUsOpera')} </h3>
                                <p>{i18n.t('AboutUsOperaTexte')}</p>
                            </Grid>
                        </Grid>
                    </div>

            </div>

        );
    }
}

export default withNamespaces()(AboutUs);