# Ciphering CLI tool

Encryption and decryption tool.

[Features](#features) | [How it works](#how-it-works) | [Project files and folders description](#project-files-and-folders-description) | [Get started](#get-started)

## Features

- Encoding and decoding text
- Support of 3 substitution ciphers: Caesar cipher, Atbash cipher and ROT-8 as variation of ROT-13 cipher
- Reading and writing from and to a file or a command shell, respectively.

## How it works

Ciphering CLI tool:

1. Reads text from input file or the command shell.
2. Encodes and decodes text according to passed config.
3. Writes coded text to output file or the command shell.

## Project files and folders description

**input.txt** - the file that you can use for typing text.

**output.txt** - the file that you can use for storing results of encoding and decoding text.

**package.json** - the file that holds metadata relevant to the project.

**README.md** - the file that you're reading right now.

**my_ciphering_cli** - the folder that contains the main file that runs Ciphering CLI tool and the folder "src" that contains the source folders and files needed for the tool work.

## Get started

1. Download and install latest LTS version of [Node.js](https://nodejs.org/en/). Ciphering CLI tool requires v16.13.0 and later. To check if Node.js is installed, open a command shell (Windows Command Prompt, Git Bash or any other) and type `node -v`. You should see the Node.js version.

2. Clone the repository (you must already have [git](https://git-scm.com/downloads) installed) by typing in the command shell:

`git clone https://github.com/EkaterinaShep/ciphering-CLI-tool`

3. Go into the repository:

`cd ciphering-CLI-tool`

4. Switch branch:

`git checkout ciphering-CLI-tool`

5. Write text to `input.txt` file.

6. Type in the command shell:

`node -c "C1-C1-R0-A" -i "input.txt" -o "output.txt"`

Where "C1-C1-R0-A" - config, "input.txt" - path to input file, "output.txt" - path to output file.

7. Open output file. You should see the result.

That's it!

## Commands and options
