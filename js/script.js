

function risultato(){
    let res_str = document.getElementById('risultato').value;
    let res_arr;
    if(res_str.indexOf('+')>-1){
        res_arr = res_str.split("+");
        let totale = (parseFloat(res_arr[0]))+(parseFloat(res_arr[1]));
        document.getElementById('risultato').value = totale;
    }

    else if(res_str.indexOf('-') > -1){
        res_arr = res_str.split("-");
        let totale = (parseFloat(res_arr[0]))-(parseFloat(res_arr[1]));
        document.getElementById('risultato').value = totale;
    }
    else if(res_str.indexOf('*') > -1){
        res_arr = res_str.split("*");
        let totale = (parseFloat(res_arr[0]))*(parseFloat(res_arr[1]));
        document.getElementById('risultato').value = totale;
    }
    else if(res_str.indexOf('/') > -1){
        res_arr = res_str.split("/");
        let totale = (parseFloat(res_arr[0]))/(parseFloat(res_arr[1]));
        document.getElementById('risultato').value = totale;
    }
    else {document.getElementById('risultato').value = 'Non ci sono operatori inseriti'}
    console.log(res_arr);
}


function reset(){
    document.getElementById('risultato').value = '';
}















































    
