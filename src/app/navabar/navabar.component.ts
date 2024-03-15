import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, File, Home, Menu, UserCheck, CookingPot } from 'lucide-angular';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-navabar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    
  ],

  templateUrl: './navabar.component.html',
  styleUrl: './navabar.component.css',
})
export class NavabarComponent {
  @Input() items: any[] = [{ icon: 'lunch_dining', label: "Burger" }];
  activeIndex: number = -1;

  setActive(index: number) {
    this.activeIndex = index;
  }
}
