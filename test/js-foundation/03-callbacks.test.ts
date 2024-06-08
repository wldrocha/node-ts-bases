import { getUserById } from '../../src/js-foundation/03-callbacks'

describe('Callbacks', () => {
  test('getUserBydId should return an error if user does not exist', (done) => {
    const id = 10
    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`)
      expect(user).toBeUndefined()
      done()
    })
  })
  // done is a function that we call when the test is done
  test('getUserBydId should return an user if user exist', (done) => {
    const id = 1
    getUserById(id, (err, user) => {
      expect(err).toBeUndefined()
      expect(user).toEqual({ id: 1, name: 'John Doe' })
      done()
    })
  })
})
