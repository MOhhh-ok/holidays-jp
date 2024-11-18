const URL = 'https://holidays-jp.github.io/api/v1/date.json';

export class HolidaysJp {
    private _data: Record<string, string> = {};
    private _isRetrieved = false;
    constructor() {}

    async retrieve(): Promise<Record<string, string> | null> {
        try {
            const res = await fetch(URL).then((res) => res.json());
            this._data = res as Record<string, string>;
            this._isRetrieved = true;
            return this._data;
        } catch (err: unknown) {
            console.error(err);
            return null;
        }
    }

    isRetrieved() {
        return this._isRetrieved;
    }

    getData() {
        return { ...this._data };
    }

    find(date: Date): string {
        const target = this.formatDate(date);
        return this._data[target];
    }

    isHoliday(date: Date): boolean {
        return !!this.find(date);
    }

    private formatDate(date: Date): string {
        const { year, month, day } = this.extractDate(date);
        return `${year}-${this.pad(month)}-${this.pad(day)}`;
    }

    private extractDate(date: Date) {
        return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
        };
    }

    private pad(num: number) {
        return num.toString().padStart(2, '0');
    }
}
