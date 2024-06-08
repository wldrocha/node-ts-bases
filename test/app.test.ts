

describe('Test in the APP File', () => {
    it('should be 3', () => {
        // 1.arrange
        const num1 = 1;
        const num2 = 2;

        // 2.act
        const result = num1 + num2;

        
        // 3.assert
        expect(result).toBe(3);
    })
})