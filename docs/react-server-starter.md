<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/react-server-starter.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/react-server-starter.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/react-server-starter.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/react-server-starter.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/react-server-starter.template.md` instead.






-->
<p align="right">
    <sup>
        <a href="#">
            <img
              src="https://github.com/reframejs/reframe/raw/master/docs/images/star.svg?sanitize=true"
              width="16"
              height="12"
            >
        </a>
        Star if you like
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;
        <a href="https://github.com/reframejs/reframe/blob/master/docs/contributing.md">
            <img
              src="https://github.com/reframejs/reframe/raw/master/docs/images/biceps.min.svg?sanitize=true"
              width="16"
              height="14"
            >
            Co-maintain Reframe
        </a>
    </sup>
    <br/>
    <sup>
        <a href="https://twitter.com/reframejs">
            <img
              src="https://github.com/reframejs/reframe/raw/master/docs/images/twitter-logo.svg?sanitize=true"
              width="15"
              height="13"
            >
            Follow on Twitter
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;
        <a href="https://discord.gg/kqXf65G">
            <img
              src="https://github.com/reframejs/reframe/raw/master/docs/images/chat.svg?sanitize=true"
              width="14"
              height="10"
            >
            Chat on Discord
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
    </sup>
</p>
<p align="center">
    <a href="https://github.com/reframejs/reframe">
        <img src="https://github.com/reframejs/reframe/raw/master/docs/images/logo-with-title.min.svg?sanitize=true" width=450 height=94 style="max-width:100%;" alt="Reframe"/>
    </a>
</p>

<div><p align="center">
    Framework to create web apps.
</p></div>

<div><p align="center">
    <sub><sub><img src="https://github.com/reframejs/reframe/raw/docs/docs/images/thunderbolt.min.svg?sanitize=true" width="26" height="26"></sub></sub>&nbsp;&nbsp;<b>Rapid&nbsp;Dev</b>&nbsp;&nbsp;&#8209;&nbsp;&nbsp;Implement&nbsp;apps&nbsp;in&nbsp;no&nbsp;time.
    &nbsp; &nbsp; &nbsp; &nbsp;
    <sub><sub><img src="https://github.com/reframejs/reframe/raw/docs/docs/images/tornado.min.svg?sanitize=true" width="26" height="26"></sub></sub>&nbsp;&nbsp;&nbsp;<b>Fully&nbsp;Flexible</b>&nbsp;&nbsp;&#8209;&nbsp;&nbsp;Easily&nbsp;and&nbsp;progressively&nbsp;ejectable.
</p></div>

<br/>

[Overview](/../../)<br/>
[React Frontend Starter](/docs/react-frontend-starter.md) | [**React Server Starter**](/docs/react-server-starter.md) | [React Database Starter](/docs/react-database-starter.md) | [React Starter](/docs/react-starter.md)<br/>
[Usage Manual](/docs/usage-manual.md)<br/>
[Concepts](/docs/concepts.md)<br/>
[Plugins](/docs/plugins.md)

<br/>

# React Server Starter

Create a web app with
 - React front-end
 - Node.js server

To create other kind of apps, see the [list of starters]().

- [Example]()
- [Quick Start]()
- Usage Basics
  - Frontend
    - [Page Async Data]()
    - [CSS & Static Assets]()
    - [`doNotRenderInBrowser`]()
  - Server
    - [Hapi Alternatives (Express, Koa, ...)]()
  - [Deploy]()

<br/>
<br/>

## Example

We create a web app
by defining a page config `HelloPage`.

~~~jsx
// ~/my-app/pages/HelloPage.config.js

// By default you write your views with React.
// You can use another view library such as Vue.
import React from 'react';

const HelloPage = {
  route: '/hello/:name', // Parameterized route
  title: 'Hi there', // Page's <title>
  view: props => {
    // The route argument `name` is available at `props.route.args`
    const name = props.route.args.name;
    return (
      <div>Hello {name}</div>
    );
  }
};

export default HelloPage;
~~~

Reframe does the rest:

<p align="center">
    <img src='https://github.com/reframejs/reframe/raw/master/docs/images/reframe-start.png?sanitize=true' width="780" style="max-width:100%;"/>
</p>

<br/>
<br/>

## Quick Start

1. Install the Reframe CLI.
   ~~~shell
   $ npm install -g @reframe/cli
   ~~~

2. Initialize a new Rreframe app.
   ~~~shell
   $ reframe init my-app
   ~~~
   A `my-app/` directory is created and populated with a scaffold.

3. Build the pages and start the server.
   ~~~shell
   $ cd my-app
   $ reframe start
   ~~~

4. Open [http://localhost:3000](http://localhost:3000).

To get started, go through the quick start and read all the usage basics.
For further usage information, look up the usage manual.

<br/>
<br/>


## Usage Manual

### CSS & Static Assets

### Page Async Data

### `doNotRenderInBrowser`

### Hapi Alternatives (Express, Koa, ...)

### Deploy

<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/react-server-starter.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/react-server-starter.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/react-server-starter.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/react-server-starter.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/react-server-starter.template.md` instead.






-->