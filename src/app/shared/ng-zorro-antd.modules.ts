import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';


import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';

import { IconsProviderModule } from './icons-provider.module';

registerLocaleData(vi);

@NgModule({
    providers: [{ provide: NZ_I18N, useValue: vi_VN }],
    exports: [
        NzLayoutModule,
        NzMenuModule,

        IconsProviderModule,
    ]
})
export class NgZorroAntdModule { }
