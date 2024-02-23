import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListItemsComponent } from "./list-items/list-items.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ListItemsComponent]
})
export class AppComponent {
  title = 'ang-list';
}
