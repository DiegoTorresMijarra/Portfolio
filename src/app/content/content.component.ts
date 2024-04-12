import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  imports: [
    IonicModule
  ],
  standalone: true
})
export class ContentComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
