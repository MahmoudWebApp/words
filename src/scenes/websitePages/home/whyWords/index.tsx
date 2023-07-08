import ProtectImage from '../../../../components/ProtectImage';
import videoImage from '../../../../assets/img/home/video.png';
import { t } from 'i18next';
import './index.css';
import TitleHead from '../../../../components/TitleHead';

const WhyWord = () => {
    return (
        <div className='why-words'>
            <div className='w-full imageBg '></div>
            <div className='w-full flex lg:flex-row flex-col gap-y-6 content lg:-mt-0 md:-mt-12 -mt-3'>
                <div className='basis-1/2 '>
                    <div className='flex flex-col   justify-center  items-center text-center '>
                        <TitleHead title={`${t("Why Words")}`} color={"text-word-green-dark"} />
                        <TitleHead title={`${t("Learning Academy")}`} color={"text-word-green-dark"} />
                        <h5 className='text-2xl text-words-green-light font-medium  lg:mt-1 mt-2 rtl:mt-1 '>{`${t("Engagement, fun and daily passes!")}`}</h5>
                        <div className='w-28 h-2 bg-words-green-light my-6'></div>
                        <p className='text-lg/[26px] text-word-gray-dark-3 px-6'>{`${t("An International concept has been implemented leading kids to think globally, using interactive, attractive and effective visions and activities..")}`}</p>
                    </div>
                </div>
                <div className='basis-1/2  '>
                    <ProtectImage src={videoImage} className={`object-fit h-full mx-auto `} alt={'video-image'} />
                </div>
            </div>
            <div className='w-full bg-words-green-light info  flex items-center justify-center lg:ps-24 md:ps-12  ps-3 lg:py-0 py-2 lg:mt-0  mt-28 ' >
                <TitleHead title={`${t("LEARNING IS ALWAYS FUN! JOIN US NOW..")}`} color={"text-word-white"} />
            </div>

        </div >
    )
}

export default WhyWord