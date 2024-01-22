<script>
  import Multiplication from "./lib/Multiplication.svelte";
  import ShowAnswer from "./lib/ShowAnswer.svelte";
  import Completed from "./lib/Completed.svelte";

  const questions = [
    [2, 1],
    [3, 4],
    [5, 5],
  ];

  let index = 0;
  let score = 0;

  $: [num1, num2] = questions[index];

  let usersAnswer;

  const showingQuestion = "SHOWING QUESTION";
  const showingAnswer = "SHOWING ANSWER";
  const completed = "COMPLETED";

  let appState = showingQuestion;

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
      }, 1000);
    }
  }
</script>

<main>
  {#if appState === showingQuestion}
    <Multiplication {num1} {num2} on:keypress={handleKeypress} />
  {:else if appState === showingAnswer}
    <ShowAnswer {num1} {num2} {usersAnswer} />
  {:else if appState === completed}
    <Completed {score} questionCount={questions.length} />
  {/if}
</main>

<style>
  main {
    margin-top: 2rem;
  }
</style>
