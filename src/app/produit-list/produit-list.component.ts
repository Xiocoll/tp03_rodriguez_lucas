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

  constructor(private ProduitService : ProduitService) { }
  
  produits : Observable<Produit[]> = this.ProduitService.getSearchResults();

  ngOnInit() {
  }

  

  

}