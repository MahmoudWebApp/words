export interface ILevelList {
    name: string;
    id: string;
    url: string;
}
export interface IAssessmentCard {
    id?:string;
    theme: string;
    level: string;
    levelList: ILevelList[];
}