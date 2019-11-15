import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'

import {Phrase} from '../../interfaces/phrase'
import {CanComponentDeactivate} from '../../services/can-deactivate.guard'
import {PhraseService} from '../../services/phrase.service'

@Component({
  selector: 'app-phrase-detail',
  templateUrl: './phrase-detail.component.html',
  styleUrls: ['./phrase-detail.component.scss']
})
export class PhraseDetailComponent implements OnInit, CanComponentDeactivate {

  phrase: Phrase
  editValue: string
  editLanguage: string

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
          .then(result => {
            this.phrase = result
            this.editValue = this.phrase.value
            this.editLanguage = this.phrase.language
          })
      })
  }

  save() {
    this.phrase.value = this.editValue
    this.phrase.language = this.editLanguage
    this.goToPhraseList()
  }

  goToPhraseList() {
    let pId = this.phrase ? this.phrase.id : null
    this.router.navigate(['../', {
      id: pId,
      param1: 'test',
      param2: 123
    }],
    {
      relativeTo: this.activatedRoute
    })
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (!this.phrase) {
      return true
    }
    if (this.phrase.value === this.editValue && this.phrase.language === this.editLanguage) {
      return true
    }
    return confirm('Вы не сохранили изменения. Уйти со страницы?')
  }

}
