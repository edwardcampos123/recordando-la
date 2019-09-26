import { Component, Injectable } from '@angular/core';
//Importamos la libreria de firebase database
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	//Definimis las varibles  con su tipo de dato
	mensaje : string = '';
	listado : any = [];
	recuerdos: any;
	//Agregamos a nuestro codigo la libreria importada
	constructor(
   		//public afDB: AngularFireDatabase
 
	
   ){
		
	}
   
	asustar(){
		let nombre= prompt("como te llamas")
		alert("hola"+nombre);
	}

}


