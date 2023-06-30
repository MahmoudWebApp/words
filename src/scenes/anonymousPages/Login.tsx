import { Checkbox, Divider, Form } from "antd"
import SignInImage from "../../assets/img/signin/signin.png"
import FloatInput from "../../components/floatInput/FloatingInput";
import { RulesEmail, RulesPassword } from "../../utils/RulesValidation";
import { t } from "i18next";
import { NavLink } from "react-router-dom";
import faceIcon from "../../assets/img/signin/facebook_ico.svg";
import googleIcon from "../../assets/img/signin/google_ico.svg";
import './index.css'
import { fontDir } from "../../utils/helpFunctions";
const Login = () => {
  const { currentFont } = fontDir();
  return (
    <div className="bg-words-green-light w-full flex items-center justify-center login_page">
      <div className="m-auto bg-word-gray-light-1 rounded-2xl   login_container w-full"
      >
        <div className="flex xl:flex-row  flex-col gap-x-12  sm:p-10 p-3">
          <div className="xl:w-3/5 flex items-center  w-full flex-col m-auto">
            <img src={SignInImage} alt="login_img" className="object-cover image_responsive " contextMenu="return false;" />
          </div>
          <div className="xl:w-2/5 w-full flex flex-col items-start justify-center md:pe-12 md:ps-6 p-0">
            <h2 className="xl:text-5xl/[80px] text-2xl font-bold text-words-green-light">{`${t("Sign in")}`}</h2>
            <h6 className="xl:text-lg text-sm  text-word-dark xxl:-mt-3 mt-0">{`${t("Welcome Back")}`}</h6>
            <div className="w-full mt-3">
              <Form
                size="large"
                name="user_login"
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
                <Form.Item name="password" rules={RulesPassword({ filedName: `${t("Password")}` })} hasFeedback className="-mt-2">
                  <FloatInput
                    label={`${t("Password")}`}
                    placeholder={`${t("Password")}`}
                    type="password"
                  />
                </Form.Item>
                <div className="w-full flex flex-row justify-between items-center mb-3">
                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    noStyle
                  > <Checkbox defaultChecked={true} style={{ width: 'auto' }} > {t('Remember me')}</Checkbox></Form.Item>
                  <NavLink to="/reset-password">
                    <span className="text-word-gray-dark-3 xl:text-sm text-xs">{`${t("Forgot password?")}`}</span>
                  </NavLink>
                </div>
                <button className="bg-words-green-light py-2 px-10 rounded btn-animated w-full" type="submit">
                  <span className="text-word-white xl:text-base text-xs">{`${t("Login")}`}</span>
                </button>
                <Divider plain className={`${currentFont}`}><span className="text-word-gray-dark-2 text-sm">{`${t("Or")}`}</span></Divider>
              </Form>
              <div className="w-full flex flex-row justify-between items-center">
                <button className="bg-word-white py-2  rounded flex flex-row gap-x-2 justify-center items-center lg:w-40 md:w-36 w-32 btn-animated" >
                  <img src={googleIcon} alt="google_icon" className="w-5" />
                  <span className="text-word-dark xl:text-base text-xs">{`${t("Google")}`}</span>
                </button>
                <button className="bg-word-white py-2  rounded flex flex-row gap-x-1 justify-center items-center lg:w-40 md:w-36 w-32 btn-animated" >
                  <img src={faceIcon} alt="facebook_icon" className="w-10" />
                  <span className=" text-word-dark xl:text-base text-xs">{`${t("Facebook")}`}</span>
                </button>
              </div>
              <div className="w-full flex flex-row justify-between items-center mt-6">
                <Checkbox className={`${currentFont}`}><p className="text-word-gray-dark-2 text-xs">
                  {`${t("By clicking Create account, I agree that I have read and accepted the Terms of Use and Privacy Policy.")}`}
                </p>
                </Checkbox>
              </div>
              <div className="w-full flex sm:flex-row flex-col  items-center  mt-3">
                <p className="text-word-dark text-sm">{`${t("Don’t have an account?")}`}</p>
                <NavLink to="/register">
                  <span className="text-words-green-light text-sm mx-1">{`${t("Create an account")}`}</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login