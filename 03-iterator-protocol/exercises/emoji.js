/*
  Exercise
  Let's implement an iterator over all the emojis of a given text.

  This iterator should behave as follows:

  - If you have the `text`: "Hello 👋 World 🌎"
  - The first time you call `iter.next()` you should get: `{done: false, value: '👋'}`
  - The second time you call `iter.next()` you should get: `{done: false, value: '🌎'}`
  - The third time you call `iter.next()` you should get: `{done: true, value: undefined}`

  Try to implement this iterator using 3 different styles:

  - With a factory function
  - With a class
  - With a generator

  TIPS:

  - You can convert a string into an array of unicode characters with `Array.from(str)`
  - If you use a `for ... of` over a string, every element will be a unicode character
  - A simple way to test if a given unicode character is an emoji is: `char.match(/\p{Emoji}/u) !== null`
*/

export function createEmojiIter (text) {
  const arrayUnicode = Array.from(text)
  let index = 0
  return {
    next () {
      for (; index < arrayUnicode.length; index++) {
        if (arrayUnicode[index].match(/\p{Emoji}/u) !== null) {
          const value = arrayUnicode[index]
          index++
          return {
            value,
            done: false
          }
        }
      }
      return {
        value: undefined,
        done: true
      }
    }
  }
}

export class EmojiIter {
  constructor (text) {
    this.chars = Array.from(text)
    this.index = 0
    // write your code here
  }

  next () {
    // write your code here
    for (this.index; this.index < this.chars.length; this.index++) {
      if (this.chars[this.index].match(/\p{Emoji}/u) !== null) {
        const value = this.chars[this.index]
        this.index++
        return {
          value,
          done: false
        }
      }
    }
    return {
      value: undefined,
      done: true
    }
  }
}

export function * emojiIterGen (text) {
  // write your code here
  for (const unicodeChar of text) {
    if (unicodeChar.match(/\p{Emoji}/u) !== null) {
      yield unicodeChar
    }
  }
}
