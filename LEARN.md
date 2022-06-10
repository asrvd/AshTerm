## AshTerm/Learn
Let's see how you can build the same project from scratch now.

### Scaffold the project
Get you code editor and terminal ready, we will need to make a react app first using `create-react-app`. And then we can install the necessary dependencies. We need only one external dependency for this project [react-console-emulator]()
```bash
npx create-react-app my-app
cd my-app
npm i --legacy-peer-deps react-console-emulator
npm run dev
```
Run the above commands one by one in your terminal to create the project and start the app on localhost. Now open the app in a code editor and start coding.

### Creating commands for terminal
react-console-emulator provides an easy way to declare commands for your terminal. You can read the full configuration guide [here](https://github.com/linuswillner/react-console-emulator/blob/master/docs/CONFIG.md).
Here's an example app -
```js
import React, { Component } from 'react'
import Terminal from 'react-console-emulator'

const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  }
}

export default class MyTerminal extends Component {
  render () {
    return (
      <Terminal
        commands={commands}
        welcomeMessage={'Welcome to the React terminal!'}
        promptLabel={'me@React:~$'}
      />
    )
  }
}
```
paste the code in your main js file and run the app again using `npm run dev`. If you followed correctly you will be seeing a terminal in your app and running the command `echo "hello world"` will print `hello world` in your terminal! 

### Styling your terminal
Styling the terminal is easy. You can read it [here](https://github.com/linuswillner/react-console-emulator/blob/master/docs/CONFIG.md#re-styling).

### Conclusion
This is how you can get started with your terminal styled portfolio project. Feel free to take inspiration from my own portfolio or create your own unique commands! Don't hesitate to ask you questions in Issues. I'll gladly help you out. If you liked the project, consider giving a star to it, my goal is getting 100 stars on this project 😀
