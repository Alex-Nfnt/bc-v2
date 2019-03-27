import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/App.scss';

import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckIcon from '@material-ui/icons/Check';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import FormContact from '../template/FormContact'

import ImgLogo from '../img/logo.png'
import MakeTheDifference from "../img/MakeTheDifference.png"



function Home({ t }) {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
        <div className="Home">
            <div className="Element0">
                <Grid container>
                    <Grid xs={12} sm={12} md={6}>
                        <img src={ImgLogo} alt="Home top" width='350' />
                    </Grid>
                    <Grid xs={12} sm={12} md={6}>
                        <h1> {t('HomeSlogan')} </h1>
                        <p>{t('HomeSloganP1')}</p>
                        <p>{t('HomeSloganP2')}</p>
                        <p>{t('HomeSloganP3')}</p>
                        <p>{t('HomeSloganP4')}</p>
                        <Link to="/Contact" className="Links">
                            <Button className='boutonCertifier'>
                                <p>{t('HomeSloganTexteBouton')}</p>
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </div>


            <div className="Element1">
                <Grid container className="Element1Grid">
                    <Grid xs={12} md={6}>
                        <h2>{t('HomeConnaitreSaConnectiviteTitre')}</h2>
                        <p>{t('HomeConnaitreSaConnectiviteP1')}</p>
                        <p>{t('HomeConnaitreSaConnectiviteP2')}</p>
                        <p>{t('HomeConnaitreSaConnectiviteP3')}</p>

                    </Grid>
                    <Grid xs={12} md={6}>
                        <img src={MakeTheDifference} alt="" />

                    </Grid>
                </Grid>

            </div>

            <div className="Element2">
                <div className="Element2Text">
                    <h2>{t('HomeBuildConnectValoriseTitre')}</h2>
                    <p>{t('HomeBuildConnectValoriseP1')}</p>
                    <p>{t('HomeBuildConnectValoriseP2')}</p>
                    <p>{t('HomeBuildConnectValoriseP3')}</p>
                    <p>{t('HomeBuildConnectValoriseP4')}</p>

                </div>
            </div>

            <div className="Element3">
                <h2>{t('HomeRepondreTousBesoinsTitre')} </h2>
                <Grid container className="Element3Grid">
                    <Grid xs={12} sm={12} md={4}>
                        <Card className="Element3Cards">
                            <h3>Ready2Use</h3>
                            <p>{t('HomeBesoinRdy2UseSousTitre')}</p>
                            <p>______________________</p>
                            <List className="Element3CardList">
                                <ListItem>
                                    <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                    <p>{t('HomeBesoinRdy2UseElem1')}</p>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                    <p>{t('HomeBesoinRdy2UseElem2')}</p>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                    <p>{t('HomeBesoinRdy2UseElem3')}</p>
                                </ListItem>
                            </List>
                            <br />
                            <br />
                            <Link to="/Contact" className="Links">
                                <Button className="Element3CardsBtn">
                                    <p>{t('HomeRepondreTousBesoinsContact')}</p>
                                </Button>
                            </Link>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={12} md={4}>
                            <Card className="Element3Cards rdy2rent">
                                <h3>Ready2Rent</h3>
                                <p>{t('HomeBesoinRdy2RentSousTitre')}</p>
                                <p>______________________</p>
                                <List className="Element3CardList">
                                    <ListItem>
                                        <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                        <p>{t('HomeBesoinRdy2RentElem1')}</p>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                        <p>{t('HomeBesoinRdy2RentElem2')}</p>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                        <p>{t('HomeBesoinRdy2RentElem3')}</p>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                        <p>{t('HomeBesoinRdy2RentElem4')}</p>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                        <p>{t('HomeBesoinRdy2RentElem5')}</p>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                        <p>{t('HomeBesoinRdy2RentElem6')}</p>
                                    </ListItem>
                                </List>
                                <Link to="/Contact" className="Links">

                                    <Button className="Element3CardsBtn">
                                        <p>{t('HomeRepondreTousBesoinsContact')}</p>
                                    </Button>
                                </Link>
                            </Card>
                    </Grid>
                    <Grid xs={12} sm={12} md={4}>
                        <Card className="Element3Cards Ready2Innovate">
                            <h3>Ready2Innovate  </h3>
                            <p>{t('HomeBesoinRdy2InnovateSousTitre')}</p>
                            <p>______________________</p>
                            <br />
                            <br />
                            <br />
                            <p><i>{t('HomeRepondreTousBesoinsBientotDispo')}</i></p>
                            <br />
                            <br />
                            <br />
                            <p><i>{t('HomeRepondreTousBesoinsInscrire')}</i></p>

                        </Card>
                    </Grid>
                </Grid>
            </div>

            {/* <div className="Element4">
                <FormContact></FormContact>
            </div> */}
        </div>
    );
}


export default withNamespaces()(Home);