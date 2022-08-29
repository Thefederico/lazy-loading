const isIntercepted = (entry: { isIntersecting: boolean }): boolean => {
  return entry.isIntersecting
}

const loadImage = (entry: { target: Element }): void => {
  const container = entry.target

  const image: HTMLImageElement | any = container.firstChild!
  const url = image.dataset.src
  image.src = url

  observer.unobserve(container)
}

const observer = new IntersectionObserver(entries => {
  entries.filter(isIntercepted).forEach(loadImage)
})

const registerimage = (image: Element): void => {
  observer.observe(image)
}

export { registerimage }
