import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  ngOnInit(): void {
    const texto = (document.getElementById("texto") as HTMLElement);
    let xml = "<card> que n sei o que </card>";
    texto.innerHTML= xml;

    
  }
  onDowloadMse(){
      
  }
}
