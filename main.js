function Persona (name, apellido){
    console.log('hola')
    name = this.name;
    apellido = this.apellido;
    return this
}
var hola = new Persona('andi', 'v')