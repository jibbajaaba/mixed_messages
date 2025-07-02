const jokes = require("./jokeStore.js");

const randJokes = () => {
  let randIndex = Math.floor(Math.random() * jokes.length)
  let randJoke = jokes[randIndex]

  return `${randJoke.setup}\n${randJoke.punchline}`
};

console.log(randJokes())

