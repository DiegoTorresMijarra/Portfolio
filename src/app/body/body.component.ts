import { Component } from '@angular/core';
import {ContentHeaderComponent} from "../content-header/content-header.component";
import {IonicModule} from "@ionic/angular";
import {ContentComponent} from "../content/content.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    ContentHeaderComponent,
    IonicModule,
    ContentComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
