import React from 'react';

const Blog = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 m-20'>
            <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-700 dark:text-white">
                <article>
                    <h2 className="text-2xl font-bold">1. What is the purpose of react router ?</h2>
                    <p className="mt-4 dark:text-gray-300">Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. <br />
                        <br /> React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
                </article>
            </div>
            <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-700 dark:text-white">
                <article>
                    <h2 className="text-2xl font-bold">2. How does context api work ?</h2>
                    <p className="mt-4 dark:text-gray-300">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br />
                        <br /> React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page.</p>
                </article>
            </div>
            <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-700 dark:text-white">
                <article>
                    <h2 className="text-2xl font-bold">3. What is the use of useref hook ?</h2>
                    <p className="mt-4 dark:text-gray-300">In a React component, useState and useReducer can cause your component to re-render each time there is a call to the update functions. In this article, you will find out how to use the useRef() hook to keep track of variables without causing re-renders, and how to enforce the re-rendering of React Components. <br />
                        <br />  In React components, there are times when frequent changes have to be tracked without enforcing the re-rendering of the component. It can also be that there is a need to re-render the component efficiently. While useState and useReducer hooks are the React API to manage local state in a React component, they can also come at a cost of being called too often making the component to re-render for each call made to the update functions.</p>
                </article>
            </div>
        </div>
    );
};

export default Blog;