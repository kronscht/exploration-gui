import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundComponent } from './playground.component';

const routes: Routes = [
    /* When module is loaded, route to dashboard module  */
    {
        path: '',
        redirectTo: 'playground',
        pathMatch: 'full'
    },
    {
        path: 'playground',
        component: PlaygroundComponent,

        data: {
            title: 'Playground'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlaygroundRoutingModule { }