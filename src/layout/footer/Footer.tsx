import { t } from "i18next";
import './index.css'
import { fontDir } from "../../utils/helpFunctions";
import { Form, Input } from "antd";
import { RulesEmail, RulesName } from "../../utils/RulesValidation";
import FloatInput from "../../components/floatInput/FloatingInput";
import PhoneInput from "antd-phone-input";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/words-logo.png";
import FooterMenu from "./FooterMenu";
import SocialMenu from "../../components/SoicalMenu";

const Footer = () => {
  const { currentFont } = fontDir();
  return (
    <footer className='footer bg-word-gray-light-1'>
      <div className='w-full content  md:grid-rows-2 grid-rows-1 lg:px-24 md:px-12 px-6'>
        <div className="md:mb-0 mb-6">
          <p className='text-words-green-light text-base mb-3'>{`${t("DO YOU LIKE TO KNOW MORE.. LEAVE US A MESSAGE")}`}</p>
          <Form
            size="large"
            name="message"
            className={`${currentFont}`}
            layout="vertical"
          >
            <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-4">
              <div className="..">
                <Form.Item name="name" rules={RulesName({ name: `${t("Name")}`, countChar: 64 })} hasFeedback  >
                  <FloatInput
                    label={`${t("Name")}`}
                    placeholder={`${t("Name")}`}
                    type="text"
                  />
                </Form.Item>
                <Form.Item name="email" rules={RulesEmail()} hasFeedback className="-mt-3">
                  <FloatInput
                    label={`${t("Email Address")}`}
                    placeholder={`${t("Email Address")}`}
                    type="email"
                  />
                </Form.Item>
                <Form.Item name="phoneNumber" hasFeedback className="-mt-3">
                  <PhoneInput placeholder="(702) 123-4567" enableSearch />
                </Form.Item>
              </div>
              <div className="md:col-span-2 col-span-1 ">
                <Form.Item name="Message" rules={RulesName({ name: `${t("Message")}`, countChar: 265 })} hasFeedback >
                  <Input.TextArea rows={2} className="py-4" />
                </Form.Item>
                <div className="w-full -mt-2  flex justify-end">
                  <button className="bg-word-green-dark py-2   px-12 rounded w-fit btn-animated " type="submit">
                    <span className="text-word-white xl:text-base text-xs">{`${t("Send")}`}</span>
                  </button>
                </div>

              </div>
            </div>

          </Form>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 pb-6">
          <div className="md:col-span-2 col-span-1 flex flex-col gap-y-3">
            <NavLink to="/">
              <img src={logo} alt="logo" className="w-32" />
            </NavLink>
            <p className='text-word-dark text-base lg:w-1/3 md:w-2/3 w-full'>{`${t("WORDS grow naturally and creatively in a wonderland for Kids to learn, play.")}`}</p>
            <div className="flex flex-col gap-y-1 mt-3">
              <p className='text-words-green-light text-base font-bold'>{`${t("NEWSLETTER SIGNING")}`}</p>
              <Form
                size="large"
                name="newsletr"
                className={`${currentFont}`}
                layout="vertical"
              >
                <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                  <Form.Item name="email" rules={RulesEmail()} hasFeedback className="mb-1">
                    <FloatInput
                      label={`${t("Email Address")}`}
                      placeholder={`${t("Email Address")}`}
                      type="email"
                    />
                  </Form.Item>
                 
                    <button className="bg-word-green-dark py-2 px-12 rounded  w-3/5 btn-animated" type="submit">
                      <span className="text-word-white xl:text-base text-xs">{`${t("Subscribe")}`}</span>
                    </button>
                 
                </div>
              </Form>
            </div>
          </div>
          <div className=" flex flex-col gap-y-4">
            <h5 className='text-words-green-light text-lg  font-bold'>{`${t("QUICK LINKS")}`}</h5>
            <FooterMenu />
          </div>
          <div className=" flex flex-col gap-y-4">
            <h5 className='text-words-green-light text-lg font-bold'>{`${t("CONTACT US")}`}</h5>
            <p className='text-word-dark text-base'>{`${t("Phone: ‭+971 52 994 5335‬")}`}</p>
            <p className='text-word-dark text-base'>info@wordsacademy.net</p>
            <p className='text-word-dark text-base mb-3'> {`${t("Address: United Arabia Emirates, Dubai")}`}</p>
            <SocialMenu />
          </div>
        </div>
      </div>
      <div className='w-full bg-words-green-light info  flex md:flex-row flex-col items-center md:justify-between justify-center gap-y-2  lg:pe-24  px-3' >
        <div className="hidden lg:block"></div>
        <p className='text-word-white text-base font-bold'>{`${t("WORDS ACADEMY© 2023 COPYRIGHT")}`}</p>
        <p className='text-word-white text-base font-bold'>{`${t("Privacy Policy")}`}</p>
      </div>
    </footer>
  )
}

export default Footer