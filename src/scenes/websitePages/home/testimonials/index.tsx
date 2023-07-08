import { t } from 'i18next'
import './index.css'
import TestimonialsListCards from './TestimonialsListCards'
import TitleHead from '../../../../components/TitleHead'

const Testimonials = () => {
    return (
        <div className='testimonials '>
            <div className='w-full content rtl:-mt-4 '>
                <div className='flex flex-col   justify-center items-center text-center '>
                    <TitleHead title={`${t("Don’t hear only from us")}`} color={"text-word-green-dark"} />
                    <h5 className='text-2xl text-words-green-light font-medium lg:-mt-2 -mt-0 rtl:mt-4'>{`${t("Testimonial")}`}</h5>
                    <div className='w-28 h-2 bg-words-green-light my-6'></div>
                </div>
                <div className='flex items-center w-full py-6 lg:px-28 px-12'>
                    <TestimonialsListCards />
                </div>
            </div>
            <div className='w-full bg-words-green-light info  flex items-center justify-center lg:ps-24 md:ps-12 ps-6' >
                {/* <p className='text-word-white lg:text-6xl/[80px] md:font-bold md:text-3xl font-semibold'>{`${t("LEARNING IS ALWAYS FUN! JOIN US NOW..")}`}</p> */}
                <TitleHead title={`${t("LEARNING IS ALWAYS FUN! JOIN US")}`} color={"text-word-white "} />
            </div>
        </div >
    )
}

export default Testimonials