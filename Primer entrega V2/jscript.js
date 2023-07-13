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

let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let mail = validarMail();
let fecha = prompt("Ingrese la fecha del evento (dd/mm/aaaa):")
validarFecha(fecha);
let cotizacion = cotizar();

const prospect = new Persona(nombre, apellido, mail);
prospect.concatenar();
const evento = new Evento(fecha, cotizacion, prospect);
evento.concatenar();


function validarMail(){
    let mailValido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let result = false;
    let email;
    do{
        email = prompt("Ingrese un mail válido(nombre@dominio.com):");

       if(mailValido.test(email)){
            result = true;
        } else {
            alert('El mail no es válido')
            result = false;
        }

    } while(result == false)

    return email;
}

function validarFecha(fecha){
    let result = false;
    let fechaValida = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
    let fechaRecibida = fecha;
    
    if(fechaValida.test(fechaRecibida)){
        result = true;
    } else{
        alert('La fecha no es válida')
        while(result == false){
            fechaRecibida = prompt("Ingrese la fecha del evento (dd/mm/aaaa):")
            if(fechaValida.test(fechaRecibida)){
                result = true;
            }
        }
    }
   
}

function cotizar(){
    let cantHoras;
    const VALOR_X_HORA = 1200;
    cantHoras = prompt("Ingrese la cantidad de horas del evento:");

    return VALOR_X_HORA * cantHoras;
}


