import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterOutlet, FormsModule, CommonModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('kurs');
  imie: string = "";
  nazwisko: string ="";
  wiek:string ="";
  zapisaneImie: string = "";
  zapisaneNazwisko: string = "";
  zapisaneWiek: string = "";
  wyslano: boolean = false;
  wyslij() {
  this.wyslano= true;
  this.zapisaneImie= this.imie;
  this.zapisaneNazwisko=this.nazwisko;
  this.zapisaneWiek=this.wiek;
  this.imie = "";
this.nazwisko = "";
this.wiek = "";
  //this.imie = "";
  //his.nazwisko = "";
 //this.wiek = "";
 
 
}

}
