<script>
  export let score;
  export let questionCount;
</script>

<div class="completed">{score === questionCount ? "Excellent!" : ""}</div>
<div class="completed">You got {score} out of {questionCount}.</div>
<div class="completed">
  That's {Math.floor((100 * score) / questionCount)}%.
</div>

<style>
  div {
    text-align: center;
    font-size: 4em;
    font-weight: 300;
  }
</style>
