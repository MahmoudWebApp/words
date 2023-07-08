import { t } from "i18next"
import { IAssessmentCard } from "../../../models/AssessmentCard.model"
import AssessmentCard from "../../../components/AssessmentCard"
import readIcon from "../../../assets/img/new icons/Group 281.svg"
import ProtectImage from "../../../components/ProtectImage"
import listenIcon from "../../../assets/img/new icons/Group 283.svg"
import writeIcon from "../../../assets/img/new icons/Group 285.svg"
import TitleHead from "../../../components/TitleHead"
import { Link } from "react-router-dom"

const AssessmentLevel = () => {

    const levelList1: IAssessmentCard[] = [
        {
            id: "a1-key",
            theme: "blue",
            level: "A1",
            levelList: [
                { id: "a10-key", name: "A1.0", url: "#" },
                { id: "a11-key", name: "A1.1", url: "#" },
                { id: "a12-key", name: "A1.2", url: "#" },
                { id: "a13-key", name: "A1.3", url: "#" },
                { id: "a14-key", name: "A1.4", url: "#" },
            ]
        },
        {
            id: "a2-key",
            theme: "blue",
            level: "A2",
            levelList: [
                { id: "a20-key", name: "A2.0", url: "#" },
                { id: "a21-key", name: "A2.1", url: "#" },
                { id: "a22-key", name: "A2.2", url: "#" },
                { id: "a23-key", name: "A2.3", url: "#" },
                { id: "a24-key", name: "A2.4", url: "#" }
            ]
        },
        {
            id: "b1-key",
            theme: "orange",
            level: "B1",
            levelList: [
                { id: "b10-key", name: "B1.0", url: "#" },
                { id: "b11-key", name: "B1.1", url: "#" },
                { id: "b12-key", name: "B1.2", url: "#" },
                { id: "b13-key", name: "B1.3", url: "#" },
                { id: "b14-key", name: "B1.4", url: "#" }
            ]
        },
        {
            id: "b2-key",
            theme: "orange",
            level: "B2",
            levelList: [
                { id: "b20-key", name: "B2.0", url: "#" },
                { id: "b21-key", name: "B2.1", url: "#" },
                { id: "b22-key", name: "B2.2", url: "#" },
                { id: "b23-key", name: "B2.3", url: "#" },
                { id: "b24-key", name: "B2.4", url: "#" }
            ]
        },
        {
            id: "c1-key",
            theme: "sky",
            level: "C1",
            levelList: [
                { id: "c10-key", name: "C1.0", url: "#" },
                { id: "c11-key", name: "C1.1", url: "#" },
                { id: "c12-key", name: "C1.2", url: "#" },
                { id: "c13-key", name: "C1.3", url: "#" },
                { id: "c14-key", name: "C1.4", url: "#" }
            ]
        },
        {
            id: "c2-key",
            theme: "sky",
            level: "C2",
            levelList: [
                { id: "c20-key", name: "C2.0", url: "#" },
                { id: "c21-key", name: "C2.1", url: "#" },
                { id: "c22-key", name: "C2.2", url: "#" },
                { id: "c23-key", name: "C2.3", url: "#" },
                { id: "c24-key", name: "C2.4", url: "#" }
            ]
        },
    ];
    const levelList2: IAssessmentCard[] = [
        {
            id: "l1-key",
            theme: "blue",
            level: "L1",
            levelList: [
                // { id: "l10-key", name: "L1.0", url: "#" },
                // { id: "l11-key", name: "L1.1", url: "#" },
                // { id: "l12-key", name: "L1.2", url: "#" },
                // { id: "l13-key", name: "L1.3", url: "#" },
                // { id: "l14-key", name: "L1.4", url: "#" },
            ]
        },
        {
            id: "l2-key",
            theme: "blue",
            level: "L2",
            levelList: [
                // { id: "l20-key", name: "L2.0", url: "#" },
                // { id: "l21-key", name: "L2.1", url: "#" },
                // { id: "l22-key", name: "L2.2", url: "#" },
                // { id: "l23-key", name: "L2.3", url: "#" },
                // { id: "l24-key", name: "L2.4", url: "#" }
            ]
        },
        {
            id: "l3-key",
            theme: "orange",
            level: "L3",
            levelList: [
                // { id: "l30-key", name: "L3.0", url: "#" },
                // { id: "l31-key", name: "L3.1", url: "#" },
                // { id: "l32-key", name: "L3.2", url: "#" },
                // { id: "l33-key", name: "L3.3", url: "#" },
                // { id: "l34-key", name: "L3.4", url: "#" }
            ]
        },
        {
            id: "l4-key",
            theme: "orange",
            level: "L4",
            levelList: [
                // { id: "l40-key", name: "L4.0", url: "#" },
                // { id: "l41-key", name: "L4.1", url: "#" },
                // { id: "l42-key", name: "L4.2", url: "#" },
                // { id: "l43-key", name: "L4.3", url: "#" },
                // { id: "l44-key", name: "L4.4", url: "#" }
            ]
        },
        {
            id: "l5-key",
            theme: "sky",
            level: "L5",
            levelList: [
                // { id: "l50-key", name: "L5.0", url: "#" },
                // { id: "l51-key", name: "L5.1", url: "#" },
                // { id: "l52-key", name: "L5.2", url: "#" },
                // { id: "l53-key", name: "L5.3", url: "#" },
                // { id: "l54-key", name: "L5.4", url: "#" }
            ]
        },
        {
            id: "l6-key",
            theme: "sky",
            level: "L6",
            levelList: [
                // { id: "l60-key", name: "L6.0", url: "#" },
                // { id: "l61-key", name: "L6.1", url: "#" },
                // { id: "l62-key", name: "L6.2", url: "#" },
                // { id: "l63-key", name: "L6.3", url: "#" },
                // { id: "l64-key", name: "L6.4", url: "#" }
            ]
        },
    ];
    return (
        <div className="assessment-level">
            <div className='w-full imageBg '></div>
            <div className=' w-full main-title flex flex-col justify-center items-center '>
                <h1 className='lg:text-7xl md:text-5xl text-4xl  font-extrabold -mt-2 font-Luckiest'>{ }</h1>
                <TitleHead title={`${t("ASSESSMENTS LEVELS")}`} color={"text-word-blue-dark-1"} />
                <h5 className='text-2xl text-word-blue-dark-2  font-medium '>{`${t("Select your suitable level")}`}</h5>
                <div className='w-28 h-2 bg-word-blue-dark-1 my-6'></div>
            </div>
            <div className="flex justify-center md:flex-row flex-col lg:gap-x-12 md:gap-x-6 content">
                <div className="reading lg:w-96 md:w-[22rem] w-[20rem] lg:mx-1 mx-auto ">
                    <div className="rounded-md bg-word-blue-dark-2 flex gap-x-6  px-3 py-2 w-full">
                        <div className="font-bold md:text-2xl text-xl text-word-white flex items-center gap-x-3">
                            <ProtectImage src={readIcon} className={"w-10 h-10"} alt={""} />
                            <h5>{`${t("Reading")}`}</h5>
                        </div>
                        <div className="font-extrabold md:text-2xl text-xl text-word-white">
                            +
                        </div>
                        <div className="font-bold md:text-2xl text-xl text-word-white flex items-center gap-x-3">
                            <ProtectImage src={listenIcon} className={"w-10 h-10"} alt={""} />
                            <h5>{`${t("Listening")}`}</h5>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-8 py-10 ">
                        {levelList1?.map(l => <AssessmentCard theme={l.theme} level={l.level} levelList={l.levelList} key={l.id} />)}

                    </div>
                </div>
                <div className="writing lg:w-96 md:w-[22rem] w-[21rem] lg:mx-1 mx-auto ">
                    <div className="rounded-md bg-word-blue-dark-2 flex justify-center py-2 w-full">
                        <div className="font-bold md:text-2xl text-xl text-word-white flex items-center gap-x-3">
                            <h5>{`${t("Writing")}`}</h5>
                            <ProtectImage src={writeIcon} className={"w-10 h-10"} alt={""} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-8 py-10 ">
                        {levelList2?.map(l => <AssessmentCard theme={l.theme} level={l.level} levelList={l.levelList} key={l.id} />)}
                    </div>
                </div>

            </div>
            <Link to={'/assessments-test'} target='_blank'>
                <div className='w-full bg-word-blue-dark-1 info  flex items-center justify-center  cursor-pointer'  >
                    < p className='text-word-white lg:text-6xl/[80px] text-center font-bold text-4xl  font-Luckiest' > {`${t("TRY NOW FOR FREE")}`}</p>
                </div >
            </Link>
        </div >
    )
}

export default AssessmentLevel