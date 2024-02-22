// array
function random(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function shuffle(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

function copy(arr) {
  return arr.map((item) => ({ ...item }))
}

function merge(arr1, arr2) {
  const arr3 = arr1.filter((item) => arr2.some((obj) => obj.id === item.id))
  for (let obj of arr2) {
    if (!arr1.some((item) => item.id === obj.id)) {
      arr3.push(obj)
    }
  }
  return arr3
}

// number
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

export const array = { random, shuffle, copy, merge }

export const number = { randomInt }

export function shuffledRandomCells(cells, count = 8) {
  const shuffled = shuffle(cells)
  const shuffled_and_sliced = shuffled.slice(0, count)
  const shuffled_and_sliced_x2 = [...shuffled_and_sliced, ...shuffled_and_sliced]
  const sliced_shuffled_and_sliced_x2 = shuffle(shuffled_and_sliced_x2)
  return sliced_shuffled_and_sliced_x2
}
