# bazel-nuxt

> My good Nuxt.js project

## Build Setup (with yarn)

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Build Setup (with bazel)

```bash
$ bazel run //:nuxt
```


## Current bug

### Yarn render

![yarn render](https://github.com/albttx/bazel-nuxt/blob/master/assets/output-yarn.png?raw=true)

### Bazel render
![bazel render](https://github.com/albttx/bazel-nuxt/blob/master/assets/output-bazel.png?raw=true)
