import {AfterContentInit, Component, ElementRef, OnInit, Output} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {BodyComponent} from "./body/body.component";
import {FooterComponent} from "./footer/footer.component";
import {IonicModule} from "@ionic/angular";
import {
  contrast,
  contrastOutline,
  schoolOutline,
  copyOutline,
  sendOutline,
  mailOutline,
  logoGithub,
  arrowRedoOutline,
  logoLinkedin
} from 'ionicons/icons';
import {addIcons} from "ionicons";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BodyComponent, FooterComponent, IonicModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterContentInit , OnInit{

  title = 'Portafolio';
  @Output() public loaded: boolean = false;

  ngOnInit(): void {
    addIcons({contrast, contrastOutline, schoolOutline, copyOutline,
      sendOutline, mailOutline, logoGithub, arrowRedoOutline, logoLinkedin})
  }

  ngAfterContentInit(): void {
    //this.delay(2000).then(r => this.loaded = true)
    this.loaded = true // todo no funciona bien
  }
}
