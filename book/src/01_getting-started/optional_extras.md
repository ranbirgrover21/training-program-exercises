# Optional Extras and Recommendations

Here is a list of additional recommendations for plugins and tools which aren't necessary but will improve your coding experience.

## VSCode Extensions and Themes

It is recommended to install a theme and any extensions you would enjoy, below are a few suggestions:

Themes and Aesthetics:

- [Catppuccin for VSCode](https://marketplace.visualstudio.com/items?itemName=Catppuccin.catppuccin-vsc)
- [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) - for better icons

Utility:

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - enable auto format on save to maximise utility
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - enables you to run local servers for development
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - for editing HTML/XML tags
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - display errors inline to avoid hovering
- [Git Lens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - displays more Git information
- [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)

For fun:

- [Discord Presence](https://marketplace.visualstudio.com/items?itemName=icrawl.discord-vscode) - connect VSCode with Discord activity
- [Vs Code Pets](https://marketplace.visualstudio.com/items?itemName=tonybaloney.vscode-pets)

## Web Browsers

As a web developer, you should also have a variety of browsers installed on your system. I would at least recommend the following two:

1. [Google Chrome](https://www.google.com.au/intl/en_au/chrome/)
   - Widely used by most people and is the best for JavaScript debugging.
2. [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/) or [FireFox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/):
   - FireFox has a much better suite of CSS and styling tools.
   - Developer Edition provides more developer features particularly for flex box and grids.

You can read much more about these web browsers on their respective pages or online.

## Zsh Autosuggestions

This is a zsh plugin which will give you suggestions for your command line based on your previously used commands. To install it simply clone the repo into `$ZSH_CUSTOM/plugins`:

```sh
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

Then add the plugin to the list of plugins for Oh My Zsh to load (inside `~/.zshrc`) and start a new terminal session:

```sh
plugins=(
    # other plugins...
    zsh-autosuggestions
)
```

### Homebrew installation

You can also install this using Homebrew (on macOS) by entering the following two commands:

```sh
brew install zsh-autosuggestions
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh
```

This will first install the plugin and then add it to the end of your `.zshrc`.

## GitHub CLI

GitHub CLI allows you to access GitHub from the terminal. Allowing you to view repos, issues and pull requests from the command line. To install it follow the instructions found the [official page](https://cli.github.com/).

## Docker

It is also recommended to install Docker to containerise your project however this mostly likely will not be needed for beginner web developers. If you would still like to install it you can do some from the [Docker Desktop](https://www.docker.com/products/docker-desktop/) site.

## Other Text Editors

Alternatively you could try setting up and using another text editor like [NeoVim](https://neovim.io/) however this takes more time and is more advanced and may not be worth your time.

To mention a possible solution, [NvChad](https://nvchad.com/) is a Neovim config which can be installed with one command however you will still need to set a few things up.
