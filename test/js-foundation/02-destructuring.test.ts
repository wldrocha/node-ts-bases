import { characters } from '../../src/js-foundation/02-destructuring'

describe('02-destructuring', () => {
  test('characters should contains Batman and Superman', () => {
    expect(characters).toContain('Batman')
    expect(characters).toContain('Superman')
  })
  test('characters should not contains Flash and second Superman', () => {
    const [flash, superman, , batman] = characters
    expect(flash).toBe('Flash')
    expect(superman).toBe('Superman')
  })
})
