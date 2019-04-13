import { Component } from '@angular/core';
import { QuestionarioService} from './questionario.service';
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


  constructor( private  questionario: QuestionarioService) {
    
  }
  
  salvar(form) {
    this.questionario.salvar(this.nome,this.sexo,this.idade,this.cidade);
    form.reset();
  }

}
