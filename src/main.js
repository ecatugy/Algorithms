import '../style.css'
import mainBig from './algorithms/bigONotation/bigNotations'
import mainDynamic from './algorithms/dynamicProgramming/dynamicProgramming'
import mainRecursion from './algorithms/recursion/recursion'
import mainBinaryTree from './algorithms/binaryTree/binaryTree'
import {mainBinarySearch} from './algorithms/search/search'
import {mainBracketsBalanced} from './algorithms/balancedBrackets/balancedBrackets'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>JS Algorithms</h1>
    <h1>Check results in console log</h1>
    <div class="card">
      <button id="bigO" type="button">Big O Notation</button>
      <hr/>
      <button id="dynamic" type="button">Dynamic programming/memoization</button>
      <hr/>
      <button id="recursion" type="button">Recursion</button>
      <hr/>
      <button id="bynary" type="button">Binary Search</button>
      <hr/>
      <button id="tree" type="button">Binary Tree</button>
      <hr/>
      <button id="brackets" type="button">Balanced Brackets</button>
    </div>
  </div>
`

document.querySelector('#bigO').addEventListener('click', () => {
  mainBig()
})

document.querySelector('#dynamic').addEventListener('click', () => {
  mainDynamic()
})

document.querySelector('#recursion').addEventListener('click', () => {
  mainRecursion()
})

document.querySelector('#bynary').addEventListener('click', () => {
  mainBinarySearch()
})

document.querySelector('#tree').addEventListener('click', () => {
  mainBinaryTree()
})

document.querySelector('#brackets').addEventListener('click', () => {
  mainBracketsBalanced()
})


