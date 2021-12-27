import React from 'react';
import ReactDOM from 'react-dom';
// import { StrictMode } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import Root from './routes/root';
import './index.css';

const rootElement = document.getElementById('root');
// const javascriptContainer = document.getElementById("javascript");
// const reactjsContainer = document.getElementById("reactjs");

// const render = () => {

//     // javascriptContainer.innerHTML = `
//     //     <div class="tick">
//     //         <h1>Time in Javascript</h1>
//     //         The time is:
//     //         <span>${new Date().toLocaleTimeString("en-US")}</span>
//     //     </div>
//     // `;

//     ReactDOM.render(
//         //   <StrictMode>
//         //     <BrowserRouter>
//         //       <Root />
//         //     </BrowserRouter>
//         //   </StrictMode>,
//         //   React.createElement(
//         //       "div",
//         //       { className: "tick" },
//         //       React.createElement(
//         //           "h1",
//         //           null,
//         //           "Time in React"
//         //       ),
//         //       "The time is:",
//         //       React.createElement(
//         //           "span",
//         //           null,
//         //           new Date().toLocaleTimeString("en-US")
//         //       )
//         //   ),
//         //   reactjsContainer,
//         // rootElement
//     );
// }

// setInterval(render, 1000);

ReactDOM.render(
    React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Hello Dojo!",
        ),
        React.createElement(
            "h2",
            null,
            "Things I need to do:",
        ),
        React.createElement(
            "ul",
            null,
            React.createElement(
                "li",
                null,
                "Learn React",
            ),
            React.createElement(
                "li",
                null,
                "Climb Mt. Everest",
            ),
            React.createElement(
                "li",
                null,
                "Run a marathon",
            ),
            React.createElement(
                "li",
                null,
                "Feed the dogs",
            ),
        ),
    ),
    rootElement
)