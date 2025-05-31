
/*
     it('QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas', () => {
    assert.strictEqual(geradorDeTagsDeIdentificacao('Pantera'), 'PANTERA');
    });
    
*/

export function geradorDeTagsDeIdentificacao(nome){
    const tag = nome.toUpperCase();
    return tag;
}

/*
    it('QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção', () => {
    assert.strictEqual(verificarSePodeSerAdotado(1, 'M'), true)
  })
*/
export function verificarSePodeSerAdotado(idade, porte){
    if (idade == 1 && porte == 'M'){
        return true;
    } 
    return false;
}

/*
it('QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário', () => {
    assert.strictEqual(calcularConsumoDeRacao('Pitoco', 1, 14.5), 4350)
  });
*/ 
export function calcularConsumoDeRacao(nome, idade, peso){
    return peso * 300;
}

/*
it('QUANDO o porte = pequeno, DEVE ser retornada a atividade adequada', () => {
    assert.strictEqual(decidirTipoDeAtividadePorPorte('pequeno'), 'brincar dentro de casa')
  });
*/

export function decidirTipoDeAtividadePorPorte(porte){
    if (porte == 'pequeno'){
    return 'brincar dentro de casa';
    }
    return 'correr ao ar livre';
}

/*
it('QUANDO buscar dado de exemplo, DEVE retornar um valor de forma assíncrona', async () => {
    const resultado = await buscarDadoAsync();
    assert.strictEqual(resultado, 'Pipoca');
*/ 

export async function buscarDadoAsync() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Pipoca');
      }, 1000); // demora 1 segundo pra retornar
    });
  }
  