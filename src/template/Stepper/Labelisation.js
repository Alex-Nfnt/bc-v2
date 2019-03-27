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

class Labelisation extends Component {
    render() {
        return (
            <div className="Steps">
                <h2>{i18n.t('StepperLabelisation')}</h2>
                <Grid container>
                    <Grid xs={12} sm={12}>
                        <List>
                            <ListItem>
                                <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                <p> {i18n.t('StepperLabelisationAnalyse')}</p>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                <p>{i18n.t('StepperLabelisationCampagne')}</p>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon> <CheckIcon></CheckIcon> </ListItemIcon>
                                <p>{i18n.t('StepperLabelisationAttribution')}</p>
                            </ListItem>
                        </List>
                    </Grid>
                    {/* <Grid xs={6} sm={6}>
                        <h3>2000€ / 1000m² <br />
                                +2000€ / projet</h3>
                        <Button className="StepsBtn">
                            <p>Souscrire</p>
                        </Button>
                    </Grid> */}
                </Grid>
            </div>
        );
    }
}

export default Labelisation;
