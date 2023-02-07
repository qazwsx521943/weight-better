import {
    Card,
    CardContent,
    Box,
    Button,
    TextField,
    useTheme,
    Typography,
} from "@mui/material";
import { tokens } from "@/Styles/styles";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { useState } from "react";

//** 1st */
const StepOne = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const fakeSub = (values) => {
        props.nextStepHandler(values);
    };

    return (
        <>
            <Typography variant="h2" m={2} color={colors.black[500]}>
                您的E-mail是什麼?
            </Typography>
            <br />
            <Box
                display="flex"
                flexDirection="column"
                gap="20px"
                alignItems="center"
                justifyContent="space-between"
            >
                <TextField name="email" label="電子郵件" />
                <br />
                <Button variant="contained" onClick={fakeSub}>
                    Next
                </Button>
            </Box>
        </>
    );
};
const StepTwo = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const fakeSub = (values) => {
        props.nextStepHandler(values);
    };

    return (
        <>
            <Typography
                variant="h2"
                m={2}
                color={colors.black[500]}
                textAlign="center"
            >
                您的生日是什麼時候?
            </Typography>
            <Typography
                variant="h5"
                m={2}
                color={colors.black[200]}
                textAlign="center"
            >
                讓我幫你找找年齡差不多的運動夥伴
            </Typography>
            <br />
            <Box
                display="flex"
                flexDirection="column"
                gap="20px"
                alignItems="center"
                justifyContent="space-between"
            >
                <TextField name="birthdate" label="出生年月日" />
                <br />
                <Button variant="contained" onClick={fakeSub}>
                    Next
                </Button>
            </Box>
        </>
    );
};
//** 2nd */
// const StepTwo = (props) => {
//     const handleSubmit = (values) => {
//         props.nextStepHandler(values);
//     };

//     return (
//         <Formik initialValues={props.data} onSubmit={handleSubmit}>
//             <Form autoComplete="off">
//                 <Field
//                     name="birthdate"
//                     component={TextField}
//                     label="出生年月日"
//                 />
//                 <Button type="submit">Next</Button>
//             </Form>
//         </Formik>
//     );
// };

//** 3rd */
const StepThree = (props) => {
    const handleSubmit = (values) => {
        props.nextStepHandler();
    };

    return (
        <Formik initialValues={props.data} onSubmit={handleSubmit}>
            <Form autoComplete="off">
                <Field name="fullname" component={TextField} label="姓名" />
                <Button type="submit">Next</Button>
            </Form>
        </Formik>
    );
};

//** 4th */
const StepFour = (props) => {
    const handleSubmit = (values) => {
        props.nextStepHandler();
    };

    return (
        <Formik initialValues={props.data} onSubmit={handleSubmit}>
            <Form autoComplete="off">
                <Field
                    name="username"
                    component={TextField}
                    label="使用者名稱"
                />
                <Button type="submit">Next</Button>
            </Form>
        </Formik>
    );
};

//** 5th */
const StepFive = (props) => {
    const handleSubmit = (values) => {
        props.nextStepHandler();
    };

    return (
        <Formik initialValues={props.data} onSubmit={handleSubmit}>
            <Form autoComplete="off">
                <Field name="password" component={TextField} label="密碼" />
                <Button type="submit">Next</Button>
            </Form>
        </Formik>
    );
};

const Signup = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // form data
    const [data, setData] = useState({
        email: "",
        birthdate: "",
        fullname: "",
        username: "",
        password: "",
    });

    // form steps
    const [currentStep, setCurrentStep] = useState(0);

    // form step handler
    const nextStepHandler = (newData) => {
        setData((prev) => ({ ...prev, ...newData }));
        setCurrentStep((prev) => prev + 1);
    };
    const prevStepHandler = (newData) => {
        setData((prev) => ({ ...prev, ...newData }));
        setCurrentStep((prev) => prev - 1);
    };

    const steps = [
        <StepOne nextStepHandler={nextStepHandler} data={data} />,
        <StepTwo
            nextStepHandler={nextStepHandler}
            prevStepHandler={prevStepHandler}
            data={data}
        />,
        <StepThree
            nextStepHandler={nextStepHandler}
            prevStepHandler={prevStepHandler}
            data={data}
        />,
        <StepFour
            nextStepHandler={nextStepHandler}
            prevStepHandler={prevStepHandler}
            data={data}
        />,
        <StepFive
            nextStepHandler={nextStepHandler}
            prevStepHandler={prevStepHandler}
            data={data}
        />,
    ];

    const signupHandler = (e) => {
        console.log(e);
    };
    console.log(data);
    //** signup page render */
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Box
                display="flex"
                flexDirection="column"
                height="60vh"
                padding="40px"
                bgcolor={colors.black[300]}
            >
                <form onSubmit={signupHandler}>{steps[currentStep]}</form>
            </Box>
        </Box>
    );
};

export default Signup;
