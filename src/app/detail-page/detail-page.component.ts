import { Component, OnInit } from '@angular/core';
import { ProduitServiceService } from '../services/produit-service.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Produit } from 'src/app/Model/produit';
import {MatSnackBar} from '@angular/material/snack-bar';
import { InterfaceService } from '../services/interface.service';




@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  public produitList: Produit[];
  public selectedProduit= this._produitService.selectedProduit;
  public produitForm = this._produitService.produitForm;
  public produitFormCreate= this._produitService.produitFormCreate;
  public durationSnack = 5;
  
  

  

  constructor(public _produitService:ProduitServiceService, private fb: FormBuilder, public interfaceService:InterfaceService ) {}

  

  ngOnInit(): void {
    console.log(this.produitForm.value)
    console.log(this.selectedProduit)
  }

}
