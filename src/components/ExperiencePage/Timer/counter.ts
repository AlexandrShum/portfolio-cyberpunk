export const calculateElapsedTime = (startDate: Date): CounterFunctionInterface => {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - startDate.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const years = Math.floor(days / 365);
  const months = Math.floor(days / 30);

  return {
    years,
    months: months % 12,
  }
};

export interface CounterFunctionInterface {
  [key: string]: number;
}
