import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  produto:any;

  constructor(public rest:RestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.rest.getProduto(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.produto = data;
    });
  }

}
