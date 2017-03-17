import { Component } from '@angular/core';

import { IProduct } from './product';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent{
    tituloPagina: string = 'Detalle de Producto';
    product: IProduct;
}