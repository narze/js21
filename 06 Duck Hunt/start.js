(() => {
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  function createDucks() {
    const ducks = [...Array(5)].map(() => {
      return {
        x: random(0, window.innerWidth),
        y: window.innerHeight,
        speedX: random(-50, 50),
        speedY: random(5, 10),
      }
    })

    console.log(ducks)
  }

  function run() {
    createDucks()
  }

  run()
})();
