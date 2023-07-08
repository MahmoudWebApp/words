import ProtectImage from "../../../components/ProtectImage"
import assessmentImage from "../../../assets/img/assessment.png"
import './index.css'
import { t } from "i18next"
import TitleHead from "../../../components/TitleHead"
const LandingPage = () => {
    return (
        <div className="assessment-land-page">
            <div className='w-full flex lg:flex-row flex-col content lg:-mt-0 md:-mt-12 -mt-0'>
                <div className='basis-1/2  '>
                    <ProtectImage src={assessmentImage} className={`object-fit h-full mx-auto `} alt={'about-image'} />
                </div>
                <div className='basis-1/2 h-auto flex item-center justify-center'>
                    <div className='flex flex-col   justify-center items-start text-center  lg:px-3 lg:pr-24 rtl:lg:pr-0 rtl:lg:pl-24 px-12 '>
                        <TitleHead title={`${t("Assessments")}`} color={"text-word-blue-dark-1"}/>
                        <h5 className='md:text-2xl text-xl text-word-blue-dark-2 font-medium lg:-mt-2 -mt-0 '>{`${t("Identifying your skills")}`}</h5>
                        <div className='w-28 h-2 bg-word-blue-dark-1 my-6'></div>
                        <p className='text-lg/[26px] text-word-gray-dark-3 text-left rtl:text-right'>
                            {`${t("Identifying the levels of students is one of the most important vision in Words Academy.")}`}
                        </p>
                        <p className='text-lg/[26px] text-word-gray-dark-3 text-left rtl:text-right my-3'>
                            {`${t("In this aspect, we have created multiple assessments regarding to European standards to help teachers, schools and parents to choose the best level for their child after testing child’s skills.")}`}
                        </p>
                        <p className='text-lg/[26px] text-word-gray-dark-3 text-left rtl:text-right'>
                            {`${t("The levels of the assessments page divided to six levels. A1, A2, B1, B2, C1 and C2")}`}
                        </p>
                        <p className='text-lg/[26px] text-word-gray-dark-3 text-left rtl:text-right my-3'>
                            {`${t("Each level had many levels to identify accurately students levels, as example A1, A1.1, A1.2, A1.3, A1.4, etc…")}`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage