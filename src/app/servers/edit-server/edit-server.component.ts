import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // console.log(this.route.queryParams);
    // console.log(this.route.fragment);
    //we can subsribe to them as well

    // this.server = this.serversService.getServer(1);

    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params["id"]);
    });

    // this.route.params.subscribe((params: Params) => {
    //   this.serverName = params["name"];
    // });

    this.route.queryParams.subscribe((params: Params) => {
      this.allowEdit = params["allowEdit"] === "1" ? true : false;
      // console.log(this.allowEdit);
    });
    //this.route.fragment.subscribe()

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
