## PORTUGUÊS
A versão do Node utilizada durante a codificação desse projeto foi a versão 16.18.0

Para rodar o projeto, depois de ter o node instalado na máquina, basta seguir para a raíz do projeto e rodar os comandos:
  - "npm install" (para a instalação das dependências)
  - "npm start" (para inicializar o projeto na porta http://localhost:3000)
 
 Após ter realizado esse processo, para poder rodar a API mockada e ver os items da loja, é necessária a instalação
 do json-server na máquina. Esse processo pode ser feito da seguinte forma:
  - Rodar o comando "npm i json-server -g" no CMD (realiza a instalação do json-server globalmente);
  - Depois de instalado, rodar o comando "json-server --watch server.json --delay 500 --port 4000" na raíz do projeto (inicializa a API mockada na porta 4000);

Realizados estes passos, o projeto deve rodar sem problemas :)

## -------------------------------------------------------------------------------
## INGLÊS

The node version that was used during the coding process on this project was the version 16.18.0

To run the project, after installing Node on your computer, you just need to go to the root of the project and run the following commands:
  - "npm install" (to install all the dependencies of the project)
  - "npm start" (to run the project on the port http://localhost:3000)

After running those commands, it will be necessary to install the json-server on your computer to be able to run the mocked API that was used for this project.
To do this, open the CMD and run the following command to install the json-server globally on your machine:
  - "npm i json-server -g"

After installing the json-server, you must go to the root folder of the project and run the following command there:
  - "json-server --watch server.json --delay 500 --port 4000"

This last command will start the mocked API on the port 4000 of your computer. Finishin those processes, the project should be running
and the items should be listed on your screen :)

## -------------------------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
