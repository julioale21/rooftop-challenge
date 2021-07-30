import dayjs from "dayjs";

export const isCurrent = (currentDate: string, expiresDate: string) => {
  const date1 = dayjs(currentDate);
  const date2 = dayjs(expiresDate);
  const difference = date2.diff(date1);

  return difference > 0;
};
