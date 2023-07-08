
import ProtectImage from "../../../../components/ProtectImage";
import { IReadingQuestion } from "../../../../models/AssessmentQuestion.model";
import ReadingQuestion from "./ReadingQuestion";
import bookIcon from "../../../../assets/img/new icons/assessmentbook.svg"

interface IProps {
    level: number;
    dataQuestion: IReadingQuestion[];
    description:string;
}
const AssessmentsReading: React.FC<IProps> = (props) => {
    return (
        <div className="bg-transparent flex-col flex lg:mt-0 md:mt-20 mt-12">
            <div className="bg-transparent  px-6">
                <div className="bg-word-blue-light-1 py-4 px-8  rounded-t-3xl">
                    <div className="flex flex-row gap-x-3  items-center">
                    <div className="w-1/4">
                        <div className="cursor-pointer" >
                            <ProtectImage src={bookIcon} className={"w-14"} alt={"book-icon"} />
                        </div>

                    </div>
                    <div className="flex flex-col gap-y-0">
                        <h3 className="text-word-white font-bold text-lg">Reading {props.level} <span className="font-normal text-sm ">(Read and answer)</span></h3>
                        <h5 className="text-word-white font-normal text-sm italic">5 marks for each answer</h5>
                    </div>

                    </div>
     
                    <div className="w-full mt-8 font-almarai lg:h-[245px] h-auto px-3">
                        <p className="text-word-white text-base  text-right leading-[35px]">
                            {props.description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="rounded-3xl flex flex-col gap-y-3 bg-word-white md:px-12 px-4 py-6 lg:h-[1150px] h-auto" dir="rtl">
                {props.dataQuestion?.map(d => <ReadingQuestion questionNumber={d.questionNumber} listAnswers={d.listAnswers} name={d.name} key={d.id} />)}
            </div>
        </div>
    )
}

export default AssessmentsReading;