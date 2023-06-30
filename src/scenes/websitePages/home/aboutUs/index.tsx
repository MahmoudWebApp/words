import { useNavigate } from "react-router-dom"
import ProtectImage from "../../../../components/ProtectImage"
import aboutImage from '../../../../assets/img/home/about-kids.png';
import './index.css'
import { t } from "i18next";
import TitleHead from "../../../../components/TitleHead";


const AboutUs = () => {
    const navigate = useNavigate()

    return (
       
            <div className='about-us'>
                <div className='w-full imageBg '></div>
                <div className='w-full flex lg:flex-row flex-col content lg:-mt-0 -mt-12'>
                    <div className='basis-1/2 h-auto flex item-center justify-center gap-y-6'>
                        <div className='flex flex-col   justify-center items-center text-center '> 
                            <TitleHead title={`${t("About us")}`} color={"text-word-green-dark"}/>
                            <h5 className='md:text-2xl text-xl text-words-green-light font-medium lg:-mt-2 -mt-0 rtl:mt-3'>{`${t("Words academy for learning languages")}`}</h5>
                            <div className='w-28 h-2 bg-words-green-light my-6'></div>
                            <p className='md:text-lg/[26px] text-base text-word-gray-dark-3'>{`${t("In our world, we transfer words in two languages that transform kids’ world to a journey of imagination, mythology and happiness. Visual, auditory, musical and social intelligence can be found in words academy who acknowledges that each child has the wright to learn regarding his abilities .")}`}</p>
                            <button className='w-fit px-16 py-2 bg-word-green-dark text-word-white text-base mt-6 btn-animated' onClick={() => navigate('/')}>
                                {`${t("Find out more!")}`}
                            </button>
                        </div>
                    </div>
                    <div className='basis-1/2  '>
                        <ProtectImage src={aboutImage} className={`object-fit lg:h-full md:h-96 h-72  mx-auto `} alt={'about-image'} />
                    </div>
                </div>
            </div>
       
    )
}

export default AboutUs