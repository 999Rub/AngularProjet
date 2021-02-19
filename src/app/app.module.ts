import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProduitDetailComponent } from './graphics/produit-detail/produit-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router'

const routes: Routes = [
  {path: 'produit-detail', component: ProduitDetailComponent},
  {path: 'produit-detail/detail-page', component:DetailPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProduitDetailComponent,
    DetailPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
