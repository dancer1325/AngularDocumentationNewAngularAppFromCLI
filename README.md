# QuicktStart

This project
* was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.
  * More concretely via `npm init @angular myApp`
    * Requirements
      * npm version > 8.5.0
    * [AppRoutingModule](https://github.com/dancer1325/AngularDocumentationNewAngularAppFromCLI/blob/main/src/app/app-routing.module.ts) is generated, using [RouterModule](https://angular.io/api/router/RouterModule)
* includes 
  * following [this part of the Angular documentation](https://angular.io/quick-start#create-a-new-angular-app-from-the-command-line
  * following [app-shell](https://angular.io/guide/app-shell)
  * following [ngGenerateApplication](https://angular.io/cli/generate#application)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

* `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### App shell

* It was generated via `ng generate app-shell`
  * Since the render of the app-shell is via routing -> `RouterModule` is added
* How to run it locally?
  * `ng run QuicktStart:app-shell:development`
    * Generate the build output under "dist/QuicktStart/browser"
    * Open in the browser "dist/QuicktStart/browser/index.html"
  * `ng run QuicktStart:server:development`
    * Generate the build output under "dist/QuicktStart/server"
    * TODO: What is it used for ?

### NewApp

* How it was created?
  * `ng generate app newApp`

### NewClass

* It's generated under "src/app"
* How it was created?
  * `ng generate class newClass`

### NewComponent

* It's generated under "src/app"
* How it was created?
  * `ng generate component newComponent`
* Added to the [AppModule](https://github.com/dancer1325/AngularDocumentationNewAngularAppFromCLI/blob/main/src/app/app.module.ts#L15) to make it available to other components in the application    
* The [selector](https://github.com/dancer1325/AngularDocumentationNewAngularAppFromCLI/blob/main/src/app/new-component/new-component.component.ts#L4) is prefixed with "app-" by convention

### NewConfigKarma

* It's configured under "test" architect
* How it was created?
  * `ng generate config karma`

### NewConfigBrowsersList

* It's configured under root path
* How it was created?
  * `ng generate config browserslist`

### NewDirective

* It's configured under "src/app"
* How it was created?
  * `ng generate directive newDirective`

### NewEnum
* It's configured under "src/app"
* How it was created?
  * `ng generate enum newEnum`

### NewEnvironment

* It's configured under "src/environments"
* How it was created?
  * `ng generate environments`

### NewGuard

* It's configured under "src/app"
* How it was created?
  * `ng generate guard newGuard`

### NewInterceptor

* It's configured under "src/app"
* How it was created?
  * `ng generate interceptor newInterceptor`

### NewInterface

* It's configured under "src/app"
* How it was created?
  * `ng generate interface newInterface`

### NewLibrary

* It's configured under "projects/newLibrary"
* How it was created?
  * `ng generate library newLibrary`

### NewModule

* It's configured under "src/app/newModule"
* How it was created?
  * `ng generate module newModule`

### NewPipe

* It's configured under "src/app"
* How it was created?
  * `ng generate pipe newPipe`

### NewResolver

* It's configured under "src/app"
* How it was created?
  * `ng generate resolver newResolver`

### NewService

* It's configured under "src/app"
* How it was created?
  * `ng generate service newService`

### NewServiceWorker

* It's configured under root path
* How it was created?
  * `ng generate service-worker`

### NewWebWorker

* It's configured under "src/app"
* How it was created?
  * `ng generate web-worker newWebWorker`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

* `ng test`
  * execute all the projects' unit tests via [Karma](https://karma-runner.github.io).
    * It uses because that's the builder configured to use
* `ng test ProjectName`
  * execute ProjectName's tests

## Running end-to-end tests

* `ng e2e`
  * execute all the project's end-to-end tests
  * If you haven't configured an architect -> it will lead you to create one
    * Cypress
    * Nightwatch
    * WebdriverIO
* `ng e2e ProjectName`
  * execute ProjectName's tests


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
