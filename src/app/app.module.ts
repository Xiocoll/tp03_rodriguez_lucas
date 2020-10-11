import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { FormControl } from '@angular/forms';

import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ClientService } from './client.service';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { PhonePipe } from './phone.pipe';
import { TestStringDirective } from './test-string.directive';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { ProduitService } from './produit.service';
import { ErrorDirective } from './error.directive';
import { MoteurRechercheComponent } from './moteur-recherche/moteur-recherche.component';

const appRoutes: Routes = [
  {path: 'clients', component: ClientListComponent},
  {path: 'formulaire', component: FormulaireComponent},
  {path: 'tetiere', component: TetiereComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'produits', component: ProduitListComponent},
  {path: '', component: ProduitListComponent}

];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, TetiereComponent, FooterComponent, FormulaireComponent, ClientListComponent, PhonePipe, TestStringDirective, ProduitListComponent, ErrorDirective, MoteurRechercheComponent],
  bootstrap:    [ AppComponent ],
  providers: [ClientService, ProduitService]
})
export class AppModule { }
