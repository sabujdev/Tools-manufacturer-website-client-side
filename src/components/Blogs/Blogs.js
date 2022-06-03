import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold text-sky-400 mt-10">
        BLOGS
      </h1>
      <div className="text-left py-6 mb-32 md:w-3/4 mx-auto p-2">
        <div className="qna my-2 p-1 shadow-sm">
          <h1 className="text-xl font-bold text-sky-400 my-2">
            1 ) How will you improve the performance of a React application ?
          </h1>
          <h2 className="ml-1">
            <span className="font-bold">Ans : </span> <br />
            React (modern front-end library) doesn’t magically make your app
            faster bro. It requires the developer to understand how React works
            and how the components live through the various phases of the
            component lifecycle. you can gain a lot of the performance
            improvements that it has to offer by measuring and optimizing how
            and when your components render. And, React provides just the tools
            and functionalities necessary to make this easy.
          </h2>
        </div>

        <div className="qna my-2 p-1 shadow-sm">
          <h1 className="text-xl font-bold text-sky-400 my-2">
            2 ) What are the different ways to manage a State in React
            application ?
          </h1>
          <h2 className="ml-1">
            <span className="font-bold">Ans : </span> <br />
            a) Custom Hooks <br />
            When using React hooks, you can sometimes end up with incredibly
            complex state logic within one component that utilizes multiple
            types of hooks to achieve one purpose. <br />
            <br />
            b) Global State Management <br />
            In most cases, you don’t need any state management library. Only in
            larger applications that are dealing with complex states should you
            bring in an external library to manage it. <br />
            c) useReducer for Complex State <br />
            Sometimes the useState hook won’t cut it, especially when dealing
            with complex state behavior that may involve large objects. The
            useReducer hook is a powerful provided React hook for dealing with
            complex state management that doesn’t require third-party
            dependencies. Also, it reduces the amount of data recreated with
            each render <br />
            <br />
          </h2>
        </div>
        <div className="qna my-2 p-1 shadow-sm">
          <h1 className="text-xl font-bold text-sky-400 my-2">
            3) What is the unit test why should write unit tests ?
          </h1>
          <h2 className="ml-1">
            <span className="font-bold">Ans : </span> <br />
            In computer programming, unit testing is a software testing method
            by which individual units of source code—sets of one or more
            computer program modules together with associated control data,
            usage procedures, and operating procedures—are tested to determine
            whether they are fit for use <br />
            Unit tests are typically automated tests written and run by software
            developers to ensure that a section of an application (known as the
            "unit") meets its design and behaves as intended
          </h2>
        </div>
        <div className="qna my-2 p-1 shadow-sm">
          <h1 className="text-xl font-bold text-sky-400 my-2">
            4) How dose prototypical inheritance work?
          </h1>
          <h2 className="ml-1">
            <span className="font-bold">Ans : </span> <br />
            in programing paradigm class is a blueprint for creating objects if
            you want reuse the functionalities of existing class you will create
            a new class that extends the existing class this is called classical
            inheritance javascript doesn't use classical inheritance it use
            prototypical inheritance in prototypical inheritance an object
            inherit props from another object via the prototype linkage. by
            default the javascript engine provides you with a built in Object()
            function and an anonymous object that can be referenced by the
            Object.prototype;
          </h2>
        </div>
        <div className="qna my-2 p-1 shadow-sm">
          <h1 className="text-xl font-bold text-sky-400 my-2">5) Why you do not set the state directly in react?</h1>
          <h2 className="ml-1">
            <span className="font-bold">Ans : </span> <br />
            The only place where we can assign this.state is the constructor.
            React may batch multiple setState() calls into a single update for
            performance. Because this.props and this.state may be updated
            asynchronously, you should not rely on their values for calculating
            the next state.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
