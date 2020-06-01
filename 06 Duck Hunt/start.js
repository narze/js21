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

  function getDuckBackgroundImage(duck, duckEl) {
    const direction = duck.speedX > 0 ? "right" : "left"

    return duckEl.style.backgroundImage.indexOf("1") !== -1 ?
      `url(./${direction}-2.png)` :
      `url(./${direction}-1.png)`
  }

  function moveDuck(duckEl, duck) {
    const { left, top } = duckEl.getBoundingClientRect()
    const outOfBoundX = duck.x < 0 || duck.x > window.innerWidth
    const outOfBoundY = duck.y < 0 || duck.y > window.innerHeight

    if (outOfBoundX) {
      duck.speedX *= -1
    }

    if (outOfBoundY) {
      duck.speedY *= -1
    }

    duck.x = left + duck.speedX
    duck.y = top - duck.speedY
    duckEl.style.left = `${duck.x}px`
    duckEl.style.top = `${duck.y}px`

    duckEl.style.backgroundImage = getDuckBackgroundImage(duck, duckEl)
  }

  function shootDuck(event) {
    const duckEl = event.target
    duckEl.style.transition = "top 1s"
    duckEl.style.top = `${window.innerHeight}px`
    clearInterval(duckEl.interval)

    setTimeout(() => {
      document.body.removeChild(duckEl)

      const ducks = document.querySelector(".duck")

      if (!ducks) {
        const winningEl = document.querySelector(".winning")
        winningEl.style.opacity = 1
      }
    }, 1000)
  }

  function run() {
    const ducks = createDucks()

    const duckElements = ducks.map(setupDuckElement)

    duckElements.forEach(({ duck, duckEl }) => {
      duckEl.interval = setInterval(() => moveDuck(duckEl, duck), 100)
      duckEl.addEventListener("click", shootDuck)
    })
  }

  run()
})();
