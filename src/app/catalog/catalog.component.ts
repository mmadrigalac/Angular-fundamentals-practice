import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: IProduct[] = [];
  filter: string = '';

  constructor(
    private cartSrv: CartService,
    private productSrv: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productSrv.getProducts().subscribe((products) => {
      this.products = products;
    });

    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    });
  }

  addToCart(product: IProduct) {
    this.cartSrv.add(product);
    this.router.navigate(['/cart']);
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter((product) => product.category === this.filter);
  }
}
