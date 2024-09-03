import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { BannerComponent } from "./banner/banner.component";
import { SectionTitleComponent } from "./shared/section-title/section-title.component";
import { InfoCardComponent } from "./shared/info-card/info-card.component";
import { MenuCardComponent } from './shared/menu-card/menu-card.component';
import { InteractiveCardComponent } from './shared/interactive-card/interactive-card.component';
import { OrdersComponent } from "./why-us/orders/orders.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BannerComponent, SectionTitleComponent, InfoCardComponent, MenuCardComponent, InteractiveCardComponent, OrdersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aspaz-landing-page';
}
