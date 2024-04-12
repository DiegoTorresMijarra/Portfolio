import {AfterContentInit, Component, ElementRef, Output} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {BodyComponent} from "./body/body.component";
import {FooterComponent} from "./footer/footer.component";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BodyComponent, FooterComponent, IonicModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterContentInit {
  title = 'Portafolio';
  @Output() public loaded: boolean = false;

  async delay(ms: number) {
    return await new Promise(resolve => setTimeout(resolve, ms));
  }

  ngAfterContentInit(): void {
    //this.delay(2000).then(r => this.loaded = true)
    this.loaded = true // todo no funciona bien
  }
}
