import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { KitchensComponent } from './kitchens/kitchens.component';
import { KitchenComponent } from './layouts/kitchen/kitchen.component';
import { FactsComponent } from './facts/facts.component';

export const routes: Routes = [
    { path:  'homepage', component: HomepageComponent},
    { path:  'kitchens', component: KitchensComponent},
    { path:  'kitchen/:id', component: KitchenComponent},
    { path:  'facts', component: FactsComponent}
];

import { SlickModule } from 'ngx-slick';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    KitchensComponent,
    KitchenComponent,
    FactsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(routes),
      SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
