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

export const getRemainingTime = (time: string) => {
  const endTime = new Date(time).getTime() - new Date().getTime();
  const minutes = Math.floor((endTime / 1000 / 60) % 60);
  const hours = Math.floor((endTime / (1000 * 60 * 60)) % 24);
  const days = Math.floor(endTime / (1000 * 60 * 60 * 24));

  return {
    minutes,
    hours,
    days,
  };
};
