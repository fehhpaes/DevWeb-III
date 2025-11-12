const MathUtils = require('../src/math.js');

//palavras chaves describe, test, it.
describe('MathUtils tests', () => {
    const math = new MathUtils();  
    //test (descrição, função)
    test('Soma de 1 + 2 deve ser igual a 3', () => {
        //expect (valor recebido).matcher(valor esperado)
        expect(math.sum(1, 2)).toBe(3);
    });

        //test (descrição, função)
    test('Soma de -1 + 2 deve ser igual a 1', () => {
        //expect (valor recebido).matcher(valor esperado)
        expect(math.sum(-1, 2)).toBe(3);
    });
});