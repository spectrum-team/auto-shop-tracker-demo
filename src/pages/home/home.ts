//@ts-check
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	constructor(public navCtrl: NavController) { }

	public CarList = [
		{ Modelo: "718 Cayman S", Status: "Listo para entrega" },
		{ Modelo: "911 Carrera Cabriolet", Status: "En revisión" },
		{ Modelo: "911 GT3", Status: "Asignando técnico" },
		{ Modelo: "Panamera 4 Sport Turismo", Status: "En Prueba" },
		{ Modelo: "Macan Turbo", Status: "Area de lavado" },
	];

	public NewsList = [
		{ Title: "Nuevo Porsche GT3", Created: "5/Abril/2017" },
		{ Title: "Nueva app móvil", Created: "29/Marzo/2017" },
	];

	public EventList = [
		{ Title: "Track Race", EventDateTime: "25/Junio/2017 - 3:00 PM" },
		{ Title: "Flexi Móvil BHD", EventDateTime: "30/Junio/2017 - 7:30 PM" },
		{ Title: "Porsche Club", EventDateTime: "7/Julio/2017 - 8:30 PM" }
	];
}
