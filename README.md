AWS Lambda Web
==============

Provides Web Platform API features for AWS Lambda functions.

Currently supported (on global object):
  - [Fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API),
  - [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

Small example of using promises and fetch API:

```js
require('aws-lambda-web')(exports, function handler(event) {
    return fetch('https://www.google.com/search?q=' + encodeURIComponent(event.search)).then(function(response) {
	    return response.text();
    }).then(function(text) {
        var rx = /<h3 class="r"><a href="(?:\/url\?q=)?([^&>"]+)[^>]*>([^<]+)<\/a><\/h3>/;
        var match = text.match(rx);
        if (match) {
            return {
                link: match[1],
                text: match[2]
            };
        }
    });
});
```
