import{soma,subtracao,divisao,multiplicacao} from '../math';


describe('Testando operacoes matematicas', () =>
{
    it('Testando a soma de dois numeros', () => {
        const esperado = 25
        const retorno = soma (15,10)
        expect (retorno).toBe(esperado)
    })

    it('Testando a subtracao de dois numeros',() => {
        const esperado = 8
        const retorno = subtracao (10,2,)

        expect (retorno).toBe(esperado)
    })

    it('Testando a multiplicacao de dois numeros',() => {
        const esperado = 9
        const retorno = multiplicacao ( 3, 3 )

        expect (retorno).toBe(esperado)
    })
    
    
        it('Testando a soma de dois numeros',() => {
            const esperado = 125
            const retorno = divisao (250, 2)
    
            expect (retorno).toBe(esperado)
})

})