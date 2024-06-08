import { getPokemonById } from '../../src/js-foundation/06-promises'


describe('js-foundation/06-promises', () => {
    test('getPokemonById should return a pokemon', async() => {
        const pokemonName = await getPokemonById(1)
        console.log("🚀 ~ test ~ pokemon:", pokemonName)
        expect(pokemonName).toEqual('bulbasaur')
    })

    test('should return error if pokemon does not exist', async() => {
        const pokemonId = 1000000
        try {
            await getPokemonById(pokemonId)
        } catch (error) {
            // console.log("🚀 ~ test ~ error:", error)
            expect(error).toBe(`Pokemon not found with id: ${pokemonId}`)
        }
    })
})