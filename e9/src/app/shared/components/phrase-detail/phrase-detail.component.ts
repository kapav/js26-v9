import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

import {Phrase} from '../../interfaces/phrase'
import {CanComponentDeactivate} from '../../services/can-deactivate.guard'

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
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.data.forEach((data: { phrase: Phrase }) => {
      this.phrase = data.phrase
      this.editValue = data.phrase.value
      this.editLanguage = data.phrase.language
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
