# Mandatory Assignment

My assignment for the mandatory is an `Music Reviewer` where users can search up following: `area, artist, event, genre, instrument, label and more`.
Then the data can be interacted with by making a review or just upvoting or downvoting either the `artist, album or song`

<br>

---

<br>

## Frontend Applitcation

A react based frontend application both `CSR & SSR` using `react-router-v7 / Remix` for routing and rendering.

This api is used -> https://musicbrainz.org/doc/MusicBrainz_API

### Setting up the codebase

Using cli npx to configure the project. Default react-router-v7 comes with typescript and TailwindCSS config.

```bash
# Using npx to create the react-router app
npx create-react-router@latest frontend-app
```

<br>

---

<br>

## Backend Application

NodeJS RESTAPI backend served by express.

So I wanted to have the following setup:

- nodeJS served with `express`
- Using `ESM modules` instead of `commonjs`
- Configured with `typescript`
- Dev mode using `nodemon` for live reloading based on codechanges.

So many issues when truying to setup all these things, since typescript is precompiled and interupting nodemon.
But finally managed to do all the config enabling `typescript` with `ESM modules` and live reload by `nodemon`.

Got this error a lot `Object.defineProperty(exports, "__esModule", { value: true }); ReferenceError: exports is not defined in ES module scope` which was related to the use of ESM modules instead of commonJS.

Also followed this guide https://webdev852.medium.com/node-typescript-app-with-nodemon-and-type-module-3e25bfcaa8b0 but took me a while to figure out that the `tsconfig.json` was corrupt since it did then spell `compilerOptions` correctly, and therefor the guide did'nt work either 😭😭😭

After a lot of debugging this was the golden way to create the whole codebase with typescript, ESM modules, express, cors, nodemon:


Config with typescript:

```bash
mkdir backend-app

cd backend-app

npm init -y

npm install express cors @types/cors @types/express @types/node nodemon ts-node typescript
```

Add following to `package.json` --> `"type": "module"` & `"dev": "nodemon --config nodemon.json"`

Add following tsconfig.json

```json
{
  "compilerOptions": {
    "module": "ESNext", // or "ES2020"
    "esModuleInterop": true,
    "target": "es2021",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2021"]
}
```

Add following nodemon.json

```json
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "node --loader ts-node/esm ./src/app.ts"
}
```