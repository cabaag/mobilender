import softwaresMock from '@/mocks/softwares.json'

export const getSoftwares = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(softwaresMock)
    }, 1000)
  })
}