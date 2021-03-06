import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import {
  ActivatedRoute,
  Params,
  Router,
  QueryParamsHandling,
} from "@angular/router";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let idgen: number = this.route.snapshot.params["id"];
    // this.server = { id: 1, name: "sri", status: "idk" };
    // console.log(idgen);

    this.server = this.serversService.getServer(idgen);

    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params["id"]);
    });
  }

  onClickEdit() {
    //console.log(this.server.id);
    // this.router.navigate(["/servers", this.server.id, "edit"]);
    this.router.navigate(["edit"], {
      relativeTo: this.route,
      queryParamsHandling: "preserve",
    });
  }
}
