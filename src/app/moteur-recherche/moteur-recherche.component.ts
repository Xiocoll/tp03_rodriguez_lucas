import { Component, OnInit, OnDestroy, Pipe } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-moteur-recherche',
  templateUrl: './moteur-recherche.component.html',
  styleUrls: ['./moteur-recherche.component.css']
})
export class MoteurRechercheComponent implements OnInit {

  searchNom : string = "";
  searchFruit : string = "fruit";
  searchLegume : string = "legume";
  searchType : string = "";

  constructor(private ProduitService: ProduitService) { }

  ngOnInit() {
    this.ProduitService.searchNom(this.searchNom).subscribe();
  }

  getValidationNom () : boolean {
    if(this.searchNom == ""){
      return true;
    } else {
    return (/^[A-Za-z]{1,30}$/.test (this.searchNom));
    }    
  }

  onSearchTermChange(): void {
    this.ProduitService.searchNom(this.searchNom).subscribe();
  }

  onClickType(type: string): void {
    this.ProduitService.searchType(type).subscribe();
  }

}