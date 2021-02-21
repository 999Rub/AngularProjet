import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { Produit } from 'src/app/Model/produit';
import { InterfaceService } from 'src/app/services/interface.service';
import { ProduitServiceService } from 'src/app/services/produit-service.service';


@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.scss']

  
})
export class ProduitDetailComponent implements OnInit {
  public produitList: Produit[];
  public produitForm = this._produitService.produitForm;
  public toggle = false;
  
  


  produitSelected(event, pl: Produit){
    
    this._produitService.selectedProduit = pl;
    this._produitService.produitForm.setValue(this._produitService.selectedProduit);
    console.log(this._produitService.produitForm.value);
  
  }


  
  

  constructor(public _produitService:ProduitServiceService, private fb: FormBuilder, public interfaceService: InterfaceService) { }

  ngOnInit(): void {
    this.produitList =  this._produitService.getAllProduit();
  }

  

 

}


