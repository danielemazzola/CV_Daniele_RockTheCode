import './header.css'

export const Header = () => {
  const title = document.querySelector('title')
  const body = document.querySelector('body')
  const head = document.createElement('header')
  head.classList.add('header')
  title.setAttribute('style', 'color="black')
  title.textContent = `i'm dani`
  body.insertBefore(head, app)
  return (head.innerHTML = `
  <nav id='navHeader'>
    <div class="logo"><h1><span>Daniele</span> Mazzola</h1></div>
    <div class="sm">
    <a href="https://github.com/danielemazzola?tab=repositories" target="_blank">
        <img class="github" src='../images/github.svg' alt='Github' />
      </a>
      <a href="https://www.linkedin.com/in/daniele-mazzola-b42184259/" target="_blank">
        <img class="linkedin" src='../images/linkedin.svg' alt='Linkedin' />
      </a>
    </div>
  </nav>
  `)
}
