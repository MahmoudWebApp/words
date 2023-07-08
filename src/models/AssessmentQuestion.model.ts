export interface IItemAnswer {
    id: string;
    answer: string;
    urlVoice: string;
    value?: number;
}
export interface IItemQuestion {
    id?: string;
    questionNumber: number;
    listAnswers: IItemAnswer[];
    name: string;
    urlVoice: string;
}
export interface IListenQuestion {
    id?: string;
    listQuestions: IItemQuestion[];
    level: number;
    urlVoice: string;
}
export interface IReadingAnswer {
    id: string;
    answer: string;
    value?: number;
}
export interface IReadingQuestion {
    id?: string;
    questionNumber: number;
    listAnswers: IReadingAnswer[];
    name: string;

}
export interface IReadingQuestions {
    id?: string;
    listQuestions: IReadingQuestion[];
    level: number;
    description:string;
}
export   interface IAssessmentsAnswers {
    levelOneQuestionFive:number;
    levelOneQuestionFour:number;
    levelOneQuestionOne:number;
    levelOneQuestionThree:number;
    levelOneQuestionTwo:number;
    levelTwoQuestionFive:number;
    levelTwoQuestionFour:number;
    levelTwoQuestionOne:number;
    levelTwoQuestionThree:number;
    levelTwoQuestionTwo:number;
    readLevelOneQuestionFive:number;
    readLevelOneQuestionFour:number;
    readLevelOneQuestionOne:number;
    readLevelOneQuestionThree:number;
    readLevelOneQuestionTwo:number;
    readLevelTwoQuestionFive:number;
    readLevelTwoQuestionFour:number;
    readLevelTwoQuestionOne:number;
    readLevelTwoQuestionThree:number;
    readLevelTwoQuestionTwo:number;

}