import moment from 'moment';

export default {
  date: {
    current(format: string = 'YYYY-MM-DD'): string {
      return moment().format(format);
    },
    format(date: Date | string, format: string = 'YYYY-MM-DD'): string {
      return moment(date).format(format);
    },
    compare(date1: string, date2: string): number {
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);

      if (momentDate1.isBefore(momentDate2)) {
        return -1;
      } else if (momentDate1.isAfter(momentDate2)) {
        return 1;
      } else {
        return 0;
      }
    },
    diff(date1: string, date2: string, unit: moment.unitOfTime.Diff): number {
      return moment(date1).diff(moment(date2), unit);
    },
    isBetween(dateToCheck: string, startDate: string, endDate: string): boolean {
      return moment(dateToCheck).isBetween(startDate, endDate);
    },
    isWeekday(date: string): boolean {
      const dayOfWeek = moment(date).isoWeekday();
      return dayOfWeek >= 1 && dayOfWeek <= 5;
    },
    dayOfWeek(date: string): string {
      return moment(date).format('dddd');
    },
    toUTC(dateTime: string, local: boolean = false): number {
      const time = moment(dateTime).valueOf();
      if (local) {
        const tzoffset = moment().utcOffset() * 60000;
        return time + tzoffset;
      }
      return time;
    },
    utcTime(): string {
      return moment().utc().format('HH:mm:ss');
    },
    addMilliseconds(dateTime: string, milliseconds: number): number {
      const time = moment(dateTime).valueOf();
      const resultTime = time + milliseconds;
      return resultTime;
    },
  },
};
