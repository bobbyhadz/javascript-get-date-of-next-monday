// EXAMPLE 1 - Get the Date of the Next Monday using JavaScript

function getNextMonday(date = new Date()) {
  const dateCopy = new Date(date.getTime());

  const nextMonday = new Date(
    dateCopy.setDate(
      dateCopy.getDate() +
        ((7 - dateCopy.getDay() + 1) % 7 || 7),
    ),
  );

  return nextMonday;
}

// 👇️ Get Monday of Next Week
console.log(getNextMonday(new Date())); // 👉️ Mon Jul 31 2023

// 👇️ Get Next Monday for specific Date
console.log(getNextMonday(new Date('2022-01-25'))); // 👉️ Mon Jan 31 2022

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the Date of the Next Friday using JavaScript

// function getNextFriday(date = new Date()) {
//   const dateCopy = new Date(date.getTime());

//   const nextFriday = new Date(
//     dateCopy.setDate(
//       dateCopy.getDate() +
//         ((7 - dateCopy.getDay() + 5) % 7 || 7),
//     ),
//   );

//   return nextFriday;
// }

// // 👇️ Get Friday of Next Week
// console.log(getNextFriday(new Date())); // 👉️ Fri Aug 04 2023

// // 👇️ Get Next Friday for specific Date
// console.log(getNextFriday(new Date('2022-01-25'))); // 👉️ Fri Jan 28 2022

// ------------------------------------------------------------------

// EXAMPLE 3 -
