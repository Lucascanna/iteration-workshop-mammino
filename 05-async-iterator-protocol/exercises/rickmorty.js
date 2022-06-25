/*
  Exercise
  Let's create a utility function to retrieve all the Rick and Morty characters!

  Yes, there's an API for that. Check out https://rickandmortyapi.com/

  We want to implement a `createCharactersPaginator` factory function that returns
  an iterator of pages. Every page contains multiple characters.

  You can get the first page by calling:

  ```
  GET https://rickandmortyapi.com/api/character
  ```

  The iterator should emit values that look like this:

  ```json
  [
    "character1",
    "character2",
    "character3",
    ...
    "character20"
  ]
  ```

  An array with a maximum of 20 character names.

  You can use `axios` or `node-fetch`, both are already available in your `node_modules`!
*/

import axios from 'axios'

export default async function * createCharactersPaginator () {
  // return an iterator that returns pages of characters
  let nextPageLink = 'https://rickandmortyapi.com/api/character'
  while (nextPageLink !== null) {
    const response = await axios.get(nextPageLink)
    nextPageLink = response.data.info.next
    yield response.data.results.map(character => character.name)
  }
}
