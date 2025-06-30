import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-deposit',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css',
})

/***
OnInit is a lifecycle hook that is called by Angular to indicate that Angular is done creating the 
component. used to run initialization logic when component is created. Ensures
inputs are set before logic runs. Class implements OnInit to perform actions when component loads.
***/
export class DepositComponent implements OnInit {
  //Initializing ActivatedRoute and Route so we can use it later
  constructor(private route: ActivatedRoute, private router: Router) {}

  //Runs once after the component is initialized.
  ngOnInit(): void {}

  coins() {
    //Programmatically navigates to a route
    this.router.navigate(['coins'], { relativeTo: this.route });
  }

  notes() {
    this.router.navigate(['notes'], { relativeTo: this.route });
  }
}

/****
 * ActivatedRoute: Gives access to information about a route tied to a component (e.g., route parameters).
 *
 * Router: service to navigate to other routes programmatically. Does the actual routing.
 */
