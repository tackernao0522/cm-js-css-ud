// if (false) {
//   console.log('This is true')
// } else if (true) {
//   console.log('This is in else if block')
// } else {
//   console.log('This is false')
// }

// if (1 === '1') {
//   console.log('This is true')
// } else {
//   console.log('This is false')
// }

// if (1 == '1') {
//   console.log('This is true')
// } else {
//   console.log('This is false')
// }

const num = Number(true)
console.log(num) // 1 となる

const num2 = Number(false)
console.log(num2) // 0 となる

if (1 == true) {
  console.log('This is true') // true
} else {
  console.log('This is false')
}

if (0 !== '0') {
  console.log('This is true') //  true
} else {
  console.log('This is false')
}

if (0 != '0') {
  console.log('This is true')
} else {
  console.log('This is false') // false
}

if (0 == '0' && 0 === '0') {
  console.log('This is true')
} else {
  console.log('This is false') // false
}

if (0 == '0' || 0 === '0') {
  console.log('This is true') // true
} else {
  console.log('This is false')
}

const num3 = 10;
const bool = Boolean(num3)
console.log(bool) // true

if (num3) {
  console.log('This is true') // true
} else {
  console.log('This is false')
}