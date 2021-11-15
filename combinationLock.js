// function combination with three dials

function combinationLock(combination) {
  // declare combination already used
  let haveBeenUsed = [
    "one",
    "who",
    "two",
    "bob",
    "add",
    "owl",
    "fab",
    "den",
    "mia",
    "tat",
  ];

  let zeroIndex = haveBeenUsed.map((el) => el[0]);
  let firstIndex = haveBeenUsed.map((el) => el[1]);
  let secondIndex = haveBeenUsed.map((el) => el[2]);

  // check if character is in have been used combinaton
  if (
    zeroIndex.includes(combination[0]) &&
    firstIndex.includes(combination[1]) &&
    secondIndex.includes(combination[2])
  ) {
    return `${combination} is possible`;
  } else {
    return `${combination} is not possible`;
  }
}

console.log(combinationLock("win"));
console.log(combinationLock("deb"));
console.log(combinationLock("hat"));
console.log(combinationLock("men"));
console.log(combinationLock("bad"));
