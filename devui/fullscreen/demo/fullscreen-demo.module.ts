import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'ng-devui/button';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox';
import { TooltipModule } from 'ng-devui/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { DDemoNavModule } from 'src/app/component/d-demo-nav.module';
import { FullscreenModule } from '../fullscreen.module';
import { FullscreenDemoComponent } from './fullscreen-demo.component';
import { FullscreenDemoImmersiveComponent } from './immersive/immersive.component';
import { FullscreenDemoNormalComponent } from './normal/normal.component';

@NgModule({
  imports: [
    TranslateModule,
    ButtonModule,
    TooltipModule,
    FullscreenModule,
    DevUICodeboxModule,
    DevUIApiModule,
    DDemoNavModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo' },
      { path: 'demo', component: FullscreenDemoComponent },
      { path: 'api', component: DevUIApiComponent, data: {
        'zh-cn': require('!html-loader!markdown-loader!../doc/api-cn.md'),
        'en-us': require('!html-loader!markdown-loader!../doc/api-en.md')
      } }
    ])
  ],
  exports: [
    FullscreenDemoComponent
  ],
  declarations: [
    FullscreenDemoComponent,
    FullscreenDemoImmersiveComponent,
    FullscreenDemoNormalComponent
  ]
})
export class FullscreenDemoModule {
}
