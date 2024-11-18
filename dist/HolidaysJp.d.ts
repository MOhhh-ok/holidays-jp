export declare class HolidaysJp {
    private _data;
    private _isRetrieved;
    constructor();
    retrieve(): Promise<Record<string, string> | null>;
    isRetrieved(): boolean;
    getData(): {
        [x: string]: string;
    };
    find(date: Date): string;
    isHoliday(date: Date): boolean;
    private formatDate;
    private extractDate;
    private pad;
}
