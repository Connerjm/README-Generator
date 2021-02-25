# README-Generator

[![owner Owner](https://img.shields.io/badge/Owner-Connerjm-green)](https://github.com/connerjm)
[![tech Tech](https://img.shields.io/badge/Tech-JavaScript-orange)](https://github.com/topics/JavaScript)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Demonstration](#demonstration)

## Description

This is a Node.js command-line application that will dynamically generate a README.md file based on user input. The application starts by asking for required information such as the repo owners username as well as the title and description. Following that, the user will be prompted with a list of optional sections that may be included. Information will be structured and processed to include links and badges where applicable. Badges will be at the top directly under the title and above the table of contents.

## Features

- [x] Prompt user for their repo information and generate a README.md file that includes.
  - [x] Badges. - Owner, License, Technologies.
  - [x] Title.
  - [x] Table of Contents. - Is built dynamically only listing the sections the user chose to include.
  - [x] Description.
  - [x] Features.
  - [x] Installation.
  - [x] Technologies. - Is formatted into a list.
  - [x] Usage.
  - [x] Credits. - Converts usernames to github links.
  - [x] Contributing.
  - [x] Tests.
  - [x] Questions. - Puts username and email as links.
  - [x] License. - Creates a badge and links to the respective opensource article.
- [x] Formats all the information and writes it to a file name RENAMEME.md to be renamed and copied into the users repo.

## Installation

Clone project with https using:

```bash
$ git clone https://github.com/Connerjm/README-Generator.git
```

Prior to use, install required packages with

```bash
$ npm i
```

Then run the program with

```bash
$ node index.js
```

## Demonstration

Example run of the application.
![Demonstration Gif](./assets/READMEGenerator.gif)
