import { getAge } from '../../src/plugins/get-age.plugin'

describe('plugins/get-age.plugin', () => {
  test('getAge() should return the age of a person', () => {
    const birthYear = '1993-10-28'
    const age = getAge(birthYear)
    expect( typeof age).toBe('number')
  })

  test('getAge should return the correct age', () => {
    const birthYear = '1993-10-28'
    const age = getAge(birthYear)
    const calculatedAge = new Date().getFullYear() - new Date(birthYear).getFullYear()
    expect(age).toBe(calculatedAge)
  })

  test('getAge should return 0 years if the birthYear is the current year', () => {
    //
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1993)

    const birthYear = '1993-10-28'
    const age = getAge(birthYear)
    expect(age).toBe(0)

    expect(spy).toHaveBeenCalled()

  })
})
