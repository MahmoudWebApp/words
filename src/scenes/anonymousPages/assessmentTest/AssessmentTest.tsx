import { Checkbox, Form, notification } from "antd";
import wordLogo from "../../../assets/img/logos/words-logo.png";
import { t } from "i18next";
import { compareObjects, fontDir } from "../../../utils/helpFunctions";
import AllAssessmentsListenings from "./AllAssessmentsListenings";
import AllAssessmentsReading from "./AllAssessmentsReading";
import { IAssessmentsAnswers } from "../../../models/AssessmentQuestion.model";
const AssessmentTest = () => {
    const answers: IAssessmentsAnswers = {
        // listeningLevelOne
        levelOneQuestionOne: 1,
        levelOneQuestionTwo: 1,
        levelOneQuestionThree: 1,
        levelOneQuestionFour: 1,
        levelOneQuestionFive: 1,
        // listeningLevelTwo
        levelTwoQuestionOne: 1,
        levelTwoQuestionTwo: 1,
        levelTwoQuestionThree: 1,
        levelTwoQuestionFour: 1,
        levelTwoQuestionFive: 1,
        // ReadingLevelOne
        readLevelOneQuestionOne: 1,
        readLevelOneQuestionTwo: 1,
        readLevelOneQuestionThree: 1,
        readLevelOneQuestionFour: 1,
        readLevelOneQuestionFive: 1,
        // ReadingLevelTwo
        readLevelTwoQuestionOne: 1,
        readLevelTwoQuestionTwo: 1,
        readLevelTwoQuestionThree: 1,
        readLevelTwoQuestionFour: 1,
        readLevelTwoQuestionFive: 1,

    }
    const { currentFont } = fontDir();
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (score: number) => {

        if (score < 50) {
            api.error({
                message: ` Your Scour :${score} /100`,
                placement: "top",
            });
        }
        if (score < 80 && score >= 50) {
            api.warning({
                message: ` Your Scour :${score} /100`,
                placement: "top",
            });
        }
        if (score >= 80 ) {
            api.success({
                message: ` Your Scour :${score} /100`,
                placement: "top",
            });
        }

    };
    const onFinish = (values: IAssessmentsAnswers) => {
        if (compareObjects(values, answers) === false) {
            openNotification(0)
        } else {
            const count = Number(compareObjects(values, answers));
            openNotification(count)
            console.log(count);

        }
        form.resetFields();
    }
    return (
        <>
            {contextHolder}
            {/* Assessment Heading */}
            <div className="h-full bg-word-white py-12 md:pl-20 pl-6 flex lg:flex-row flex-col md:gap-y-6 gap-y-12">
                <div className="bg-word-white lg:w-3/5 w-full flex lg:item-start md:item-center items-start flex-col gap-y-12 md:py-32 py-12">
                    <img src={wordLogo} alt="word-logo" className="w-44 h-auto" />
                    <h2 className="lg:text-5xl text-5xl font-extrabold text-word-dark">Assessments A1.0</h2>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-6">
                        <div className="flex flex-col">
                            <h6 className="text-lg text-word-dark text-bold">Listening test Standards </h6>
                            <ul className="ml-24 mt-3 flex flex-col gap-y-3">
                                <li className="text-sm text-word-gray-dark-1">1. Remember the information.</li>
                                <li className="text-sm text-word-gray-dark-1">2. Understand events.</li>
                                <li className="text-sm text-word-gray-dark-1">3. Identify characters .</li>
                                <li className="text-sm text-word-gray-dark-1">4. Understand the question’s</li>
                                <li className="text-sm text-word-gray-dark-1">5. Answer comprehension questions</li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <h6 className="text-lg text-word-dark text-bold">Reading test Standards</h6>
                            <ul className="ml-24 mt-3 flex flex-col gap-y-3">
                                <li className="text-sm text-word-gray-dark-1">1. Read familiar text</li>
                                <li className="text-sm text-word-gray-dark-1">2. Understand simple words</li>
                                <li className="text-sm text-word-gray-dark-1">3. Identify characters .</li>
                                <li className="text-sm text-word-gray-dark-1">4. Understand the question’s</li>
                                <li className="text-sm text-word-gray-dark-1">5. Answer comprehension questions</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="bg-word-gray-light-1 lg:w-2/5 w-full rounded-es-2xl rounded-ss-2xl md:pl-24 pl-6 md:py-32 py-16 md:pr-32 pr-2">
                    <div className="flex flex-col gap-y-6">
                        <div className="flex flex-col">
                            <h6 className="text-xl text-word-dark text-bold">Instructions</h6>
                            <ul className=" mt-1 flex flex-col md:gap-y-1 gap-y-3">
                                <li className="text-[.8rem] text-word-gray-dark-3">1. &nbsp; &nbsp; Open the test .</li>
                                <li className="text-[.8rem] text-word-gray-dark-3">2. &nbsp; &nbsp; Press the voice bottom to listen.</li>
                                <li className="text-[.8rem] text-word-gray-dark-3">3. &nbsp; &nbsp; Listen to the questions .</li>
                                <li className="text-[.8rem] text-word-gray-dark-3">4. &nbsp; &nbsp; Choose the correct answer.</li>
                                <li className="text-[.8rem] text-word-gray-dark-3">5. &nbsp; &nbsp; When you finish listening test go to reading test .</li>
                                <li className="text-[.8rem] text-word-gray-dark-3">6. &nbsp; &nbsp; Read the text then read the questions .</li>
                                <li className="text-[.8rem] text-word-gray-dark-3">7. &nbsp; &nbsp; Choose the correct answer .</li>
                                <li className="text-[.8rem] text-word-gray-dark-3">8. &nbsp; &nbsp; When you finish the reading test go to Writing test .</li>
                                <li className="text-[.8rem] text-word-gray-dark-3">9. &nbsp; &nbsp; Organize the words to set a correct sentences .</li>
                                <li className="text-[.8rem] text-word-gray-dark-3">10. &nbsp; &nbsp; Press Submit when you done</li>
                            </ul>
                        </div>
                        <div className="w-full ">
                            <button className="bg-words-green-light py-2 px-10 rounded w-full btn-animated">
                                <span className="text-word-white xl:text-base text-xs">{`${t("Start the test")}`}</span>
                            </button>
                        </div>
                        <div className="w-full flex flex-row justify-between items-center ">
                            <Checkbox className={`${currentFont}`} checked><p className="text-word-gray-dark-2 text-xs">
                                {`${t("By clicking Create account, I agree that I have read and accepted the Terms of Use and Privacy Policy.")}`}
                            </p>
                            </Checkbox>
                        </div>
                    </div>

                </div>

            </div>
            {/* Assessment Body */}
            <div className="h-auto bg-word-blue-light-3 lg:px-60 md:px-16 px-3  pt-32 pb-60">
                <Form form={form} onFinish={onFinish} >
                    <AllAssessmentsListenings />
                    <AllAssessmentsReading />
                    <div className="lg:w-1/2 w-full mt-20 float-right ">
                        <button className="bg-word-blue-light-1 py-2 px-10 rounded w-full btn-animated" type="submit">
                            <span className="text-word-white xl:text-base text-xs">{`${t("Submit")}`}</span>
                        </button>
                    </div>
                </Form>
            </div>
            {/* Assessment Writing */}
            <div className="h-full bg-word-white py-12 md:pl-20 pl-6 md:pr-0 pr-3 flex lg:flex-row flex-col md:gap-y-6 gap-y-12">
                <div className="bg-word-white lg:w-3/5 w-full flex lg:item-start md:item-center items-start  flex-col gap-y-12 md:py-32 py-12">
                    <img src={wordLogo} alt="word-logo" className="w-44 h-auto" />
                    <h2 className="lg:text-5xl text-5xl font-extrabold text-word-dark">Writing Assessments L1</h2>
                    <div className="flex flex-col gap-y-6">
                        <h6 className="text-lg text-word-dark text-bold">Writing test Standards </h6>
                        <ul className="flex flex-col gap-y-3">
                            <li className="text-sm text-word-gray-dark-1">1. He can copy letters and words he learned in class.</li>
                            <li className="text-sm text-word-gray-dark-1">2. He can write his name, home address, date, days and seasons.</li>
                            <li className="text-sm text-word-gray-dark-1">3. He can write words and sentences that he has learned with visual support.</li>
                        </ul>
                        <button className="bg-words-green-light py-2 px-16 rounded w-fit btn-animated mt-3">
                            <span className="text-word-white xl:text-base text-xs">{`${t("Download Writing assessment")}`}</span>
                        </button>
                    </div>
                </div>
                <div className="bg-word-gray-light-1 lg:w-2/5 w-full rounded-es-2xl rounded-ss-2xl md:pl-24 pl-6 md:py-32 py-16 md:pr-32 pr-2">
                    <div className="flex flex-col gap-y-6">
                        <div className="flex flex-col gap-y-3">
                            <h6 className="text-xl text-word-dark text-bold">Instructions</h6>
                            <ul className=" flex flex-col gap-y-2">
                                <li className="text-[.8rem] text-word-gray-dark-3">1. Use a blue or black pen.</li>
                                <li className="text-[.8rem] text-word-gray-dark-3">2. Write your name.</li>
                                <li className="text-[.8rem] text-word-gray-dark-3">3. Read the questions well.</li>
                                <li className="text-[.8rem] text-word-gray-dark-3">4. Answer the questions accurately.</li>
                                <li className="text-[.8rem] text-word-gray-dark-3">5. The duration of the test is 60 minutes.</li>
                                <li className="text-[.8rem] text-word-gray-dark-3">6. The test score is 40.</li>
                                <li className="text-[.8rem] text-word-gray-dark-3">7. Upon completion, take a photocopy of the test and then upload it to the designated place on the website.</li>

                            </ul>
                        </div>
                        <div className="w-full ">
                            <button className="bg-words-green-light py-2 px-10 rounded w-full btn-animated">
                                <span className="text-word-white xl:text-base text-xs">{`${t("Upload your test")}`}</span>
                            </button>
                        </div>
                        <div className="w-full flex flex-row justify-between items-center ">
                            <Checkbox className={`${currentFont}`} checked><p className="text-word-gray-dark-2 text-xs">
                                {`${t("By clicking Create account, I agree that I have read and accepted the Terms of Use and Privacy Policy.")}`}
                            </p>
                            </Checkbox>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default AssessmentTest


