import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {
  questionarios = [];
  porcentagem = [];

  constructor() { 
    if (localStorage.getItem('questionarios')) {
      this.questionarios = JSON.parse(localStorage.getItem('questionarios'));
    }
  }
 

  salvar(nome: string, sexo: string, idade: number, cidade: string){
    
    const questionario = {
      id: this.questionarios.length, nome, sexo, idade, cidade
      
    }; 
    
      /*console.log("Nome:", this.nome, "sexo:", this.sexo, "idade:", this.idade, "cidade:", this.cidade)*/
    this.questionarios.push(questionario);
    localStorage.setItem("questionarios", JSON.stringify(this.questionarios));
  }
  getFromLocalStorage(key: string) {
    try {
      return JSON.parse(localStorage.getItem('questionarios'));
    } catch (e) {
      console.error('Erro ao obter dados do Local Storage!', e);
      return null;
    }
  }

  pessoaMaisVelha() {
  var maiorIdade = 0;
  let nome = null;
  const questionario = JSON.parse(localStorage.getItem('questionarios'));
    for (let i = 0; i <= questionario.length; i++) {
      if (questionario[i].idade >= maiorIdade) {
        maiorIdade = questionario[i].idade;
        nome = questionario[i].nome;
        
      }
      
    }
    return nome;
    
  }

  pessoaMaisNova() {
    let menorIdade = 1000;
    let nome = null;
    const questionario = JSON.parse(localStorage.getItem('questionarios'));
    for (let i = 0; i <= questionario.length; i++) {
      if (questionario[i].idade <= menorIdade) {
        menorIdade = questionario[i].idade;
        nome = questionario[i].nome;
      }

    }
    return nome;
  }

  mediaIdadeF() {
    let somaF = 0;
    let mediaF: Number = 0;
    let contF = 0;
    const questionario = JSON.parse(localStorage.getItem('questionarios'));
    for (let i = 0; i < questionario.length; i++) {
      if (questionario[i].sexo == "f") {
        somaF = somaF + parseInt(questionario[i].idade);
        contF++;
      }
    }
    mediaF = somaF / contF;
    if (mediaF > 0) {
      return  mediaF;
    }
  }
  /* a média de idade dos homens*/
  mediaIdadeM() {
    let somaM = 0;
    let mediaM: Number = 0;
    let contM = 0;
    const questionario = JSON.parse(localStorage.getItem('questionarios'));
    for (let i = 0; i < questionario.length; i++) {
      if (questionario[i].sexo == "m") {
        somaM = somaM + parseInt(questionario[i].idade);
        contM++;
      }
    }
    mediaM = somaM / contM;
    if (mediaM > 0) {
      return mediaM;
    }
  }
  mediaCidade() {
    let soma1 = 0;
    let media1: Number = 0;
    let cont1 = 0;
    let soma2 = 0;
    let media2: Number = 0;
    let cont2 = 0;
    let soma3 = 0;
    let media3: Number = 0;
    let cont3 = 0;
    let soma4 = 0;
    let media4: Number = 0;
    let cont4 = 0;
    const questionario = JSON.parse(localStorage.getItem('questionarios'));
    for (let i = 0; i < questionario.length; i++) {
      if (questionario[i].cidade == "1") {
        soma1 = soma1 + parseInt(questionario[i].idade);
        cont1++;
      }
      if (questionario[i].cidade == "2") {
        soma2 = soma2 + parseInt(questionario[i].idade);
        cont2++;
      }
      if (questionario[i].cidade == "3") {
        soma3 = soma3 + parseInt(questionario[i].idade);
        cont3++;
      }
      if (questionario[i].cidade == "4") {
        soma4 = soma4 + parseInt(questionario[i].idade);
        cont4++;
      }
    }
    if (soma1 > 0) {
      media1 = soma1 / cont1;
    }
    if (soma2 > 0) {
      media2 = soma2 / cont2;
    }
    if (soma3 > 0) {
      media3 = soma3 / cont3;
    }
    if (soma4 > 0) {
      media4 = soma4 / cont4;
    }

    const medias = {

    }

    return "  Itaguatins:" + media1 + "\n " + "  Araguatins:" + media2 + "  Araguaina:" + media3 + "  Palmas" + media4;
 
  }

  porcentagemSexo() {

    let porcentagemF1 = 0;
    let porcentagemF2 = 0;
    let porcentagemF3 = 0;
    let porcentagemF4 = 0;
    let porcentagemM1 = 0;
    let porcentagemM2 = 0;
    let porcentagemM3 = 0;
    let porcentagemM4 = 0;
    let contF1 = 0;
    let contM1 = 0;
    let contF2 = 0;
    let contM2 = 0;
    let contF3 = 0;
    let contM3 = 0;
    let contF4 = 0;
    let contM4 = 0;
    const questionario = JSON.parse(localStorage.getItem('questionarios'));
    for (let i = 0; i < questionario.length; i++) {
      if (questionario[i].cidade == "1") {
        if (questionario[i].sexo == "f") {
          contF1++;
        }
        if (questionario[i].sexo == "m") {
          contM1++;
        }
      }
      if (questionario[i].cidade == "2") {
        if (questionario[i].sexo == "f") {
          contF2++;
        }
        if (questionario[i].sexo == "m") {
          contM2++;
        }

      }
      if (questionario[i].cidade == "3") {
        if (questionario[i].sexo == "f") {
          contF3++;
        }
        if (questionario[i].sexo == "m") {
          contM3++;
        }

      }
      if (questionario[i].cidade == "4") {
        if (questionario[i].sexo == "f") {
          contF4++;
        }
        if (questionario[i].sexo == "m") {
          contM4++;
        }
      }
    }
    if(contF1 > 0) {
    porcentagemF1=(contF1*100)/(contF1+contM1);
    }
    if(contF2 > 0) {
      porcentagemF2=(contF2*100)/(contF2+contM2);
    }
    if(contF3 > 0) {
    porcentagemF3=(contF3*100)/(contF3+contM3);
    }
    if(contF4 > 0) {
      porcentagemF4=(contF4*100)/(contF4+contM4);
    }
    if(contM1 > 0) {
      porcentagemM1=(contM1*100)/(contM1+contF1);
    }
    if(contM2 > 0) {
      porcentagemM2=(contM2*100)/(contM2+contF2);
    }
    if(contM3 > 0) {
      porcentagemM3=(contM3*100)/(contM3+contF3);
    }
    if(contM4 > 0) {
      porcentagemM4=(contM4*100)/(contM4+contF4);
    }
  
    return "Itaguatins Mulheres:" + porcentagemF1 + "Itaguatins Homens:" + porcentagemM1 + "  Araguatins Mulheres: " + porcentagemF2+ "  Araguatins Homens: " + porcentagemM2+"  Araguaina Mulheres:" + porcentagemF3  +"  Araguaina Homens:" + porcentagemM3 + "  Palmas Mulheres:" + porcentagemF4 + "  Palmas Homens:" + porcentagemM4;
    
  }



}
