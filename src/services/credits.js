import creditosMock from '@/mocks/credits.json'

export const searchCreditGroups = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(creditosMock)
    }, 1000)
  })
}
