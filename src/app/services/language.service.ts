import { Injectable } from '@angular/core';
import { Language } from './language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languages: Language[] = [
    new Language("pt", "Portuguese"),
    new Language("es", "Spanish"),
    new Language("en", "English"),
    new Language("it", "Italian"),
    new Language("fr", "French"),
    new Language("de", "German")  
  ];

  constructor() { }

  availableLanguages():Language[] {
    return this.languages;
  }
}