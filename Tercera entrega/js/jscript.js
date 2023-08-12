class Persona{
    constructor(nombre, apellido, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }

    concatenar() {
        console.log(this.nombre + " " + this.apellido);
    }
}

class Evento{
    constructor(fecha, cotizacion, cliente) {
        this.fecha = fecha;
        this.cotizacion = cotizacion;
        this.cliente = cliente;
    }

    concatenar() {
        console.log(this.fecha + " $" + cotizacion);
    }
}



function enviarDatos(){
  
    //if (confirm("Está seguro de enviar el formulario?")){
        let resulMail = validarMail(document.getElementById('email'));
    //}

    //if (resulMail == true) {
        let resulFecha = validarFecha(document.getElementById('fecha'));
   // }

    /*if (resulMail == true && resulFecha == true) {
        alert("Datos correctos! Formulario enviado enviado");
        return true;
    } else {
        alert("Revise los datos que están mal cargados!");
        return false;
    }*/

}


/*const prospect = new Persona(nombre, apellido, mail);
prospect.concatenar();
const clientes = [];
clientes.push(prospect);
console.log(clientes.length);*/

const evento = new Evento(fecha, cotizacion, prospect);
evento.concatenar();
const eventos = [];
if(!fechaRepetida(evento)){
    eventos.push(evento);
    console.log(eventos.length);
} else {
    alert("No es posible agendar esa fecha");
    clientes.pop(prospect);
    console.log(clientes.length);
}

function fechaRepetida(evento){
    let repetida;
    if (eventos.indexOf(evento) == null) {
        repetida = true;
    } else {
        repetida = false;
    }

    return repetida;
}

function validarMail(email){
    let mailValido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let result = false;

       if(mailValido.test(email)){
        console.log(email);
            result = true;
        } else {
            alert("El mail no es válido");
            result = false;
        }

    return email;
}

function validarFecha(fecha){
    let result = false;
    let fechaValida = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
    let fechaRecibida = fecha;
    
    if(fechaValida.test(fechaRecibida)){
        result = true;
        console.log(fechaRecibida);
    } else{
        alert('La fecha no es válida')
        /*while(result == false){
            fechaRecibida = prompt("Ingrese la fecha del evento (dd/mm/aaaa):")
            if(fechaValida.test(fechaRecibida)){
                result = true;
            }
        }*/
    }
   
}

function cotizar(){
    let cantHoras;
    const VALOR_X_HORA = 1200;
    cantHoras = document.getElementById('cant_horas');

    return VALOR_X_HORA * cantHoras;
}


