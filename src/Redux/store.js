

import { combineReducers, configureStore } from "@reduxjs/toolkit";
//import { postslice } from "./PostsSlice";
import addcart from './CartSlice'
import myprofile from './profileSlice.js'
import getallpost from './AllPostSlice'
const store = configureStore({
    reducer:{
     item:addcart,
     profile:myprofile,
     getallpost:getallpost

    }})

    export default store

