import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../Model/produit';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
  public selectedProduit: Produit;
  public produitList: Produit[] = [
    {
      Name:"Gel douche",
      Texture: "ecaille",
      Grammage: "0",
      Couleur:"Jaune"
    },
    {
      Name:"Savon",
      Texture: "lisse",
      Grammage: "0",
      Couleur:"Bleu"
    }
  ]

  public produitForm =  this.fb.group({
    Name: [''],
    Texture: [''],
    Grammage: [''],
    Couleur: ['']
  })

  public produitFormCreate = this.fb.group({
    Name: [''],
    Texture: [''],
    Grammage: [''],
    Couleur: ['']
  })
  

  constructor(private _http: HttpClient, private fb:FormBuilder) { }
  getAllProduit(){
    return this.produitList;
  }

  onSubmit(){
    console.log(this.produitForm.value);
    
    let newProduit = new Produit();
    newProduit= this.produitForm.value;
    this.produitList.push(newProduit);
  }

  submitUpdate(pl: Produit){
    
    for (let plList in this.produitList){
      if  (pl == this.produitList[plList]){
        this.produitList[plList] = this.produitForm.value;
        console.log(this.produitForm.value);
        console.log(this.produitList);
      }
    }
  }

  

  
 
  
  
}


