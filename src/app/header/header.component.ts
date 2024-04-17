import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {addIcons} from 'ionicons';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    NgIf,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent implements OnInit {
  darkMode = false;
  @Input() loaded: boolean = false;

  ngOnInit(): void {
    this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setMode()
  }

  protected toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    this.setMode()
  }

  protected setMode() {
    document.body.classList.toggle('dark');
  }
}
