import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListItemsComponent } from "./list-items/list-items.component";
import { ListServiceService } from '../services/list-service.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ListItemsComponent]
})
export class AppComponent {

  @ViewChild('listItems') listItemsComponent!: ListItemsComponent;

  constructor(private listService: ListServiceService) {}

  addText(): void {
    const inputElement = document.getElementById('textInput') as HTMLInputElement;
    const textInputValue = inputElement.value.trim();

    if (textInputValue !== '') {
      this.listService.addText(textInputValue).subscribe(() => {
        inputElement.value = ''; 
        console.log('value added:' + textInputValue) ;
        this.listItemsComponent.refreshList();
      });
    }
    else {
      console.log('value is empty, type something') ;
    }
  }
}
