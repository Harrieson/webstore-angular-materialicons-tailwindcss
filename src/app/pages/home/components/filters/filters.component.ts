import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent implements OnInit {
  categories: Array<string> | undefined;
  categoriesSubscription: Subscription | undefined;

  @Output() showCategory = new EventEmitter<string>();
  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.getAllCategories().subscribe((response) => {
      this.categories = response;
    })
  }

  onShowCategory(category: string): void{
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }

}
