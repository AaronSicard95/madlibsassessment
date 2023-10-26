### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
a library for rendering DOMs through javascript

- What is Babel?
converts react html(jsx) into browser readable javascript

- What is JSX?
a different syntax of javascript used for react html

- How is a Component created in React?
a function that returns html

- What are some difference between state and props?
props are passed to a component, states are alterable variables that upon changing call a rerender

- What does "downward data flow" refer to in React?
basically refers to parent components holding most/all of the data and sending it the children as needed

- What is a controlled component?
a component that is altered by a parent

- What is an uncontrolled component?
a component that is only altered by itself

- What is the purpose of the `key` prop when rendering a list of components?
to make them all easily identifiable

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
order may be altered, also if elements are removed it'll change the index

- Describe useEffect.  What use cases is it used for in React components?
it is a function that can be called when the dom is first rendered, or when a specific state(s) changed. Useful for when you want custom code to run on specific rerenders.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
keeps a current version of a varaible. no it doesn't

- When would you use a ref? When wouldn't you use one?
you would use it when you need a callback function from a child to access up to date information from a parent, you shouldn't use it to make things happen.

- What is a custom hook in React? When would you want to write one?
a custom a hook is a function used to alter states or other things within a component. It is used most often when you have multiple different components that need to accomplish similiar things.