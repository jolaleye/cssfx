# Contributing to CSSFX

First of all, thank you for taking the time to contribute! 🎉

Any form of contribution is welcome! This includes new effects, site improvements, and reporting issues. This guide will help you get started. Feel free to propose changes to this document if you think something is missing or needs to be clarified.

## Code of Conduct

By contributing to this project, you are expected to uphold the [Code of Conduct](CODE_OF_CONDUCT.md). Please report any unacceptable behavior to Jonathan Olaleye at j.olaleye.o@gmail.com.

## How Can I Contribute?

### New Effects

The most obvious way to contribute is to add new effects to the CSSFX collection. The collection is intended to have variety so feel free to get creative.

Effects are made by adding a Vue component to the `effects/` directory. There are a few guidelines while creating...

1. Do **not** indent the root element in the Vue template. This ensures that the markup is correctly displayed in the inspection modal.
2. Use as few `.classes` and `#ids` in your template as possible and use `scoped` styles. This increases flexibility for users copying effects.
3. Use the site's red (`#fc2f70`) & blue (`#3cefff`) theme colors as accents alongside whites, grays, and blacks.
4. Try to match the size of other effects.
5. If an effect requires interaction, make it clear. For example add a hover effect to the word "Hover".
6. Use kebab-case filenames prefixed with the effect type (e.g. `loader-ring`). The filename prefix identifies effects when the user chooses filters.

> If your editor automatically formats files on save, it may do things like indent the Vue template or replace single quotes with double quotes. These changes can mess with the source code shown in the inspection modal. To avoid this, either temporarily disable formatting or save without formatting (e.g. in VSCode, open the command palette and choose _File: Save without formatting_).

The `EffectGrid` gathers all the components in `effects/` using the function in `assets/compileEffects` and lays them out with CSS grid. If you figure out some black-magic method of making this process more efficient, be sure to share. 😉

### Site Improvements

The CSSFX site is intentionally simple: a header, the effect grid, and a modal for copying source code. Feel free to try out any changes that would improve the user experience.

### Reporting issues

Before you open an issue, check to see if the problem [has already been reported](https://github.com/jolaleye/cssfx/issues). If it has and the issue **is still open**, add a comment with your experience to the existing issue rather than opening a new one.

> If an issue describing the problem has already been **closed**, open a new issue and include a link to the closed one.

When you open an issue, be clear and descriptive so that the problem can be easily identified. Screenshots or recordings are particularly helpful.

## How Do I Start?

> If you've done this kind of thing before, feel free to skip this part :)

When you're ready to make your contribution, it's time to [create a pull request](https://github.com/jolaleye/cssfx/pulls)!

1. [Fork the repository](https://help.github.com/en/articles/fork-a-repo) and clone it locally. Add the original repository as a remote and `git pull` every once in a while so that you stay up to date with the project.
2. [Create a new branch](https://guides.github.com/introduction/flow/) for your changes.
3. **Add, commit, and push** your changes to the new branch.
4. **Test out your changes.** Make sure you didn't break anything. :)
5. [Open a pull request](https://github.com/jolaleye/cssfx/pulls) to merge your changes into `master`.
   - Reference any issues related to your PR (e.g. "Closes #123").
   - Describe your changes in detail and include all of the information in the template.
6. Sit back, relax, and wait for your PR to be reviewed. You might have to tweak your contribution or elaborate on your changes. That's OK, don't be afraid to justify your reasoning and ask questions.

Thank you for taking the time to read through this guide and welcome to the community! ✌️ 🎉
