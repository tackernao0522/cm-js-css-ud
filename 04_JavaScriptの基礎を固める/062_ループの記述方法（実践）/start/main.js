const todos = [
  {
    id: 1,
    title: 'Go to school',
    completed: true
  },
  {
    id: 2,
    title: 'Go to museum',
    completed: true
  },
  {
    id: 3,
    title: 'Go shopping',
    completed: false
  }
]

// for (let i = 0; i < todos.length; i++) {
//   // console.log(i, todos[i])
//   // console.log(i, todos[i].title)
//   console.log(i, todos[i].completed)
// }

// for (let i = 0; i < todos.length; i++) {
//   let todo = todos[i]
//   console.log(i, todo.completed)
// }

// for (let i = 0; i < todos.length; i++) {
//   let todo = todos[i]
//   if (todo.completed === true) {
//     // console.log(i, todo.completed)
//     console.log(i, todo.title)
//   }
// }

// for (i in todos) {
//   let todo = todos[i]
//   if (todo.completed === true) {
//     console.log(i, todo.title)
//   }
// }

for (let todo of todos) {
  if (todo.completed === true) {
    console.log(todo.title)
  }
}
