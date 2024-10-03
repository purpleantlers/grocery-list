// VARIABLES
const userInput = document.getElementById('userInput')
const addBtn = document.getElementById('addBtn')
const list = document.getElementById('list')
const warning = document.getElementById('warning')

// AÑADIR ELEMENTO CON EL BOTON Y CON EL "ENTER"
userInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addBtn.click()
  }
})

addBtn.addEventListener('click', () => {
  if (userInput.value === '') {
    warning.style.display = 'flex'
  } else {
    list.innerHTML += `
        <div class="list-element">
          <li>${userInput.value}</li>
          <button class="delete-btn">
            <img src="/assets/bin.svg" alt="">
          </button>
        </div>
      `
    userInput.value = ''
    warning.style.display = 'none'
  }
})

// BOTON ELIMINAR ELEMENTO
list.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    event.target.parentElement.parentElement.remove()
    warning.style.display = 'none'
  }
})
