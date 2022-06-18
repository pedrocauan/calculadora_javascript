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
                result.innerHTML = '';
                resultDigits = 0;
            }           
        });
    });
}
//Apaga digito
const backspace = function() {
    const deleteButton = document.querySelector("#delete");
    deleteButton.addEventListener("click", function(){
        
        
    });

}

insert();
cls();
backspace();


