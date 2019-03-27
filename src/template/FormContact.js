import React, { Component } from 'react';
import '../scss/App.scss';

import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


class FormContact extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: ''
    //     };

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handleChange(event) {
    //     this.setState({ value: event.target.value });
    // }

    // handleSubmit(event) {
    //     // alert('A message was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }

    render() {
        return (
            <div>
                <Link to="/Contact" className="Links">
                    <Button className="ContactBtn">
                        <p>{i18n.t('HomeNousContacter')}</p>
                    </Button>
                </Link>


                {/* <h2>{i18n.t('HomeNousContacter')}</h2>
                <Grid container className="FormulaireElement4">
                    <Grid xs={12} sm={6}>
                        <TextField
                            className="ContactMessage"
                            label={i18n.t('HomeMail')}>
                        </TextField>
                        <br></br>
                        <TextField
                            className="ContactMessage"
                            label={i18n.t('HomeSujet')}>
                        </TextField>
                    </Grid>

                    <Grid xs={12} sm={6}>
                        <TextField
                            className="ContactMessage"
                            multiline
                            rows="4"
                            label={i18n.t('HomeMessage')}
                            type="text" value={this.state.value} onChange={this.handleChange}>
                        </TextField>
                    </Grid>

                </Grid>
                <Grid xs={12} sm={12}>
                <a href="mailto:gems@ulb.ac.be?body={this.handleChange}" className="Links">

                            <p>{i18n.t('HomeBtnEnvoyer')}</p>
                    </a>

                </Grid> */}

            </div>
        );
    }
}

export default withNamespaces()(FormContact);
