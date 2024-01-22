<script>
  export let score;
  export let questionCount;
</script>

<div class="text">{score === questionCount ? "Excellent!" : ""}</div>
<div class="text">You got {score} out of {questionCount}.</div>
<div class="text">
  That's {Math.floor((100 * score) / questionCount)}%.
</div>
<div class="button-container">
  <button on:click>Restart</button>
</div>

<style>
  .text {
    text-align: center;
    font-size: 4em;
    font-weight: 300;
  }
  .button-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  button {
    margin-top: 20px;
    padding: 0px 20px;
    border-radius: 5px;
    font-size: 2em;
    font-weight: 300;
    background-color: #ccc;
  }
</style>
