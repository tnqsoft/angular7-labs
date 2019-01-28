import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { DemoDefaultComponent } from './components/default/default.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

const routes: Routes = [
  { path: '', component: DemoDefaultComponent },
  { path: 'dynamic-form', component: DynamicFormComponent },
];

@NgModule({
  declarations: [
    DemoDefaultComponent,
    DynamicFormComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    SharedModule,
  ]
})
export class DemoModule { }
