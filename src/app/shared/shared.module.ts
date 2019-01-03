import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/shared/material/material.module';
import { SpinnerComponent } from '@app/shared/spinner/spinner.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  declarations: [SpinnerComponent],
  exports: [FormsModule, ReactiveFormsModule, MaterialModule, SpinnerComponent]
})
export class SharedModule {}
