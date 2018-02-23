/**
 * Created by Yimmy Sipion on 23/02/2018.
 */
function sumar(){
    var n1=5; n2=5; suma= n1+n2;
    console.log(suma);
    document.getElementById("rpt").innerHTML+=suma;  //para mostrar la respuesta en la pagina principal
    alert("la respuesta es: "+suma);

}

function restar(){
    var n1=15, n2=10, resta=n1-n2;
    console.log(resta)
    alert("la respuesta es: "+resta)
}

function verfechas(){
    console.log(new Date());
    var hoy= new Date();
    var anio= hoy.getFullYear();
    var mes= hoy.getMonth();
    var dia= hoy.getDate();
    var hora= hoy.getHours();

}
function arreglos(){
    var array=[];
    var tet= "abcd";
    var obj= {0:"abcd"};
    array.push(tet);
    array.push(obj);
    array.splice(1,1);
}
