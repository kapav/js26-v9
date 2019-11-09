import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {PhrasePageComponent} from './phrase-page.component'
import {PhraseListComponent} from '../shared/components/phrase-list/phrase-list.component'
import {PhraseDetailComponent} from '../shared/components/phrase-detail/phrase-detail.component'

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      redirectTo: '/phrase',
      pathMatch: 'full'
    },
    {
      path: 'phrase',
      component: PhrasePageComponent,
      children: [{
        path: '',
        component: PhraseListComponent,
        children: [
          {
            path: ':id',
            component: PhraseDetailComponent
          },
          {
            path: '',
            component: PhraseDetailComponent
          }
        ]
      }]
    }
  ])],
  exports: [RouterModule]
})
export class PhraseRoutingModule {}
