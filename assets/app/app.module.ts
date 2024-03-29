import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from "./app.component";
import {MessageComponent} from './messages/message.component';
import { MessageListComponent } from './messages/message-list-component';
import {MessageInputComponent} from './messages/message-input.component';
import {MessageService} from './messages/message.service';
import {SignupComponent} from './auth/signup.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthenticationComponent } from './auth/authentication.component';
import {HeaderComponent} from './header.component';
import {SigninComponent} from './auth/signin.component';
import {LogoutComponent} from './auth/logout.component';
import {ReactiveFormsModule} from '@angular/forms'


import {routing} from './app.routes';
import { AuthService } from './auth/auth.service';




@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        SignupComponent,
        SigninComponent,
        LogoutComponent

        
    ],
    imports: [BrowserModule,FormsModule,routing,ReactiveFormsModule,HttpModule],
    bootstrap: [AppComponent],
    providers:[AuthService,MessageService]
})
export class AppModule {

}