import dayjs from "dayjs";

export const hasExpired = (currentDate: string, expiresDate: string) => {
  const date1 = dayjs(currentDate);
  const date2 = dayjs(expiresDate);
  const difference = date2.diff(date1);

  return difference < 0;
};

export const getTimeFromTimeStamp = (timestamp: Date) => {
  const time = new Date(timestamp);
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();

  return day + "-" + month + "-" + year;
};
