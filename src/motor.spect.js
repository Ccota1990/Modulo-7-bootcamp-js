

import { EL_NUMERO_ES_MAYOR, EL_NUMERO_ES_MENOR, ES_EL_NUMERO_SECRETO, NO_ES_UN_NUMERO, GAME_OVER_MAXIMO_INTENTOS } from "./modelo.js";
import { comprobarNumero } from "./motor.js";

import * as modelo from "./modelo.js";


describe ("comprobarNumero", () =>{
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
        const numeroParaAcertar = 23;
        const texto = "23";
        vi.spyOn(modelo, numeroParaAcertar, "get").mockReturnValue(numeroParaAcertar);

        //Act
        const resultado = comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(ES_EL_NUMERO_SECRETO);
    })

    it("Deberia devolver EL_NUMERO_ES_MAYOR cuando el texto es un numero mayor al que tenemos que acertar", () =>{
        //Arrange
        const numeroParaAcertar = 23;
        const texto = "24";
        vi.spyOn(modelo, numeroParaAcertar, "get").mockReturnValue(numeroParaAcertar);
        //Act
        const resultado = comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(EL_NUMERO_ES_MAYOR);
    })

    it("Deberia devolver EL_NUMERO_ES_MENOR cuando el texto es un numero menor al que tenemos que acertar", () =>{
        //Arrange
        const numeroParaAcertar = 23;
        const texto = "22";
        vi.spyOn(modelo, numeroParaAcertar, "get").mockReturnValue(numeroParaAcertar);

        //Act
        const resultado = comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(EL_NUMERO_ES_MENOR);
    })

    it("Deberia de devolver GAME_OVER_MAXIMO_INTENTOS cuando se ha superado el maximo de intentos", () =>{
        //Arrange
        const numeroParaAcertar = 23;
        const texto = 70;
        vi.spyOn(modelo, numeroParaAcertar, "get").mockReturnValue(numeroParaAcertar);
        vi.spyOn(modelo, "numeroDeIntentos", "get" ).mockReturnValue(5);

        //Act
        const resultado = comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(modelo.GAME_OVER_MAXIMO_INTENTOS);
    })
});