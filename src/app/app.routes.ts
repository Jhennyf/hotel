import { Routes, RouterModule } from '@angular/router';
import { HotelsComponentComponent } from '../components/hotels-component/hotels-component.component';
import { CadastroComponent } from '../components/cadastro/cadastro.component';
import { ContatoComponent } from '../components/contato/contato.component';

export const routes: Routes = [
    { path: 'contato', component: ContatoComponent},
    { path: '', component: HotelsComponentComponent},
    { path: 'cadastro', component: CadastroComponent},
];

