import ProtectImage from "./ProtectImage"
interface IOurBookCard {
    id?: string;
    imageUrl: string;
    level: string;
    description: string;
    title: string;
    subDescription?: string;

}
const OurBookCardArabic: React.FC<IOurBookCard> = (props) => {
    return (
        <div className="h-auto ">
            <div className="w-full h-1/3 bg-word-blue-light-3"></div>
            <div className="md:-mt-[5rem]  -mt-[3rem] flex flex-row md:gap-x-1 gap-x-3 md:p-6 p-3 h-5/6">
            <div className="md:w-1/3 w-1/2 ">
                    <ProtectImage src={props.imageUrl} className="object-fit h-60" alt="book-eng-1" />
                </div>
                <div className="md:w-2/3 w-1/2 flex flex-col gap-y-3">
                    <h3 className="text-words-green-light rtl:md:text-5xl text-4xl rtl:text-2xl md:font-bold font-extrabold">{props.title}</h3>
                    <h6 className="md:text-xl text-lg text-word-blue-light-2  font-semibold ">
                        {props.level}
                    </h6>
                    <div className="md:mt-4 mt-0 md:ml-3 ml-0">
                        <p className="md:text-sm text-[.65rem] text-word-dark ">
                            {props.description}
                        </p>
                        <p className="md:text-[.83rem] text-[.65rem] text-word-dark mt-3 hidden rtl:block">
                            {props.subDescription}
                        </p>
                    </div>

                </div>
               
            </div>
        </div>
    )
}

export default OurBookCardArabic