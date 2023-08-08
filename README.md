# QuicktStart

This project
* was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.
  * More concretely via `npm init @angular myApp`
    * Requirements
      * npm version > 8.5.0
* includes 
  * following [this part of the Angular documentation](https://angular.io/quick-start#create-a-new-angular-app-from-the-command-line
  * following [app-shell](https://angular.io/guide/app-shell)
  * following [ngGenerateApplication](https://angular.io/cli/generate#application)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## App shell

* It was generated via `ng generate app-shell`
  * Since the render of the app-shell is via routing -> `RouterModule` is added
* How to run it locally?
  * `ng run QuicktStart:app-shell:development`
    * Generate the build output under "dist/QuicktStart/browser"
    * Open in the browser "dist/QuicktStart/browser/index.html"
  * `ng run QuicktStart:server:development`
    * Generate the build output under "dist/QuicktStart/server"
    * TODO: What is it used for ?

## NewApp

* How it was created?
  * `ng generate app newApp`

## NewClass

* It's generated under "src/app" 
* How it was created?
  * `ng generate class newClass`

## NewComponent

* It's generated under "src/app"
* How it was created?
  * `ng generate component newComponent`

## NewConfigKarma

* It's configured under "test" architect
* How it was created?
  * `ng generate config karma`

## NewConfigBrowsersList

* It's configured under root path
* How it was created?
  * `ng generate config browserslist`

## NewDirective

* It's configured under "src/app"
* How it was created?
  * `ng generate directive newDirective`
