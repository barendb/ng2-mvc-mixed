import {Component, OnInit} from '@angular/core';

@Component({
	selector: "partial",
	templateUrl: '/partials/example'
})

export class PartialComponent implements OnInit {
	message: string;

	constructor() {
		
	}

	ngOnInit() {
		this.message = 'The \'/partial/example\' path was used as the Angular2 \'templateUrl\'. However, this routes through the \'PartialController\' hitting the \'Example\' action and is served after standard MVC pre-processing.'
	}
}