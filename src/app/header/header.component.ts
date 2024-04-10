import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { addIcons } from 'ionicons';
import { contrast, contrastOutline } from 'ionicons/icons';

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
  darkMode= false;
  iconDarkMode = document.getElementById('iconDarkMode');

  ngOnInit(): void {
    addIcons({contrast})
    addIcons({contrastOutline})

    this.darkMode =  window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setMode()
  }

  protected toggleDarkMode(): void {
    this.darkMode =!this.darkMode;
    this.setMode()
  }

  protected setMode() {
    document.body.classList.toggle('dark');
  }
}
