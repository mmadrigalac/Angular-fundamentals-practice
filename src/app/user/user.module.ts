import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { CommonModule } from '@angular/common';

// this is a feature module, in case several components should be imported
//this will help to avoid a mess inside the apps module declaration.

@NgModule({
  declarations: [SignInComponent],
  imports: [FormsModule, CommonModule],
})
export class UserModule {}
