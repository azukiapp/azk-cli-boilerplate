# PROJECT_NAME

> TODO_DESCRIPTION

# TODO

Suposing your project name is `my-cli-tool` and your github url is `https://github.com/azukiapp/my-cli-tool`.

## unzip and initialize git

```sh
wget https://github.com/azukiapp/azk-cli-boilerplate/archive/master.zip
unzip master.zip
mv azk-cli-boilerplate-master my-cli-tool
rm master.zip
cd my-cli-tool
git init

```

## configuration

- rename bin file PROJECT_NAME.js to PROJECT_NAME.js:

```sh
find . -name 'PROJECT_NAME.js' -type f -exec bash -c 'mv "$1" "${1/PROJECT_NAME.js/my-cli-tool.js}"' -- {} \;
```

### code replaces

Replace destinations are just example, **change** to real values

- `PROJECT_GITHUB_URI`   to `https://github.com/azukiapp/my-cli-tool`
- `PROJECT_NAME`         to `my-cli-tool`
- `TODO_DESCRIPTION`     to `My Incredible Cli Tool`
- `TODO_BIN_DESCRIPTION` to `Run incredible main function`
- `TODO_AUTHOR`          to `Cunha Kleptus`

- search all other `TODO` in code and replace with right values. Do not forget `CHANGELOG`.md and `LICENSE` files.
- delete this section

### Install

```sh
npm install PROJECT_NAME -g
```

### Run

```sh
PROJECT_NAME             # TODO_DESCRIPTION
```

### Test and run locally

```sh
npm test
node ./bin/PROJECT_NAME.js -h
```

