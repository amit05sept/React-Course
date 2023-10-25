# Points to remember

1. Our App can not only work with react, it needs many other things also.
2. These other things are provided by to us by the **Parcel** which is a **Bundler**
3. **Parcel** provide us some great functionlities which make our app really great.
4. Few such functionalities are:
   * HMR : hot module replacement
   * It cleans the code
   * removes console.logs
   * image optimization
   * caching while development
   * it does compression
   * it does renaming of our variables 
   * It provides HTTPS on development
   * manages Port numbers
   * zero configuration
   * It uses consistent Hashing Algorithm.
5. Before the installation of bundler we need a package manager which is **NPM**. 
6. We do `npm init` or `npm init -y` to skip options while installing.
7. `npm init` produces something called **package.json** file.
8. To install parcel `npm install -D parcel` or `npm install --save-dev parcel`
9. `npm install -D parcel` gives us two things
    * **node_modules** folder
    * **package_lock.json** file
10. *node_modules folder* has all the packages that parcel needs or our app needs, those packages might need something that is also present in NPM this is called *Transitive dependencies* or *dependency tree*. 
11. Now we have to import **react** and **react-dom** into our project file **App.js** for which we need to include.
    * `import React from 'react';`
    * `import ReactDOM from 'react-dom/client';`
12. Now to run our APP we need to provide execute command
    * `npx parcel index.html`, here index.html is the entry point to aur APP.
13. `npx parcel index.html` gives two folders
    * **dist** folder
    * **.parcel-cache** folder
14. *dist* folder contains all the minified files and production build files.
15. *dist* only contains 3 files *index.html* , *index.css*, and *index.js*.
16. All these files are compressed for optimization of the APP.
17. there are three types of dependencies that are found in this file. They are **dependencies**, **dev dependencies**, and **peer dependencies**. 
18.  **Dependencies:** Dependencies that your project needs to run, like a library that provides functions that you call from your code.
They are installed transitively (if A depends on B depends on C, npm install on A will install B and C).
Example: lodash: your project calls some lodash functions.
19.  **Dev Dependencies:** Dependencies you only need during development or releasing, like compilers that take your code and compile it into javascript, test frameworks or documentation generators.
They are not installed transitively (if A depends on B dev-depends on C, npm install on A will install B only).
  * example : Installing the bootstrap module that we want to use in the development phase only and not in the production or testing phase for the project,
  *  use the following command: `npm install bootstrap --save-dev`
20.  A **peer dependency** specifies that our package is compatible with a particular version of an npm package.  or What [plugins] need is a way of expressing these “dependencies” between plugins and their host package. Some way of saying, “I only work when plugged in to version 1.2.x of my host package, so if you install me, be sure that it’s alongside a compatible host.” We call this relationship a peer dependency.
21.  node_modules + dist + .parcel-cache needs to be added to .gitignore 
22.  READ from your copy notes 😅
23.  rest i will add after few days.