import { IListenQuestion } from "../../../models/AssessmentQuestion.model"
import AssessmentsListening from "./assessmentsListening/AssessmentsListening"
import LevelOneSound from "../../../assets/audio/A1/L1.mp3";

import LevelOneQ1Sound from "../../../assets/audio/A1/L1-Q1.mp3";
import LevelOneQ1A1Sound from '../../../assets/audio/A1/L1-Q1-A1.mp3';
import LevelOneQ1A2Sound from '../../../assets/audio/A1/L1-Q1-A2.mp3';
import LevelOneQ1A3Sound from '../../../assets/audio/A1/L1-Q1-A3.mp3';
import LevelOneQ1A4Sound from '../../../assets/audio/A1/L1-Q1-A4.mp3';

import LevelOneQ2Sound from "../../../assets/audio/A1/L1-Q2.mp3";
import LevelOneQ2A1Sound from '../../../assets/audio/A1/L1-Q2-A1.mp3';
import LevelOneQ2A2Sound from '../../../assets/audio/A1/L1-Q2-A2.mp3';
import LevelOneQ2A3Sound from '../../../assets/audio/A1/L1-Q2-A3.mp3';
import LevelOneQ2A4Sound from '../../../assets/audio/A1/L1-Q2-A4.mp3';

import LevelOneQ3Sound from "../../../assets/audio/A1/L1-Q3.mp3";
import LevelOneQ3A1Sound from '../../../assets/audio/A1/L1-Q3-A1.mp3';
import LevelOneQ3A2Sound from '../../../assets/audio/A1/L1-Q3-A2.mp3';
import LevelOneQ3A3Sound from '../../../assets/audio/A1/L1-Q3-A3.mp3';
import LevelOneQ3A4Sound from '../../../assets/audio/A1/L1-Q3-A4.mp3';

import LevelOneQ4Sound from "../../../assets/audio/A1/L1-Q4.mp3";
import LevelOneQ4A1Sound from '../../../assets/audio/A1/L1-Q4-A1.mp3';
import LevelOneQ4A2Sound from '../../../assets/audio/A1/L1-Q4-A2.mp3';
import LevelOneQ4A3Sound from '../../../assets/audio/A1/L1-Q4-A3.mp3';
import LevelOneQ4A4Sound from '../../../assets/audio/A1/L1-Q4-A4.mp3';

import LevelOneQ5Sound from "../../../assets/audio/A1/L1-Q5.mp3";
import LevelOneQ5A1Sound from '../../../assets/audio/A1/L1-Q5-A1.mp3';
import LevelOneQ5A2Sound from '../../../assets/audio/A1/L1-Q5-A2.mp3';
import LevelOneQ5A3Sound from '../../../assets/audio/A1/L1-Q5-A3.mp3';
import LevelOneQ5A4Sound from '../../../assets/audio/A1/L1-Q5-A4.mp3';

import LevelTwoSound from "../../../assets/audio/A1/L2.mp3";
import LevelTwoQ1Sound from "../../../assets/audio/A1/L2-Q1.mp3";
import LevelTwoQ1A1Sound from '../../../assets/audio/A1/L2-Q1-A1.mp3';
import LevelTwoQ1A2Sound from '../../../assets/audio/A1/L2-Q1-A2.mp3';
import LevelTwoQ1A3Sound from '../../../assets/audio/A1/L2-Q1-A3.mp3';
import LevelTwoQ1A4Sound from '../../../assets/audio/A1/L2-Q1-A4.mp3';

import LevelTwoQ2Sound from "../../../assets/audio/A1/L2-Q2.mp3";
import LevelTwoQ2A1Sound from '../../../assets/audio/A1/L2-Q2-A1.mp3';
import LevelTwoQ2A2Sound from '../../../assets/audio/A1/L2-Q2-A2.mp3';
import LevelTwoQ2A3Sound from '../../../assets/audio/A1/L2-Q2-A3.mp3';
import LevelTwoQ2A4Sound from '../../../assets/audio/A1/L2-Q2-A3.mp3';

import LevelTwoQ3Sound from "../../../assets/audio/A1/L2-Q3.mp3";
import LevelTwoQ3A1Sound from '../../../assets/audio/A1/L2-Q3-A1.mp3';
import LevelTwoQ3A2Sound from '../../../assets/audio/A1/L2-Q3-A2.mp3';
import LevelTwoQ3A3Sound from '../../../assets/audio/A1/L2-Q3-A3.mp3';
import LevelTwoQ3A4Sound from '../../../assets/audio/A1/L2-Q3-A4.mp3';

import LevelTwoQ4Sound from "../../../assets/audio/A1/L2-Q4.mp3";
import LevelTwoQ4A1Sound from '../../../assets/audio/A1/L2-Q4-A1.mp3';
import LevelTwoQ4A2Sound from '../../../assets/audio/A1/L2-Q4-A2.mp3';
import LevelTwoQ4A3Sound from '../../../assets/audio/A1/L2-Q4-A3.mp3';
import LevelTwoQ4A4Sound from '../../../assets/audio/A1/L2-Q4-A4.mp3';

