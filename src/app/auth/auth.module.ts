import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { SessionStorageService } from './services/session-storage.service';
import { NotAuthorizedGuard } from './guards/not-authorized.guard';
import { AuthorizedGuard } from './guards/authorized.guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers : [{ provide: 'Window',  useValue: window },AuthService,SessionStorageService,
NotAuthorizedGuard,AuthorizedGuard]
})
export class AuthModule { }
