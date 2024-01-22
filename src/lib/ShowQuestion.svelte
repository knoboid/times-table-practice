<script>
  export let num1;
  export let num2;
</script>

<div class="multiplication">
  <div class="problem">{num1}&times;{num2}=</div>
  <input
    class="answer"
    type="number"
    maxlength="2"
    size="2"
    placeholder="?"
    autofocus
    on:keypress
  />
</div>
<div class="button-container">
  <button on:click>Quit</button>
</div>

<style>
  .problem {
    font-size: 9em;
    font-weight: 100;
  }
  .answer {
    font-size: 8em;
    font-weight: 100;
    filter: drop-shadow(2px 2px 5px #aaa);
    border-radius: 0.25em;
    text-align: center;
    width: 2em;
    caret-color: #bbb;
  }
  .multiplication {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
