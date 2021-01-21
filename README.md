# Anti spam

**Installation**

```
npm i discord-anti-spam
```

# Usage

**Check**

This method is used to check for spam in a message event this is the only method of this package and takes a total of 4 arguments in this order the number of times will be a number not a string
```
message, no of times for mute, no of times for kick, no of times for ban
```
```javascript
const spam = require('discord-anti-spam')
<client>.on('message', message => {
spam.spamcheck(message, 2, 5, 10) /* 2 is the times of spam for mute 5 is for kick 10 is for ban */
})
```