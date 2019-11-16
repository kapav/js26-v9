import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'

import {Phrase} from '../../interfaces/phrase'
import {PhraseService} from '../../services/phrase.service'

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {

  selectedId: number
  phrases: Phrase[]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private phraseService: PhraseService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .forEach((paramMap: ParamMap) => {
        this.selectedId = +paramMap.get('id')
        this.phraseService
          .getAll()
          .then(result => this.phrases = result)
    })
  }

  isSelected(phrase: Phrase) {
    return phrase.id === this.selectedId
  }

  onSelect(selected: Phrase) {
    this.router.navigate([selected.id], {
      relativeTo: this.activatedRoute
    })
  }

}
