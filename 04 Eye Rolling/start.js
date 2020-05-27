(() => {
  // เริ่มเขียนโค้ด
  function run() {
    const bodyEl = document.querySelector("body")
    const eyeEls = document.querySelectorAll(".eye")

    function onMouseMove({ pageX, pageY }) {
      // console.log(pageX, pageY)
      eyeEls.forEach((eyeEl) => {
        const { left, top } = eyeEl.getBoundingClientRect()

        const eyeCenterX = left + eyeEl.offsetWidth / 2
        const eyeCenterY = top + eyeEl.offsetHeight / 2
        const radian = Math.atan2(pageX - eyeCenterX, pageY - eyeCenterY)
        const angle = radian * 180 / Math.PI * -1

        // console.log(angle)

        eyeEl.style.transform = `rotate(${angle}deg)`
        // Or
        // eyeEl.style.transform = `rotate(${-radian}rad)`
      })
    }

    bodyEl.addEventListener("mousemove", onMouseMove)
  }

  run()
})();
