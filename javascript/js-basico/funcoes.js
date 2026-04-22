// bloco de código que faz uma tarefa específica.
/*
  function message(){
    console.log("ola")
  }

  message()
  message()
*/

// paramtro: var que a função recebe (só existe dentro da função)
// argumento: valor passado para a função

/*
  function message(username){
    console.log("ola, username")
  }

  message("joao")
*/

// return: retorna o valor da funçao para fora dela, no código global

/*
  function sum(a , b){
    let result (a + b)
    
    return result;
  }
/*

// comentario de documentação do jsdoc

/** 
 * @param {String} email.
 * @param {String} password more than 6 characters.
 * @returns {Number} user id.
 */

/*
  function sign(email , senha){
    //fluxo
    
    return 1;
  }
*/


// função anonima = sem nome -> guardada dentro de variáveis

/*
  const showMsg = function(){
    console.log();
  }
*/

// arrow function

/*
  const showMsg = () => {
    console.log();
  }

  showMsg()
*/

// callback function: função que chama outra função como argumento