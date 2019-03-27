import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';


import '../scss/App.scss';


class Contact extends Component {


  render() {

    return (
      <div className="Contact">
        <h2> {i18n.t('ContactNousContacter')} </h2>
        <Grid container>
          <Grid item xs={4} sm={6}>
            <h3>{i18n.t('ContactMail')}</h3>
          </Grid>
          <Grid item xs={8} sm={6}>
            <p>{i18n.t('ContactEnvoyerMail')}</p>
          </Grid>
          <Grid item xs={4} sm={6}>
            <h3>{i18n.t('ContactTelephone')}</h3>
          </Grid>
          <Grid item xs={8} sm={6}>
            <p>{i18n.t('ContactNumeroTelephone')}</p>
          </Grid>
          <Grid item xs={4} sm={6}>
            <h3>{i18n.t('ContactLaboratoireOpera')}</h3>
          </Grid>
          <Grid item xs={8} sm={6}>
            <p>
              <a href="http://www.ulb.ac.be/facs/polytech/opera/index.html" target="_blank" className="Links">{i18n.t('ContactWebsiteOpera')}</a>
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withNamespaces()(Contact);