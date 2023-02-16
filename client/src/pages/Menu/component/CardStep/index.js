// import { Tune } from '@mui/icons-material';
import { Container, StepButton, Stepper, Step, Stack ,Box} from '@mui/material';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import BmiCard from '../BmiCard';
import BmrCard from '../BmrCard';
import GoalCard from '../GoalCard';
import TestResult from '../TestResult';
import WeightCard from '../WeightCard';

function CardStep() {
  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState([
    { label: 'BMI', completed: false },
    { label: 'BMR', completed: false },
    { label: 'Goal', completed: false },
    { label: 'Weight', completed: false },
    { label: 'Result', completed: false },
  ]);


  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep => activeStep + 1)
    } else {
      const stepIndex = findUnfinshed();
      setActiveStep(stepIndex);
    }
  }

  const checkDisabled = () => {
    if (activeStep < steps.length - 1) return false
    const index = findUnfinshed
    if (index !== -1) return false
    return true
  }

  const findUnfinshed = () => {
    return steps.findIndex(step => !step.completed)
  }


  return (
    <Container sx={{ my: 4 }}>
      <Stepper
        alternativeLabel
        nonLinear
        activeStep={activeStep}
        sx={{ mb: 3 }}

      >
        {steps.map((step, index) => (
          <Step key={step.label} completed={step.completed}>
            <StepButton onClick={() => setActiveStep(index)}>
              {step.label}
            </StepButton>

          </Step>
        ))}
      </Stepper>
      <Box>
        {{
          0:<BmiCard/>,
          1:<BmrCard/>,
          2:<GoalCard/>,
          3:<WeightCard/>,
          4:<TestResult/>,
        }[activeStep]}
      </Box>
      {/* Back&And button */}
      <Stack
        direction='row'
        sx={{ pt: 2, pb: 7, justifyContent: 'space-around' }}
      >
        <Button
          color="inherit"
          disabled={!activeStep}
          onClick={() => setActiveStep(activeStep => activeStep - 1)}
        >
          Back
        </Button>
        <Button
          disabled={checkDisabled()}
          onClick={handleNext}
        >
          Next
        </Button>

      </Stack>
    </Container>
  )
}

export default CardStep