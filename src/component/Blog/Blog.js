import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div>
            <div className='question-blog'>
                <h3 className='question-design'>1. Difference between javascript and nodejs</h3>
                <p className='question-answer'>Javascript is a heigh level programming language. NodeJS is a Javascript runtime environment and it's called a framework.
                    Javascript can run only browsers. Javascript can run without browser with help of node js. Javascript can run in any browser engine.
                    V8 is the Javascript engine inside of node.js that parses and runs Javascript. Javascript is used in frontend development.
                    Nodejs is used in backend development. Some of the javascript frameworks are RamdaJS, TypedJS, etc. Some of the Nodejs modules are Lodash, express etc.  </p>

                <h3 className='question-design'>2. Differences between sql and nosql databases.</h3>
                <p className='question-answer'>Sql means relationalL database management sysstem. Nosql means non-relational or distributed database system.
                    Sql database have fixed or static schema.Nosql database have dynamic schema. Sql database support many query and join relation. Onthe other hand
                    nosql does not support any join relation. Where we put data it;called table in sql database. Where we put data it's called collection in nosql database.
                    Sql databases are not suited for hierarchical data storage. Nosql databases are best suited for hierarchical data storage.
                    Sql databases supporte for complex queries. Nosql database do not supporte for complex queries.
                    Sql databases is Vertically Scalable. Nosql is databases Horizontally scalable.</p>

                <h3 className='question-design'>3.  What is the purpose of jwt and how does it work</h3>
                <p className='question-answer'>JWT or JSON Web token is an open source used to for security information between two sides a client and a server.
                    Each JWT contains encoded JSON objects, including a set of claims. JWT are signed using a cryptographic algorithm to ensure
                    that the claims cannot be altered after the token is issued. JWT are mainly used for authentication. After a user logs in to an
                    application, the application will create a JWT and send it back to the user. Subsequent requests by the user will include the JWT.
                    The token tells the server what routes, services, and resources the user is allowed to access</p>
            </div>
        </div>
    );
};

export default Blog;