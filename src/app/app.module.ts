import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonneAjouterComponent } from './personne-ajouter/personne-ajouter.component';
import { MenuComponent } from './menu/menu.component';
import { AproposComponent } from './apropos/apropos.component';
import { PersonneListerComponent } from './personne-lister/personne-lister.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { PersonneDetailComponent } from './personne-detail/personne-detail.component';
import { UpperfirstPipe } from './pipes/upperfirst.pipe';
import { CompterPersonneComponent } from './compter-personne/compter-personne.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { InfosPersonneComponent } from './infos-personne/infos-personne.component';
import { RadioBoutonComponent } from './radio-bouton/radio-bouton.component';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonneAjouterComponent,
    MenuComponent,
    AproposComponent,
    PersonneListerComponent,
    ContactComponent,
    PersonneDetailComponent,
    UpperfirstPipe,
    CompterPersonneComponent,
    InfosPersonneComponent,
    RadioBoutonComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
