Hi and welcome to my test

To get the project started simply follow Nuxt basic setup process. 
You can find it below. 

For additional infos please scroll down to the end of this readme

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.



Hi, I know this test is not 100% compliant to what was expected. 
Since I've spend more than 8 hours to do it I considered fair to commit my work 
so you can judge my level based on this timeline. 

Nonetheless I know what are the issues I'd have to fix, you can find it listed below. 

- Handle .env config to hide API_KEY
- Handle number of results per page ( this slowed down the dev process as I couldn't get 12 results per api call)
    - this lead me to the point I couldn't implement the "load more" feature as I thought I could get it done later.  
- When you click on a grid-item the modal opens but the image doesn't load properly as puch as the title 
    - both are reactivity issues that I'd need to fix 
- Grid display is not fully functionnal as the items are not squares + only 10 images are loaded since I could not get 
    12 images per page
    - this broke the CSS I had previously set up and that I belive is working with 12 images  
- Last but not least I'd loved to spend more time on designing a much more appealing UI/UX, I chose to focus on the features first.