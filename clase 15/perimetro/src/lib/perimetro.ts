export class Perimetro {
    
    private lado1: number;
    private lado2: number;
    private radio: number;

    constructor(lado1: number, lado2: number, radio: number){
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.radio = radio;
    }

    cuadrado():number {
        return this.lado1 * 4;
    }

    rectangulo():number {
        return this.lado1 * 2 + this.lado2 * 2;
    }

    circulo():number {
        const PI = 3.14159;
        return 2 * PI * this.radio;
    }

}