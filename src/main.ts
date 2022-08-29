import './style.css'
import { registerimage } from './lazy'

const max = 123
const min = 1
export const random = () => Math.floor(Math.random() * (max - min)) + min

const app = document.querySelector('#app')!
const addButton = document.querySelector('#add')!
const clearButton = document.querySelector('#clear')!

const createImge = (): HTMLDivElement => {
  const imageContainer = document.createElement('div')
  imageContainer.className = 'p-4'

  const image = document.createElement('img')
  image.className = 'mx-auto bg-gray-500 rounded'
  image.width = 320
  image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`

  imageContainer.appendChild(image)

  return imageContainer
}

const deleteImage = () => {
  app.innerHTML = '<div></div>'
}

const addImage = (): void => {
  const newImage = createImge()
  app.append(newImage)
  registerimage(newImage)
}

addButton.addEventListener('click', addImage)
clearButton.addEventListener('click', deleteImage)
