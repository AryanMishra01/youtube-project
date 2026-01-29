* npx create-react-app 
* Setup tailwind
   ** npm i - D tailwindcss @tailwindcss/cli      - 4.1 version
   ** In input.css add @import "tailwindcss" 
   ** npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
   ** import output.css in index.js & remove import App.css
# Structure
{ + Head
  + Body
    + SideBar
        + MenuItems
    + MainContainer
        + ButtonList
        + VideoContainer
           + VideoCard


}