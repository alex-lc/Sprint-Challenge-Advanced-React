- [ ] Why would you use class component over function components (removing hooks from the question)?

    Taking hooks out of the question, before they were introduced, class components gave us access to an array of extra functionality and things like the lifecycle methods (componentDidMount(), componentDidUpdate(), and componentWillUnmount() for example) through the base component which allowed us to control our components better and decide when we wanted to use them, update them, remove them, etc..

- [ ] Name three lifecycle methods and their purposes.

    1. componentDidMount() - This is part of the "birthing" process of a React component when it first initially mounts to the DOM. For this sprint challenge, we used componentDidMount() in order to fetch data from an API.
    2. componentDidUpdate(prevProps, prevState) - This is part of the growth / updating phase that is used to update component data. setState can be used to change the component's state data, forcing a re-render of the component.
    3. componentWillUnmount() - This is part of the death / un-mounting phase when a component gets removed from the screen / DOM. It can be used for any clean up you need to do like removing event listeners.

- [ ] What is the purpose of a custom hook?

    The purpose of creating a custom hook is to make our code more DRY by grouping together stateful logic that can be reused in other parts of our application, instead of having to create that same logic over and over for things such as forms and inputs.

- [ ] Why is it important to test our apps?

    It is important to test our apps so that we can ensure that any and all use cases, especially by users, are working / functional and will not break our application. It makes our code better, and it will also help in the development process if you take the test first approach.