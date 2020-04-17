# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
"# Routes-In-Angular"

## Step One

### **How to assign routes **

- in the app.module.ts
- `const appRoutes: Routes = [ { path: "", component: HomeComponent }, { path: "users", component: UsersComponent }, { path: "servers", component: ServersComponent }, ];`
- in the ngModule imports section add RouterModule `imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],`

- in the app.component.html replace '<app-component></app-component>' with `<router-outlet></router-outlet>`

## Step two

### **Adding navigation based on assigned routes**

- in the navigation bar use \_routerLink="/" ,routerLink="/users" instead of href in a tag-

### Adding Css Styling

- use `<li role="presentation" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" > <a routerLink="/">Home</a> </li>` to have a focuseed style active bar while navigation

### How to navigate to url on button click

** `OnClick() { // this.routers.navigate(["/servers"], { relativeTo: this.route }); will append /servers to current url this.routers.navigate(["/servers"]); }` **

- Here relativeto:route->activeRoute-angular/core will append /servers to current path\*
- ['/servers'] will navigate to localhost:port/servers\*

### Extracting data from /users/id/name

- \*\* `constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.user = {
  id: this.router.snapshot.params["id"],
  name: this.router.snapshot.params["name"],
  };
  }`\*\*

  also in the app.module.ts `{ path: "users/:id/:name", component: UserComponent }`

* **`this.router.params.subscribe((params: Params) => { this.user.id = params["id"]; this.user.name = params["name"]; });`**

### Adding more to the URL /servers/:id/edit + ?allowEdit=1 + #loading

- add corresponding route in the app.module.ts

add this to append to the requested url
\*\*`
<a [resourceLink]="['/servers',5,'edit']"
[queryParams]="{allowEdit:1}"
[fragment]="loading"

> </a>
> `**

- add this to append call by an event

`onclick(1)`

## on click event on ts file

`onclick(edit_id:number){ this.route.navigate(['/servers',edit_id,'edit'],{queryParams:{allowEdit:'1'},fragment:'loading'}) }`

## How to extract query params and fragments from url

`console.log(this.route.queryParams); console.log(this.route.fragment); //we can subsribe to them as well // this.route.queryParams.subscribe() //this.route.fragment.subscribe()`
