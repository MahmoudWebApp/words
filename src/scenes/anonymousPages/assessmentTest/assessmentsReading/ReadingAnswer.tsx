import { Radio, Typography } from "antd"
import { IReadingAnswer } from "../../../../models/AssessmentQuestion.model"


const ReadingAnswer: React.FC<IReadingAnswer> = (props) => {
    return (
        <div className="flex flex-row gap-x-3 items-center " >
          
            <Radio value={props.value}></Radio>
            <Typography className="font-almarai font-semibold md:text-xl text-lg">
                {props.answer}
                ً</Typography>
        </div>
    )
}
export default ReadingAnswer