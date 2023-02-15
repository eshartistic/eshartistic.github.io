import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class RouteHandlerService {

	constructor(private router: Router) { }

	navigateToRoute(clickedRoute: string) {
		const currentRouteUrl = clickedRoute;

		this.router.navigateByUrl('/dummy', { skipLocationChange: true }).then(() => {
			this.router.navigate([currentRouteUrl]);
		});
	}
}
