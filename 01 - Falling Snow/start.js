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
        radius: random(2, 4)
      }
    })
  }

  function drawSnowFlake(canvasContext, snowFlake) {
    canvasContext.beginPath()
    canvasContext.arc(snowFlake.x, snowFlake.y, snowFlake.radius, 0, Math.PI * 2)
    canvasContext.fillStyle = `rgba(255, 255, 255, ${snowFlake.opacity})`
    canvasContext.fill()
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function run() {
    const { canvas, canvasContext, numberOfSnowFlakes } = setup()
    const snowFlakes = createSnowFlakes(canvas, numberOfSnowFlakes)

    snowFlakes.forEach((snowFlakes) => drawSnowFlake(canvasContext, snowFlakes))
  }

  run()
})();
