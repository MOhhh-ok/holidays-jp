import { describe, expect, test } from '@jest/globals';
import { HolidaysJp } from './HolidaysJp';

describe('HolidaysJp', () => {
    test('should handle holiday data correctly', async () => {
        // インスタンスを作成
        const holidaysJp = new HolidaysJp();

        // 祝日データを取得
        await holidaysJp.retrieve();

        // 取得をチェック
        expect(holidaysJp.isRetrieved()).toBe(true);

        // 特定の日付が祝日かどうかを確認
        expect(holidaysJp.isHoliday(new Date('2024-01-01'))).toBe(true);

        // 特定の日の祝日情報を取得
        expect(holidaysJp.find(new Date('2024-01-01'))).toEqual('元日');
    });
});
