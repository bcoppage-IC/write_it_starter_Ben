// io.js (provided in the starter folder, interns do not write this one)
// Wraps prompt-sync so every program asks for input the same way.
import promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true });

export function ask(question) {
  const answer = prompt(question);
  return answer === null ? '' : answer;
}
