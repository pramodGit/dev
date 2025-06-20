const data = [
    {
        question: "React.lazy and Suspense",
        answer: "React.lazy is helpful for rendering dynamic import as a regular component. The Lazy component should then be rendered inside Suspense Component which helps to reflect some fallback content meanwhile the lazy component loads."
    },
    {
        question: "useRef()",
        answer: "In React, useRef(0) creates a mutable reference that persists across renders but does not trigger re-renders when its value changes. It initializes a ref object with a current property set to 0, which can be incremented or decremented without causing the component to re-render."
    },
    {
        question: "Code Splitting",
        answer: "React.lazy() and Suspense: Dynamically load parts of your app only when needed to reduce the initial load time."
    },
    {
        question: "React State Management",
        answer: ["State: The data that determines how a component looks and behaves.", "Props: Data passed from a parent component to a child component.", "useState Hook: A built-in React hook that allows you to add state to functional components.", "Context API: A React feature that allows you to share data and functionality across different components, regardless of where they are located in the component tree.",  "State Management Libraries: Libraries like Redux provide more robust and scalable solutions for managing complex application state."]
    },
    {
        question: "Improve the performance of your React apps",
        answer: ["1. Component Re-renders : Use React.memo() for functional components that don’t need to re-render unless their props change. Use PureComponent for class components, which implements shouldComponentUpdate with a shallow prop and state comparison. Use useMemo() and useCallback() hooks to memoize values and functions that don’t need to change across renders.", "2. Code Splitting : React.lazy() and Suspense: Dynamically load parts of your app only when needed to reduce the initial load time. React Router with Lazy Loading: Pair React.lazy() with React Router.", "3. Avoid Inline Functions in JSX : Creating inline function  is re-created on every render.", "4. Use Web Workers for Heavy Computations.",  "5.Use service worker for preload before DOM initializes.", "6.Optimize Context Usage : React’s Context API can cause unnecessary re-renders if it’s used to share large data objects.", "7. Avoid Prop Drilling : Prop drilling (passing props down through many levels of components) can lead to unnecessary re-renders. Instead, use context or state management libraries like Redux."]
    },
    {
        question: "Sending Data from Child to Parent",
        answer: ["When the child button is clicked: child function calls as onSendData('data')", "Pass it as prop : Parent → Child : onSendData={handleDataFromChild}", "Define a function : Parent : To receive the incoming data"]
    },
    { 
        question: "Debouncing Event Handlers",
        answer: ["When handling high-frequency events like typing (onChange) or scrolling (onScroll), it's smart to debounce or throttle.", "import { debounce } from 'lodash'; const handleSearch = useCallback(debounce((e) => {console.log('Searching for:', e.target.value);}, 500),[]);",  "return <input type='text' onChange={handleSearch} />;"]
    },
    {
        question: "When to use useCallback",
        answer: "If passing functions to children like -> return <Button onClick={handleClick} />, Even if nothing changed, Button will re-render because handleClick is a new function each time. So Parent with useCallback -> const handleClick = useCallback(() => {, Now, Button won't re-render unnecessarily."
    },
    {
        question: "What are props in React",
        answer: "Props (short for properties) are read-only inputs passed to components. They allow data to flow from a parent component to a child component."
    },
    {
        question: "What is state in React",
        answer: "State is a built-in object used to contain data or information about the component. Unlike props, state is mutable and can change over time."
    },
    {
        question: "What is a hook in React",
        answer: "Hooks are functions that let you 'hook into' React state and lifecycle features from function components. Examples include useState, useEffect, useContext, etc."
    },
    {
        question: "What are controlled vs uncontrolled components",
        answer: ["Controlled: Form elements where React manages the input's value via state.", "Uncontrolled: Form elements manage their own state via the DOM."]
    },
    {
        question: "What is React Context API",
        answer: "The Context API allows you to share data (like themes, authentication, etc.) across the component tree without passing props manually at every level."
    },
    {
        question: "What are higher-order components (HOC)",
        answer: "An HOC is a function that takes a component and returns a new component with enhanced behavior."
    },
    {
        question: "What is useMemo",
        answer: ["useMemo: Memoizes the result of a computation.", "const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);"]
    },
    {
        question: "What is useCallback",
        answer: ["useCallback: Memoizes the function reference.", "const memoizedCallback = useCallback(() => handleClick(a), [a]);"]
    },
    {
        question: "What is React.memo",
        answer: "React.memo is a higher-order component that memoizes a component. It only re-renders the component if its props change."
    },
    {
        question: "What is code splitting",
        answer: ["Code splitting allows loading parts of the app lazily (on demand), which improves performance.", "const LazyComponent = React.lazy(() => import('./LazyComponent'));"]
    },
    {
        question: "How do you test a React component",
        answer: "Testing libraries like Jest and React Testing Library. React Testing Library focuses on testing the UI from the user’s perspective."
    },
    {
        question: "What are the core principles of Redux",
        answer: ["Single Source of Truth – The state is stored in one central place.", "State is Read-Only – You can’t change the state directly; use actions.", "Changes via Pure Functions – Reducers take state and actions to return new state."]
    },
    {
        question: "What is middleware in Redux",
        answer: "Middleware in Redux allows you to intercept actions before they reach the reducer. It’s often used for logging, async actions (e.g., with redux-thunk or redux-saga)."
    },
    {
        question: "What is the use of React Router",
        answer: ["React Router enables navigation and dynamic routing in single-page applications.", "<Route path='/about' element={<About />} />"]
    },
    {
        question: "Event trigger can create re-render in react",
        answer: "Event triggers can cause re-renders in React, but only if they update state or cause a prop change."
    },
    {
        question: "How to prevent unnecessary re-renders",
        answer: [
            "Events like typing, scrolling, or moving the mouse can fire dozens or hundreds of times per second. If you're updating state on every event, you risk : Unnecessary re-renders and performance issues",
            "Debounce limits how often a function is called. Perfect for inputs. Only updates after 500ms of inactivity",
            "Throttling Use when you want the event to fire at most once every X milliseconds (e.g., for scroll or resize).",
            "Instead of calling setState on every event, you can: Store the data in a ref (no re-render)",
            "Use React.memo or useMemo : If you pass props to child components, wrap the child with React.memo() to prevent it from re-rendering unless props actually change.",
            "Event Delegation: attaching fewer listeners at a higher level (like on a parent container"
        ]
    },
    {
        question: "React lifecycle hooks in Function Components",
        answer: [
            "useEffect(() => { ... }) // Runs on every render",
            "useEffect(() => {}, []); // Runs only once on mount",
            "useEffect(() => {}, [dependency]); // Runs when dependency array changes"
        ]
    },
    {
        question: "Lifecycle Method In Class Components",
        answer: [
            "componentDidMount : Only once on mount",
            "componentDidUpdate : On every update",
            "render() : Always runs on re-render",
            "shouldComponentUpdate : Can prevent re-render"
        ]
    },
    {
        question: "Component Composition in React : reusable components",
        answer: [
            "1. Children Props : You can pass nested JSX directly using props.children:",
            "function Card({ children }) { return <div className='card'>{children}</div>;}",
            "function App() { return (<Card><h2>Nested Title</h2><p>Nested content inside Card.</p></Card>);}",
            "2. Specialized Props: Pass specific subcomponents via props:",
            "function Layout({ header, sidebar, content }) { return (<div> {header} {sidebar} {content} </div>);",
            "function App() { return ( <Layout header={<Header />} sidebar={<Sidebar />} content={<Content />} />);}",
            "3. Render Props: Instead of just JSX, you pass a function as a child:",
            "function List({ items, renderItem }) { return (<ul> {items.map(item => ( <li key={item.id}>{renderItem(item)}</li> ))} </ul>);}",
            "function App() { const users = []; return (<List items={users} renderItem={(user) => <strong>{user.name}</strong>} />);}"
        ]
    }
];
export default data;