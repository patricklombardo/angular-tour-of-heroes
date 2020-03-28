import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor() {}

  // Returns heroes from the mock file
  // This is a good place to make ajax requests
  getHeroes(): Hero[] {
    return HEROES;
  }
}
