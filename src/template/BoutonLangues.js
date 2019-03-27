import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import i18n from '../i18n';

import "../scss/App.scss"

import ChooseLanguage from './ChoixLangues.js';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
    },
});


class LangueBtn extends React.Component {

    state = {
        open: false,
        value: 'select'

    };

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <div className="BoutonChoixLangue">
                    <Button
                        buttonRef={node => {
                            this.anchorEl = node;
                        }}
                        aria-owns={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={this.handleToggle}
                        onMouseLeave={this.handleToggle}
                        className="Langue"
                        onClick={this.handleToggle}
                    >
                    <p> <b> {i18n.t('HeaderLangue')} </b> </p>
                    </Button>
                    <Popper
                        onMouseEnter={this.handleToggle}
                        onMouseLeave={this.handleToggle}

                        open={open} anchorEl={this.anchorEl} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow"
                                style={{ transformOrigin: placement === 'left' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onMouseLeave={this.handleClose}>
                                        <MenuList>
                                            <MenuItem onClick={this.handleClose}>
                                                <ChooseLanguage></ChooseLanguage>
                                            </MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        );
    }
}

LangueBtn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LangueBtn);

