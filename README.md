This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
ensure you have the following installed:

latest nodejs
npmjs
git (for cloning repository)

## Install dependencies
npm install
# or
yarn install
npm install chart.js react-chartjs-2

## Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open http://localhost:3000 in your browser to view the dashboard.

## Github documentation
here is the github link: https://github.com/daramolakenny/Pedro

## cloning
https://github.com/daramolakenny/Pedro.git

## Deploy on Vercel
here is the link to the versel: https://pedro-sepia.vercel.app/

## usage
Navigate using the sidebar (toggleable on mobile with the ☰ button).
Switch between sections (Dashboard, Analysis, News & Report, etc.) via the sidebar links.
On the Analysis section, view the Updateddata table and Analysis charts alongside the "Report = Week 31, 2024" header.

## Components
Dashboard: The main layout with a sidebar and dynamic content based on the active section.
    Sidebar: Toggleable navigation menu with section links.
    
Updateddata: Displays a table of petroleum product prices and performance.

Analysis: Renders charts (e.g., retail price trends) for in-depth analysis.

Search: It suppose to interactive but due to the time frame i used to do the task, its not functional

RetailCard: it contains the Current product retail prices and the Chart and Controls
 
Modals: onclicking on the Current product retail prices PMS the "Daily summary modal" and View Detailed Summary to display "Detailed Summary Modal"