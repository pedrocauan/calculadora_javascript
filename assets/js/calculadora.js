const result = document.querySelector("#result"); 
const maxDigits = 15; //Quantidade maxima de digitos que a calculadora permite
let resultDigits = 0; //Quantidade de digitos que o usuario colocou na calculadora
//Pega os botoes com os digitos 1,2,3,4,5,6,7,8,9 e .
const digitButtons = document.querySelectorAll("#buttons button");


// ===== TRATAMENTO DE ERROS =====


//Valida se os digitos do resultado são no maximo 15
const maxLength = (quantity, max) => quantity < max? true : false;

//Valida se os operadores C < + - x e / estao sendo usados no calculo
const validDigit = (value) => Number(value)? true: false;



// ====== FUNÇÕES =======
//Insere os digitos no campo de resultado
const insert = function() {
    
    digitButtons.forEach(button => {
        //Pega o numero dentro do botão e joga no campo de resultado
        button.addEventListener("click", function(num){ 
            console.log(resultDigits);
 

            let digit = num.target.innerHTML;//DIgito do botao selecionado
            if(!validDigit(digit))
                return;
               
            //adiciona os digitos até o máximo de 15        
            if(maxLength(resultDigits, maxDigits))
            {    
                result.innerHTML += digit;
                resultDigits++;
                return;
            }              
        });
    });
}

//Apaga toda a tela
const cls = function() {
    digitButtons.forEach(button => {
        button.addEventListener("click", function(operator){      
            //Se o operador que tiver no botao for a letra C ele apaga a tela
            if(operator.target.innerHTML === "c")
            {
                result.innerHTML = "&nbsp;";
                resultDigits = 0;
            }           
        });
    });
}

//Apaga digito
const deleteDigit = function() {
    const deleteButton = document.querySelector("#delete");
    deleteButton.addEventListener("click", function() {
        const num = result.innerHTML; //Pega o valor que ta na tela

        //Tira  o ultimo digito quando o usuario clica no botao
        result.innerHTML = num.substring(0, num.length - 1);
        //Atualiza a variavel  de digitos para que o maximo ainda seja 15
        resultDigits--;
    });

}
//Insere a virgula
const insertDot = function() {
    digitButtons.forEach(button => {
        button.addEventListener("click", function(operator){
            //roda o evento quando clica no ponto
            if(operator.target.innerHTML === "."){
                if(!result.innerHTML.includes(".") && resultDigits > 0)
                {
                    result.innerHTML += ".";
                    resultDigits--; //Atualiza a variavel  de digitos para que o maximo ainda seja 15
                    return;
                } 
            }
        });
    });
}

insert();
cls();
deleteDigit();
insertDot();

