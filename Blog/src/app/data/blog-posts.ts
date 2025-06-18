export const blogPosts = [
  {
    id: 1,
    route: 'useReducer_hook_better_than_useState',
    title: 'useReducer hook better than useState ?',
    summary: 'Structured approach to deal with multiple state transitions.'
  },
  {
    id: 2,
    route: 'understanding_closures',
    title: 'Understanding closures',
    summary: 'A closure is a function that retains access to its lexical scope even when the function is executed outside of that scope.',
  },
  {
    id: 3,
    title: 'Optimizing Angular Performance',
    summary: 'Discover strategies to improve your Angular app\'s performance and user experience.',
  }
];
export const blogPostDetails = {
  '1': {
      heading: 'useReducer hook better than useState ?',
      details: [
        'The useReducer hook is a powerful alternative to useState for managing state in functional components. While useState is ideal for handling simple, local state changes, useReducer is better suited for scenarios involving more complex state logic or multiple related state transitions. It offers a more structured approach, similar to Redux-style state management, within a component.',
        'When to use useReducer:', 
        'When state logic becomes complex and difficult to manage with useState. The useReducer hook is a React function that manages complex state logic within functional components.',
        'It offers a structured approach to state management, particularly when dealing with multiple state transitions or asynchronous updates.',
        'reducer: A function that specifies how the state should be updated based on actions. It takes two arguments:',
        'state: The current state. action: An object describing the update to be performed. It usually includes a type property and optionally a payload containing additional data.',
        'initialState: The initial value of the state. It can be a simple value or an object.',
        'Return Value: ',
        'state: The current state value.',
        'dispatch: A function used to send actions to the reducer. Calling dispatch triggers a state update based on the provided action. ',
        'Reducer Function:',
        'The reducer function is a pure function that defines how the state changes in response to dispatched actions. It must:',
        'Be pure, meaning it does not have side effects or modify its arguments. Take the current state and action as arguments. Return the next state:'
      ]
  },
  '2': {
    heading: 'Understanding closures',
    details: [
      'Lexical Scoping:',
      'Closures rely on lexical scoping, where the scope of a variable is determined by where its written in the code.',
      'Inner Functions:',
      'A closure is created when an inner function is defined within an outer function.',
      'Access to Outer Scope:',
      'The inner function has access to the outer function"s variables, even after the outer function has returned.',
      'Private Variables:',
      'Closures are often used to emulate private variables in JavaScript, as the outer function"s variables are not directly accessible from outside.',
      'State Maintenance:',
      'They can maintain state between function calls, making them useful for creating counters or other stateful behaviors.',
      'Common Uses of Closures:',
      'Callbacks => They are used in callbacks to access variables from the outer scope.',
      'Data Hiding => Closures enable the creation of private variables, enhancing data security.',
      'Emulating Private Methods => They can be used to create private methods within objects.',
      'Creating Iterators => Closures can be used to create functions that act as iterators.',
      'Potential Pitfalls:',
      'Memory Leaks: If closures capture variables that are no longer needed, they can cause memory leaks.'
    ]
  }
};
export const closureCode = `
      function createCounter() {
        let count = 0; // Private variable
        return {
          increment: function() {
            count++;
            return count;
          },
          decrement: function() {
            count--;
            return count;
          },
          getCount: function() {
            return count;
          }
        };
      }

      const counter = createCounter();
      console.log(counter.increment()); // Output: 1
      console.log(counter.increment()); // Output: 2
      console.log(counter.getCount());  // Output: 2
      console.log(counter.count);       // Output: undefined

      function memoizedAdd(multiplier) {
        let cache = {};
        return function(n) {
          if (cache[n]) {
            console.log("Fetching from cache");
            return cache[n];
          }
          console.log("Calculating result");
          cache[n] = n * multiplier;
          return cache[n];
        };
      }

      const add = memoizedAdd(2);
      console.log(add(10));
      console.log(add(10));
      console.log(add(12));

      const sum = function(a) {
        return function(b) {
          if(b) {
            return sum(a + b);
          }
          return a;
        }
      }
      console.log(sum(10)(5)(6)());
    `;
