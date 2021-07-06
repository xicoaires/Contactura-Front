import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor( private router: Router) { 

    let contador = 5;
    function contar() {
        document.getElementById('contador').innerHTML = contador;
        contador--;
    }
    function redirecionar() {
        contar();
        if (contador == 0) {
            document.location.href = '/login';
        }
    }
    setInterval(redirecionar, 1100);
    
  }

  ngOnInit(): void {
  }


}
