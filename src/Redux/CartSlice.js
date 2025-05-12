
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],

};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers:{

    addtoCart:(state,action)=>{
      let find=state.cart.findIndex((item)=>item.id===action.payload.id)
      if(find >=0){
      alert("alredy done")
      }
      else{
       state.cart.push(action.payload)
      }
      
    },
    removeitem:(state,action)=>{
    state.cart=state.cart.filter((item)=>item.id !== action.payload)
    },

  }

})
export const {addtoCart,removeitem}=cartSlice.actions
    
export default cartSlice.reducer;
