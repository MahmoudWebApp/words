import { useState } from "react";
import { IAssessmentCard } from "../models/AssessmentCard.model";
const AssessmentCard: React.FC<IAssessmentCard> = (props) => {
    const [classTranslate, setClassTranslate] = useState("-translate-x-20 opacity-0");

    const changeClassTranslate = () => {
        if (classTranslate === "-translate-x-20 opacity-0") {
            setClassTranslate("-translate-x-0 opacity-1")
        } else {
            setClassTranslate("-translate-x-20 opacity-0")
        }
    }
    let initialColor: { light: string; dark: string; hoverColor: string; bgBefore: string; bgAfter: string; activeColor: string } = {
        light: "bg-word-blue-dark-2",
        dark: "bg-word-blue-dark-1",
        bgBefore: "before:bg-word-blue-dark-2",
        bgAfter: "before:bg-word-blue-dark-2",
        hoverColor: "hover:text-word-blue-dark-1",
        activeColor: "active:text-word-blue-dark-1",
    };
    const orangeColor = {
        light: "bg-word-orange-light",
        dark: "bg-word-orange-dark",
        color: "text-word-orange-dark",
        bgBefore: "before:bg-word-orange-light",
        bgAfter: "after:bg-word-orange-light",
        hoverColor: "hover:text-word-orange-dark",
        activeColor: "active:text-word-orange-dark",
    }
    const skyColor = {
        light: "bg-word-sky-light",
        dark: "bg-word-sky-dark",
        color: "text-word-sky-dark",
        bgBefore: "before:bg-word-sky-light",
        bgAfter: "after:bg-word-sky-light",
        hoverColor: "hover:text-word-sky-dark",
        activeColor: "active:text-word-sky-dark",
    }
    if (props.theme === "orange") {
        initialColor = orangeColor;
    } else if (props.theme === "sky") {
        initialColor = skyColor
    } else {
        initialColor = {
            light: "bg-word-blue-dark-2",
            dark: "bg-word-blue-dark-1",
            bgBefore: "before:bg-word-blue-dark-2",
            bgAfter: "after:bg-word-blue-dark-2",
            hoverColor: "hover:text-word-blue-dark-1",
            activeColor: "active:text-word-blue-dark-1",
        }
    }
    return (
        <div className="flex justify-center items-center relative" onClick={() => changeClassTranslate()} >
            <div className={`${initialColor?.dark} relative  flex justify-center items-center w-28 h-[7.5rem] px-2 cursor-pointer z-30
         before:absolute before:-top-2 before:w-24 before:h-2
         before:left-1
          ${initialColor.bgBefore}
         after:absolute after:-bottom-2 after:w-24 after:h-2
         after:left-1
         ${initialColor.bgAfter}
         `}
            >
                <span className="text-7xl font-extrabold text-word-white">
                    {props.level}
                </span>
            </div>
            <div className={`${initialColor?.light} w-20 h-[7.5rem]  flex justify-center items-center  z-20  ${classTranslate}`}
                style={{
                    transition: "all .5s"
                }}
            >
                <ul className="flex justify-center flex-col">
                    {props.levelList?.map(l => <li key={l.id}>
                        <a href={l.url} className={`text-word-white text-base font-semibold  ${initialColor.light}  ${initialColor.hoverColor}`}>{l.name}</a>
                    </li>)}

                </ul>
            </div>

        </div>
    )
}

export default AssessmentCard