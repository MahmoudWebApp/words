import ProtectImage from "../../../components/ProtectImage"
import ContactPage from "../../../assets/img/contact-us.png";
import emailImg from "../../../assets/img/contact/email.png";
import phoneImg from "../../../assets/img/contact/phone.png";
import { t } from "i18next";
import './index.css'
import TitleHead from "../../../components/TitleHead";
const Contact = () => {
  return (
    <div className='contact-page'>
      <div className='w-full flex lg:flex-row flex-col content lg:-mt-0 -mt-12'>
        <div className='basis-1/2  '>
          <ProtectImage src={ContactPage} className={`object-fit h-full mx-auto `} alt={'contact-image'} />
        </div>
        <div className='basis-1/2 h-auto flex item-center justify-center lg:pr-32 md:pr-12 pr-0  rtl:pr-0  rtl:lg:pl-32  rtl:md:pl-12  rtl:pl-0'>
          <div className='flex flex-col   justify-center items-start text-center  '>
            <TitleHead title={`${t("Contact us")}`} color={"text-word-pink-light"} />
            <h5 className='md:text-2xl text-xl text-word-pink-dark font-medium lg:-mt-2 -mt-0 '>{`${t("We would like to hear from you")}`}</h5>
            <div className='w-28 h-2 bg-word-pink-light my-6'></div>
            <p className='text-lg/[26px] text-word-gray-dark-3 text-left rtl:text-right'>
              {`${t("Would you like to know more about our services, contact us now and out team will be happy to assist you with your inquiry")}`}
            </p>
            <div className="flex flex-row justify-between items-center w-full mt-24 ">
              <div className="flex flex-col items-center justify-center gap-y-3">
                <ProtectImage src={emailImg} alt="email-img" className="w-10 h-10 o" />
                <h3 className="text-lg/[26px] text-word-pink-dark  font-bold">{`${t("Email")}`}</h3>
                <h5 className="text-word-dark text-base">info@wordsacademy.net</h5>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-3">
                <ProtectImage src={phoneImg} alt="email-img" className="w-10 h-10 o" />
                <h3 className="text-lg/[26px] text-word-pink-dark  font-bold">{`${t("Call")}`}</h3>
                <h5 className="text-word-dark text-base">+971 52 994 5335</h5>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact