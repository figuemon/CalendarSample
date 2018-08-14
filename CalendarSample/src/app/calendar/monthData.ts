export class MonthData {
    name: string;
    weeks = [];

    constructor(name: string, weeks: Array<any>){
        this.name = name;
        this.weeks = weeks;
    }
}
