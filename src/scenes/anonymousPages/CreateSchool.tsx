import { Checkbox, Form } from "antd"
import FloatInput from "../../components/floatInput/FloatingInput";
import { RulesName, RulesPassword } from "../../utils/RulesValidation";
import { t } from "i18next";
import { NavLink } from "react-router-dom";
import './index.css'
import { fontDir } from "../../utils/helpFunctions";
const CreateSchool= () => {
    const { currentFont } = fontDir();
    return (
        <div className="bg-words-green-light w-full flex items-center justify-center  h-full login_page user_create-school">
            <div className="m-auto bg-word-gray-light-1 rounded-2xl   login_container w-full"
            >
                <div className="w-full flex flex-col items-start justify-center px-80 py-10">
                    <h2 className="xl:text-5xl/[80px] text-2xl font-bold text-words-green-light">{`${t("Create School account")}`}</h2>
                    <div className="w-full mt-6 flex flex-col ">
                        <Form
                            size="large"
                            name="user_create-school"
                            className={`${currentFont}`}
                            layout="vertical"
                        >
                            <Form.Item name="schoolName" rules={RulesName({
                                name: `${t("School Name")}`,
                                countChar: 64
                            })} hasFeedback>
                                <FloatInput
                                    label={`${t("School Name")}`}
                                    placeholder={`${t("School Name")}`}
                                    type="text"
                                /></Form.Item>
                            <Form.Item name="schoolLocation" rules={RulesName({
                                name: `${t("School Location")}`,
                                countChar: 64
                            })} hasFeedback>
                                <FloatInput
                                    label={`${t("School Location")}`}
                                    placeholder={`${t("School Location")}`}
                                    type="text"
                                />
                            </Form.Item>
                            <Form.Item name="schoolLocation" rules={RulesName({
                                name: `${t("School Location")}`,
                                countChar: 64
                            })} hasFeedback>
                                <FloatInput
                                    label={`${t("School Location")}`}
                                    placeholder={`${t("School Location")}`}
                                    type="text"
                                />
                            </Form.Item>
                            <Form.Item name="timeZone" rules={RulesName({
                                name: `${t("Time Zone")}`,
                                countChar: 64
                            })} hasFeedback>
                                <FloatInput
                                    label={`${t("Time Zone")}`}
                                    placeholder={`${t("Time Zone")}`}
                                    type="text"
                                />
                            </Form.Item>
                            <Form.Item name="schoolType" rules={RulesName({
                                name: `${t("School Type")}`,
                                countChar: 64
                            })} hasFeedback>
                                <FloatInput
                                    label={`${t("School Type")}`}
                                    placeholder={`${t("School Type")}`}
                                    type="text"
                                />
                            </Form.Item>
                            <Form.Item name="schoolWebsite" rules={RulesName({
                                name: `${t("School Website")}`,
                                countChar: 64
                            })} hasFeedback>
                                <FloatInput
                                    label={`${t("School Website")}`}
                                    placeholder={`${t("School Website")}`}
                                    type="text"
                                />
                            </Form.Item>
                            <Form.Item name="password" rules={RulesPassword({ filedName: `${t("Password")}` })} hasFeedback className="-mt-2">
                                <FloatInput
                                    label={`${t("Password")}`}
                                    placeholder={`${t("Password")}`}
                                    type="password"
                                />
                            </Form.Item>
                            <div className="w-full ">
                                <button className="bg-words-green-light py-2 px-10 rounded w-full " type="submit">
                                    <span className="text-word-white xl:text-base text-xs">{`${t("Sign up now")}`}</span>
                                </button>
                            </div>
                        </Form>

                        <div className="w-full flex flex-row justify-between items-center  mt-6">
                            <Checkbox className={`${currentFont}`}><p className="text-word-gray-dark-2 text-xs">
                                {`${t("By clicking Create account, I agree that I have read and accepted the Terms of Use and Privacy Policy.")}`}
                            </p>
                            </Checkbox>
                        </div>
                        <div className="w-full flex sm:flex-row flex-col  items-center xl:mt-6 mt-4">
                            <p className="text-word-dark text-sm">{`${t("Already have an account?")}`}</p>
                            <NavLink to="/login">
                                <span className="text-words-green-light text-sm mx-1">{`${t("Sign in")}`}</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default CreateSchool;