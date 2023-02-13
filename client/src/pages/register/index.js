import { Box, Button, TextField, useTheme, Typography } from "@mui/material";
import { useState } from "react";
import { tokens } from "@/Styles/styles";
import Form from "../global/Form";
import Title from "./Title";
import ArrowButton from "../login/components/ArrowButton/ArrowButton";

const Register = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const styles = {
        flexCenter: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        input: {
            backgroundColor: colors.primary[100],
        },
    };

    // form steps
    const [step, setStep] = useState(1);

    // formdata collect
    const [formData, setFormData] = useState({
        email: "",
        fullname: "",
        username: "",
        password: "",
        birth_date: "",
    });

    // next step
    const nextStep = () => {
        setStep((prev) => prev + 1);
    };

    // prev step
    const prevStep = () => {
        setStep((prev) => prev - 1);
    };

    // change formData
    const inputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // REVIEW - 會員註冊api
    const submitHandler = async () => {
        try {
            const response = await fetch(
                "http://localhost:8080/user/register",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }
            );
            const data = await response.json();
            console.log("Success: ", data);
        } catch (error) {
            console.error("Error: ", error);
        }
    };
    return (
        <div className="top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute w-96">
            <Form>
                {/* STEP 1 */}
                {step === 1 && (
                    <>
                        <Title>你的Email是什麼？</Title>
                        <TextField
                            variant="outlined"
                            name="email"
                            label="電子郵件"
                            value={formData.email}
                            onChange={inputChange}
                            fullWidth
                            sx={styles.input}
                        />
                    </>
                )}
                {/* STEP 2 */}
                {step === 2 && (
                    <>
                        <Title subtitle="可以填寫真名也可以保持神秘。">
                            怎麼稱呼你？
                        </Title>
                        <TextField
                            name="fullname"
                            label="姓名"
                            value={formData.name}
                            onChange={inputChange}
                            fullWidth
                            sx={styles.input}
                        />
                    </>
                )}
                {/* STEP 3 */}
                {step === 3 && (
                    <>
                        <Title>請輸入使用者名稱？</Title>
                        <TextField
                            name="username"
                            label="使用者名稱"
                            value={formData.username}
                            onChange={inputChange}
                            fullWidth
                            sx={styles.input}
                        />
                    </>
                )}
                {/* STEP 4 */}
                {step === 4 && (
                    <>
                        <Title subtitle="飲食健康有助於密碼記憶。">
                            輸入密碼？
                        </Title>
                        <TextField
                            name="password"
                            label="密碼"
                            value={formData.password}
                            onChange={inputChange}
                            type="password"
                            fullWidth
                            sx={styles.input}
                        />
                    </>
                )}
                {/* STEP 5 */}
                {step === 5 && (
                    <>
                        <Title subtitle="讓我幫你找找年齡差不多的運動夥伴。">
                            生日是什麼時候？
                        </Title>
                        <TextField
                            name="birth_date"
                            label="出生年月日"
                            value={formData.birthdate}
                            onChange={inputChange}
                            //FIXME - material ui date selector
                            type="date"
                            fullWidth
                            sx={styles.input}
                        />
                    </>
                )}
                <Box display="flex" justifyContent="space-between" mt={5}>
                    {step === 5 ? (
                        <ArrowButton color="teal" onClick={submitHandler}>
                            Submit
                        </ArrowButton>
                    ) : (
                        <ArrowButton onClick={nextStep}>Next</ArrowButton>
                    )}
                </Box>
            </Form>
        </div>
    );
};

export default Register;
