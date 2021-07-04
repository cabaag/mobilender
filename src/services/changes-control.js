import changesMock from '@/mocks/changes.json'


export const getChanges = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(changesMock)
    }, 1000)
  })
}