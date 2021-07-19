---
title: 'How Multiple Requests Work with Single Thread, Event Loop & Blocking Code'
date: '2021-03-18'
image: 'how-multiple-requests-work-with-single-thread-event-loop-and-blocking-code.png'
slug: 'how-multiple-requests-work-with-single-thread-event-loop-and-blocking-code'
excerpt: 'It is essential to keep in mind that Node.js only uses one JavaScript thread. The question here is, how do we make multiple requests? Event Loop — The event loop does not handle the incoming file but it does '
isFeatured: false
---

It is essential to keep in mind that Node.js only uses one JavaScript thread.

The question here is, how do we make multiple requests?

**Event Loop —** The event loop does not handle the incoming file but it does handle the callback so that when our code is sent to the worker pool, where the heavy lifting for our app takes place, it will then trigger the callback once the worker pool is done (like when we write a file), which is then handled by the event loop.

**Worker Pool:** The worker pool works independently of both the event **loop** and the **request**. This will run on a separate thread from the event loop.

![worker pool](how-multiple-requests-work-with-single-thread-event-loop-and-blocking-code2.png)

**More on The Event Loop**

The event loop is run by Node.js. It keeps Node.js running, and handles all the Worker Pool callbacks. It does this by lopping over Node.js code. Keep in mind that the event loop has an order in which it goes through the callbacks.

**Event Loop Order:**

At the beginning of each loop, the event loop:

- First checks to see if there are any Timers such as SetTimeout, setInterval these are all callbacks()
- Then, the event Loop will check to see if there are and Pending callbacks() that might have been deferred. If those callback() operations are finished, the event loop would then, in turn, execute said callback().
- Poll: After the above have been looped through, the poll phase will begin. This basically means that the event loop will retrieve any new I/O events and execute their callbacks. If the callbacks can not be completed, it will then defer that callback and come back on the next iteration and check back to see if it is ready to be executed. The poll phase will also check if there are any timer callbacks due to be executed and if so, will jump to timer execution.
- Check will execute immediate callbacks() and only execute after all other open callbacks have been either executed or deferred.
- Close: Now at the end of the event loop iterations, Node.js will execute any fast event callbacks().

* Finally we might exit the process, but only if there are any open event listeners.

- Poll Phase aesthetic example

![pool phase](how-multiple-requests-work-with-single-thread-event-loop-and-blocking-code3.png)

Poll phase aesthetic example (when checking timer callbacks)

Event listeners on the Node.js server

When we open an event listener with Node.js createServer(), this is an infinite reference that will never close, so our event loop will never exit.

In other words, the createServer() method by default never exits.

That’s it. Hope you found this article helpful. Thank you.
