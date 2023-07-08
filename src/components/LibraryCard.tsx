import { useState } from 'react'
import ProtectImage from './ProtectImage'
interface ILibraryCard {
    id?: string;
    iconSrc: string;
    title: string;
    arabicId:string;
    englishId:string;
    onClick: (id: string) => any;
}
const LibraryCard: React.FC<ILibraryCard> = (props) => {
    const [translateClass, setTranslateClass] = useState<string>("-translate-y-full")
    const [ShowClass, setShowClass] = useState<string>("hidden")
    const changeTranslateY = () => {
        if (translateClass === "-translate-y-full") {
            setTranslateClass("translate-y-0")
        } else {
            setTranslateClass("-translate-y-full")
        }
    }
    return (
        <div className="relative">
            <div className=" cursor-pointer rounded-lg flex flex-col gap-y-3 bg-word-orange-dark justify-center items-center pt-6 pb-3 z-10 absolute w-full top-0 right-0 left-0" onClick={() => changeTranslateY()}>
                <ProtectImage src={props.iconSrc} className={"h-20"} alt={`list-book-icon`} />
                <h3 className="text-2xl text-word-white">{props.title}</h3>
            </div>
            <div className={`absolute flex flex-row gap-x-2 top-40 z-5  justify-center w-full  ${translateClass}`} style={{
                transition: "transform .5s"
            }}>
                <button className="bg-word-gray-light-1 py-3 px-8 text-sm text-word-gray-dark-2" onClick={() => props.onClick(props.arabicId)}>
                    Arabic {props.title}
                </button>
                <button className="bg-word-gray-light-1 py-3 px-8 text-sm text-word-gray-dark-2" onClick={() => props.onClick(props.englishId)}>
                    English {props.title}
                </button>
            </div>
            <div className={`${ShowClass} absolute top-60 left-0 w-[1200px] h-auto bg-word-gray-light-1 px-12 py-3`}>
                {/* {props.bodyList} */}
            </div>

        </div>

    )
}

export default LibraryCard