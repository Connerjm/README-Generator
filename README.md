# README-Generator

This is a Node.js command-line application that will dynamically generate a READEME.md file based on user input.

Acceptance Criteria is as follows:

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
