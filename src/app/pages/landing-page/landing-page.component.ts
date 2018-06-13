import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { ContentComponent } from '../../content/content.component';
import { FooterComponent } from '../../footer/footer.component';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
