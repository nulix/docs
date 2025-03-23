# NULIX OS documentation

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Create docker container

```sh
docker run --rm -it -p 3000:3000 -v .:/docs -w /docs node:alpine sh
```

### Build

```
$ yarn
```

### Local Development Server

```
$ yarn start -- --host 0.0.0.0
```

This command starts a local development server on port 3000. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

