import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { MessageService } from "./message.service";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  // Returns heroes from the mock file
  // This is a good place to make ajax requests
  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }
}
