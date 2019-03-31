# How to add new game systems

N.b assumes you are comfortable with [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and [React](https://reactjs.org/).

Munitorum supports multiple game systems, read on for how to add support for new ones.

## Overview

Game systems are represented by subclassing [`Game`](src/rules/game.js).  See that file for a discussion of fields and methods the subclass should implement.

`/src/rules/games` contains a list of available game systems. Each game has a folder under that path (e.g. `/src/rules/games/my-game`). When creating this folder for your game system, you should add the following files:

### `/src/rules/games/my-game/with-type.js`

Each army list is stored in a redux store between page loads. Lists leave the store as vanilla JavaScript objects, but we want to convert them to instances of classes.

We use the function exported by `/src/utils/with-type.js` to decorate classes with fields that let us easily convert back and forth between vanilla JavaScript objects and classes.

Your game should export the return value of `/src/utils/with-type.js` from `/src/rules/games/my-game/with-type.js` when invoked with a unique string:

```javascript
// /src/rules/games/my-game/with-type.js
'use strict'

import withType from '../../../utils/with-type'

export default withType('my-game')
```

All classes exported by your game should be passed to this function:

```javascript
// /src/rules/games/my-game/units/my-army.js
import withType from '../../utils/with-type'

export class MyUnit {
  //... methods, etc
}

withType(MyUnit)
```

### `/src/rules/games/my-game/index.js`

Your game system should start with a subclass of [`Game`](src/rules/game.js).  `index.js` should export a singleton.
