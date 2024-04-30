import { Component } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  isScrolled: boolean = false;


scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

@HostListener('window:scroll', [])
onWindowScroll() {
  if (window.pageYOffset > 100) {
    this.isScrolled = true;
  } else {
    this.isScrolled = false;
  }
}
}
