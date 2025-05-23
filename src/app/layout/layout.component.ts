import { Component } from '@angular/core';
import { MatButtonModule  } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule  } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { menuRoutes } from '../app.routes';
import { MenuComponent } from "../shared/menu/menu.component";

@Component({
  selector: 'app-layout',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    //RouterLink,
    //RouterLinkActive,
    RouterOutlet,
    MenuComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  menuRoutes = menuRoutes
  /*
  isSidebarCollapsed = false;
  public toggleMenu() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
    */
}
