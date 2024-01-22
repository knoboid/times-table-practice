<script>
  import Multiplication from "./lib/Multiplication.svelte";

  let num1 = 4;
  let num2 = 6;

  const showingQuestion = "SHOWING QUESTION";
  const showingAnswer = "SHOWING ANSWER";

  let appState = showingQuestion;

  function handleKeypress(e) {
    if (e.key === "Enter") {
      let usersAnswer = e.target.value;
      e.target.value = "";
      const answer = num1 * num2;
      appState = showingAnswer;
      if (usersAnswer == answer) {
        console.log("CORRECT");
      } else {
        console.log("WRONG");
      }
    }
  }
</script>

<main class="h-64 flex flex-col justify-center">
  {#if appState === showingQuestion}
    <Multiplication {num1} {num2} on:keypress={handleKeypress} />
  {:else if appState === showingAnswer}
    <div>Showing Answer</div>
  {/if}
</main>
