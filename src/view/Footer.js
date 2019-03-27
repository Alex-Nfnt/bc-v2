import React, { Component } from 'react';
import '../scss/App.scss';
import Grid from '@material-ui/core/Grid';
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';

import ULBlogo from "../img/ULBlogo.png";
import OperaLogo from "../img/OperaLogo.png";
import Avatar from '@material-ui/core/Avatar';

function Footer({ t }) {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
        <div className="Footer">
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <h2>{t('FooterPartenaires')}</h2>
                </Grid>
                <Grid container className="partenaires">
                    <Grid item xs={3} sm={3}>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                        <Avatar className="AvatarPartenaire">
                            <a href="http://www.ulb.ac.be/facs/polytech/opera/index.html" target="_blank" className="Links">
                                <img src={OperaLogo} alt="Opera Logo" className="FooterAvatarLogo" />
                            </a>
                        </Avatar>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                        <Avatar className="AvatarPartenaire">
                            <a href="http://www.ulb.ac.be/" target="_blank" className="Links">
                                <img src={ULBlogo} alt="ULB logo" className="FooterAvatarLogo" />
                            </a>
                        </Avatar>
                    </Grid>
                    <Grid item xs={3} sm={3}>

                    </Grid>
                </Grid>
                <Grid container className="buildConnect">
                    <Grid item xs={6} sm={6}>
                        <div className="infos">
                            <a href="http://www.buildconnect.be" target="_blank" className="Links">
                                <p className="OperaLink">{t('FooterBuildconnect')}</p>
                            </a>
                            <a href="http://www.ulb.ac.be/facs/polytech/opera/index.html" target="_blank" className="Links">
                                <p className="OperaLink">{t('FooterInfo1')}</p>
                            </a>
                            <a href="http://www.ulb.ac.be" target="_blank" className="Links">
                                <p className="OperaLink">{t('FooterInfo2')}</p>
                            </a>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <div className="BuildConnectInfo adresse">
                            <p>{t('FooterRue')}</p>
                            <p>{t('FooterCommune')}</p>
                            <p>{t('FooterMail')}</p>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}


export default withNamespaces()(Footer);