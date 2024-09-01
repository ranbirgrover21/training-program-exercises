# Windows Local 😈

With the current trends at UNSW and the CS as a whole, I feel obligated to say that a local windows developer setup is **likely not ideal** especially for UNSW undergrad CSE Work. Problems that you will run into

- Some software (build tools, packages, etc.) may be difficult/impossible to install and configure. A significant mention for this is the C family of languages.
  - Prepare to learn some fun things about windows when customising and messing around.
  - Typically less online support for these kinds of issues.
- Terminal commands will not be the same. Recent powershell releases have brought it close to parity with unix based systems but there are significant differences.

However that being being said having your files on one system and not having to deal with the mental overhead of managing wsl may be worth it for you. For what its worth I've used this setup for most of my time at uni with only a few fustrations.

## Windows Terminal

Windows has an [official Windows Terminal app](https://apps.microsoft.com/detail/9n0dx20hk701?rtc=1&hl=en-au&gl=AU). This app makes it easy to switch between different terminals, including WSL if you do end up needing a linux subsystem at somepoint.

Once install take a look around which terminals are avaliable and try playing around with some of the customisations.

### Powershell & Other Alternatives

By default Windows 11 contains the following command line tools, **Windows Powershell** and **Command Prompt**. When using command prompt you will need to use the windows specific commands & terminology. With Powershell there's an effort to support UNIX commands which results in an experience that you might be more familar with. At this point feel free to shop around for other terminals/shells that might suit you, personally I'm using [PowerShell 7+](https://github.com/PowerShell/PowerShell).

**For the rest of the guide we'll proceed with MS Powershell**.

## Winget

Winget is a command line install tool that is picking up in popularity. It provides a similar install experience to linux systems. It should be avaliable on Windows 10/11 systems. You can check if its installed with powershell

```ps1
winget
```

If its not avaliable, installation instructions can be found [here](https://learn.microsoft.com/en-us/windows/package-manager/winget/#install-winget)

## Editors (VSCode)

The most popular used editor for coding is Visual Studio Code. You have most likley encountered and used this before and here we will go through a local setup.

First install [VSCode](https://code.visualstudio.com/) from the website and open it.

You can now open VSCode from the terminal by navigating to the folder you'd like to open. Then type `code .` in the terminal.

### Other Editors

If it peeks your interest I would recommend trying out different IDEs. Some personal suggestions are

- Jetbrains Webstorm (and other IDEs for different languages). These are heavier IDEs with inbuilt debuggers and other features. Students at UNSW get free access so I'll recommend at least giving it a go while its cheap.
- NeoVim. Huge variety of distribution and customisation options. It's really its own rabbit hole that you can dive down. These editors take a more minimalist and streamlined approach.

Whatever your choice I recommend taking your time to **learn your enviroment** in particular learning/setting up keybinds that may help save your wrists in the future.
