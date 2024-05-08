# macOS Setup

Start by opening the terminal and typing the command:

```sh
git
```

This should prompt you to install the command line developer tools. This will install various tools to help you get started.

## Homebrew

Next we will install [Homebrew](https://brew.sh/). Homebrew is a package manager for macOS which will freely allow you to install various tools and dependencies. It also provides for seamless removal of these tools.

First head to [brew.sh](https://brew.sh/) and type the install command into your terminal. Here is a copy of it:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Once the installation is completed the installation script will prompt you to run two lines in the terminal. Please run these two lines to add Homebrew to your path. This is necessary for the `brew` command to work.

## Terminal

You may have noticed that the current terminal you have been working on looks ugly. Let's fix that!

Download [iTerm2](https://iterm2.com/) from the webpage or with `brew install --cask iterm2`

Now to upgrade the look of the terminal install [Oh My Zsh](https://ohmyz.sh/#install) which is a framework for managing your `zsh` configurations which comes bundled with helpful functions, plugins and themes.

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Once installed open your zsh config file usually located at `~/.zshrc`. You should find a snippet with the variable `ZSH_THEME`:

```bash
# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="random"
```

You are welcome to set this as random which will give you a random theme on every terminal. Then once you find one you like you can switch to just using that one. Alternatively you can download a theme like [Powerlevel10k](https://github.com/romkatv/powerlevel10k) and customise that. The options are unlimited.

Now you can also adjust the settings of `iTerm2`. Open up the preferences and play around with the colours, transparency or any other settings. You can even install colour themes like my personal favourite [Catppuccin](https://github.com/catppuccin/iterm).

While we are here there is a little secret within macOS for developers. When you create a folder the default icon is just a folder with a plain colour. For special folders there is icons for example, Documents, Downloads, etc... If you create a folder named `Developer` in your home this will also grant a special icon. You can then configure your terminal to always open in this directory and you can store all your code related projects here.

## Visual Studio Code

The most popular used IDE for coding is Visual Studio Code. You have most ilkley encountered and used this before and here we will go through a local setup.

First install [VSCode](https://code.visualstudio.com/) from the website.

Once you open the application the first thing to do is install the `Code` command to your path. This will allow you to open VSCode from your terminal. Type `Cmd + Shift + P` to open the command pallet and write `Install Code`. Now click on the Shell command and it should install.

## Further Customisation

This should be enough to get you started developing! However there are an infinite amount of further customisations and other tools and applications you can install and include.
