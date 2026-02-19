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
  * Create Video Container and Video Card with mapping the data.
  * Customize the api to show more results as default is set to 5 only.
  * We can customize region also for the api.
  * Install react router dom, npm i react-router-dom
    ** In App component create brower createBrowerRouter specify path, element and children.
  * Create a WatchPage
  * Use Outlet in Body to dynamicly change the rendering of MainContainer to WatchPage.
  * Link the VideoCards to re-direct to WatchPage with specific video id
  * In WatchPage, close the Slidebar on opening the watchpage.
    ** Using youTube embbeded iframe for rendering video in it.
    ** customize video link with searchParam value for each video.
    
  -------------------------------------------------------
# Structure
{ + Head
  + Body
    + SideBar
        + MenuItems
    + MainContainer
        + ButtonList
        + VideoContainer
           + VideoCard
    + WatchPage

}