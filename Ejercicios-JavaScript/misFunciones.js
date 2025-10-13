/**
 * Convierte las unidades ingresadas por el usuario
 * @method convertirUnidades
 * @param {string} unidad Unidad Ingresada: metro, pie, pulgada, yarda
 * @param {number} valor Valor numerico ingresado por el usuario
 * @return Valor que retorna
 */

let convertirUnidades = (unidad,valor) =>{
    let metro,pie,pulgada,yarda;

    if(valor.includes(",")){
       valor= valor.replace(",", ".");
    }

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

    document.getElementById ("metro").value = Number(metro).toFixed(2);
    document.getElementById ("pie").value = Math.round(pie*100)/100;
    document.getElementById ("pulgada").value = pulgada;
    document.getElementById ("yarda").value = yarda;
}

/**
 * Convierte las unidades ingresadas por el usuario
 * @method convertirGR
 * @param {string} id Unidad ingresada: Grados o Radianes
 * @param {number} valor Valor numerico ingresado por el usuario
 * @return Valor que retorna
 */

let convertirGR = (id, valor) =>{
        let cantGrados, cantRadianes;
    if(id == "grados"){
        cantGrados = valor;
        cantRadianes = cantGrados*Math.PI/180;
        document.getElementById("radianes").value = cantRadianes;
    }
    else{
        cantRadianes=valor;
        cantGrados=cantRadianes*180/Math.PI;
        document.getElementById("grados").value = cantGrados;
    }
};


/**
 * Oculta o muestra el DIV
 * @method mostrarOcultarDIV
 * @param {string} id Estado del DIV
 * @return Muestra o oculta el DIV
 */

let mostrarOcultarDIV = (id)=>{
    if(id == "mostrarDiv"){
        document.getElementsByName("unDiv")[0].style.display = "block";
    }
    else{
        document.getElementsByName("unDiv")[0].style.display = "none";
    }

};

/**
 * Suma 2 numeros
 * @method mostrarOcultarDIV
 * @param {string} id Extrae un valor ingresado por el usuario
 * @return Suma de dos valores
 */

let sumar = () =>{
    let sum1 = document.getElementById("nums1").value;
    let sum2 = document.getElementById("nums2").value;

    if(isNaN(sum1) || isNaN(sum2)){
        alert ("Uno de los valores ingresados no es un numero");
    }
    else{
    document.getElementById("totalS").value =  Number(sum1) + Number(sum2);
    }

}

/**
 * Resta 2 numeros
 * @method mostrarOcultarDIV
 * @param {string} id Extrae un valor ingresado por el usuario
 * @return Resta de dos valores
 */

let restar = () =>{
    let res1 = document.getElementById("numr1").value;
    let res2 = document.getElementById("numr2").value;

    if(isNaN(res1) || isNaN(res2)){
        alert ("Uno de los valores ingresados no es un numero");
    }
    else{
    document.getElementById("totalR").value =  Number(res1) - Number(res2);
    }

}

/**
 * Multiplica 2 numeros
 * @method mostrarOcultarDIV
 * @param {string} id Extrae un valor ingresado por el usuario
 * @return Producto de dos valores
 */

let multiplicar = () =>{
    let mul1 = document.getElementById("numm1").value;
    let mul2 = document.getElementById("numm2").value;

    if(isNaN(mul1) || isNaN(mul2)){
        alert ("Uno de los valores ingresados no es un numero");
    }
    else{
    document.getElementById("totalM").value =  Number(mul1) * Number(mul2);
    }
    }

    /**
 * Divide 2 numeros
 * @method mostrarOcultarDIV
 * @param {string} id Extrae un valor ingresado por el usuario
 * @return Cociente de dos valores
 */

let dividir = () =>{
    let div1 = document.getElementById("numd1").value;
    let div2 = document.getElementById("numd2").value;

    if(isNaN(div1) || isNaN(div2)){
        alert ("Uno de los valores ingresados no es un numero");
    }
    else{
    document.getElementById("totalD").value =  Number(div1) / Number(div2);
    }

}

