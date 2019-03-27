import React, { Component } from 'react';
import '../scss/App.scss';

import StepperRdy2Use from "../template/StepperReady2Use"

import Rdy2Rent1 from "../img/Rdy2Rent1.png"
import Rdy2Rent2 from "../img/Rdy2Rent2.png"
import Rdy2Rent3 from "../img/Rdy2Rent3.png"

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';

import i18n from '../i18n';
import Button from '@material-ui/core/Button';
import { withNamespaces } from 'react-i18next';


class ReadyToUse extends Component {
    render() {
        return (
            <div className="ReadyToRent">

                <div className="Element0">
                    <h1>Ready 2 Use</h1>
                    <div className="LabelBuildConnect">
                        <h2>{i18n.t('Ready2UseLabelConnectedWork')} <span> {i18n.t('Ready2UseLabelConnectedWork2')} </span> </h2>
                        <h3>{i18n.t('Ready2UseLabelConnectedWorkCitation')}<span>{i18n.t('Ready2UseLabelConnectedWorkCitation2')}</span> {i18n.t('Ready2UseLabelConnectedWorkCitation3')}</h3>
                    </div>
                </div>

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
                            <img src={Rdy2Rent2} alt="" />
                        </Grid>
                        <Grid sm={6} xs={12}>
                            <h2> {i18n.t('AiderChoisir')} </h2>
                            <p> {i18n.t('AiderChoisirTexte')} </p>
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

                <div className="Element4">
                    <StepperRdy2Use></StepperRdy2Use>
                    <a href="mailto:gems@ulb.ac.be" className="Links">
                        <Button className="StepsBtn">
                            <p>{i18n.t('HomeNousContacter')}</p>
                        </Button>
                    </a>
                </div>


                <div className="Element5">

                    <Grid container className="Rdy2RentGrids">
                        <Grid xs={12} sm={6}>
                            <div>
                                <h2> {i18n.t('Ready2UseDerriere')} </h2>
                                <p> {i18n.t('Ready2UseDerriereTexte')} </p>
                                <List>
                                    <ListItem>
                                        <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                        <ListItemText> {i18n.t('Ready2UseDerriereElem1')} </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                        <ListItemText> {i18n.t('Ready2UseDerriereElem2')} </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                        <ListItemText> {i18n.t('Ready2UseDerriereElem3')} </ListItemText>
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
                                        <ListItemText>F{i18n.t('PromouvoirElem2')}</ListItemText>
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

export default withNamespaces()(ReadyToUse);
