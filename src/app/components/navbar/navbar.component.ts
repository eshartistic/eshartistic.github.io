import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteHandlerService } from 'src/app/services/route-handler.service';
import { AppConstants } from 'src/utils/AppConstants';
import { Page } from 'src/utils/models/page';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

	pages: Page[] = AppConstants.pages;

	constructor(private router: Router, private routeHandlerService: RouteHandlerService) { }

	onClickMenuItem(clickedRoute: string) {
		this.routeHandlerService.navigateToRoute(clickedRoute);
	}
}
