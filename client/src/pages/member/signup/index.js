import { Box, Button, TextField, useTheme, Typography } from "@mui/material";
import { useState } from "react";
import { tokens } from "@/Styles/styles";

const Signup = () => {
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
        birthdate: "",
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

    // TODO 註冊form post
    const submitHandler = async (e) => {
        e.preventDefault();
        // console.log(data);
        try {
            const response = await fetch(
                "http://localhost:3001/member/signup_submit",
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
        <Box sx={styles.flexCenter} height="calc(100% - 60px)">
            <Box
                width="30%"
                height="60%"
                minHeight="500px"
                bgcolor="white"
                padding="4.5rem 3rem 3rem"
                borderRadius="8px"
            >
                <form onSubmit={submitHandler}>
                    <Box sx={{ ...styles.flexCenter, flexDirection: "column" }}>
                        {/* STEP 1 */}
                        {step === 1 && (
                            <>
                                <Typography
                                    variant="h2"
                                    mb={5}
                                    color={colors.black[500]}
                                >
                                    你的Email是什麼？
                                </Typography>
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
                                <Typography
                                    variant="h2"
                                    mb={1}
                                    color={colors.black[500]}
                                >
                                    怎麼稱呼你？
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.primary[300]}
                                    mb={4}
                                >
                                    可以填寫真名也可以保持神秘。
                                </Typography>
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
                                <Typography
                                    variant="h2"
                                    mb={5}
                                    color={colors.black[500]}
                                >
                                    請輸入使用者名稱？
                                </Typography>
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
                                <Typography
                                    variant="h2"
                                    mb={1}
                                    color={colors.black[500]}
                                >
                                    輸入密碼？
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.primary[300]}
                                    mb={4}
                                >
                                    飲食健康有助於密碼記憶。
                                </Typography>
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
                                <Typography
                                    variant="h2"
                                    mb={1}
                                    color={colors.black[500]}
                                >
                                    你的生日是什麼時候？
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.primary[300]}
                                    mb={4}
                                >
                                    讓我幫你找找年齡差不多的運動夥伴。
                                </Typography>
                                <TextField
                                    name="birthdate"
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
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            mt={5}
                        >
                            {/* <Button onClick={prevStep} disabled={step === 0}>
                                Back
                            </Button> */}
                            {step === 5 ? (
                                <Button type="submit">Submit</Button>
                            ) : (
                                <Button onClick={nextStep}>Next</Button>
                            )}
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default Signup;
