export type PictureUploadData = {
  picture: FileList | undefined;
  location: string;
  locationLink: string;
  time: string;
  caption: string;
};

export type PictureData = {
  imageUrl: string;
  location: string;
  locationUrl?: string;
  time: string;
  caption?: string;
};

export type DateData = {
  date: string;
  pictures: PictureData[];
};

export type MonthData = {
  month: Month;
  dates: DateData[];
};

export type YearData = {
  year: number;
  months: MonthData[];
};

export enum Month {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}
