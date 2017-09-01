// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC6a7Z-0wcG43uR9vSTwcVnJLB57g1eqkE',
    authDomain: 'cdg-hackathon-2017.firebaseapp.com',
    databaseURL: 'https://cdg-hackathon-2017.firebaseio.com',
    projectId: 'cdg-hackathon-2017',
    storageBucket: 'cdg-hackathon-2017.appspot.com',
    messagingSenderId: '853785195451'
  }
};
