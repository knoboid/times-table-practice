<script>
  export let num1;
  export let num2;
  export let usersAnswer;

  let isUserCorrect = num1 * num2 == usersAnswer;
  let verdict = isUserCorrect ? "CORRECT!" : "WRONG";
</script>

<div class="verdict">{verdict}</div>
{#if !isUserCorrect}
  <div>{num1}&times;{num2} = {num1 * num2}</div>
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
</style>
