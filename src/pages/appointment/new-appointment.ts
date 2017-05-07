import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { AppointmentModel } from "../../models/models";

@Component({
	selector: 'modal-appointment',
	templateUrl: 'new-appointment.html'
})
export class NewAppointmentModal {

	public vehicles: Array<Object>;
	public reasons: Array<Object>;
	public appointment: AppointmentModel;

	constructor(public viewCtrl: ViewController) {
		this.vehicles = [
			{ name: 'Porsche Panamera', year: '2012' },
			{ name: 'Porsche 911 Turbo', year: '2014' }
		];

		this.reasons = ['Mantenimiento', 'Reparacion', 'Choque'];
		this.appointment = {};
	}

	create() {
		this.viewCtrl.dismiss(this.appointment);
	}

}
