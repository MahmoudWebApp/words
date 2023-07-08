

import { Radio, Space, Form } from "antd";
import './index.css'
import { IReadingQuestion } from "../../../../models/AssessmentQuestion.model";
import ReadingAnswer from "./ReadingAnswer";


const ReadingQuestion: React.FC<IReadingQuestion> = (props) => {
    return (
        <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-1 ms-12">
                <h6 className="text-base text-word-blue-light-1 ">Question {props.questionNumber}</h6>
                <h6 className="text-lg text-word-dark font-semibold">Choose the correct answer</h6>
            </div>
            <Form.Item name={props.name}>
                <Radio.Group className="radio-custom" >
                    <Space direction="vertical">
                        {props.listAnswers?.map((l, index) => <ReadingAnswer id={l.id} answer={l.answer} value={index + 1} key={l.id} />)}
                    </Space>
                </Radio.Group>
            </Form.Item>
        </div>
    )
}

export default ReadingQuestion