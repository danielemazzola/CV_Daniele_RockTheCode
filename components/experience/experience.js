import './experience.css'
import { proyects } from './utilities.js'

export const Experience = () => {
  const section = document.createElement('section')
  const container = document.createElement('div')
  const title = document.createElement('h2')
  const p = document.createElement('p')
  const containerCard = document.createElement('div')
  const card = document.createElement('div')
  section.setAttribute('id', 'experience')
  containerCard.setAttribute('id', 'containerCard')
  card.classList.add('card')
  title.setAttribute('class', 'experience')
  title.textContent = 'Proyects'
  p.textContent = 'Estos son algúnos de mis proyectos más recientes.'
  proyects.map((proyect, index) => {
    card.innerHTML += `
      <div key=${index}>
      <img src=${proyect.img} alt="Imagen de la tarjeta">
      <h2>${proyect.name}</h2>
      </div>
    `
  })
  app.append(section)
  section.append(container)
  container.append(title)
  container.append(p)
  container.append(containerCard)
  containerCard.append(card)
}
