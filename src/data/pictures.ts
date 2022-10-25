export type PictureData = {
  picture: string;
  location: string;
  locationLink: string;
  time: string;
  caption: string;
};

export type DayData = {
  day: string;
  pictures: PictureData[];
};

export type MonthData = {
  month: Month;
  days: DayData[];
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

export const years: YearData[] = [
  {
    year: 2022,
    months: [
      {
        month: Month.July,
        days: [
          {
            day: "21st",
            pictures: [
              {
                picture: "pictures/goj.jpg",
                location: "God's Own Junkyard, Walthamstow",
                locationLink: "https://goo.gl/maps/8S3mMvFP6mGXB7JMA",
                time: "13:21",
                caption: "",
              },
              {
                picture: "pictures/goj.jpg",
                location: "Tesstt",
                time: "13:21",
                caption: "",
                locationLink: "",
              },
            ],
          },
        ],
      },
    ],
  },
];
