<main class="h-64 flex flex-col justify-center">
  <div class="multiplication">
    <div class="problem">2&times;2=</div>
    <input
      class="answer"
      type="number"
      maxlength="2"
      size="2"
      placeholder="?"
    />
  </div>
</main>

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
