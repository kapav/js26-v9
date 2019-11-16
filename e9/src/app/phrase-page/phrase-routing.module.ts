import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {CanDeactivateGuard} from '../shared/services/can-deactivate.guard'
import {PhraseDetailResolve} from '../shared/services/phrase-detail-resolve.guard'

import {PhraseListComponent} from '../shared/components/phrase-list/phrase-list.component'
import {PhraseDetailComponent} from '../shared/components/phrase-detail/phrase-detail.component'

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'phrase', component: PhraseListComponent },
    {
      path: 'phrase/:id',
      component: PhraseDetailComponent,
      canDeactivate: [CanDeactivateGuard],
      resolve: { phrase: PhraseDetailResolve }
    }
  ])],
  exports: [RouterModule]
})
export class PhraseRoutingModule {}
