import {  Form } from "antd"
import ForgetImage from "../../assets/img/signin/forgot.png"
import FloatInput from "../../components/floatInput/FloatingInput";
import { RulesEmail} from "../../utils/RulesValidation";
import { t } from "i18next";
import { NavLink } from "react-router-dom";

import './index.css'
import { fontDir } from "../../utils/helpFunctions";
const ResetPassword = () => {
    const { currentFont } = fontDir();
    return (
        <div className="bg-words-green-light w-full flex items-center justify-center  h-full login_page user_reset-password">
            <div className="m-auto bg-word-gray-light-1 rounded-2xl   login_container w-full"
            >
                <div className="flex xl:flex-row  flex-col gap-x-12 h-full sm:p-10  p-6">
                    <div className="xl:w-3/5 flex items-center  w-full h-full flex-col m-auto">
                        <img src={ForgetImage} alt="login_img" className="object-cover image_responsive " />
                    </div>
                    <div className="xl:w-2/5 w-full flex flex-col items-start justify-center md:pe-12 md:ps-6 p-0  ">
                        <h2 className="xl:text-4xl/[80px] text-2xl font-bold text-words-green-light">{`${t("Forgot Password ?")}`}</h2>
                        <h6 className="xl:text-base text-sm  text-word-dark xl:-mt-4 mt-1">{`${t("No worriest! Just enter your email and we’ll send you a reset password link.")}`}</h6>
                        <div className="w-full my-24">
                            <Form
                                size="large"
                                name="user_reset-password"
                                className={`${currentFont}`}
                                layout="vertical"
                            >
                                <Form.Item name="email" rules={RulesEmail()} hasFeedback>
                                    <FloatInput
                                        label={`${t("Email Address")}`}
                                        placeholder={`${t("Email Address")}`}
                                        type="email"
                                    />
                                </Form.Item>
                                <button className="bg-words-green-light py-2 px-10 rounded w-full" type="submit">
                                    <span className="text-word-white xl:text-base text-xs">{`${t("Send Recovery Email")}`}</span>
                                </button>
                            </Form>


                        </div>
                        <div className="w-full flex  justify-center xl:mt-6 mt-4 pb-12">
                            <p className="text-word-dark text-sm">{`${t("Just remember?")}`}</p>
                            <NavLink to="/login">
                                <span className="text-words-green-light text-sm mx-1">{`${t(" Sign in")}`}</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;