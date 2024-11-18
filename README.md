# Holidays Jp

holidays-jp.github.ioからデータを取得して判定します。非公式です。

CORS制限なく、ブラウザでも利用できます。

## Install

```
npm i @masa-dev/holidays-jp
```

## Usage

```typescript
import { HolidaysJp } from '@masa-dev/holidays-jp';

async function main(){
    // インスタンスを作成
    const holidaysJp = new HolidaysJp();

    // 祝日データを取得
    await holidaysJp.retrieve();

    // 特定の日付が祝日かどうか
    console.log(holidaysJp.isHoliday(new Date('2024-01-01'))); // true

    // 特定の日の祝日情報
    console.log(holidaysJp.find(new Date('2024-01-01'))); // "元日"
}
```

## License

MIT