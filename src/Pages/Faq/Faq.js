import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="bg-gradient-to-r from-[#164e63] to-[#0c4a6e] text-white">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase"></p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-white">Some Important Questions & Answer</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold text-white text-2xl mb-4 text-cyan-200">What are the different ways to manage a state in a React application?</h3>
                            <p className="mt-1  text-white"> There are four main types of state We need to properly manage in Our React apps:

                                Local state
                                Global state
                                Server state
                                URL state </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white text-2xl mb-4 text-cyan-200">How does prototypical inheritance work?</h3>
                            <p className="mt-1 text-white">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.

                                <br />

                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white text-2xl mb-4 text-cyan-200">What is a unit test? Why should we write unit tests?</h3>
                            <p className="mt-1 text-white">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white text-2xl mb-4 text-cyan-200">React vs. Angular vs. Vue?</h3>
                            <p className="mt-1  text-white">Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;