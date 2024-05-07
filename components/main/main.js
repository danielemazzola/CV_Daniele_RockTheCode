import './main.css'
import { Header } from '../header/header.js'
import { Experience } from '../experience/experience.js'

Header()
const body = document.querySelector('body')
const app = document.querySelector('#app')
const section = document.createElement('section')
const divText = document.createElement('div')
const divImg = document.createElement('div')

section.setAttribute('id', 'sectionHero')
divText.setAttribute('id', 'contentText')
divImg.setAttribute('id', 'contentImg')
divImg.setAttribute('title', 'Click for more infor.')
divText.innerHTML = `
  <a href="#experience">Front-End Developer</a>
  <a href="#experience">Back-End Developer</a>
`
divImg.innerHTML = `
<img alt="logo vite" src="../images/vite.png" width="150" />
<div class="imgDevs">
  <img alt="logo MongoDB" src="../images/mongo.png" width="50" />
  <img alt="logo Express" src="../images/express.png" width="50" />
  <img alt="logo React" src="../images/React.png" width="50" />
  <img alt="logo Node" src="../images/node.png" width="50" />
</div>
`

const btnClose = document.createElement('button')
const alert = document.createElement('div')
btnClose.addEventListener('click', () => {
  alert.innerHTML = ''
  alert.remove()
  divText.setAttribute(
    'style',
    'display:flex; animation: fadeInOut 1s ease forwards;'
  )
  divImg.setAttribute(
    'style',
    'display:flex; animation: fadeInOut 1s ease forwards;'
  )
})

divImg.addEventListener('click', () => {
  const p = document.createElement('p')
  p.innerHTML = `Stack MERN:<br><br>Mongose, Express, React, Node.`
  divText.setAttribute('style', 'display:none')
  divImg.setAttribute('style', 'display:none')
  btnClose.textContent = `Close`
  alert.setAttribute('id', 'alert')
  alert.setAttribute(
    'style',
    'display:flex; width:70%; animation: fadeInOut 1s ease forwards;'
  )
  btnClose.setAttribute('id', 'close')
  section.append(alert)
  alert.append(p, btnClose)
})
app.append(section)
section.append(divText, divImg)
Experience()
