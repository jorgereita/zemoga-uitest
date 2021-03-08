import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-links',
  templateUrl: './other-links.component.html',
  styleUrls: ['./other-links.component.sass']
})
export class OtherLinksComponent implements OnInit {

  constructor(private router: Router) { }
  goBack(){
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
  }

}
