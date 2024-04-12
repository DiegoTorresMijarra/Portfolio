import { Component } from '@angular/core';
import {ContentHeaderComponent} from "../content-header/content-header.component";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    ContentHeaderComponent,
    IonicModule
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
