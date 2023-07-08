import ProtectImage from "../../../../components/ProtectImage"
import voiceWhiteIcon from "../../../../assets/img/new icons/voice-white.svg"
import ListeningQuestion from "./ListeningQuestion";
import { IItemQuestion } from "../../../../models/AssessmentQuestion.model";
import { Tooltip } from "antd";
import useSound from "use-sound";
interface IProps {
    level: number;
    dataQuestion: IItemQuestion[];
    urlVoice: string;
}
const AssessmentsListening: React.FC<IProps> = (props) => {
    const [play] = useSound(props.urlVoice);
    return (
        <div className="bg-transparent flex-col flex lg:mt-0 md:mt-20 mt-6">
            <div className="bg-transparent  px-6">
                <div className="bg-word-blue-light-1 py-4 px-8 flex flex-row gap-x-3  items-center rounded-t-3xl">
                    <div className="w-1/4">
                        <Tooltip placement="topRight" title={"Click here to hear"} arrow={true} color={"#6dcff6"}>
                            <div className="cursor-pointer" onClick={play}>
                                <ProtectImage src={voiceWhiteIcon} className={"w-14"} alt={"voice-icon"} />
                            </div>
                        </Tooltip>
                    </div>
                    <div className="flex flex-col gap-y-0">
                        <h3 className="text-word-white font-bold text-lg">LISTENING {props.level} <span className="font-normal text-sm ">(Listen and answer)</span></h3>
                        <h5 className="text-word-white font-normal text-sm italic">5 marks for each answer</h5>
                    </div>
                </div>
            </div>
            <div className="rounded-3xl flex flex-col gap-y-3 bg-word-white px-12 py-6" dir="rtl">
                {props.dataQuestion?.map(d => <ListeningQuestion questionNumber={d.questionNumber} listAnswers={d.listAnswers} name={d.name} key={d.id} urlVoice={d.urlVoice} />)}

            </div>
        </div>
    )
}

export default AssessmentsListening