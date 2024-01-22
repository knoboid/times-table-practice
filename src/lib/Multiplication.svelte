<script>
  export let num1;
  export let num2;

  function handleKeypress(e) {
    if (e.key === "Enter") {
      let usersAnswer = e.target.value;
      e.target.value = "";
      console.log(usersAnswer);
    }
  }
</script>

<div class="multiplication">
  <div class="problem">{num1}&times;{num2}=</div>
  <input
    class="answer"
    type="number"
    maxlength="2"
    size="2"
    placeholder="?"
    on:keypress={handleKeypress}
  />
</div>

<style>
  .problem {
    font-size: 9em;
    font-weight: 100;
  }
  .answer {
    font-size: 8em;
    font-weight: 150;
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
