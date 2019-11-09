import { Injectable } from '@angular/core';

import {Phrase} from '../interfaces/phrase'

let phrases = [
  new Phrase(1, 'Hello World', 'Английский'),
  new Phrase(2, 'Здравствуй, Вселенная', 'Русский'),
  new Phrase(3, 'Bonjour le monde', 'Французский'),
  new Phrase(4, 'Hallo Welt', 'Немецкий')
]

let phrasePromise = Promise.resolve(phrases)

@Injectable()
export class PhraseService {

  constructor() {}

  getAll(): Promise<Phrase[]> {
    return phrasePromise
  }

  getPhrase(id: number): Promise<Phrase> {
    return phrasePromise
      .then(phrases => phrases.find(x => x.id === id))
  }

}
