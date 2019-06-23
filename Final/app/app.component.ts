import { Component } from '@angular/core';
import { ProductService } from './products/product.service';
// comentario de prueba
@Component({
    selector: 'pm-app', 
    template: `
     <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{tituloPagina}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/productos']">Lista de Productos</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    `,
    providers: [ProductService]
})

export class AppComponent {
    tituloPagina: string = 'Administración de Productos Walmart';
}
