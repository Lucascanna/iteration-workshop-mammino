import { setTimeout } from 'timers/promises'

class Countdown {
  constructor (start, delay = 1000) {
      this.start = start
      this.delay = delay
  }

  async next () {
    await setTimeout(this.delay)
    if (this.start < 0) {
      return { done: true, value: undefined }
    }
    return { done: false, value: this.start--}
  }
}
