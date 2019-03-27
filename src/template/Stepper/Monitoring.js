import React, { Component } from 'react';
import '../../scss/App.scss';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import Grid from '@material-ui/core/Grid';
import i18n from '../../i18n';

class MiseAJour extends Component {
  render() {
    return (
      <div className="Steps">
        <h2>{i18n.t('StepperMonitoring')}</h2>
        <Grid container>
          <Grid xs={12} sm={12}>
            <List>
              <ListItem>
                <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                <p>{i18n.t('StepperMonitoringMesure')}</p>
              </ListItem>
              <ListItem>
                <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                <p>{i18n.t('StepperMonitoringSurveillance')}</p>
              </ListItem>
            </List>
            <ListItem>
                <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                <p>{i18n.t('StepperMonitoringReporting')}</p>
              </ListItem>
          </Grid>
          {/* <Grid xs={6} sm={6}>
            <h3>{i18n.t('StepperMonitoringPrix')}</h3>
            <Button className="StepsBtn">
              <p>Souscrire</p>
            </Button>
          </Grid> */}
        </Grid>
      </div>
    );
  }
}

export default MiseAJour;
