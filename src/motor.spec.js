

import { EL_NUMERO_ES_MAYOR, EL_NUMERO_ES_MENOR, ES_EL_NUMERO_SECRETO, NO_ES_UN_NUMERO, GAME_OVER_MAXIMO_INTENTOS } from "./modelo.js";
import { comprobarNumero, generarNumeroAleatorio } from "./motor.js";

import * as modelo from "./modelo.js";
import { beforeEach} from "vitest";


describe ("generarNumeroAleatorio", () => {
    it ("MathRandom lo forzamos a que devuelva 0 y deberia de dar 0", () => {
        //Arrange
        const numeroEsperado = 0;
        const spyOnMathRandom = vi.spyOn(global.Math, "random").mockReturnValue(0);

        //Act
        const resultado = generarNumeroAleatorio();

        //Assert
        expect(resultado).toBe(numeroEsperado)
    });

    it("MathRadom lo forzamos a 1 y deberia dar 100", () => {
        //Arrange
        const numeroEsperado = 100;
        const spyOnMathRandom = vi.spyOn(global.Math, "random").mockReturnValue(0.999);

        //Act
        const resultado = generarNumeroAleatorio();

        //Assert
        expect(resultado).toBe(numeroEsperado)
    });
});

describe ("comprobarNumero", () =>{
    beforeEach (() => {
        vi.spyOn(modelo, "numeroParaAcertar", "get").mockReturnValue(23);
    });

    it("deberia de devolver NO_ES_UN_NUMERO cuando el texto no es un numero", ()=>{
        // Arrange
        const texto = "esto no es un numero";
        // Act
        const resultado = comprobarNumero(texto);
        // Assert
        console.log(resultado, NO_ES_UN_NUMERO)
        expect(resultado).toBe(NO_ES_UN_NUMERO);
    })

    it("Deberia de devolver ES_EL_NUMERO_SECRETO cuando texto es el numero a acertar", () => {
        //Arrange
        const texto = "23";

        //Act
        const resultado = comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(ES_EL_NUMERO_SECRETO);
    })

    it("Deberia devolver EL_NUMERO_ES_MAYOR cuando el texto es un numero mayor al que tenemos que acertar", () =>{
        //Arrange
        const texto = "24";
        
        //Act
        const resultado = comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(EL_NUMERO_ES_MAYOR);
    })

    it("Deberia devolver EL_NUMERO_ES_MENOR cuando el texto es un numero menor al que tenemos que acertar", () =>{
        //Arrange
        const texto = "22";

        //Act
        const resultado = comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(EL_NUMERO_ES_MENOR);
    })

    it("Deberia de devolver GAME_OVER_MAXIMO_INTENTOS cuando se ha superado el maximo de intentos", () =>{
        //Arrange
        const texto = 70;
        vi.spyOn(modelo, "numeroDeIntentos", "get" ).mockReturnValue(5);

        //Act
        const resultado = comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(modelo.GAME_OVER_MAXIMO_INTENTOS);
    })
});