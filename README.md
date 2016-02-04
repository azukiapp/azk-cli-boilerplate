# REPLACE_PROJECT_NAME

> REPLACE_TODO_DESCRIPTION

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
git add . -A
git commit -m"[Project] Initial version from boilerplate"

```

### Replaces in files/code

```sh
find . -name 'REPLACE_PROJECT_NAME.js' -type f -exec bash -c 'mv "$1" "${1/REPLACE_PROJECT_NAME.js/my-cli-tool.js}"' -- {} \;
```

Replace destinations are just example, **change** to real values

```
find . -type f -name "*js*" -not -path "./node_modules/*" -exec sed -i 's/REPLACE_PROJECT_GITHUB_URI/https:\/\/github.com\/azukiapp\/my-cli-tool/g' {} +

find . -type f -name "*js*" -not -path "./node_modules/*" -exec sed -i 's/REPLACE_PROJECT_NAME/my-cli-tool/g' {} +

find . -type f -name "*js*" -not -path "./node_modules/*" -exec sed -i 's/REPLACE_TODO_DESCRIPTION/My Incredible Cli Tool/g' {} +

find . -type f -name "*js*" -not -path "./node_modules/*" -exec sed -i 's/REPLACE_TODO_BIN_DESCRIPTION/Run incredible main function/g' {} +

find . -type f -name "*js*" -not -path "./node_modules/*" -exec sed -i 's/REPLACE_TODO_AUTHOR/The Author/g' {} +
```

- search all other `TODO` in code and replace with right values. Do not forget `CHANGELOG`.md and `LICENSE` files.
- delete this section

### Install

```sh
npm install REPLACE_PROJECT_NAME -g
```

### Run

```sh
REPLACE_PROJECT_NAME             # REPLACE_TODO_DESCRIPTION
```

### Test and run locally

```sh
npm test
node ./bin/REPLACE_PROJECT_NAME.js -h
```

