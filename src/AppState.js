import { writable } from "svelte/store";

const _showingQuestion = "SHOWING QUESTION";
const _showingAnswer = "SHOWING ANSWER";
const _completed = "COMPLETED";

const initialAppState = _showingQuestion;

const AppState = writable(initialAppState);

export function showQuestion() {
  AppState.set(_showingQuestion);
}

export function showAnswer() {
  AppState.set(_showingAnswer);
}

export function complete() {
  AppState.set(_completed);
}

export function showingQuestion(appState) {
  return appState === _showingQuestion;
}

export function showingAnswer(appState) {
  return appState === _showingAnswer;
}

export function completed(appState) {
  return appState === _completed;
}

export default AppState;
