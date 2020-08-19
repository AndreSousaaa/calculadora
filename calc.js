

    var valor;
    var resultado;
    var guardar
    function botao(num){
        valor = document.getElementById("visor").value += num;
    }

    function resetar(){
        document.getElementById("visor").value = "";
    }
    function reseteUm(){
        document.getElementById("visor_um").value = "";
    }

    function calcula(){
        
        resultado = parseFloat(eval(valor));
        var guardar =document.getElementById("visor").value = resultado;
        valor = 0;
        var y = parseFloat(guardar);
        var x =document.getElementById("visor_um").value += y + "---";
        
        
    }


