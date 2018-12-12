import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  @Input() productData:any = { prod_name: '', prod_desc: '', prod_price:0 };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getProduto(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.productData = data;
    });
  }

  atualizarProduto() {
    this.rest.updateProduto(this.route.snapshot.params['id'], this.productData).subscribe((result) => {
      this.router.navigate(['/detalhes-produto/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
