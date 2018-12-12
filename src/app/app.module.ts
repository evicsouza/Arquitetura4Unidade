import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AddProdutoComponent } from './add-produto/add-produto.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoComponent } from './produto/produto.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'produtos',
    component: ProdutoComponent,
    data: { title: 'Lista de Produtos' }
  },
  {
    path: 'detalhe-produto/:id',
    component: DetalheProdutoComponent,
    data: { title: 'Detalhes dos Produtos' }
  },
  {
    path: 'adicionar-produto',
    component: AddProdutoComponent,
    data: { title: 'Adicionar Produtos' }
  },
  {
    path: 'editar-produto/:id',
    component: EditarProdutoComponent,
    data: { title: 'Editar Produtos' }
  },
  {
    path: '',
    redirectTo: '/produtos',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AddProdutoComponent,
    DetalheProdutoComponent,
    EditarProdutoComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
