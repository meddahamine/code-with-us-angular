import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, de this in html <my-app>
  template: `
  <h1>{{name}}</h1>
  <p><i>{{name}} is at {{street}} in {{city}} in the {{region}} region.</i></p>
  <br/>
  <fieldset>
    <label>Name: <input [value]="name"> </label>
      <!--
      <input #namebox [value]="name" (input)="name=namebox.value"> <br/>
      <input [value]="name" (keyup)="name=$event.target.value"> <br/>
      <input [value]="name" (keyup.enter)="name=$event.target.value"> <br/>
      <input [value]="name" (keyup.enter)="name=$event.target.value"
                            (blur)="name=$event.target.value"> <br/>
      
      <!--
      for use the ngModel add this ligne 
      import { FormsModule }  from '@angular/forms';
      into app.module.ts
      and add it in list import
      @NgModule({
        imports:      [ BrowserModule, FormsModule ],
      
      <input [(ngModel)]="name"> <br/>
      <input [ngModel]="name" (ngModelChange)="name=$event"> <br/>
      
      NB : quand on utilise ngModel on a pas besoin des methodes en bas 
          on peut les supprimer parce que on les appel pas 
      -->
    </fieldset>

  <button (click)="addressClick()">Show/Hide Address</button>
  <label><input type="checkbox" [(ngModel)]="hideAddress"> Hide Address </label>
  
  <div [hidden]="hideAddress">
    <fieldset>
      <label>Street: <input [(ngModel)]="street"> </label>
    </fieldset>
    <fieldset>
      <label>City: </label>{{city}}
    </fieldset>
    <fieldset>
      <label>Region: </label>
      <select (change)="regionChange($event.target.value)">
        <option>north</option>
        <option>south</option>
        <option>east</option>
        <option>west</option>
      </select>
    </fieldset>
  </div>

  <!-- 
  <fieldset>
    <img src="favicon.ico"/>
    <img src={{image}}/>
    <img [src]="image"/>
  </fieldset>
  <label [style.color]="color">Favorite Color</label>
  <button (click)="clicked()">Toggle Color</button>
  <select #selector (change)="colorChange(selector.value)">
    <option>red</option>
    <option>blue</option>
    <option>green</option>
  </select> 
  -->
  `,
})
export class AppComponent  { 
  name = 'Amine MEDDAH'; 
  //image = 'favicon.ico';
  //color = 'red';
  city = 'Anytown';
  street = '123 main street';
  hideAddress = false;
  region = 'east';

  addressClick(){
    this.hideAddress = !this.hideAddress;
  }

  regionChange(region: string){
    this.region = region;
  }
/*
  clicked(){
    this.color = this.color === 'red' ? 'blue' : 'red';
  }
  colorChange(color: string){
    this.color = color;
  }
  */
}
