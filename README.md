This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Step-by-step
### Installation
`npx install-peerdeps --dev eslint-config-airbnb`
`npm i --save-dev jest eslint-plugin-jest`
`npm i --save-dev enzyme enzyme-adapter-react-16 enzyme-to-json`
`npm i --save-dev redux-mock-store redux-devtools-extension`
`npm i axios prop-types redux react-redux styled-components`
maybe install babel-plugin-styled-components
maybe install --save-dev react-test-renderer to render snapshots

add jest snapshotSerializers to package.json:

```javascript
"jest": {
    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ]
  }
```

Remover eslintConfig do package.json e criar o .eslintrc

## TODO

* Creditar News.org (Powered by News.org)
* home/duck tests
* documentar: .env.development.local -> deve conter uma chave de acesso
