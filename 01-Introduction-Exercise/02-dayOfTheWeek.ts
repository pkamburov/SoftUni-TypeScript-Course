function dayOfTheWeek(num: number) {
  enum DayOfTheWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(DayOfTheWeek[num]);
}

dayOfTheWeek(1);
dayOfTheWeek(5);
dayOfTheWeek(-1);
