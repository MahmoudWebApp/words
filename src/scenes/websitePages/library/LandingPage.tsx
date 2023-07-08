import ProtectImage from "../../../components/ProtectImage"
import mediaImage from "../../../assets/img/home/library.png";
import boolIcon from "../../../assets/img/new icons/Group 277.svg";
import songIcon from "../../../assets/img/new icons/Group 278.svg";
import videoIcon from "../../../assets/img/new icons/Group 279.svg"
import { t } from "i18next";
import TitleHead from "../../../components/TitleHead";

const LandingPage = () => {
  return (
    <div className='media-landing-page'>
    <div className='w-full imageBg '></div>
    <div className='w-full flex lg:flex-row flex-col content lg:-mt-0 -mt-12'>
        <div className='basis-1/2  '>
            <ProtectImage src={mediaImage} className={`object-fit h-full mx-auto `} alt={'about-image'} />
        </div>
        <div className='basis-1/2 h-auto flex item-center justify-center'>
            <div className='flex flex-col   justify-center items-start text-center md:px-0 px-3 '>
            <TitleHead title={`${t("Media Library")}`} color={"text-word-orange-dark "} />
                <h5 className='md:text-2xl text-xl text-word-orange-light font-medium lg:-mt-2 -mt-0 '>{`${t("Books, Songs & Videos")}`}</h5>
                <div className='w-28 h-2 bg-word-orange-dark my-6'></div>
                <p className='text-lg/[26px] text-word-gray-dark-3 text-left rtl:text-right'>{`${t("Tolerance, morals, humanitarian and lovely stories, songs, and videos helps parents to support the mental health of their children that you can find when you visit our library.")}`}</p>
                {/* <button className='w-fit px-16 py-2 bg-word-green-dark text-word-white text-base mt-6' onClick={() => navigate('/')}>
                    {`${t("Find out more!")}`}
                </button> */}
                <div className="flex gap-x-8 mt-6">
                  <ProtectImage src={boolIcon} alt="book-icon" className={"w-16"}/>
                  <ProtectImage src={songIcon } alt="book-icon" className={"w-14"}/>
                  <ProtectImage src={videoIcon } alt="book-icon" className={"w-16"}/>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default LandingPage