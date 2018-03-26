import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {

  }
    slides = [
        { img: 'assets/image/kitchens/english-breakfast.jpg',
          alt:  'English food'},
        { img:  'assets/image/kitchens/italian-food.jpg',
          alt:  'Italian food'},
        { img:  'assets/image/kitchens/french-breakfast.jpg',
          alt:  'French food'},
        { img:  'assets/image/kitchens/spanish-food.jpg',
          alt:  'Spanish food'},
        { img:  'assets/image/kitchens/greek-food.jpg',
          alt:  'Greek food'},
        { img:  'assets/image/kitchens/german-breakfast.jpg',
          alt:  'German food'}
    ];
    slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "dots": true, arrows: true};
}
