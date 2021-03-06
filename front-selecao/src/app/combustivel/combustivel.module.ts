import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { CombustivelListMvvmComponent } from './combustivel-list-mvvm/combustivel-list-mvvm.component';
import { CombustivelListMvcbComponent } from './combustivel-list-mvcb/combustivel-list-mvcb.component';
import { CombustivelListMbmComponent } from './combustivel-list-mbm/combustivel-list-mbm.component';
import { CombustivelListDadComponent } from './combustivel-list-dad/combustivel-list-dad.component';
import { CombustivelListIsrComponent } from './combustivel-list-isr/combustivel-list-isr.component';
import { CombustivelListDacComponent } from './combustivel-list-dac/combustivel-list-dac.component';
import { CombustivelFormModule } from './combustivel-form/combustivel-form.module';
import { CardModule } from '../shared/componentes/card/card.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CombustivelFormModule,
    CardModule
  ],
  declarations: [
    CombustivelListMbmComponent,
    CombustivelListDadComponent,
    CombustivelListIsrComponent,
    CombustivelListDacComponent,
    CombustivelListMvvmComponent,
    CombustivelListMvcbComponent
  ]
})
export class CombustivelModule { }
