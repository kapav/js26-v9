import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {Phrase} from '../../interfaces/phrase'
import {PhraseService} from '../../services/phrase.service'

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {

  phrases: Phrase[]

  constructor(
    private router: Router,
    private phraseService: PhraseService
  ) {}

  ngOnInit() {
    this.phraseService
      .getAll()
      .then(result => this.phrases = result)
  }

  onSelect(selected: Phrase) {
    this.router.navigate(['phrase', selected.id])
  }

}
