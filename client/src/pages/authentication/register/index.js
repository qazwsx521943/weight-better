import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import Form from "../../login/components/Form";
import Title from "./Title";
import ArrowButton from "../ArrowButton/ArrowButton";
import Logo from "@/assets/WB3.png";

const Register = () => {
    const navigate = useNavigate();
    const styles = {
        flexCenter: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        input: {
            backgroundColor: "white.main",
        },
    };

    // form steps
    const [step, setStep] = useState(1);
    const [message, setMessage] = useState();

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
        AuthService.register(formData)
            .then(() => {
                window.alert("註冊成功");
                navigate("/login");
            })
            .catch((e) => setMessage(e.response.data));
    };
    return (
        // <div className="top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute w-96">
        <div>
            <div className="flex flex-col p-10 gap-20 bg-gradient-to-r from-primary to-pink  bg-opacity-60">
                <div className="flex flex-row ">
                    <img src={Logo} width="200px" className="hover:cursor-pointer" onClick={() => navigate("/")} />
                </div>
                <div className={"flex flex-grow flex-row justify-center"}>
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
                                <Title subtitle="可以填寫真名也可以保持神秘。">怎麼稱呼你？</Title>
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
                                <Title subtitle="飲食健康有助於密碼記憶。">輸入密碼？</Title>
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
                                <Title subtitle="讓我幫你找找年齡差不多的運動夥伴。">生日是什麼時候？</Title>
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
                            {message && <div className="text-primary">{message}</div>}
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
                <div className="flex-row justify-between">
                    <img src={Logo} width="200px" />
                </div>
            </div>
        </div>
    );
};

export default Register;
