(() => {
  const canvas = document.getElementById("painting")
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const context = canvas.getContext("2d")

  let previousPoint = { x: 0, y: 0 }

  function onMouseMove({ pageX, pageY }) {
    const currentPoint = { x: pageX, y: pageY }

    context.beginPath()

    context.lineCap = "round"
    context.lineJoin = "round"
    context.lineWidth = 40
    context.strokeStyle = `rgba(222, 20, 109, 0.8)`

    context.moveTo(previousPoint.x, previousPoint.y)
    context.lineTo(currentPoint.x, currentPoint.y)

    context.stroke()
    context.closePath()

    previousPoint = currentPoint
  }

  function onMouseEnter({ pageX, pageY }) {
    previousPoint.x = pageX
    previousPoint.y = pageY
  }

  function run() {
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mouseenter", onMouseEnter)
  }

  run()
})();
