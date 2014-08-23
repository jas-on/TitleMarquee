titlemarquee.js
=========

Usage
-----

```javascript
var tm = new TitleMarquee({displayText: "Hello there!"});
tm.start(); //start the marquee
tm.stop(); //stop the marquee
tm.configure({displaySpeed: 4000}) //configure the marquee
```
###Things to configure
```javascript
{
  "displayText": "Hello", //text to show in document.title

  "displaySpeed": 1000, //speed in ms at which to move the text

  "spaceBetween": 10, //amount of space between the front and end of the text for when it wraps around

  "separator": "~~~" //what to use as a unit in spaceBetween
}
```
