(() => {
  function setup() {
    const canvas = document.getElementById("falling-snow-canvas")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    return {
      canvas,
      canvasContext: canvas.getContext("2d"),
      numberOfSnowFlakes: 250
    }
  }

  function createSnowFlakes(canvas, numberOfSnowFlakes) {
    return [...Array(numberOfSnowFlakes)].map(() => {
      return {
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        opacity: random(0.5, 1),
        radius: random(2, 4),
        speedX: random(-5, 5),
        speedY: random(1, 3),
      }
    })
  }

  function drawSnowFlake(canvasContext, snowFlake) {
    canvasContext.beginPath()
    canvasContext.arc(snowFlake.x, snowFlake.y, snowFlake.radius, 0, Math.PI * 2)
    canvasContext.fillStyle = `rgba(255, 255, 255, ${snowFlake.opacity})`
    canvasContext.fill()
  }

  function moveSnowFlake(canvas, snowFlake) {
    snowFlake.x += snowFlake.speedX
    snowFlake.y += snowFlake.speedY

    if (snowFlake.x > canvas.width) {
      snowFlake.x = 0
    } else if (snowFlake.x < 0) {
      snowFlake.x = canvas.width
    }

    if (snowFlake.y > canvas.height) {
      snowFlake.y = 0
    }
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function run() {
    const { canvas, canvasContext, numberOfSnowFlakes } = setup()
    const snowFlakes = createSnowFlakes(canvas, numberOfSnowFlakes)

    snowFlakes.forEach((snowFlake) => drawSnowFlake(canvasContext, snowFlake))

    setInterval(() => {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height)
      snowFlakes.forEach((snowFlake) => drawSnowFlake(canvasContext, snowFlake))
      snowFlakes.forEach((snowFlake) => moveSnowFlake(canvas, snowFlake))
    }, 50)
  }

  run()
})();
