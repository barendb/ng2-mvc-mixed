import {Component} from '@angular/core';

var templateHtml = ''

if (document.getElementById('app') && document.getElementById('app').innerHTML) {
	templateHtml = document.getElementById('app').innerHTML;
}

@Component({
  selector   : 'app',
  template: templateHtml
})

export class AppComponent {
}
