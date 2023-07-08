

import { t } from "i18next"
import ProtectImage from "../../../components/ProtectImage"
import bookImage from "../../../assets/img/books.png";
import TitleHead from "../../../components/TitleHead";
const LandingPage = () => {
    return (
        <div className='book-land-page'>
            <div className='w-full imageBg '></div>
            <div className='w-full flex lg:flex-row flex-col content lg:-mt-20 lg:gap-x-10 -mt-12'>
                <div className='basis-1/2'>
                    <ProtectImage src={bookImage} className={`object-cover h-full mx-auto  `} alt={'about-image'} />
                </div>
                <div className='basis-1/2 h-auto flex item-center justify-center'>
                    <div className='flex flex-col   justify-center items-start text-center  lg:px-3 lg:pr-24 rtl:lg:pr-6 rtl:lg:pl-24 px-12 '>
                        <TitleHead title={`${t("Our Books")}`} color={"text-word-blue-light-1"} />
                        <h5 className='md:text-2xl text-xl text-word-blue-light-2 font-medium lg:-mt-2 -mt-0 '>{`${t("")}`}</h5>
                        <div className='w-28 h-2 bg-word-blue-light-1 my-6'></div>
                        <p className='text-lg/[26px] text-word-gray-dark-3 text-left rtl:text-right'>
                            {`${t("Our books are life stories of four characters that most of kids face in their daily life, starting from level one to level six. Each level has been built regarding to kids skills level to give a chance to all our kids to learn by interactive and fun ways.")}`}
                        </p>
                        <p className='text-lg/[26px] text-word-gray-dark-3 text-left rtl:text-right my-3'>
                            {`${t("Each book talks about each life stations and how they interact with it in effective ways.")}`}
                        </p>
                        <p className='text-lg/[26px] text-word-gray-dark-3 text-left rtl:text-right'>
                            {`${t("Kids will live the interesting life journey of books characters and have an interesting experience. They pass to have new knowledge by using English language")}`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage