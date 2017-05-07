import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewAppointmentModal } from './new-appointment'

@Component({
	selector: 'page-appointment',
	templateUrl: 'appointment.html'
})
export class AppointmentPage {

	public appointments: Array<Object>;

	constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
		this.appointments = [
			{ date: 'Martes 9 de Mayo 2017', vehicle: 'Porsche Panamera', reason: 'Cambio de Aceite', comments: '' },
			{ date: 'Viernes 12 de Mayo 2017', vehicle: 'Porsche 911 Turbo', reason: 'Otros', comments: 'Sonido del motor' }
		];
	}

	newAppointment() {
		const newAppmntModal = this.modalCtrl.create(NewAppointmentModal);
		newAppmntModal.present();
		newAppmntModal.onDidDismiss(res => {
			console.log('returnes this', res);
		});
	}

}
