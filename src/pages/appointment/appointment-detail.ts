import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { AppointmentModel } from "../../models/models";

@Component({
	selector: 'modal-appointment-detail',
	templateUrl: 'appointment-detail.html'
})
export class AppointmentDetailModal {

	public appointment: AppointmentModel;

	constructor(public viewCtrl: ViewController, params: NavParams) {
		this.appointment = params.data || {};
	}

	close() {
		this.viewCtrl.dismiss();
	}

}
