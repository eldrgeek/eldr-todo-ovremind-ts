// import { createOvermind } from 'overmind';
// import { Provider } from 'overmind-react';
// import * as React from 'react';
// import { render } from 'react-dom';
// import { app as overmind } from './app';
import TodoApp from './components/TodoApp';
// import 'todomvc-common/base.css';
// import 'todomvc-app-css/index.css';

//MW CurrentModule handles the rendering and imports that stule information
import { CurrentModule } from './components/CurrentModule';

// const rootElement = document.getElementById('root');

// export const overmind = createOvermind(config, {
//   // devtools: "penguin.linux.test:3031" //
//   // devtools: false,
// });

// render(
//   <Provider value={overmind}>
//     <TodoApp />
//   </Provider>,
//   rootElement
// );
// console.log('index called');
CurrentModule(TodoApp);
