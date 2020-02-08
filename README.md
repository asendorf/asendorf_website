# Nick's Personal Website

I used this as a side project to learn a little more about front-end design. I'm choosing
to deploy a REACT app via github pages. I'll use the README here to document my process
and debugging.

### Getting started

First, I install node
```
sudo apt-get install nodejs
sudo apt-get install npm
```
Then I installed
```
sudo npm install -g create-react-app
```
And created the React app via
```
create-react-app asendorf.github.io
```
If everything worked, you should be able to run `npm start` and then go to `localhost:3000` to see the React template. Success!

### Creating a Shell
So now let's create a dummy page so that we can deploy it. I found [this](https://www.taniarascia.com/getting-started-with-react/) pretty helpful.

Here were some extra things I needed to install
```
npm install react-router-dom axios
npm install react-bootstrap bootstrap
npm i jquery popper.js
npm install -g gh-pages --save-dev
```

### Deploying
[This](https://itnext.io/so-you-want-to-host-your-single-age-react-app-on-github-pages-a826ab01e48) was super helpful

[Routing](https://levelup.gitconnected.com/deploying-a-create-react-app-with-routing-to-github-pages-f386b6ce84c2)