import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { GridComponent } from "./components/backgrounds/grid/grid-background.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavComponent, GridComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Jacob Fahrnbach Portfolio';
}
