// import React from 'react';
// import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Grow from '@material-ui/core/Grow';
// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';
// import { withStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';

// import "../scss/App.scss"

// const styles = theme => ({
//     root: {
//         display: 'flex',
//     },
//     paper: {
//         marginRight: theme.spacing.unit * 2,
//     },
// });

// class LabelMenu extends React.Component {
//     state = {
//         open: false,
//     };

//     handleToggle = () => {
//         this.setState(state => ({ open: !state.open }));
//     };

//     handleClose = event => {
//         if (this.anchorEl.contains(event.target)) {
//             return;
//         }

//         this.setState({ open: false });
//     };

//     render() {
//         const { classes } = this.props;
//         const { open } = this.state;

//         return (
//             <div className={classes.root}>
//                 <div>
//                     <Button
//                         buttonRef={node => {
//                             this.anchorEl = node;
//                         }}
//                         aria-owns={open ? 'menu-list-grow' : undefined}
//                         aria-haspopup="true"
//                         onMouseEnter={this.handleToggle}
//                         onMouseLeave={this.handleToggle}
//                         className="boutonsHeader"
//                         onClick={this.handleToggle}
//                     >
//                         <p>Labels</p>
//                     </Button>
//                     <Popper
//                         onMouseEnter={this.handleToggle}
//                         onMouseLeave={this.handleToggle}
//                         open={open} anchorEl={this.anchorEl} transition disablePortal>
//                         {({ TransitionProps, placement }) => (
//                             <Grow
//                                 {...TransitionProps}
//                                 id="menu-list-grow"
//                                 style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
//                             >
//                                 <Paper>
//                                     <ClickAwayListener onMouseLeave={this.handleClose} onClick={this.handleClose} >
//                                         <MenuList>
//                                             <MenuItem onClick={this.handleClose}>
//                                                 <Link to="/Rdy2Rent" className="Links">
//                                                     <p>BuildConnect</p>
//                                                 </Link>
//                                             </MenuItem>
//                                             <MenuItem onClick={this.handleClose}>
//                                                 <Link to="/Rdy2Use" className="Links">
//                                                     <p>ConnectedWork</p>
//                                                 </Link>
//                                             </MenuItem>
//                                         </MenuList>
//                                     </ClickAwayListener>
//                                 </Paper>
//                             </Grow>
//                         )}
//                     </Popper>
//                 </div>
//             </div>
//         );
//     }
// }

// LabelMenu.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(LabelMenu);

