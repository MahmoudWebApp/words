import { IReadingQuestions } from "../../../models/AssessmentQuestion.model";
import AssessmentsReading from "./assessmentsReading/AssessmentsReading";

const AllAssessmentsReading = () => {
    const dataReading: IReadingQuestions[] = [
        {
            id: "readLevel_1",
            level: 1,
            description: "اِلتَقَى جُون وَسَارَة وَمَايكِل في بَاحَةِ المَدرَسَةِ ، وَتَحَدَّثَ كُلٌّ مِنهُم عن هِوَايَاتِهِ وَمَا يُحِبُّ أَن يَفعَلَ في العُطلَةِ . اِقرَأ جيداً واِفهَم ، ثُمَّ أَجِب عَن الأَسئِلَة. قَالَ جُون : أنَا مِن أَمرِيكَا عُمرِي ثَمَانِي سَنَوَاتٍ، أَنَا في الصَّفِّ الثَّالِثِ، أَعِيشُ مَعَ أُمِّي وَأَبي وَأُختَينِ كَبِيرَتِينِ في شِقَّةٍ كَبِيرَةٍ . أُحِبُّ الحَلِيبَ وَالتُّفَّاحَ وَالمَوزَ كَمَا أُحِبُّ العَزفَ عَلى الكَمَانِ. أَزُور ُجَدَّتِي في يَومِ العُطلَةِ وأَلعَبُ كُرَةَ السَّلَّةِ.",
            listQuestions: [
                {
                    id: "r-l1_q_1",
                    name: "readLevelOneQuestionOne",
                    questionNumber: 1,
                    listAnswers: [
                        {
                            id: "r-l1-q1-a1",
                            answer: "جُون مِن أَمِرِكَا",
                        },
                        {
                            id: "r-l1-q1-a2",
                            answer: "جُون مِن فَرَنسَا",
                        },
                        {
                            id: "r-l1-q1-a3",
                            answer: "جُون مِن آسيَا",

                        },

                    ]

                },
                {
                    id: "r-l1_q_2",
                    name: "readLevelOneQuestionTwo",
                    questionNumber: 2,
                    listAnswers: [
                        {
                            id: "r-l1-q2-a1",
                            answer: "تَتَأَلَّفُ عَائِلَةُ جُون مِن خَمسَةِ أَفرَاد.",
                        },
                        {
                            id: "r-l1-q2-a2",
                            answer: "تَتَأَلَّفُ عَائِلَةُ جُون مِن أَربَعَةِ أَفرَاد.",
                        },
                        {
                            id: "r-l1-q2-a3",
                            answer: "تَتَأَلَّفُ عَائِلَةُ جُون مِن سَبعَةِ أَفرَاد.",

                        },

                    ]

                },
                {
                    id: "r-l1_q_3",
                    name: "readLevelOneQuestionThree",
                    questionNumber: 3,
                    listAnswers: [
                        {
                            id: "r-l1-q3-a1",
                            answer: "جُون يَقُول: “ أَزُورُ جَدَّتي كُلَّ يَوم “.",
                        },
                        {
                            id: "r-l1-q3-a2",
                            answer: "ون يَقُول: “ أَزُورُ جَدَّتي يَومَ الاِثنَين “",
                        },
                        {
                            id: "r-l1-q3-a3",
                            answer: " جُون يَقُول: “ أزور جدتي في يَومِ العُطلَة",

                        },

                    ]

                },
                {
                    id: "r-l1_q_4",
                    name: "readLevelOneQuestionFour",
                    questionNumber: 4,
                    listAnswers: [
                        {
                            id: "r-l1-q4-a1",
                            answer: "جُون في الصَّفِّ الثَّانِي وَعُمرُهُ سَبعُ سَنَوَات.",
                        },
                        {
                            id: "r-l1-q4-a2",
                            answer: " جُون في الصَّفِّ الثالث وَعُمرُهُ ثَمَانِ سَنَوَات."
                        },
                        {
                            id: "r-l1-q4-a3",
                            answer: "جُون في الصَّفِّ الرَّابِع وعُمرُهُ ثَمَان سَنَوَات"

                        },

                    ]

                },
                {
                    id: "r-l1_q_5",
                    name: "readLevelOneQuestionFive",
                    questionNumber: 5,
                    listAnswers: [
                        {
                            id: "r-l1-q5-a1",
                            answer: "جُون لَدِيهِ ثَلاثَةُ أَخَوَات.",
                        },
                        {
                            id: "r-l1-q5-a2",
                            answer: "جُون لَدِيهِ أُختَانِ أَصغَرَ مِنه."
                        },
                        {
                            id: "r-l1-q5-a3",
                            answer: "جُون لَدِيهِ أُختَانِ أَكبُرُ مِنه."

                        },

                    ]

                },
            ]
        },
        {
            id: "readLevel_2",
            level: 2,
            description: "قَالَ مَايكِل: أَنَا مِن لَندَن، عُمرِي عَشرُ سَنَوَات أَنَا في الصَّفِّ الرَّابِع أَعِيشُ مَعَ جَدَّتي. أَبِي وَأُمِّي يَعمَلَانِ في إِفرِيقيَا. أُحِبُّ العَصِيرَ والدَّجَاجَ المَشوِيَّ ولَحمَ الخَرَوفِ . أَلعَبُ كُرَةَ القَدَمِ وَأُحِبُّ مُوسِيقَا الرَّاب . أُسَاعِد جَدَّتِي بِزِرَاعَةِ الحَديقَةِ في يَومِ العُطلَة.",
            listQuestions: [
                {
                    id: "r-l2_q_1",
                    name: "readLevelTwoQuestionOne",
                    questionNumber: 1,
                    listAnswers: [
                        {
                            id: "r-l2-q1-a1",
                            answer: "عُمرُ مَايكِل عَشر ُسَنَوَات",
                        },
                        {
                            id: "r-l2-q1-a2",
                            answer: "عُمرُ مَايكِل سَبعُ سَنَوَات",
                        },
                        {
                            id: "r-l2-q1-a3",
                            answer: "عُمرُ مَايكِل سِتُّ سَنَوَات",

                        },


                    ]

                },
                {
                    id: "r-l2_q_2",
                    name: "readLevelTwoQuestionTwo",
                    questionNumber: 2,
                    listAnswers: [
                        {
                            id: "r-l2-q2-a1",
                            answer: "عَائِلَةُ مَايكِل تَعمَلُ في فَرَنسَا.",
                        },
                        {
                            id: "r-l2-q2-a2",
                            answer: "عَائِلَةُ مَايكِل تَعمَلُ في اِنجِلتَرَا.",
                        },
                        {
                            id: "r-l2-q2-a3",
                            answer: "عَائِلَةُ مَايكِل تَعمَلُ في إفريقيا.",

                        },


                    ]

                },
                {
                    id: "r-l2_q_3",
                    name: "readLevelTwoQuestionThree",
                    questionNumber: 3,
                    listAnswers: [
                        {
                            id: "r-l2-q3-a1",
                            answer: "مَايكِل يَعِيشُ مَعَ أُمِّهِ وَأَبِيهِ.",
                        },
                        {
                            id: "r-l2-q3-a2",
                            answer: "مَايكِل يَعِيشُ مَعَ جَدَّتِه.",
                        },
                        {
                            id: "r-l2-q3-a3",
                            answer: "مَايكِل يَعِيشُ في مَدرَسَةٍ دَاخِليَّة.",

                        },


                    ]

                },
                {
                    id: "r-l2_q_4",
                    name: "readLevelTwoQuestionFour",
                    questionNumber: 4,
                    listAnswers: [
                        {
                            id: "r-l2-q4-a1",
                            answer: "يُحِبُّ مَايكِل العَصِيرَ ولَحمَ الخَرَوفَ.",
                        },
                        {
                            id: "r-l2-q4-a2",
                            answer: " يُحِبُّ مَايكِل البَيضَ والجُبنَة.",
                        },
                        {
                            id: "r-l2-q4-a3",
                            answer: " لا يُحِبُّ مَايكِل الدَّجَاجَ المَشوِي.",

                        },


                    ]

                },
                {
                    id: "r-l2_q_5",
                    name: "readLevelTwoQuestionFive",
                    questionNumber: 5,
                    listAnswers: [
                        {
                            id: "r-l2-q5-a1",
                            answer: "مَايكِل يَلعَبُ كُرَةَ السَّلَّةِ وَيُحِبُّ المُوسِيقَى الهَادِئَةَ.",
                        },
                        {
                            id: "r-l2-q5-a2",
                            answer: " مَايكِل يَلعَبُ كُرَةَ القَدَمِ ولا يُحِبُّ المُوسِيقَى."
                        },
                        {
                            id: "r-l2-q5-a3",
                            answer:"مَايكِل يَلعَبُ كُرَةَ القدم ويُحِبُّ مُوسِيقَى الرَّاب"

                        },


                    ]

                },



            ]

        },
    ]
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6  mt-40" >
            {dataReading?.map(d => <AssessmentsReading level={d.level} dataQuestion={d.listQuestions} key={d.id} description={d.description} />)}
        </div>
    )
}

export default AllAssessmentsReading;