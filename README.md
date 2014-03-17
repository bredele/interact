# Interact ![experimental](http://img.shields.io/badge/stability-experimental-orange.svg) 

  > Interact creates a peer to peer connection between your desktop and your mobile device.

See [remote controller](http://www.youtube.com/watch?v=D7EFot_kmS0) or [drawing board](http://www.youtube.com/watch?v=9iyTxBj-3F8). 


## Installation

    $ npm install interact

## Getting started

### Server

 `Interact` is a nodejs server. It's API inherits from [express](https://github.com/visionmedia/express) and is very clean and easy. Let's say you want to create a communication channel called `foo`:

```js
var app = require('interact')();

//create coomunication channel
app.room('foo', 'view');
```

  > see [api](#api) for more details.

Well, that's it! Nothing more.

### Client

 `Interact` is also a web socket client.

```html
<script src="/interact/interact.js"></script>
```

 Communicate with an interact server is dead simple!

```js
var channel = interact('foo');
channel.emit('next');
channel.on('previous', function() {
 //do something
});
```

### Ecosystem

 My wish is to create an ecosytem of self-contained apps around `Interact`. An app is a service that you could reuse multiple times and in separate projects. For example, use your mobile as a remote controller and pair it (thanks to a qrcode) with a web presentation (slides) would be as easy as:

```js
interact('foo')
  .use(qrcode)
  .use(controller)
  .use(slides)
```

## API

### Server

#### app.room(name, view, token)

 Create an interact room. A room is a peer to peer channel between a client and your server.

```js
app.room('foo', 'view');
```
 The second argument is a view redirection. It's the view the server will serve to the client. 

