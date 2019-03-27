import React, { Component } from 'react';
import '../scss/App.scss';

import StepperRdy2Rent from "../template/StepperReady2Rent"

import Rdy2Rent1 from "../img/rdy2rent/Coindispensable.png"
import Rdy2Rent2 from "../img/rdy2rent/gainTemps.png"
import Rdy2Rent3 from "../img/rdy2rent/different.png"
import Diamond from "../img/ranking/diamond.png"
import Platine from "../img/ranking/platine.png"
import Gold from "../img/ranking/gold.png"
import Normal from "../img/ranking/normal.png"


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';

import i18n from '../i18n';
import Button from '@material-ui/core/Button';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';


class ReadyToRent extends Component {
    render() {
        return (
            <div className="ReadyToRent">

                <div className="Element0">
                    <h1>Ready 2 Rent</h1>
                    <div className="LabelBuildConnect">
                        <h2> {i18n.t('Ready2RentLabelBuildconnect')} <span>{i18n.t('Ready2RentLabelBuildconnect2')}</span></h2>
                        <h3>« {i18n.t('Ready2RentLabelBuildconnectCitation')} <span>{i18n.t('Ready2RentLabelBuildconnectCitation2')}</span> {i18n.t('Ready2RentLabelBuildconnectCitation3')} <span>{i18n.t('Ready2RentLabelBuildconnectCitation4')}</span> »</h3>
                    </div>
                </div>

                {/* <div className="aConnectedWorld">
                    <Grid container>
                        <Grid xs={6} sm={6} md={3}>
                            <Paper className="paperConnectedWorld1">
                                <h3>Infrastructure</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quas eaque sapiente. Eligendi tempora magnam nisi sed amet</p>
                            </Paper>
                        </Grid>
                        <Grid xs={6} sm={6} md={3}>
                            <Paper className="paperConnectedWorld2">
                                <h3>Securité</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quas eaque sapiente. Eligendi tempora magnam nisi sed amet</p>
                            </Paper>
                        </Grid>
                        <Grid xs={6} sm={6} md={3}>
                            <Paper className="paperConnectedWorld3">
                                <h3>Resilience</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quas eaque sapiente. Eligendi tempora magnam nisi sed amet</p>
                            </Paper>
                        </Grid>
                        <Grid xs={6} sm={6} md={3}>
                            <Paper className="paperConnectedWorld4">
                                <h3>Expérience utilisateur</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quas eaque sapiente. Eligendi tempora magnam nisi sed amet</p>
                            </Paper>
                        </Grid>
                    </Grid>
                </div> */}

                <div className="Element1">
                    <Grid container className="Rdy2RentGrids">
                        <Grid sm={6} xs={12}>
                            <h2> {i18n.t('ConnectiviteIndispensable')} </h2>
                            <p> {i18n.t('ConnectiviteIndispensableTexte')} </p>
                        </Grid>
                        <Grid sm={6} xs={12}>
                            <img src={Rdy2Rent1} alt="" />
                        </Grid>
                    </Grid>
                </div>
                <div className="Element2">
                    <Grid container className="Rdy2RentGrids">
                        <Grid sm={6} xs={12}>
                            <h2> {i18n.t('AiderChoisir')} </h2>
                            <p> {i18n.t('AiderChoisirTexte')} </p>

                        </Grid>
                        <Grid sm={6} xs={12}>
                            <img src={Rdy2Rent2} alt="" />

                        </Grid>
                    </Grid>
                </div>
                <div className="Element3">
                    <Grid container className="Rdy2RentGrids">
                        <Grid sm={6} xs={12}>
                            <h2> {i18n.t('SeDifferencier')} </h2>
                            <p> {i18n.t('SeDifferencierTexte')} </p>
                        </Grid>
                        <Grid sm={6} xs={12}>
                            <img src={Rdy2Rent3} alt="" />
                        </Grid>
                    </Grid>
                </div>

                <div className="Ranking">
                    <h2>Ranking</h2>
                    <Grid container>
                        <Grid xs={6} md={3}>
                            <img src={Normal} alt="" />
                            <h3 color=''>Connected</h3>
                        </Grid>
                        <Grid xs={6} md={3}>
                            <img src={Gold} alt="" />
                            <h3 style={{ color: '#C6BE70' }}>Gold</h3>
                        </Grid>
                        <Grid xs={6} md={3}>
                            <img src={Platine} alt="" />
                            <h3 style={{ color: '#d1d0ce' }}>Platinum</h3>
                        </Grid>
                        <Grid xs={6} md={3}>
                            <img src={Diamond} alt="" />
                            <h3 style={{ color: '#65A6B7' }}>Diamond</h3>
                        </Grid>
                    </Grid>
                </div>

                <div className="Element4">
                    <StepperRdy2Rent></StepperRdy2Rent>
                    <Link to="/Contact" className="Links">
                        <Button className="StepsBtn">
                            <p>{i18n.t('HomeNousContacter')}</p>
                        </Button>
                    </Link>
                </div>


                <div className="Element5">

                    <Grid container className="Rdy2RentGrids">
                        <Grid xs={12} sm={6}>
                            <div>
                                <h2> {i18n.t('Ready2RentDerriere')} </h2>
                                <p> {i18n.t('Ready2RentDerriereTexte')} </p>
                                <List>
                                    <ListItem>
                                        <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                        <ListItemText>{i18n.t('Ready2RentDerriereElem1')}</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                        <ListItemText> {i18n.t('Ready2RentDerriereElem2')} </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                        <ListItemText> {i18n.t('Ready2RentDerriereElem3')} </ListItemText>
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <div className="Element6">
                                <h2> {i18n.t('Promouvoir')} </h2>
                                <p>{i18n.t('PromouvoirTexte')}</p>
                                <List>
                                    <ListItem>
                                        <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                        <ListItemText>{i18n.t('PromouvoirElem1')}</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                        <ListItemText>{i18n.t('PromouvoirElem2')}</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                        <ListItemText>{i18n.t('PromouvoirElem3')}</ListItemText>
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>
                    </Grid>


                </div>

                {/* <div className="Element7">
                    <h2>Système de ranking</h2>
                </div> */}


            </div>

        );
    }
}

export default withNamespaces()(ReadyToRent);
