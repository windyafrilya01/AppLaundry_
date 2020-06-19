import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LogInService {
  users = [
    {
      username: "windy",
      password: "windy123",
      fullName: "Windy Afrilya",
    },
    {
      username: "farah",
      password: "farah123",
      fullName: "Farah Diba Harahap",
    },
    {
      username: "tasya",
      password: "tasya123",
      fullName: "Tasya Wulandari",
    },
  ];

  constructor() {}
}
