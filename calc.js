

    var valor;
    var resultado;
    function botao(num){
        valor = document.getElementById("visor").value += num;
    }

    function resetar(){
        document.getElementById("visor").value = "";
    }

    function calcula(){
        
        resultado = eval(valor);
        document.getElementById("visor").value = resultado;

    }


