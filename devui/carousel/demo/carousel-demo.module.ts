import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'ng-devui/button';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox';
import { TranslateModule } from '@ngx-translate/core';
import { DDemoNavModule } from 'src/app/component/d-demo-nav.module';
import { CarouselModule } from '../carousel.module';
import { CarouselDemoAutoPlayComponent } from './autoplay/carousel-demo-autoplay.component';
import { CarouselDemoBasicComponent } from './basic/carousel-demo-basic.component';
import { CarouselDemoComponent } from './carousel-demo.component';
import { CarouselDemoCustomComponent } from './custom/carousel-demo-custom.component';
import { CarouselDemoTriggerComponent } from './trigger/carousel-demo-trigger.component';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    DevUICodeboxModule,
    DevUIApiModule,
    CarouselModule,
    FormsModule,
    DDemoNavModule,
    ButtonModule,
    RouterModule.forChild([
      {path: '', redirectTo: 'demo'},
      {path: 'demo', component: CarouselDemoComponent},
      {
        path: 'api', component: DevUIApiComponent, data: {
          'zh-cn': require('!html-loader!markdown-loader!../doc/api-cn.md'),
          'en-us': require('!html-loader!markdown-loader!../doc/api-en.md')
        }
      }
    ])
  ],
  exports: [],
  declarations: [
    CarouselDemoComponent,
    CarouselDemoBasicComponent,
    CarouselDemoTriggerComponent,
    CarouselDemoAutoPlayComponent,
    CarouselDemoCustomComponent
  ],
})
export class CarouselDemoModule {
}
