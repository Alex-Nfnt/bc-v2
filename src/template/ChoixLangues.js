import React from 'react';
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';
import Button from '@material-ui/core/Button';

function ChooseLanguage ({ t }) {

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div>
      <Button onClick={() => changeLanguage('fr')}>fr</Button>
      <Button onClick={() => changeLanguage('en')}>en</Button>
      {/* <Button onClick={() => changeLanguage('nl')}>nl</Button> */}
    </div>
  )
}

export default withNamespaces()(ChooseLanguage);

