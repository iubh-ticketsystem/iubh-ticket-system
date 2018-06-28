// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCS8pTTr9KCJ6K5ygpDy6lcHQNxHaXAOZ0",
    authDomain: "iubh-ticket-system.firebaseapp.com",
    databaseURL: "https://iubh-ticket-system.firebaseio.com",
    projectId: "iubh-ticket-system",
    storageBucket: "",
    messagingSenderId: "811526219495"
  }
};