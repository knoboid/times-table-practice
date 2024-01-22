<script>
  import Multiplication from "./lib/Multiplication.svelte";
  import ShowAnswer from "./lib/ShowAnswer.svelte";

  const questions = [
    [2, 1],
    [3, 4],
    [5, 5],
  ];

  let index = 0;

  $: [num1, num2] = questions[index];

  let usersAnswer;

  const showingQuestion = "SHOWING QUESTION";
  const showingAnswer = "SHOWING ANSWER";

  let appState = showingQuestion;

  function handleKeypress(e) {
    if (e.key === "Enter") {
      usersAnswer = e.target.value;
      e.target.value = "";
      const answer = num1 * num2;
      appState = showingAnswer;
      setTimeout(function () {
        appState = showingQuestion;
        index++;
      }, 2000);
      if (usersAnswer == answer) {
        console.log("CORRECT");
      } else {
        console.log("WRONG");
      }
    }
  }
</script>

<main>
  {#if appState === showingQuestion}
    <Multiplication {num1} {num2} on:keypress={handleKeypress} />
  {:else if appState === showingAnswer}
    <ShowAnswer {num1} {num2} {usersAnswer} />
  {/if}
</main>

<style>
  main {
    margin-top: 2rem;
  }
</style>
