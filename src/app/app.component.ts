import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Questionário Social';
  nome: string = null;
  sexo: string = "f";
  idade: number = null;
  cidade: string = null;
  questionarios = [];
  porcentagem = [];
  idadeP = '';

  /*constructor() {
    if (localStorage.getItem('questionarios')) {
      this.questionarios = JSON.parse(localStorage.getItem('questionarios'));
    }
  }
  */
  mostrar(questionario) {
    questionario.visivel = true;
  }

  salvar(form) {
    const questionario = {
      id: this.questionarios.length, nome: this.nome,
      idade: this.idade, visivel: false, sexo: this.sexo, cidade: this.cidade

    }
    console.log("Nome:", this.nome, "sexo:", this.sexo, "idade:", this.idade, "cidade:", this.cidade)
    form.reset();
    this.questionarios.push(questionario);
    localStorage.setItem("questionarios", JSON.stringify(this.questionarios));
  }

  //fechar(){
  //questionario.visivel = false; }

  pessoaMaisVelha() {
    let maiorIdade = 0;
    let nome = null;
    for (let i = 0; i < this.questionarios.length; i++) {
      if (this.questionarios[i].idade >= maiorIdade) {
        maiorIdade = this.questionarios[i].idade;
        nome = this.questionarios[i].nome;
      }
    }
    return nome;
  }

  pessoaMaisNova() {
    let menorIdade = 1000;
    let nome = null;
    for (let i = 0; i < this.questionarios.length; i++) {
      if (this.questionarios[i].idade <= menorIdade) {
        menorIdade = this.questionarios[i].idade;
        nome = this.questionarios[i].nome;
      }

    }
    return nome;
  }

  mediaIdadeF() {
    let somaF = 0;
    let mediaF: Number = 0;
    let contF = 0;
    for (let i = 0; i < this.questionarios.length; i++) {
      if (this.questionarios[i].sexo == "f") {
        somaF = somaF + parseInt(this.questionarios[i].idade);
        contF++;
      }
    }
    mediaF = somaF / contF;
    if (mediaF > 0) {
      return "Mulheres" + mediaF;
    }
  }
  /* a média de idade dos homens*/
  mediaIdadeM() {
    let somaM = 0;
    let mediaM: Number = 0;
    let contM = 0;
    for (let i = 0; i < this.questionarios.length; i++) {
      if (this.questionarios[i].sexo == "m") {
        somaM = somaM + parseInt(this.questionarios[i].idade);
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
    for (let i = 0; i < this.questionarios.length; i++) {
      if (this.questionarios[i].cidade == "1") {
        soma1 = soma1 + parseInt(this.questionarios[i].idade);
        cont1++;
      }
      if (this.questionarios[i].cidade == "2") {
        soma2 = soma2 + parseInt(this.questionarios[i].idade);
        cont2++;
      }
      if (this.questionarios[i].cidade == "3") {
        soma3 = soma3 + parseInt(this.questionarios[i].idade);
        cont3++;
      }
      if (this.questionarios[i].cidade == "4") {
        soma4 = soma4 + parseInt(this.questionarios[i].idade);
        cont4++;
      }
    }
    if (soma1 > 0) {
       media1 = soma1 / cont1;}
    if (soma2 > 0) {
      media2 = soma2 / cont2;}
    if (soma3 > 0) {
      media3 = soma3 / cont3;}
    if (soma4 > 0) {
      media4 = soma4 / cont4;}
    
    return "Itaguatins:" + media1 + "Araguatins:" + media2 + "Araguaina" + media3 + "Palmas" + media4;
    
  }
  mediaCidadeB() {
    let somaB = 0;
    let mediaB: Number = 0;
    let contB = 0;
    for (let i = 0; i < this.questionarios.length; i++) {
      if (this.questionarios[i].cidade == "2") {
        somaB = somaB + parseInt(this.questionarios[i].idade);
        contB++;
      }
    }
    mediaB = somaB / contB;
    if (mediaB > 0) {
      return mediaB;
    }
  }
  mediaCidadeC() {
    let somaC = 0;
    let mediaC: Number = 0;
    let contC = 0;
    for (let i = 0; i < this.questionarios.length; i++) {
      if (this.questionarios[i].cidade == "3") {
        somaC = somaC + parseInt(this.questionarios[i].idade);
        contC++;
      }


    }
    mediaC = somaC / contC;
    if (mediaC > 0) {
      return mediaC;
    }

  }
  mediaCidadeD() {
    let somaD = 0;
    let mediaD: Number = 0;
    let contD = 0;
    for (let i = 0; i < this.questionarios.length; i++) {
      if (this.questionarios[i].cidade == "4") {
        somaD = somaD + parseInt(this.questionarios[i].idade);
        contD++;
      }


    }
    mediaD = somaD / contD;
    if (mediaD > 0) {
      return contD + "ss" + mediaD;
    }

  }
  /* PorcentagemA(){
     let soma=  0;
     let porcentagemF = 0;
     let cont=0;
     for(let i= 0 ; i<this.questionarios.length; i++)
     {
       if(this.questionarios[i].cidade=="1")
       {
         if(this.questionarios[i].sexo=="f")
         {
          cont++;
         }
         
       }
 
       
     }
     porcentagemF=
     if (porcentagemF > 0){
     return porcentagemF;
     }
   }*/

}
