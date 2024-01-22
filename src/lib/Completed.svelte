<script>
  export let score;
  export let didUserQuit;
  export let questionCount;
  export let time;
</script>

{#if didUserQuit}
  <div class="text">You Quit!</div>
{:else}
  <div class="text">{score === questionCount ? "Excellent!" : ""}</div>
  <div class="text">
    You got {score} out of {questionCount}
  </div>
  <div class="text">
    That's {Math.floor((100 * score) / questionCount)}%
  </div>
  <div class="small-text">Time: {time} seconds</div>
{/if}

<div class="button-container">
  <button on:click>Restart</button>
</div>

<style>
  .text {
    text-align: center;
    font-size: 3em;
    font-weight: 300;
  }
  .small-text {
    text-align: center;
    font-size: 2em;
    font-weight: 300;
  }
</style>
