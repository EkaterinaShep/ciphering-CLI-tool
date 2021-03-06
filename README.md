# Ciphering CLI tool
Encryption and decryption tool.

<p align="center">
<img src="https://user-images.githubusercontent.com/77797681/141644772-8ffd3758-a03e-4ee2-b314-426afcb345bf.jpg" alt="Ciphering CLI tool"/>
</p>

<p align="center">
<a href="#features">Features</a> | <a href="#how-it-works">How it works</a> | <a href="#project-files-and-folders-description">Project files and folders description</a> | <a href="#get-started">Get started</a> | <a href="#options">Options</a> | <a href="#usage-examples">Usage examples</a>
</p>

## Features

- Encoding and decoding text
- Transformation of letters of the English alphabet keeping other characters untouched
- Support of 3 substitution ciphers: Caesar cipher, Atbash cipher and ROT-8 as variation of ROT-13 cipher
- Reading and writing from and to a file or a command shell, respectively

## How it works

Ciphering CLI tool:

1. Reads text from an input file or a command shell.
2. Encodes and decodes text according to passed config.
3. Writes coded text to an output file or the command shell.

## Project files and folders description

**input.txt** - the file that you can use for typing text.

**output.txt** - the file that you can use for storing results of encoding and decoding text.

**package.json** - the file that holds metadata relevant to the project.

**README.md** - the file that you're reading right now.

**my_ciphering_cli** - the folder that contains the main file that runs Ciphering CLI tool and the folder "src" that contains the source folders and files needed for the tool work.

## Get started

1. Download and install latest LTS version of [Node.js](https://nodejs.org/en/). Ciphering CLI tool requires v16.13.0 and later. To check if Node.js is installed, open a command shell (Windows Command Prompt, Git Bash or any other) and type `node -v`. You should see the Node.js version.

2. Clone the repository (you must already have [git](https://git-scm.com/downloads) installed) by typing in the command shell:

   ```sh
   git clone https://github.com/EkaterinaShep/ciphering-CLI-tool
   ```

3. Go into the repository:

   ```sh
   cd ciphering-CLI-tool
   ```
   
4. Write and save text to `input.txt` file.

5. Type in the command shell:

   ```sh
   node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
   ```

   where:
   
   * `node` and `my_ciphering_cli` are mandatory arguments needed for the work of the tool.
   
   * `-c "C1-C1-R0-A"`, `-i "./input.txt"`, `-o "./output.txt"` are options. `-c`, `i`, `-o` are short aliases. `"C1-C1-R0-A"`, `"./input.txt"`, `"./output.txt"` are values of the options: `"C1-C1-R0-A"` is a [config](#-c---config), `"./input.txt"` is a path to [input file](#-i---input), `"./output.txt"` is a path to [output file](#-o---output).

6. Open `output.txt` file. You should see the result.

That's it!

## Options

The tool accepts 3 options (short alias and full name): 1 mandatory (**-c**, or **--config**) and 2 optional (**-i**, or **--input**, and **-o**, or **--output**).

Each option takes a value. The value is required and should be enclosed in double quotes.

### -c, --config

Config for ciphers. Mandatory option.

The pattern for config value is {XY(-)}n, where:

- `X` is a cipher mark: `C` (Caesar cipher (with shift 1)), `A` (Atbash cipher), `R` (ROT-8 cipher).
- `Y` is a flag of encoding or decoding: `1` (encoding), `0` (decoding). The flag mandatory for Caesar and ROT-8 ciphers and should not be passed for Atbash cipher.

Example: config value `"C1-C1-R0-A"` means "encode by Caesar cipher => encode by Caesar cipher => decode by ROT-8 => use Atbash"

### -i, --input

A path to input file. Optional option.

If the option is missed, text will be read from a command shell. In this case, in order to run ciphering, press `Enter`. To stop Ciphering CLI tool, type `Ctrl + C`.

### -o, --output

A path to output file. Optional option.

If the option is missed, text will be written to a command shell.

## Usage examples

```sh
$ node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

```sh
$ node my_ciphering_cli -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`

```sh
$ node my_ciphering_cli -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`

```sh
$ node my_ciphering_cli -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `This is secret. Message about "_" symbol!`
