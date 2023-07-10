import {
  ColorDot,
  ColorDotFull,
  DateInfo,
  DateInfoFunction,
  TimeFormat,
  WeekStartsOn,
} from '../Calendar.types';

export interface WeekTimeViewProps {
  renderItems: ({ dateInfo, idx }: DateInfoFunction) => JSX.Element[];
  renderHeaderItems: (
    startDate: string,
    endDate: string,
  ) => (JSX.Element | null)[];
  currentDate: string | Date;
  onDayNumberClick: (day: string) => void;
  onDayStringClick: (day: string | Date) => void;
  onColorDotClick: (value: ColorDot) => void;
  onCellClick: (value: DateInfo) => void;
  timeDateFormat: TimeFormat;
  preparedColorDots: ColorDotFull;
  onHourClick: (value: DateInfo | number) => void;
  weekStartsOn: WeekStartsOn;
}
