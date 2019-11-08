import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'

import {Phrase} from '../../interfaces/phrase'
import {PhraseService} from '../../services/phrase.service'

@Component({
  selector: 'app-phrase-detail',
  templateUrl: './phrase-detail.component.html',
  styleUrls: ['./phrase-detail.component.scss']
})
export class PhraseDetailComponent implements OnInit {

  phrase: Phrase

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private phraseService: PhraseService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .forEach((paramMap: ParamMap) => {
        let id = +paramMap.get('id')
        this.phraseService
          .getPhrase(id)
          .then(result => this.phrase = result)
      })
  }

  goToPhraseList() {
    this.router.navigate(['phrase'])
  }

}
