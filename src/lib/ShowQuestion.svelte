<script>
  import AppState, { showingQuestion } from "../AppState.js";

  export let num1;
  export let num2;
  export let index;
  export let questionCount;
</script>

{#if showingQuestion($AppState)}
  <div>Question {index + 1} of {questionCount}</div>
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
{/if}

<style>
  div {
    text-align: center;
  }
  .problem {
    font-size: 9em;
    font-weight: 100;
  }
  .answer {
    font-size: 8em;
    font-weight: 100;
    filter: drop-shadow(2px 2px 5px #aaa);
    border-radius: 0.25em;
    text-align: right;
    padding-right: 0.2em;
    width: 2em;
    caret-color: #bbb;
  }
  .multiplication {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  /* 
  Remove Arrows/Spinners
  https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp 
  */
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
</style>
