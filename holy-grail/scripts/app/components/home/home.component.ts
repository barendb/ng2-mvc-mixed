import {Input, Component} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: '/scripts/app/components/home/home.component.html'
})
export class HomeComponent {
	@Input() user: string;

	clickTheButton() {
		alert(`Hey ${this.user} thanks for click that...`);
	}
}
