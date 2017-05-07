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
		this.appointments = [];
	}

	newAppointment() {
		const newAppmntModal = this.modalCtrl.create(NewAppointmentModal);
		newAppmntModal.onDidDismiss(res => {
			(res && res.vehicle) && this.appointments.push(res);
		});
		newAppmntModal.present();
	}

}
