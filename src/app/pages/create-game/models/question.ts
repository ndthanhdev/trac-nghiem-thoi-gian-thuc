export interface IQuestion {
    _id?: string;
    question: string;
    answer: string;
    choices: string[];
    enable?: boolean;
}