window.alert("ingrese 3 números.");

let lista=[]
for (let i=0;i<3;i++){
    contador=i+1;
    var num = parseFloat(prompt("ingrese número " + contador + ":"));
    lista.push(num);
}

do{
    n=0;
    for (let i=1; i<lista.lenght; i++)
    if (lista[i-1]>lista[i]){
        temp=lista[i-1];
        lista[i-1]=lista[i];
        lista[i]=temp;
        n=i;
    }
} while (n!=0);

if (lista[0]==lista[lista.length-1]){
    document.write("los 3 números son iguales");
}

else{
    document.write("El menor de los números que ingresaste es "+ lista[0]);
    document.write("<br/>El mayor de los números que ingresaste es "+ lista[lista.length-1]);
}