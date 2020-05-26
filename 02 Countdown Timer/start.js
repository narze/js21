(() => {
  const SECOND = 1000
  const MINUTE = SECOND * 60
  const HOUR = MINUTE * 60
  const DAY = HOUR * 24

  function setElementInnerText(id, text) {
    const element = document.getElementById(id)
    element.innerText = text
  }

  function countdown() {
    const now = new Date().getTime()
    const newYear = new Date("January 1, 2021").getTime()
    const diff = newYear - now

    setElementInnerText("days", Math.floor(diff / DAY))
    setElementInnerText("hours", Math.floor(diff % DAY / HOUR))
    setElementInnerText("minutes", Math.floor(diff % HOUR / MINUTE))
    setElementInnerText("seconds", Math.floor(diff % MINUTE / SECOND))
    setElementInnerText("milliseconds", Math.floor(diff % SECOND))
  }

  function run() {
    countdown()

    setInterval(countdown, 1)
  }

  run()
})();
