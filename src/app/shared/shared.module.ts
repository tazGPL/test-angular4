import { NgModule, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { MyDatePipe } from './pipes/my-date.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    HighlightDirective,
    MyDatePipe,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
     MyDatePipe,
     LoaderComponent
  ],
  providers: [
    StorageService
  ]
})
export class SharedModule {

}
