import { Component, OnInit } from "@angular/core";
import { Router, RouterState } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private routers: Router) {}

  ngOnInit() {}

  OnClickToServers() {
    //add some complex logic- backend hi fi
    this.routers.navigate(["/servers"]);
  }
}
