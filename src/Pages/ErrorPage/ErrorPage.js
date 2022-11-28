import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div class="flex flex-col h-screen bg-white dark:bg-gray-900">
                <img
                    src="https://atlassianblog.wpengine.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png"
                    alt=""
                    class="object-cover w-full h-64"
                />

                <div class="flex items-center justify-center flex-1">
                    <div class="max-w-xl px-4 py-8 mx-auto text-center">
                        <h1
                            class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
                        >
                            We can't find that page.
                        </h1>

                        <p class="mt-4 text-gray-500 dark:text-gray-400">
                            Try searching again, or return home to start from the beginning.
                        </p>

                        <Link
                            to="/"
                            class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
                        >
                            Go Back Home
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;