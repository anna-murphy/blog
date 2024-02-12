# ahcoffeebeans portfolio

this is a portfolio website built with [Astro](https://astro.build) and hosted on github pages. the initial design was by [anna murphy](https://github.com/anna-murphy).

## making changes

this project uses github actions to automatically deploy a new version of the website whenever a change is made. view the workflow in `.github/workflows/deploy.yml`.

to add a new project page, create a new markdown (`.md`) file in `src/content/projects` and it will be added to the website next time it's "pushed". anytime you need to add a new image, put it in `public/images`. you should be able to do this all from the web interface, without having to download anything.

### into the weeds

if you want to really get into the weeds of how this project works, it's going to require a bit of setup. if everything works out correctly, it shouldn't be strictly necessary, but if you want to change the layout, styling, or other broad site-wide things, the web interface on github probably wont't be enough.

to get started, you're going to need to install [node](https://nodejs.org/en/download/package-manager) and [yarn](https://yarnpkg.com/).

(((if you're installing yarn, their documentation says to install it by project, but in my experience using their install script is easier.)))

```bash
$ curl -o- -L https://yarnpkg.com/install.sh | bash
```

clone this repository to your computer (`git clone <repository-url>`), and then run the following commands:

```bash
$ yarn install
$ yarn start
```

this should open a window in your default browser with the website running.

after you make your changes, commit them with `git commit` and save them on github with `git push`. [here](https://education.github.com/git-cheat-sheet-education.pdf) is a git cheatsheet for more info on how all that works.

