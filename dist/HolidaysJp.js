"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolidaysJp = void 0;
const URL = 'https://holidays-jp.github.io/api/v1/date.json';
class HolidaysJp {
    _data = {};
    _isRetrieved = false;
    constructor() { }
    async retrieve() {
        try {
            const res = await fetch(URL).then((res) => res.json());
            this._data = res;
            this._isRetrieved = true;
            return this._data;
        }
        catch (err) {
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
    find(date) {
        const target = this.formatDate(date);
        return this._data[target];
    }
    isHoliday(date) {
        return !!this.find(date);
    }
    formatDate(date) {
        const { year, month, day } = this.extractDate(date);
        return `${year}-${this.pad(month)}-${this.pad(day)}`;
    }
    extractDate(date) {
        return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
        };
    }
    pad(num) {
        return num.toString().padStart(2, '0');
    }
}
exports.HolidaysJp = HolidaysJp;
