function reversedDayOfTheWeek(
  day: string
) {
  enum ReversedDayOfTheWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(
    ReversedDayOfTheWeek[
      day as keyof typeof ReversedDayOfTheWeek
    ] || "error"
  );
}

reversedDayOfTheWeek("Monday");
reversedDayOfTheWeek("Friday");
reversedDayOfTheWeek("Invalid");
