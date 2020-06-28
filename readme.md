# Phaser Starter - Is great

A typescript webpack phaser3 game starter project. This provides a more ridget development environment from the get go. It includes ava for unit tests. It uses husky to lint commit messages.
***Additionally unit tests must pass and code must be linted before commits are allowed.***

This starter project was inspired by the official [Phaser 3 Typescript Project Template](https://github.com/photonstorm/phaser3-typescript-project-template). This is a great example to get typescript working but I wanted to use webpack and to use Eslint Standard.

I borrowed some ideas for organizing scenes and sprites by extending the Phaser class form the excellent [phaser3-es6-webpack](https://github.com/nkholski/phaser3-es6-webpack). If you want to see a great example on how to create a mario style platform game. This project shows you how to do it. But most importantly It was helpful in detailing how to properly extend Phaser clases and break apart your code into separate modules. I also took the liberty of borrowing the loading > title > game scene ideas.

### Why Use This Starter?
If you want a clean project that will help you white better commit messages and clean commit code this project is for you.

Try the [DEMO](https://phaser-starter.patomation.com/)!


![screen_shot](https://raw.githubusercontent.com/patomation/phaser-starter/master/phaser_starter.png)

## Getting Started
### Install
```bash
npm install
```
### Run
```bash
npm start
```


### Deploying to itch.io
Deploying a game to itch.io requires a zip file or using the [Butler](https://itch.io/docs/butler/) command line tool. However this project includes a github action that will build webpack and deploy to itch.io for you. 


1. Update deploy file with your user name and game name.

```.github/workflows/deploy.yml```

  Change *userName* and *gameName() to your own values.

2. Get BUTLER_API_KEY

[Get Itch.io Api Key](https://itch.io/user/settings/api-keys)

3. Set BUTLER_API_KEY environment variable for your repo
```https://github.com/userName/gameName/settings/secrets```

4. Click "New Secret"
Name: use ```BUTLER_API_KEY```
Value: [ the generated key]

5. Commit your code and add a git tag
```
git tag v1
```

6. Push the tags
```
git push --tags
```

7. Watch in github.com > repo > actions as you site gets deployed

```https://github.com/userName/gameName/actions```