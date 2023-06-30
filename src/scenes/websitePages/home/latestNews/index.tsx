import { t } from "i18next"
import { useNavigate } from "react-router-dom";
import './index.css'
import NewsListCards from "./NewsListCards";
import TitleHead from "../../../../components/TitleHead";

const LatestNews = () => {
    const navigate = useNavigate()
    return (
        <div className='latest-news bg-word-gray-light-1 '>
            <div className='flex flex-col   justify-center items-center text-center '>
                <TitleHead title={`${t("Latest News")}`} color={"text-word-green-dark"} />
                <h5 className='text-2xl text-words-green-light font-medium lg:-mt-2 -mt-0 rtl:mt-1'>{`${t("What is going on")}`}</h5>
                <div className='w-28 h-2 bg-words-green-light my-6'></div>
            </div>
            <div className='h-auto flex items-center w-full py-6 lg:px-28 md:px-16 px-6'>
                <NewsListCards />
            </div>
            <div className="flex justify-center">
                <button className='w-fit px-16 py-2 bg-word-green-dark text-word-white text-base btn-animated' onClick={() => navigate('/')}>
                    {`${t("Find out more!")}`}
                </button>
            </div>
        </div>
    )
}

export default LatestNews