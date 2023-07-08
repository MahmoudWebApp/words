
import voiceBlueIcon from "../../../../assets/img/new icons/voice-blue.svg";
import ProtectImage from "../../../../components/ProtectImage";
import { Radio, Space, Form, Tooltip } from "antd";
import './index.css'
import { IItemQuestion } from "../../../../models/AssessmentQuestion.model";
import AssessmentAnswer from "./AssessmentAnswer";
import useSound from "use-sound";
const ListeningQuestion: React.FC<IItemQuestion> = (props) => {
    const [play] = useSound(props.urlVoice);
    return (
        <div className="flex flex-col gap-y-6">
            <h6 className="text-base text-word-blue-light-1 ms-12">Question {props.questionNumber}</h6>
            <Tooltip placement="topRight" title={"Click here to hear the Question"} arrow={true} color={"#6dcff6"}>
                <div className="cursor-pointer w-fit" onClick={play}>
                    <ProtectImage src={voiceBlueIcon} className={"w-14 ms-12 cursor-pointer"} alt={"voice-blue-icon"} />
                </div>
            </Tooltip>
            <Form.Item name={props.name}>
                <Radio.Group className="radio-custom" >
                    <Space direction="vertical">
                        {props.listAnswers?.map((l, index) =>
                            <AssessmentAnswer id={l.id} answer={l.answer} urlVoice={l.urlVoice} value={index + 1} key={l.id} />
                        )}
                    </Space>
                </Radio.Group>
            </Form.Item>
        </div>
    )
}

export default ListeningQuestion