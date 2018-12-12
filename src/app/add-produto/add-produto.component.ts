import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {

  @Input() productData = { prod_name:'', prod_desc: '', prod_price: 0 };

  constructor(public rest: RestService, private router: Router) { }

  ngOnInit() {
  }

  addProduto() {
    this.rest.addProduto(this.productData).subscribe((result) => {
      this.router.navigate(['/detalhes-produto/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
