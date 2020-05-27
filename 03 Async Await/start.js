(() => {
  // 1. How Asynchronous code works in JavaScript

  function noCallback() {
    function simulateAsyncAPI(text, timeout) {
      setTimeout(() => console.log(text), timeout)
    }

    // C -> B -> A
    simulateAsyncAPI("A", 1000)
    simulateAsyncAPI("B", 500)
    simulateAsyncAPI("C", 100)
  }

  // 2. Callback

  function useCallback() {
    function simulateAsyncAPI(text, timeout, callback) {
      setTimeout(() => {
        console.log(text)
        if (callback) callback()
      }, timeout)
    }

    // Callback hell
    simulateAsyncAPI("A", 1000, () => {
      simulateAsyncAPI("B", 500, () => {
        simulateAsyncAPI("C", 100)
      })
    })
  }

  // 3. Promise
  function usePromise() {
    function simulateAsyncAPI(text, timeout) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (text === "B") return reject("B got rejected")
          console.log(text)
          resolve()
        }, timeout)
      })
    }

    simulateAsyncAPI("A", 1000)
      .then(() => {
        return simulateAsyncAPI("B", 500) // Use `return` to chain .then
      })
      .then(() => {
        return simulateAsyncAPI("C", 100)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  // 4. Async/Await
  function useAsyncAwait() {
    // Same function as Promise
    function simulateAsyncAPI(text, timeout) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (text === "B") return reject("B got rejected")
          console.log(text)
          resolve()
        }, timeout)
      })
    }

    // await is only valid in async function
    async function run() {
      try {
        await simulateAsyncAPI("A", 1000)
        await simulateAsyncAPI("C", 100)
        await simulateAsyncAPI("B", 100)
      } catch (error) {
        console.error(error)
      }
    }

    run()
  }

  // noCallback()
  // useCallback()
  // usePromise()
  useAsyncAwait()
})();
