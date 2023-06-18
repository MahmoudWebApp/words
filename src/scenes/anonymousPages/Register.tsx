
import { Checkbox, Col, Form, Row } from "antd"
import RegisterImage from "../../assets/img/signin/register.png"
import FloatInput from "../../components/floatInput/FloatingInput";
import { RulesEmail, RulesName, RulesPassword} from "../../utils/RulesValidation";
import { t } from "i18next";
import { NavLink } from "react-router-dom";
import './index.css'
import { fontDir } from "../../utils/helpFunctions";
import PhoneInput from "antd-phone-input";
const Register = () => {
  const { currentFont } = fontDir();
  return (
    <div className="bg-words-green-light w-full flex items-center justify-center  h-full register_page">
      <div className="m-auto bg-word-gray-light-1 rounded-2xl   login_container w-full"
      >
        <div className="flex xl:flex-row  flex-col gap-x-6 h-full sm:p-10  p-6">
          <div className="xl:w-3/5 flex items-center  w-full h-full flex-col m-auto">
            <img src={RegisterImage} alt="register_img" className="object-cover image_responsive " />
          </div>
          <div className="xl:w-2/5 w-full flex flex-col items-start justify-center md:pe-12 md:ps-6 p-0">
            <h2 className="xl:text-4xl/[80px] text-2xl font-bold text-words-green-light">{`${t("Create an account")}`}</h2>
            <h6 className="xl:text-lg text-sm  text-word-dark xl:-mt-5 mt-1">{`${t("Fast, easy and secure")}`}</h6>
            <div className="w-full mt-6">
              <Form
                size="large"
                name="user_register"
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
                <Row className="-mt-2 ">
                  <Col span={12}>
                    <Form.Item name="firstName" rules={RulesName({ name: `${t("First name")}`,countChar: 64})} hasFeedback >
                      <FloatInput
                        label={`${t("First Name")}`}
                        placeholder={`${t("First Name")}`}
                        type="text"
                      />
                    </Form.Item>
                  </Col>
                 
                  <Col span={12} className="ps-1">
                    <Form.Item name="lastName" rules={RulesName({ name: `${t("Last name")}`,countChar: 64})} hasFeedback >
                      <FloatInput
                        label={`${t("Last name")}`}
                        placeholder={`${t("Last name")}`}
                        type="text"
                      />
                    </Form.Item>
                  </Col>
                
                </Row>
                <Form.Item name="phoneNumber"  hasFeedback className="-mt-2">
                <PhoneInput placeholder="(702) 123-4567" enableSearch/>
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
              <div className="w-full flex sm:flex-row  item-center  xl:mt-6 mt-4">
                <p className="text-word-dark text-sm">{`${t("Already have an account?")}`}</p>
                <NavLink to="/login" className="-mt-1">
                  <span className="text-words-green-light text-sm mx-1">{`${t("Sign in")}`}</span>
                </NavLink>
              </div>
              <div className="w-full flex sm:flex-row  item-center  mt-2">
                <p className="text-word-dark text-sm">{`${t("Creating a school account?")}`}</p>
                <NavLink to="/school-create-account" className="-mt-1">
                  <span className="text-words-green-light text-sm mx-1 ">{`${t("Click here")}`}</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register 