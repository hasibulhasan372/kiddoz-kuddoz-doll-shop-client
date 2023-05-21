import useTitle from "../../customHooks/useTitle";


const Blog = () => {
    useTitle("blog")
    return (
        <div className="my-con">
            <div className="lg:py-20 p-10">
                <h1 className=" text-3xl font-bold pb-5">1. What is an access token and refresh token? How do they work and where should we store them? </h1>
                <p>
                    <span className="text-xl font-semibold pb-4">Access Token: </span> Access tokens are used in token-based authentication to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then Passes the access token as a credential when it calls the target API. The passed token informs the API that the bearer of the token has been authorized to access the API and perform specific actions specified by the Scope that was granted during authentication
                </p>
                <p>
                    <span className="text-xl font-semibold pb-4">Refresh Token: </span> The Refresh token is used to generate a new access token. I the access token has an expiration date, once it expires, the user would have to authenticate again to obtain an access token.
                </p>
                <p>
                    <span className="text-xl font-semibold pb-4">How Access Token Works and Store: </span> Access tokens are used in token-based authentications to allow an application to access an API. For example, a calendar application  needs access to a Calendar API in the cloud so that it can read the user's scheduled events and create new events. Once an application has received an access token, it will include that token as a credential when making API requests. It should transmit the access token as the API as a Bearer credential in an HTTP Authorization header.

                    There are two ways to store save Access token :
                    1. Cookies and
                    2. HTML5 Web Storage
                </p>

                <p>
                    <span className="text-xl font-semibold pb-4">How Refresh Token Works and Store: </span> First create an express app and them implement two routes login and refresh. The login route will get a post request, then it will check the credential if they match it will send a refresh token and access token in response. The refresh route will also get a post request it will verify the refresh token in response. The refresh route will also get a post request it will verify the refresh token, if it is correct then it will response with a new access token otherwise throw an authorization error.
                    <br />
                    There are Three ways to store Refresh token ---
                    1. In-memory JavaScript Variable. <br />
                    2. Storing the access token in local storage and sending it via a Bearer access_token and use httpOnly cookies for the refresh token. <br />
                    3. httpOnly Cookies
                </p>
            </div>
            <div className="lg:py-20 p-10">
                <h2 className=" text-3xl font-bold pb-5">2. What are the differences between SQL and NoSQL Database</h2>

                <p>
                    1. SQL ia a relational database and declarative. Non SQL is non- relational. <br />
                    2. SQL ia a Structural Query Language and have a predefined scheme and NoSQL databases have dynamic schemes for    unstructured data. <br />
                    3. SQL databases are vertically scalable and NoSQL are horizontally scalable. <br />
                    4. SQL are table based and NoSQL are document, key-value, graph, or wide-column stores.<br />
                    5. SQL are better for multi-row transactions, but NoSQL is better for unstructured data like documents or JSON
                </p>
            </div>
            <div className="lg:py-20 p-10">
                <h2 className=" text-3xl font-bold pb-5"> 3. What is Express JS ? And What is Nest JS?</h2>
                <p>
                    <span className="text-xl font-semibold">Express JS: </span> Express is a minimal and flexible node.js web application framework that provides a robust set of features for web and mobile application. Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love. It is a most popular web framework for Node.js. Express is an un-opinionated framework, meaning that it allows developers the freedom to structure their code how they choose instead of forcing a particular code structure. 
                </p>
                <p>
                    <span className="text-xl font-semibold">Nest JS: </span> Nest.js is a framework that helps build Node.js server-side applications. The nest framework is built using TypeScript which allows developers to build highly scalable and testable applications. Nest.js is created for monoliths as well as microservices. We can build Rest APIs, MVC applications, GraphQL Applications, Web Sockets or CLIs. Nest.js is written in typeScript, error detection at compile time safeguard the code and avoids error while writing multiple microservices.   
                </p>
            </div>

            <div className="lg:py-20 p-10">
                <h1 className=" text-3xl font-bold pb-5"> 4. What is MongoDB aggregate and how dose it work?</h1>
                <p>
                    <span className="text-xl font-semibold">MongoDB Aggregate: </span> Aggregation is way of processing a large number of documents in a collection by means of passing  them through different stages. The stages make up what is known as a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline. <br />
                    Common uses of Aggregation is to calculate aggregation is to calculate aggregate values for groups of documents. This is similar to the basic aggregation available in SQL with the GROUP BY clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes further through and can also perform relational-like joins, reshape documents, create new and update existing collections and many more.

                    <br />
                    <span className="text-xl font-semibold">Aggregation Works: </span> We can explain it like a pipeline- <br /> 1. The input of the pipeline can be a single collection, where others can be merged later down the pipeline. <br />
                    2. Filter documents we need to work with, those that fit our need. <br />
                    3. In this stage dose the aggregation job.
                    <br />
                    4. Sort the resulting documents the way we require.

                    <br /> 
                    The pipeline then performs successive transformations on the data until our goal is achieved  
                </p>
            </div>


        </div>
    );
};

export default Blog;