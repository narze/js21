(() => {
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function createDucks() {
    return [...Array(5)].map(() => {
      return {
        x: random(0, window.innerWidth),
        y: window.innerHeight,
        speedX: random(-50, 50),
        speedY: random(5, 10),
      }
    })
  }

  function setupDuckElement(duck) {
    const duckEl = document.createElement("div")
    duckEl.className = "duck"
    duckEl.style.left = `${duck.x}px`
    duckEl.style.top = `${duck.y}px`
    duckEl.style.backgroundImage = "url(./left-1.png)"
    document.body.appendChild(duckEl)

    return { duck, duckEl }
  }

  function moveDuck(duckEl, duck) {
    const { left, top } = duckEl.getBoundingClientRect()
    duck.x = left + duck.speedX
    duck.y = top - duck.speedY
    duckEl.style.left = `${duck.x}px`
    duckEl.style.top = `${duck.y}px`
  }

  function run() {
    const ducks = createDucks()

    const duckElements = ducks.map(setupDuckElement)

    duckElements.forEach(({ duck, duckEl }) => {
      setInterval(() => moveDuck(duckEl, duck), 100)
    })
  }

  run()
})();
