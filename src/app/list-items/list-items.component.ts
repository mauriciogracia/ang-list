import { Component, OnInit } from '@angular/core';
import { ListItemModel } from '../../models/list-item-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent implements OnInit {
  textItems: ListItemModel[] | undefined ;

  constructor() { 
    this.prepareList() ;
  }

  prepareList() {
    this.textItems = [
      { id: 1, text: 'Text 1' },
      { id: 2, text: 'Text 2' },
      { id: 3, text: 'Text 3' },
      // Add more items as needed
  ];
  }

  ngOnInit(): void {
  }
}