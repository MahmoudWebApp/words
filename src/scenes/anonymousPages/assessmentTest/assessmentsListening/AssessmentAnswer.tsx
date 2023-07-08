import { Radio, Tooltip, Typography } from "antd"
import voiceBlackIcon from "../../../../assets/img/new icons/voice-black.svg"
import ProtectImage from "../../../../components/ProtectImage"
import { IItemAnswer } from "../../../../models/AssessmentQuestion.model"
import useSound from 'use-sound';
const AssessmentAnswer: React.FC<IItemAnswer> = (props) => {
    const [play] = useSound(props.urlVoice);
    return (
        <div className="flex flex-row gap-x-3 items-center " >
            <Tooltip placement="right" title={<>Click here to hear<br /> The Answer</>} arrow={true}>
                <div className="cursor-pointer" onClick={play}>
                    <ProtectImage src={voiceBlackIcon} className={"w-8 cursor-pointer"} alt={`voice-icon_${props.id}`} />
                </div>
            </Tooltip>
            <Radio value={props.value}></Radio>
            <Typography className="font-almarai md:text-xl text-lg">
                {props.answer}
                ً</Typography>
        </div>
    )
}
export default AssessmentAnswer