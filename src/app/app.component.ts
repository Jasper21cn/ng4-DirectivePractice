import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showContent = false;
  log = [];
  value = 2;

  onDisplayContent() {
    this.showContent = !this.showContent;
    // this.log.push(this.log.length + 1); // Use length
    this.log.push(new Date().toLocaleTimeString());
  }


}

