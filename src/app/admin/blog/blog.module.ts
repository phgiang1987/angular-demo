import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LimitTextPipe } from '../../Pipe/limit-text.pipe';
@NgModule({
  declarations: [
    BlogComponent,
    LimitTextPipe
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzInputModule,
    NzFormModule,
    NzLayoutModule,
    NzGridModule,
    NzButtonModule
  ]
})
export class BlogModule { }
