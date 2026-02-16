* npx create-react-app 
* Setup tailwind
   ** npm i - D @tailwindcss@3 postcss autoprefixer      - 3rd version
   ** npx tailwindcss init -p        - this will create * tailwind.config.js and postcss/config.js
   ** In index.css replace with this:
            * @tailwind base;
            * @tailwind components;
            * @tailwind utilities;

   ** In tailwind.config.js:
        module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

   ** npm list tailwindcss    -> To check for tailwind version installed.
** Install: npm install react-redux
** Install redux toolkit:  npm i @reduxjs/toolkit

** Create sidebar slide/toggle: 
    => Create a store.js   => import action(in reducer) from slice
    => Create a slice: appSlice.js => create action (in reducers)and export it
    => Provide store to the app by wrapping app.js with <Provider store={store}>

  ** Check if the store is setup and working.
     => with redux extention.
  * Dipatch by useDispatch() an OnClick action on Hamburger menu (toggleMenuHandler())
  * Toggleing the Slidebar using useSelector. [Subscribe to the specific protion of your store instead of subscribe whole store.]
  * Create buttons 
  * fetch youtube most popular video api appending your own api key
  * 
  -------------------------------------------
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