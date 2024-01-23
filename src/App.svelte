<script>
  import ShowQuestion from "./lib/ShowQuestion.svelte";
  import ShowAnswer from "./lib/ShowAnswer.svelte";
  import Completed from "./lib/Completed.svelte";
  import { getQuestions, Timer } from "./util.js";
  import { showQuestion, showAnswer, complete } from "./AppState.js";

  const questionCount = 3;
  const pauseTime = 1;
  let questions, index, score, usersAnswer, timer, didUserQuit;

  handleRestart();

  $: [num1, num2] = questions[index];

  function currentTime(pauseCount) {
    return timer.currentTime(
      Date.now().valueOf() - pauseCount * pauseTime * 1000
    );
  }

  function handleKeypress(e) {
    if (e.key === "Enter") {
      usersAnswer = e.target.value;
      e.target.value = "";
      const answer = num1 * num2;
      showAnswer();
      if (usersAnswer == answer) {
        score++;
      }
      setTimeout(function () {
        showQuestion();
        index++;
        if (index === questions.length) {
          complete();
          index = 0;
        }
      }, pauseTime * 1000);
    }
  }

  function handleRestart() {
    index = 0;
    score = 0;
    questions = getQuestions(questionCount);
    showQuestion();
    timer = new Timer(Date.now().valueOf());
    didUserQuit = false;
  }

  function handleQuit() {
    didUserQuit = true;
    complete();
  }
</script>

<main>
  <ShowQuestion
    {num1}
    {num2}
    {index}
    questionCount={questions.length}
    on:keypress={handleKeypress}
    on:click={handleQuit}
  />
  <ShowAnswer {num1} {num2} {usersAnswer} time={currentTime(index)} />
  <Completed
    on:click={handleRestart}
    {score}
    {didUserQuit}
    questionCount={questions.length}
    time={currentTime(questions.length)}
  />
</main>

<style>
  div {
    text-align: center;
  }
  main {
    margin-top: 2rem;
  }
</style>
