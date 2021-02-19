import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Produit } from 'src/app/Model/produit';
import { ProduitServiceService } from 'src/app/services/produit-service.service';


@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.scss']

  
})
export class ProduitDetailComponent implements OnInit {
  public produitList: Produit[];
  public selectedProduit: Produit;
  produitForm =  this.fb.group({
    Name: [''],
    Texture: [''],
    Grammage: [''],
    Couleur: ['']
  })
  onSubmit(){
    console.log(this.produitForm.value);
    /*
    this.produitForm.patchValue({
      Name: 'test ok'
    })*/
    let newProduit = new Produit();
    newProduit= this.produitForm.value;
    this.produitList.push(newProduit);
  }

  submitUpdate(pl: Produit){
    //this.produitForm.setValue(this.selectedProduit);
    
    for (let plList in this.produitList){
      if  (pl == this.produitList[plList]){
        this.produitList[plList] = this.produitForm.value;
        console.log(this.produitForm.value);
        console.log(this.produitList);
      }
    }
  }
  
  produitSelected(event, pl: Produit){
    this.selectedProduit = pl;
    this.produitForm.setValue(this.selectedProduit);
  }

  constructor(private _produitService:ProduitServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.produitList =  this._produitService.getAllProduit();
  }

  

 

}


