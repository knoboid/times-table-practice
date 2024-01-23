<script>
  import AppState, { showingAnswer } from "../AppState.js";

  export let num1;
  export let num2;
  export let usersAnswer;
  export let time;

  $: isUserCorrect = num1 * num2 == usersAnswer;
  $: verdict = isUserCorrect ? "CORRECT!" : "WRONG";
</script>

{#if showingAnswer($AppState)}
  <div class="verdict">{verdict}</div>
  {#if !isUserCorrect}
    <div>{num1}&times;{num2} = {num1 * num2}</div>
  {/if}
  <div class="small-text">Time: {time} seconds</div>
{/if}

<style>
  .verdict {
    font-size: 6em;
    font-weight: 100;
  }

  div {
    text-align: center;
    font-size: 5em;
    font-weight: 300;
  }

  .small-text {
    text-align: center;
    font-size: 2em;
    font-weight: 300;
  }
</style>
