"use strict"
/**
 * @file Aplicacion para la gestion de un parking
 * @author Fernando Zunzunegui
 * @version 1.0
 */

/**
 * @class Parking
 * @property {number} capacidad Número de coches que puede haber en el parking
 * @prop {Array} tunelLavado Lista de coches para lavar
 * @prop {Array} coches Lista de coches en el parking
 */
class Parking {
    /**
     * @param {number} capacidad Numeros de cohes que puede haber en el parking
     */
    constructor(capacidad) {
        this._capacidad = capacidad;
        this._tunel_lavado = [];
        this._coches = [];
    }
    /**
     * @description Añadir un coche a coches y añadirlo o no al array tunel_lavado
     * @param {object} coche objeto con matricula y si quiere lavad
     * @return {number}  -1 si parking lleno 0 ok
     */
    MeterCoche(coche) {

        if (this._capacidad>0) {
            this._capacidad--;
            if (coche.lavado == true) {
                this._tunel_lavado.push(coche.matricula);
            }else{
            this._coches.push(coche.matricula);
            };
            return 0;
        };
        return -1;
    };
};

let parking= new Parking(2)
let coche1={
    matricula:"423454",
    lavado:true
};
parking.MeterCoche(coche1)

console.log(parking)