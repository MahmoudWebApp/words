import { useNavigate } from "react-router-dom"
import BooksCardsArc from "./BooksCards/BooksCardsArc"
import BooksCardsEng from "./BooksCards/BooksCardsEng"
import './index.css'
import { t } from "i18next"
import { Fade, Zoom } from "react-awesome-reveal"
import TitleHead from "../../../../components/TitleHead"


const OurBooks = () => {
    const navigate = useNavigate()
    return (
        <div className='our-books'>
            <div className='h-1/6 w-full main-title flex flex-col justify-center items-center pt-28 pb-6'>
                <Fade cascade delay={400} damping={0.1} duration={1500}>
                        <TitleHead title={`${t("Our Books")}`} color={"text-word-blue-light-1"} />
                    <h5 className='text-2xl text-word-blue-light-2  font-medium lg:-mt-2 -mt-0'>{`${t("Fantastic and beautiful Journeys")}`}</h5>
                    <div className='w-28 h-2 bg-word-blue-light-1 my-6'></div>
                </Fade>
            </div>
            <div className='h-4/6 w-full group-books  grid grid-row-2'>
                <div className="flex flex-col gap-y-12 md:px-24 px-20 h-full py-3">
                    <BooksCardsEng />
                    <div className='flex flex-row justify-center sm:-mx-0 -mx-3'>
                        <Zoom triggerOnce delay={400}>
                            <h5 className='text-4xl text-word-blue-light-1 font-Luckiest  -mt-2 animate-bounce'>{`${t("Let us Learn English")}`}</h5>
                        </Zoom>
                    </div>
                </div>
                <div className='w-full pb-6'>
                    <div className='w-full imageBg '></div>
                    <div className='flex flex-col gap-y-12 md:px-24 px-20 py-12 h-full"'>
                        <BooksCardsArc />
                        <div className='flex flex-row justify-center'>
                            <Zoom triggerOnce delay={400}>
                                <h5 className='text-4xl text-word-blue-light-1 font-Luckiest -mt-2 animate-bounce'>{`${t("Let us Learn Arabic")}`}</h5>
                            </Zoom>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-word-blue-light-1  w-full info-books py-6'>
                <div className=' info  flex flex-col items-center justify-center  lg:w-3/5 w-4/5 mx-auto  gap-y-6 lg:pt-2 pt-6' >
                    <p className='text-word-white text-2xl font-medium md:text-center text-left'>{`${t("Various and interesting levels according to European standards has been created by creative academics experts and consultants to raise awareness of teachers and students about new methods, strategies, and standards of learning languages")}`}</p>
                    <button className='w-fit px-16 py-2 text-word-blue-light-1 bg-word-white text-base btn-animated' onClick={() => navigate('/')}>
                        {`${t("Find out more!")}`}
                    </button>
                </div>
            </div>


        </div>
    )
}

export default OurBooks