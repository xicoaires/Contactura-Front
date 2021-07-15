import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor( private router: Router) { 
    
  }

  ngOnInit(): void {
    document.querySelector('html').style.background = 'radial-gradient(circle, rgba(255,255,255,1) 54%, rgba(190,190,190,1) 100%)'; // MUDAR O BACKGROUND VIA JS
  }

  ngOnDestroy() {
    document.querySelector('html').style.background = 'none'; // QUANDO MUDAR O BACKGROUND PELO JS, TEM QUE TER O DESTROY
  }


}
