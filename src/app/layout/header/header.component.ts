import { Component, ElementRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	constructor(private element: ElementRef<HTMLElement>) {}

	closeMenu() {
		const checkbox = this.element.nativeElement.querySelector<HTMLInputElement>('#nav-toggle');
		if (checkbox) checkbox.checked = false;
	}
}