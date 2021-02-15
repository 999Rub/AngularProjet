import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Produit } from '../Model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
  public produitList: Produit[] = [
    {
      id: 0,
      Name:"Gel douche",
      Texture: "ecaille",
      Grammage: 0,
      Couleur:"Jaune"
    },
    {
      id: 1,
      Name:"Savon",
      Texture: "lisse",
      Grammage: 0,
      Couleur:"Bleu"
    }
  ]
  

  constructor(private _http: HttpClient) { }
  getAllProduit(){
    return this.produitList;
  }
  
  
}


