# Windows Setup

Historically, Windows has not been the preferred OS for most web developers, but with the introduction of [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/about) (WSL and WSL2), this allows us to install a linux distribution on Windows. This means we can run a real linux environment on our Windows system.

## Installing WSL

The following steps will install Linux in your Windows environment. We will reference the official [WSL Install Guide](https://learn.microsoft.com/en-us/windows/wsl/install).

From the start menu, search for PowerShell and run it as an administrator by right-clicking nd selecting "Run as administrator". Now enter the following command to install `wsl` and then restart your machine.

```sh
wsl --install
```

This command will enable the features necessary to run WSL and install the Ubuntu distribution of Linux.

> Ubuntu is the default linux distribution installed by WSL2. It is very beginner friendly to use and has a lot of documentation + support online. You can check out the documentation here!

## Windows Terminal

Windows has an [official Windows Terminal app](https://apps.microsoft.com/detail/9n0dx20hk701?rtc=1&hl=en-au&gl=AU). This will make it easy to work with the command line and allow you to quickly switch between using Linux and Powerful sessions.

It is recommended to set Ubuntu as your default profile as this will open Ubuntu on every new terminal instance by default. Open up the settings by selecting the drop down beside the `+` tab button or `Ctrl + ,`. Once you open the settings you can customise this as you like such as changing the colour scheme. You can even install your own colour themes like [Catppuccin](https://github.com/catppuccin/windows-terminal).

This configuration will only customise the look of the actual terminal and not the command line. We will go through a command line shell configuration later on in this guide.

## Update the Linux

Open up an Ubuntu instance and type the following command to update the kernel.

```sh
sudo apt update && sudo apt upgrade
```

## Customise the Command Line Prompt

There is still one problem, our command line looks ugly. Let's fix that!

We are going to install [Oh My ZSH](https://ohmyz.sh/) to gain more control over the Linux command line. Oh My Zsh provides helpful functions, plugins and themes to allow us to manage our Zsh configuration. To install it run the commands below:

```sh
sudo apt install zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

At this point, you probably don't know what type you would like to use. Open the zsh config file, usually located at `~/.zshrc` and navigate to the following snippet.

```bash
# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="random"
```

If you change this variable to random, a new theme will be selected every time you open up a new terminal session. Once you find one you like you can copy it's name into this field. Alternatively you can download a theme like [Powerlevel10k](https://github.com/romkatv/powerlevel10k) and customise that. The options are unlimited.

## Visual Studio Code

The most popular used IDE for coding is Visual Studio Code. You have most ilkley encountered and used this before and here we will go through a local setup.

First install [VSCode](https://code.visualstudio.com/) from the website and open it as usually.

To connect WSL to VSCode we will have to install the [WSL extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl). This will allow us to use WSL in VSCode.

Once installed, open the command pallet in VSCode by typing `Ctrl + Shift + p` and search for `WSL: Connect to WSL in new Window`. You will now see that the box in the bottom left corner should now say `WSL: Ubuntu`. If you open a terminal in VSCode this will be running your zsh. Everything you do in this environment will be happening on linux.

You can now open VSCode from the terminal by navigating to the folder you'd like to open. Then type `code .` in the terminal. When doing this for the first time, you should see VS Code fetching components needed to run in WSL.

## Further Customisation

This should be enough to get you started developing! However there are an infinite amount of further customisations and other tools and applications you can install and include.
