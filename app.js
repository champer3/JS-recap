// const age = 20

// if(age >= 18){
//     console.log("You are an adult")
// }else{
//     console.log("Come back next year")
// }

// FALSEY VALUES IN JS
//Fase, 0, "", null, undefined, NaN

//FUNCTIONS

// function greet(name){
//     console.log("welcome to the team " + name)
// }

// function signUp(){
//     let name = prompt("What is your name?")
//     greet(name)
// }
// signUp()

// console.log("the rest of the code")


// const maxNr = Math.max(1, 7)
// console.log(maxNr)

// function max(nr1 = 0, nr2 = 0){
//     if(nr1 >= nr2){
//         return nr1
//     }else{
//         return nr2
//         // console.log(nr2)
//     }
// }

// let inbox = max(10, 15)
// console.log(inbox)

//ARRAYS

// const listUsers = ["stephen", "Bolu", "Biggy"]

// listUsers.push("Angel")

// console.log(listUsers)

//SWITCH STATEMENT

// const text = 'bananas'
// switch(text){
//     case 'bananas':
//         console.log('wow i love bananas')
//         break
//     case 'apple':
//         console.log('I love apple')
//         break
//     default:
//         console.log('I dont know this fruit')
// }

//FOR LOOP

// const names = ['love', 'grand', 'boyts', 'heyy']

//FOR OF
// for(name of names){
//     console.log(name)
// }

//FOR EACH CAN ONLY BE USED FOR ARRAYS, YOU CAN'T USE BREAK FOR FOREACH
// names.forEach(function(name, index){
//     if(name === 'heyy'){
//         console.log('djklkn')
//     }
//     console.log(name, index)
// })

// for (let i = 0; i < texts.length; i++) {
//     RUN some code
//     console.log(texts[i])
//     if(i == 40){
//         console.log("We are at 40")
//         break
//     }
//     console.log(i)
    
// }

// const user = {
//     name: 'stephen',
//     age: 24,
//     subscribers: 39930,
//     money: 'lolno'
// }

// for(let x in user){
//     console.log(user[x])
// }

//WHILE, DO WHILE

// let i = 0

// while(i < 10){
//     console.log(i)
//     i++
// }

// const headers = document.getElementsByTagName('h2')
// const list = document.getElementsByClassName('item')
// const button = document.getElementById('submit')

// const headers = document.querySelectorAll('h2')
// const list = document.querySelectorAll('.item')
// const submit = document.querySelectorAll('#submit')

// console.log(list)

const nodeItems = document.querySelectorAll('.item')
const todoList = document.querySelector('.list')
const item = todoList.children
console.log(item)
console.log(nodeItems)
const todoNr = document.querySelector(".todo-nr")


const newItem = document.createElement('li')
newItem.classList.add('item')
newItem.innerText = "List 6"

todoList.appendChild(newItem)
todoNr.innerText = item.length