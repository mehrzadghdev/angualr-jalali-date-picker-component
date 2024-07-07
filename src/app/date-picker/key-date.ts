import * as moment from "jalali-moment";

export class KeyDate {
    private momentDate: moment.Moment = moment(this.gDate);
    public monthList: string[] = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    public weekdayList: string[] = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه']

    get month(): number {
        return this.momentDate.jMonth();
    }

    get monthName(): string {
        return this.monthList[this.momentDate.jMonth()];
    }

    get monthLength(): number {
        return this.momentDate.jDaysInMonth();
    }

    get monthStartWeekDay(): number {
        const firstDayOfMonth = this.momentDate.startOf('jMonth');

        return firstDayOfMonth.day() + 1;
    }

    get year(): number {
        return this.momentDate.jYear();
    }

    get day(): number {
        return this.momentDate.jDate();
    }

    get weekday(): number {
        return this.momentDate.day() + 1;
    }

    get weekdayName(): string {
        return this.weekdayList[this.momentDate.day() + 1];
    }

    get date(): string {
        return this.momentDate.format('jYYYY/jMM/jDD');
    }

    constructor(private gDate: Date = new Date()) {
    }

    public addMonth(number: number = 1): void {
        this.momentDate.add(number, 'jMonth');
    }

    public subtractMonth(number: number = 1): void {
        this.momentDate.subtract(number, 'jMonth')
    }

    public static isToday(dateInput: KeyDateInput): boolean {
        const date: moment.Moment = moment();
        date.jYear(dateInput.jYear);
        date.jMonth(dateInput.jMonth)
        date.jDate(dateInput.jDate);

        return date.isSame(moment(), 'jDay');
    }

    public goToday(): void {
        this.momentDate = moment(new Date());
    }

    public static toString(dateInput: Date | KeyDateInput): string {
        if (dateInput instanceof Date) {
            const date: moment.Moment = moment(dateInput);

            return date.format('jYYYY/jMM/jDD');
        }

        const date: moment.Moment = moment();
        date.jYear(dateInput.jYear);
        date.jMonth(dateInput.jMonth)
        date.jDate(dateInput.jDate);

        return date.format('jYYYY/jMM/jDD');
    }

    public static toISODate(dateInput: KeyDateInput): string {
        const date: moment.Moment = moment();

        date.jYear(dateInput.jYear);
        date.jMonth(dateInput.jMonth)
        date.jDate(dateInput.jDate + 1);

        return new Date(date.format('YYYY/MM/DD')).toISOString();
    }
}

export interface KeyDateInput {
    jYear: number;
    jMonth: number;
    jDate: number
}

export type KeyDateOutput = 'default' | 'iso'