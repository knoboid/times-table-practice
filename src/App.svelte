<script>
  import ShowQuestion from "./lib/ShowQuestion.svelte";
  import ShowAnswer from "./lib/ShowAnswer.svelte";
  import Completed from "./lib/Completed.svelte";
  import { getQuestions, Timer } from "./util.js";

  const questionCount = 10;
  const pauseTime = 1;
  let questions, index, score, appState, usersAnswer, timer;

  /* APP STATES */
  const showingQuestion = "SHOWING QUESTION";
  const showingAnswer = "SHOWING ANSWER";
  const completed = "COMPLETED";

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
      appState = showingAnswer;
      if (usersAnswer == answer) {
        score++;
      }
      setTimeout(function () {
        appState = showingQuestion;
        index++;
        if (index === questions.length) {
          appState = completed;
          index = 0;
        }
      }, pauseTime * 1000);
    }
  }

  function handleRestart() {
    index = 0;
    score = 0;
    questions = getQuestions(questionCount);
    appState = showingQuestion;
    timer = new Timer(Date.now().valueOf());
  }
</script>

<main>
  {#if appState === showingQuestion}
    <div>Question {index + 1} of {questions.length}</div>
    <ShowQuestion {num1} {num2} on:keypress={handleKeypress} />
  {:else if appState === showingAnswer}
    <ShowAnswer {num1} {num2} {usersAnswer} time={currentTime(index)} />
  {:else if appState === completed}
    <Completed
      on:click={handleRestart}
      {score}
      questionCount={questions.length}
      time={currentTime(questions.length)}
    />
  {/if}
</main>

<style>
  div {
    text-align: center;
  }
  main {
    margin-top: 2rem;
  }
</style>
