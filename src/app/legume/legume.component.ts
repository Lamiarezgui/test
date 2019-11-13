import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-legume',
  templateUrl: './legume.component.html',
  styleUrls: ['./legume.component.css']
})
export class LegumeComponent implements OnInit {
  @Input() legume:string;
  /*function calcul() {
    
  }*/
  constructor() { }

  ngOnInit() {
  }

}
