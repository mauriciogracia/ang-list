import { Component, OnInit } from '@angular/core';
import { ListItemModel } from '../../models/list-item-model';
import { CommonModule } from '@angular/common';
import { ListServiceService } from '../../services/list-service.service';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent implements OnInit {
  textItems: ListItemModel[] | undefined ;

  constructor(private listService: ListServiceService) {}

  ngOnInit() { 
    this.refreshList() ;
  }

  refreshList(): void {
    this.listService.listTexts().subscribe(
      texts => {
        this.textItems = texts.map((text, index) => ({ id: index + 1, text }));
      },
      error => {
        console.error('Error fetching text list:', error);
      }
    );
  }
}