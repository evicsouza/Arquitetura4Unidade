import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  products:any = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = [];
    this.rest.getProdutos().subscribe((data: {}) => {
      console.log(data);
      this.products = data;
    });
  }

  add() {
    this.router.navigate(['/adicionar-produtos']);
  }

  delete(id) {
    this.rest.deleteProduto(id)
      .subscribe(res => {
          this.getProducts();
        }, (err) => {
          console.log(err);
        }
      );
  }


}
