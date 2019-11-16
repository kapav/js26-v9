import {Injectable} from '@angular/core'
import {Router, Resolve, ActivatedRouteSnapshot} from '@angular/router'

import {Phrase} from '../interfaces/phrase'
import {PhraseService} from './phrase.service'

@Injectable()
export class PhraseDetailResolve implements Resolve<Phrase> {

  constructor(
    private router: Router,
    private phraseService: PhraseService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Promise<Phrase> | Phrase {
    const id = +route.paramMap.get('id')
    return this.phraseService.getPhrase(id).then(phrase => {
      if (phrase) {
        return phrase
      } else {
        this.router.navigate(['/phrase'])
        return null
      }
    })
  }

}
