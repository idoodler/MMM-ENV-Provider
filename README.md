# MMM-ENV-Provider
This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

MMM-ENV-Provider provides the environmental variables as a webservice `/env`

# Installation
Navigate into your MagicMirror's `modules` folder:

````shell
cd ~/MagicMirror/modules
````

Clone this repository:

````shell
git clone https://github.com/idoodler/MMM-ENV-Provider
````

# Update the module
Navigate into the `MMM-ENV-Provider` folder with `cd ~/MagicMirror/modules/MMM-ENV-Provider` and get the latest code from github with `git pull`.

If you haven't changed the modules, this should work without any problems. Type `git status` to see your changes, if there are any, you can reset them with `git reset --hard`. After that, `git pull` should be possible.

# Using the module
To use this module, add the following configuration block as the first element of the modules array in the `config/config.js` file:
```js
{
    module: 'MMM-ENV-Provider'
}
```

# Use it in `config.js`
Add the following function in the `config.js` file:

````js
function getEnv(envKey) {
    if (typeof module !== "undefined") {
        return process.env[envKey];
    } else {
        try {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", "/env", false);
            xmlhttp.send();
            if (xmlhttp.status === 200) {
                return JSON.parse(xmlhttp.responseText)[envKey];
            } else {
                throw "Unexpected status code!";
            }
        } catch (e) {
            console.error(e);
            return null;
        }
    }
}
````
Use the function like this:
````js
getEnv("MY_ENV");
````


# License
The MIT License (MIT)

Copyright (c) 2018 David Gölzhäuser

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.