# PROJECT_NAME

> TODO_DESCRIPTION

# TODO

Suposing your project name is `my-cli-tool` and your github url is `https://github.com/azukiapp/my-cli-tool`:

- rename bin file PROJECT_NAME.js to PROJECT_NAME.js:

```sh
$ find . -name 'PROJECT_NAME.js' -type f -exec bash -c 'mv "$1" "${1/PROJECT_NAME.js/my-cli-tool.js}"' -- {} \;
```

- search and replace **code** for all `PROJECT_GITHUB_URI` to `https://github.com/azukiapp/my-cli-tool`
- search and replace **code** for all `PROJECT_NAME` to `my-cli-tool`
- search `TODO` in code and replace with right values. Do not forget `CHANGELOG`.md and `LICENSE` files.
- delete this section

### Install

```sh
npm install PROJECT_NAME -g
```

### Run

```sh
  $ PROJECT_NAME             # TODO_DESCRIPTION
```

### Test and run locally

```sh
npm test
node ./bin/PROJECT_NAME.js -h
```

