import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { MessageService } from "./message.service";

import { Hero } from "./hero";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  private heroesUrl = "api/heroes";
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  // Returns heroes from the mock file
  // This is a good place to make ajax requests
  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
