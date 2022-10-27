import React from "react";
import Accordion from "react-bootstrap/Accordion";
const Blog = () => {
  return (
    <div className="w-75 mx-auto mt-4">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is CORS ?</Accordion.Header>
          <Accordion.Body>
          CORS stands for Cross-Origin Resource Sharing. CORS is a protocol and security standard for browsers that helps to maintain the integrity of a website and secure it from unauthorized access.It enables JavaScripts running in browsers to connect to APIs and other web resources like fonts, and stylesheets from multiple different providers. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
          <Accordion.Body>
          Firebase allows you to track your users' journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices.Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets. For instance, you can import dummy data from Google Sheets and use it temporarily to serve your app.<br></br>
          Firebase provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google.Firebase Authentication is a tool in the User Management and Authentication category of a tech stack.Auth0, MongoDB, Passport, Okta are the most popular options to implement authentication.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How does the private route work?</Accordion.Header>
          <Accordion.Body>
          The private route component is used to protect selected pages in a React app from unauthenticated users.The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).<br></br>
          The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
          <Accordion.Body>
             <li>Node.js is an open source server environment</li>
             <li>Node.js is free</li>
             <li>Node.js uses JavaScript on the server</li>
             <li>Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)</li>
             It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.Node JS Web Server internally maintains a Limited Thread pool to provide services to the Client Requests. Node JS Web Server receives those requests and places them into a Queue. It is known as “Event Queue”. Node JS Web Server internally has a Component, known as “Event Loop.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
