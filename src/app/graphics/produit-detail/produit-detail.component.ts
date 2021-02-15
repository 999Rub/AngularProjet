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
    Texture: ['']
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
  

  constructor(private _produitService:ProduitServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.produitList =  this._produitService.getAllProduit();
  }

  
/*
  produitSelected(produit: Produit){
    this.produitForm= this.fb.group({
      id:[''],
      Name:[''],
      Texture:[''],
      Grammage:[''],
      Couleur:['']
    })
    this.produitForm.setValue(produit);
    this.selectedProduit = produit;
  }*/

}


