import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CombustivelFormModule } from './combustivel-form/combustivel-form.module';
import { CombustivelListMbmComponent } from './combustivel-list-mbm/combustivel-list-mbm.component';
import { CardModule } from '../shared/componentes/card/card.module';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CombustivelFormModule,
    CardModule,
  ],
  declarations: [CombustivelListMbmComponent]
})
export class CombustivelModule { }
