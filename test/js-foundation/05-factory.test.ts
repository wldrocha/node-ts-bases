import { get } from 'http'
import { buildMakePerson } from '../../src/js-foundation/05-factory'
describe('js-foundation/05-factory', () => {
  const getUUID = () => '1234'
  const getAge = () => 35
  it('buildMakePerson should be return a function', () => {
    // const objetPerson = { name: 'John', birthdate: '1985-10-21' }
    const makePerson = buildMakePerson({ getUUID, getAge })
    expect(typeof makePerson).toBe('function')
  })

  test('makesPerson should return a person', () => {
    const makePerson = buildMakePerson({ getUUID, getAge })
    const jhon = makePerson({ name: 'John', birthdate: '1993-10-28' })

    expect(jhon).toEqual({
      id: '1234',
      name: 'John',
      birthdate: '1993-10-28',
      age: 35
    })
  })
})

