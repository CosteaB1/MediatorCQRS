import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-tests',
  templateUrl: './routing-tests.component.html',
  styleUrls: ['./routing-tests.component.scss']
})
export class RoutingTestsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToUsers(): any {
    this.router.navigate(['/HtppClient']);
  }

}
