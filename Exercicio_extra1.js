/*
Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.  
*/ 

function removerStrings(lista) {
  return lista.filter(item => typeof item === 'number');
} 

/*
Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata . 
O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.  
*/ 
 function contarVogais(letras) {
  let contarVogal = 0;

  const vogais = ['a', 'e', 'i', 'o', 'u'];

  for (let letra of letras) {
    if (vogais.includes(letra)) {
      contarVogal++;
    }
  }

  return contarVogal;
}