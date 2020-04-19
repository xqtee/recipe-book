import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit,OnDestroy {

  // mobile = false;
  // loaded=false;
  // loadingSubscription;

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
    // this.mobile = screen.width <= 767;
    // this.loadingSubscription=this.dataStorageService.dataFetched.subscribe(value =>{
    //   this.loaded=value;
    // });
    // this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
    //   this.currentRecipeObject = recipe;
    // });
  }

  scrollToElement($element): void {
    // $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    let headerOffset = 87;
    if (screen.width <= 320) {
      headerOffset = 500;
    } else if (screen.width <= 375 && screen.height >= 800) {
      headerOffset = 600;
    } else if (screen.width <= 375) {
      headerOffset = 550;
    } else if (screen.width <= 767) {
      headerOffset = 600;
    }
    let elementPosition = $element.getBoundingClientRect().top;
    if (headerOffset == elementPosition) {
      headerOffset = elementPosition - headerOffset;
    }
    ;
    window.scrollTo({
      top: headerOffset,
      behavior: 'smooth'
    });
  }

  ngOnDestroy(): void {
    // this.loadingSubscription.unsubscribe();
  }

  // scrollToElement($element): void {
  //   $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  //   // var headerOffset = 87;
  //   // // var elementPosition = $element.getBoundingClientRect().top;
  //   // // var offsetPosition = elementPosition - headerOffset;
  //   // window.scrollTo({
  //   //   top: headerOffset,
  //   //   behavior: "smooth"
  //   // });
  // }

}
