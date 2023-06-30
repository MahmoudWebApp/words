import { useNavigate } from "react-router-dom"
import ProtectImage from "../../../../components/ProtectImage"
import mediaImage from "../../../../assets/img/home/library.png"
import './index.css'
import { t } from "i18next"
import TitleHead from "../../../../components/TitleHead"


const MediaLibrary = () => {
    const navigate = useNavigate()
    return (
        <div className='media-library'>
            <div className='w-full imageBg '></div>
            <div className='w-full flex lg:flex-row flex-col content lg:-mt-0 md:-mt-12 -mt-24 '>
                <div className='basis-1/2  '>
                    <ProtectImage src={mediaImage} className={`object-fit h-full mx-auto `} alt={'about-image'} />
                </div>
                <div className='basis-1/2 h-auto flex item-center justify-center'>
                    <div className='flex flex-col   justify-center items-center text-center '>
                        <TitleHead title={`${t("Media Library")}`} color={"text-word-green-dark"} />
                        <h5 className='md:text-2xl text-xl text-words-green-light font-medium lg:-mt-2 -mt-0 rtl:mt-1'>{`${t("Books, Songs & Videos")}`}</h5>
                        <div className='w-28 h-2 bg-words-green-light my-6'></div>
                        <p className='text-lg/[26px] text-word-gray-dark-3'>{`${t("Tolerance, morals, humanitarian and lovely stories, songs, and videos helps parents to support the mental health of their children that you can find when you visit our library.")}`}</p>
                        <button className='w-fit px-16 py-2 bg-word-green-dark text-word-white text-base mt-6 btn-animated' onClick={() => navigate('/')}>
                            {`${t("Find out more!")}`}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaLibrary