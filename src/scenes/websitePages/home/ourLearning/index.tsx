import { t } from "i18next";
import OurLearningListCards from "./OurLearningListCards"
import './index.css';
import TitleHead from "../../../../components/TitleHead";
const OurLearning = () => {
    return (
        <div className='our-learning bg-word-gray-light-1'>
            <div className='flex flex-col   justify-center items-center text-center '>
                <TitleHead title={`${t("Our Learning Goals")}`} color={"text-word-green-dark"} />
                <h5 className='lg:text-2xl text-xl text-words-green-light font-medium lg:-mt-2 mt-2 rtl:mt-1'>{`${t("Identify the knowledge & skills")}`}</h5>
                <div className='w-28 h-2 bg-words-green-light my-6'></div>
            </div>
            <div className='h-auto flex items-center w-full py-12 lg:px-28 px-12 '>
                <OurLearningListCards />
            </div>
        </div>
    )
}

export default OurLearning