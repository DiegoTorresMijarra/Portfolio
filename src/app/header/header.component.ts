import {Component, OnInit} from '@angular/core';
import {IonicModule, IonRadio, IonToggle} from "@ionic/angular";
import {FormBuilder, FormsModule} from "@angular/forms";
import {subscribeOn} from "rxjs";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    IonicModule,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  radioDarkMode= false;
  ngOnInit(): void {
    this.radioDarkMode =  window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setDefaultMode()
  }

  protected setDefaultMode() {
    if(this.radioDarkMode) document.body.classList.add('dark');
  }

  protected toggleDarkMode(): void {
    document.body.classList.toggle('dark');
  }
}
