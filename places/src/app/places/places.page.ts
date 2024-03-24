import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class PlacesPage implements OnInit {
  constructor(private menuCtrl: MenuController) {}
  toggleMenu() {
    this.menuCtrl.toggle();
  }
  ngOnInit() {}
}
