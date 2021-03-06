import { ViewEncapsulation } from '@angular/core';
import { AfterViewInit, Component } from '@angular/core';
import { ProduitDetailComponent } from './graphics/produit-detail/produit-detail.component';
import { InterfaceService } from './services/interface.service';
import { ProduitServiceService } from './services/produit-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'AppTennisPlayer';

  
  public constructor(public interfaceService: InterfaceService, public produitService: ProduitServiceService){}
  
}
