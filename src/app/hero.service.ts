import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor() {}

  // Returns heroes from the mock file
  // This is a good place to make ajax requests
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