import LevelTwoQ5Sound from "../../../assets/audio/A1/L2-Q5.mp3";
import LevelTwoQ5A1Sound from '../../../assets/audio/A1/L2-Q5-A1.mp3';
import LevelTwoQ5A2Sound from '../../../assets/audio/A1/L2-Q5-A2.mp3';
import LevelTwoQ5A3Sound from '../../../assets/audio/A1/L2-Q5-A3.mp3';
import LevelTwoQ5A4Sound from '../../../assets/audio/A1/L2-Q5-A4.mp3';




const AllAssessmentsListenings = () => {
    const dataListening: IListenQuestion[] = [
        {
            id: "level_1",
            level: 1,
            urlVoice: LevelOneSound,
            listQuestions: [
                {
                    id: "l1_q_1",
                    name: "levelOneQuestionOne",
                    questionNumber: 1,
                    urlVoice: LevelOneQ1Sound,
                    listAnswers: [
                        {
                            id: "l1-q1-a1",
                            answer: "السّادِسَةَ صَبَاحاً.",
                            urlVoice: LevelOneQ1A1Sound,
                        },
                        {
                            id: "l1-q1-a2",
                            answer: "السّادِسَةَ مَسَاءًا.",
                            urlVoice: LevelOneQ1A2Sound,
                        },
                        {
                            id: "l1-q1-a3",
                            answer: " السَّابِعَةِ صَبَاحاً.",
                            urlVoice: LevelOneQ1A3Sound,
                        },
                        {
                            id: "l1-q1-a4",
                            answer: "الثَّامِنَةِ صَبَاحاً.",
                            urlVoice: LevelOneQ1A4Sound,
                        },

                    ]

                },
                {
                    id: "l1_q_2",
                    name: "levelOneQuestionTwo",
                    questionNumber: 2,
                    urlVoice: LevelOneQ2Sound,
                    listAnswers: [
                        {
                            id: "l1-q2-a1",
                            answer: "ذَهَابِه إلى المَدرَسَة.",
                            urlVoice: LevelOneQ2A1Sound
                        },
                        {
                            id: "l1-q2-a2",
                            answer: "قَبلَ أَن يَغسِلَ وَجهَهُ.",
                            urlVoice: LevelOneQ2A2Sound
                        },
                        {
                            id: "l1-q2-a3",
                            answer: " بَعدَ أَن يَغسِلَ وَجهَهُ وَيُنَظِّفَ أَسنَانَه.",
                            urlVoice: LevelOneQ2A3Sound
                        },
                        {
                            id: "l1-q2-a4",
                            answer: " قَبلَ أَن يَذهَبَ لِلنَّوم.",
                            urlVoice: LevelOneQ2A4Sound
                        },

                    ]

                },
                {
                    id: "l1_q_3",
                    name: "levelOneQuestionThree",
                    questionNumber: 3,
                    urlVoice: LevelOneQ3Sound,
                    listAnswers: [
                        {
                            id: "l1-q3-a1",
                            answer: "الشَّاي.",
                            urlVoice: LevelOneQ3A1Sound
                        },
                        {
                            id: "l1-q3-a2",
                            answer: "العَصِير.",
                            urlVoice: LevelOneQ3A2Sound
                        },
                        {
                            id: "l1-q3-a3",
                            answer: "الحَلِيب.",
                            urlVoice: LevelOneQ3A3Sound
                        },
                        {
                            id: "l1-q3-a4",
                            answer: "القَهوَة.",
                            urlVoice: LevelOneQ3A4Sound
                        },

                    ]

                },
                {
                    id: "l1_q_4",
                    name: "levelOneQuestionFour",
                    questionNumber: 4,
                    urlVoice: LevelOneQ4Sound,
                    listAnswers: [
                        {
                            id: "l1-q4-a1",
                            answer: "تُفَّاحَةً.",
                            urlVoice: LevelOneQ4A1Sound
                        },
                        {
                            id: "l1-q4-a2",
                            answer: "بُرتُقَالَةً.",
                            urlVoice: LevelOneQ4A2Sound
                        },
                        {
                            id: "l1-q4-a3",
                            answer: "جُبنَةً بَيضَاء.",
                            urlVoice: LevelOneQ4A3Sound
                        },
                        {
                            id: "l1-q4-a4",
                            answer: "دَجَاجًا مَشوِيًّا.",
                            urlVoice: LevelOneQ4A4Sound
                        },

                    ]

                },
                {
                    id: "l1_q_5",
                    name: "levelOneQuestionFive",
                    questionNumber: 5,
                    urlVoice: LevelOneQ5Sound,
                    listAnswers: [
                        {
                            id: "l1-q5-a1",
                            answer: "أُمِّي",
                            urlVoice: LevelOneQ5A1Sound
                        },
                        {
                            id: "l1-q5-a2",
                            answer: "أبي.",
                            urlVoice: LevelOneQ5A2Sound
                        },
                        {
                            id: "l1-q5-a3",
                            answer: " الحَافِلَة",
                            urlVoice: LevelOneQ5A3Sound
                        },
                        {
                            id: "l1-q5-a4",
                            answer: " السَّيَّارَةُ",
                            urlVoice: LevelOneQ5A4Sound
                        },

                    ]

                }
            ]

        },
        {
            id: "level_2",
            level: 2,
            urlVoice: LevelTwoSound,
            listQuestions: [
                {
                    id: "l2_q_1",
                    name: "levelTwoQuestionOne",
                    questionNumber: 1,
                    urlVoice: LevelTwoQ1Sound,
                    listAnswers: [
                        {
                            id: "l2-q1-a1",
                            answer: "طَبِيبَ أَسنَان.",
                            urlVoice: LevelTwoQ1A1Sound
                        },
                        {
                            id: "l2-q1-a2",
                            answer: "طَبيبًا بَيطَرِيًّا.",
                            urlVoice: LevelTwoQ1A2Sound
                        },
                        {
                            id: "l2-q1-a3",
                            answer: "مُهَندِسًا مِعمَارِيًّا.",
                            urlVoice: LevelTwoQ1A3Sound
                        },
                        {
                            id: "l2-q1-a4",
                            answer: "مُدَرِّسًا.",
                            urlVoice: LevelTwoQ1A4Sound
                        },

                    ]

                },
                {
                    id: "l2_q_2",
                    name: "levelTwoQuestionTwo",
                    questionNumber: 2,
                    urlVoice: LevelTwoQ2Sound,
                    listAnswers: [
                        {
                            id: "l2-q2-a1",
                            answer: "جَامِعَةِ نيويورك.",
                            urlVoice: LevelTwoQ2A1Sound
                        },
                        {
                            id: "l2-q2-a2",
                            answer: "جَامِعَةِ بَارِيس",
                            urlVoice: LevelTwoQ2A2Sound
                        },
                        {
                            id: "l2-q2-a3",
                            answer: "جَامِعَةِ وَاشِنطن",
                            urlVoice: LevelTwoQ2A3Sound
                        },
                        {
                            id: "l2-q2-a4",
                            answer: "جَامِعَةِ القَاهِرة.",
                            urlVoice: LevelTwoQ2A4Sound
                        },

                    ]

                },
                {
                    id: "l2_q_3",
                    name: "levelTwoQuestionThree",
                    questionNumber: 3,
                    urlVoice: LevelTwoQ3Sound,
                    listAnswers: [
                        {
                            id: "l2-q3-a1",
                            answer: "بِنَاءَ السُّفُن.",
                            urlVoice: LevelTwoQ3A1Sound
                        },
                        {
                            id: "l2-q3-a2",
                            answer: "صِنَاعَةِ السَّيَّارَات.",
                            urlVoice: LevelTwoQ3A2Sound
                        },
                        {
                            id: "l2-q3-a3",
                            answer: " تَنظِيمِ المَزَارِع.",
                            urlVoice: LevelTwoQ3A3Sound
                        },
                        {
                            id: "l2-q3-a4",
                            answer: "العَدِيدِ مِنَ المَشَارِيعِ الهَامَّةِ",
                            urlVoice: LevelTwoQ3A4Sound
                        },

                    ]

                }, {
                    id: "l2_q_4",
                    name: "levelTwoQuestionFour",
                    questionNumber: 4,
                    urlVoice: LevelTwoQ4Sound,
                    listAnswers: [
                        {
                            id: "l2-q4-a1",
                            answer: "بَارِيس إلى لَندَن.",
                            urlVoice: LevelTwoQ4A1Sound
                        },
                        {
                            id: "l2-q4-a2",
                            answer: " سَان فَرانسِيسكُو إلى اِستُوكهُلم",
                            urlVoice: LevelTwoQ4A2Sound
                        },
                        {
                            id: "l2-q4-a3",
                            answer: "وَاشِنطِن إلى نُيوُيورك.",
                            urlVoice: LevelTwoQ4A3Sound
                        },
                        {
                            id: "l2-q4-a4",
                            answer: "مُدِمَشق إلى القَاهِرة",
                            urlVoice: LevelTwoQ4A4Sound
                        },

                    ]

                }, {
                    id: "l2_q_5",
                    name: "levelTwoQuestionFive",
                    questionNumber: 5,
                    urlVoice: LevelTwoQ5Sound,
                    listAnswers: [
                        {
                            id: "l2-q5-a1",
                            answer: "أَخٌ وأُختٌ.",
                            urlVoice: LevelTwoQ5A1Sound
                        },
                        {
                            id: "l2-q5-a2",
                            answer: "أَختَان",
                            urlVoice: LevelTwoQ5A2Sound
                        },
                        {
                            id: "l2-q5-a3",
                            answer: " أَختٌ.",
                            urlVoice: LevelTwoQ5A3Sound
                        },
                        {
                            id: "l2-q2-a4",
                            answer: "لَيسَ لَدِيهِ أُخوَة",
                            urlVoice: LevelTwoQ5A4Sound
                        },

                    ]

                },

            ]

        },
    ]
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6  " >
            {dataListening?.map(d => <AssessmentsListening key={d.id} level={d.level} dataQuestion={d.listQuestions} urlVoice={d.urlVoice} />)}
        </div>
    )
}

export default AllAssessmentsListenings