import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArquivoFormComponent } from './Arquivo/arquivo-form/arquivo-form.component';
import { UsuarioComponent } from './usuario/usuario/usuario.component';
import {CombustivelListMbmComponent} from './combustivel/combustivel-list-mbm/combustivel-list-mbm.component';

const routes: Routes = [
  {
    path: 'index', component: UsuarioComponent,
  },
  {
    path: 'planilha/:id', component: ArquivoFormComponent
  },
  {
    path: 'consultas', component: CombustivelListMbmComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
