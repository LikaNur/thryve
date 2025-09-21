## Thryve 2-Back Game

A small **Next.js** memory game where the player enters their name and plays a
classic **2-back task**.  
The game ends after **2 mistakes** or when **all 15 letters** in a fixed sequence
have been shown.  
At the end the player sees their **correct guesses** and **errors**.

---

## ✨ Features
- **2-Back Memory Game**  
  A fixed sequence of 15 letters is displayed one by one every 1.5 seconds.
- **Scoring**  
  The game stops automatically after:
  - **2 errors**, or
  - all **15 letters** are shown.
- **Main tools**  
  Built with Next.js, TailwindCSS, and shadcn/ui components.
  Letters appear with motion animations. Data is persisted via localStorage, and navigation uses the useParams hook.
  Tested end-to-end with Playwright. 
  Global state is managed with React Context API. 
- **Simple State Flow**  
  - **Welcome Page** → player enters a name  
  - **Game Board** → letters cycle automatically  
  - **Result Board** → final score & restart button

---

## Clone the repo 

git clone https://github.com/LikaNur/thryve.git
cd thryve

_Install dependencies _

```bash
npm install
``` 

_Run the development server _

```bash
npm run dev
```