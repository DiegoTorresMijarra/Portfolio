import { Component } from '@angular/core';
import {ContentHeaderComponent} from "../content-header/content-header.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    ContentHeaderComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
