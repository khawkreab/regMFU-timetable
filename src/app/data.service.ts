import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: Http) {}

  getTeacher() {
    return this.http.get("/api/teacher").pipe(map(res => res.json()))
  }


  getMejor() {
    return this.http.get("/api/major").pipe(map(res => res.json()))
  };
}