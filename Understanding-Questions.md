# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code executes for each step.

- The user presses the 1 button.
- ...
- clickEvent triggered
- onClick triggers the function passed down as prop
- onClick() (the arrow function in App) executes it's callback: dispatch()
- dispatch executes it's hidden callback the reducer() passing state and addOne (dispatch's argument) as arguments to reducer() from dispatch's closure (dispatch is declared inside the App Component which contains state and an import of addOne)
- reducer() runs a switch based on the value of addOne(), so addOne() is executed returning an action object.
- the switch evaluates the action.type as being equal to ADD_ONE and so returns a new state with the 'property' being equal to the previous state's 'total' property plus 1.
- react handles this returned object and assigns it to the state and rerenders the necessary components such as:

- TotalDisplay shows the total plus 1.
