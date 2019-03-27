import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Typography from '@material-ui/core/Typography';

import Preli from "./Stepper/Preli";
import Labelisation from "./Stepper/Labelisation";
import MiseAJour from "./Stepper/MiseAJour";
import ContactStepper from "./Stepper/Contact";
import i18n from '../i18n';
import MediaQuery from 'react-responsive';



const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return [i18n.t('StepperReady2RentEtape1'), i18n.t('StepperReady2RentEtape2'), i18n.t('StepperReady2RentEtape3'), i18n.t('StepperReady2RentEtape4')];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ContactStepper></ContactStepper>;
    case 1:
      return <Preli></Preli>;
    case 2:
      return <Labelisation></Labelisation>;
    default:
      return <MiseAJour></MiseAJour>;
  }
}

class StepperRdy2Rent extends React.Component {
  state = {
    activeStep: 0,
    completed: {},
  };

  totalSteps = () => getSteps().length;

  handleNext = () => {
    let activeStep;

    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
      const steps = getSteps();
      activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({
      activeStep,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };

  handleComplete = () => {
    const { completed } = this.state;
    completed[this.state.activeStep] = true;
    this.setState({
      completed,
    });
    this.handleNext();
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: {},
    });
  };

  completedSteps() {
    return Object.keys(this.state.completed).length;
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1;
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps();
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root} className="Stepper">

        <MediaQuery query="(min-width: 750px)">

          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton onClick={this.handleStep(index)} completed={this.state.completed[index]}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </MediaQuery>

        <MediaQuery query="(max-width: 750px)">
          <Stepper nonLinear activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton onClick={this.handleStep(index)} completed={this.state.completed[index]}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </MediaQuery>


        <div>
          {this.allStepsCompleted() ? (
            <div>
            </div>
          ) : (
              <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              </div>
            )}
        </div>
      </div>
    );
  }
}

StepperRdy2Rent.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(StepperRdy2Rent);