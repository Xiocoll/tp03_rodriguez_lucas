import { Component, OnInit, OnDestroy, Pipe } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  produits : Observable<Produit[]>

  constructor(private ProduitService : ProduitService) { }

  nom : string = "";

  ngOnInit() {
    this.produits = this.ProduitService.getProduits();
  }

  getValidationNom () : boolean {
    if(this.nom == ""){
      return true;
    } else {
    return (/^[A-Za-z]{1,30}$/.test (this.nom));
    }    
  }

}