// import { Tune } from '@mui/icons-material';
import { Container, StepButton, Stepper, Step, Stack ,Box} from '@mui/material';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import BmiCard from '../BmiCard';
import BmrCard from '../BmrCard';
import GoalCard from '../GoalCard';
import TestResult from '../TestResult';
import jwt_decode from "jwt-decode";
import AuthService from '../../../services/auth.service'


function CardStep() {
  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState([
    { label: 'BMI', completed: false },
    { label: 'BMR', completed: false },
    { label: 'Goal', completed: false },
    { label: 'Result', completed: false },
  ]);
  const [userData, setUserData] = useState({
    weight: '',
    height:'',
    age:'',
    goalWeight:'',
    dietType:'',
    active:'',
    goal:'',
  })


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

  const submitUserData = () => {

    console.log(userData)
    const decodedToken = jwt_decode(AuthService.getCurrentUser().token)
    const uid = decodedToken.id
    const url = `http://localhost:8080/menu/addUserData/${uid}`

    fetch(url, {
      method: 'post',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r=>r.json())
    .then(rData => {
      console.log(url, rData)
    })

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
          0:<BmiCard userData={userData} setUserData={setUserData} />,
          1:<BmrCard  userData={userData} setUserData={setUserData}/>,
          2:<GoalCard userData={userData} setUserData={setUserData}/>,
          3:<TestResult userData={userData} setUserData={setUserData}/>,
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
        {activeStep===2?         
        <Button
          disabled={checkDisabled()}
          onClick={submitUserData}
        >Finish</Button> : false}

      </Stack>
    </Container>
  )
}

export default CardStep