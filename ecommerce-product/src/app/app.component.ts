import { Component, ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';

// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'ecommerce-product';

  constructor(private elementRef: ElementRef){

  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = '#382058';
}
}
