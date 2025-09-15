/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function convertirUnidades(unidad,valor){
    let metro,pie,pulgada,yarda;

    console.log(valor);
    console.log(isNaN(valor));

    if(isNaN(valor)){
        alert('El valor ingresado no es correcto');
        metro="";
        pie="";
        yarda="";
        pulgada="";
    }

    if(unidad=="unid_metro"){
        metro=valor;
        pie=3.28*valor;
        pulgada=39.37*valor;
        yarda=1.0936*valor;

    }
    else if(unidad=="unid_pie"){
        pie=valor;
        metro=0.3048*valor;
        pulgada=12*valor;
        yarda=0.33*valor;

    }
       else if(unidad=="unid_yarda"){
        yarda=valor;
        metro=0.9144*valor;
        pulgada=36*valor;
        pie=3*valor;

    }

          else if(unidad=="unid_pulgada"){
        pulgada=valor;
        metro=0.0254*valor;
        yarda=0.0277*valor;
        pie=0.0833333*valor;

    }

    document.getElementById ("metro").value = metro;
    document.getElementById ("pie").value = pie;
    document.getElementById ("pulgada").value = pulgada;
    document.getElementById ("yarda").value = yarda;
}