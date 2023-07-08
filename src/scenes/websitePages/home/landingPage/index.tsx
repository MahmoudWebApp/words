import { useNavigate } from "react-router-dom";
import ProtectImage from "../../../../components/ProtectImage"
import SocialMenu from "../../../../components/SoicalMenu"
import homeImage from '../../../../assets/img/home/kids-with-sun.png';
import './index.css';
import { t } from "i18next";
import TitleHead from "../../../../components/TitleHead";



const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className="landing-page">
            <div className='flex lg:flex-row flex-col lg:gap-x-12  gap-y-3 lg:p-16  p-6 h-full'>
                <div className='basis-1/2 '>
                    <ProtectImage src={homeImage} className={`object-fit`} alt={'home-img'} />
                </div>
                <div className='basis-1/2'>
                    <div className='flex flex-col gap-y-3 lg:px-0  md:pr-12 pr-0 pt-3  px-6'>
                        <TitleHead title={`${t("LEARNING IS")}`} color={"text-word-green-dark"} moreClasses="rtl:hidden"/>
                        <TitleHead title={`${t("ALWAYS FUN!")}`} color={"text-word-green-dark"} moreClasses="rtl:hidden"/>
                        <TitleHead title={`${t("مُتعَةَ التّعلّم ")}`} color={"text-word-green-dark"} moreClasses="ltr:hidden"/>
                        <h5 className='md:text-2xl text-xl text-words-green-light font-medium rtl:mt-1'>{`${t("Challenge the children to learn in a fun way!")}`}</h5>
                        <p className='md:text-lg text-base text-word-gray-dark-3'>{`${t("Words academy has been found in hands of educators, content writers, painters and musical specialists who search to find the best practices and methods for kids to learn online Arabic and English languages by interactive and fun ways.")}`}</p>
                        <div className='flex flex-row justify-between lg:mt-24 mt-6'>
                            <button className='w-fit md:px-16 px-4 py-2 bg-words-green-light text-word-white text-base btn-animated' onClick={() => navigate('/login')}>
                                {`${t("Sign up Now!")}`}
                            </button>
                            <SocialMenu />
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default LandingPage