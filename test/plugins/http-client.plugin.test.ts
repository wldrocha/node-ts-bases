import { httpClient } from '../../src/plugins'

describe('plugins/http-client.plugin', () => {
  test(`httpClient() should return a response`, async () => {
    const data = await httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: expect.any(Boolean)
    })
  })
  test('httpClient() should  have POST, PUT and DELETE methods', async () => {
    expect(typeof httpClient.post).toBe('function')
    expect(typeof httpClient.put).toBe('function')
    expect(typeof httpClient.delete).toBe('function')
  })
})
