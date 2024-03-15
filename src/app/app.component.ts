import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { NavabarComponent } from './navabar/navabar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FoodComponent } from './food/food.component';
import { CookingPot, File, Home, LucideAngularModule, Menu, UserCheck } from 'lucide-angular';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, TitleComponent, NavabarComponent, MatToolbarModule, MatIconModule, FoodComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce_shop';

  navItems = [
    { label: 'Burger', icon: 'lunch_dining' },
    { label: 'Pizza', icon: 'person' },
    { label: 'Configuración', icon: 'settings' }
  ];
}
