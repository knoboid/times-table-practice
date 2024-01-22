export function getQuestions(count) {
  const tables = [2, 3, 5];
  let questions = createQestionsFromTables(tables);
  questions = deduplicateQuestions(questions);
  shuffle(questions);
  if (count > questions.length) {
    return questions;
  } else {
    return questions.slice(0, count);
  }
}

function createQestionsFromTables(tables) {
  const questions = [];
  for (const table of tables) {
    for (let multiplier = 2; multiplier <= 12; multiplier++) {
      const question = [table, multiplier];
      questions.push(question);
    }
  }
  return questions;
}

function deduplicateQuestions(questions) {
  let index = 0;
  while (index < questions.length) {
    questions = removeDuplicatesOfIndex(questions, index);
    index++;
  }
  return questions;
}

function removeDuplicatesOfIndex(array, index) {
  const itemToDedupe = array[index];
  array = array.filter((item) => {
    const isDuplicate =
      (itemToDedupe[0] === item[0] && itemToDedupe[1] === item[1]) ||
      (itemToDedupe[0] === item[1] && itemToDedupe[1] === item[0]);
    return !isDuplicate;
  });
  return [itemToDedupe, ...array];
}

/**
 * See https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * @param {Array} array
 * @returns Array
 */
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
