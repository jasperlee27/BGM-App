import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { InnerWalletComponent } from './inner-wallet/inner-wallet';
@NgModule({
	declarations: [ProgressBarComponent,
    InnerWalletComponent],
	imports: [],
	exports: [ProgressBarComponent,
    InnerWalletComponent]
})
export class ComponentsModule {}
