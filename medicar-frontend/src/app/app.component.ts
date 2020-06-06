import { ApiService } from './api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medicar-frontend';

  especialidades = [];
  medicos = [];

  constructor(private  api:ApiService ){
    this.getEspecialidades();
  }
  getEspecialidades = () => {
    this.api.getAllEspecialidades().subscribe(
      data => {
        this.especialidades = data;
      }, error => {
        console.error(error);
      }
    );
  }

  chosenEspecialidade = (especialidade) =>{
    this.api.getMedicosEspecialidade(especialidade).subscribe(
      data => {
        this.medicos = data;
      }, error => {
        console.error(error);
      }
    );
  }

}
