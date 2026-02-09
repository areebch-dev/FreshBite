import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name:"cart",
    initialState:[],
    reducers: {
        AddItem:(state,action) => {
          let exist = state.find((item)=>item.id===action.payload.id)
          if(exist){
            return state.map((item)=>item.id===action.payload.id?{...item , qty:item.qty+1}:item)
          }else{
            state.push(action.payload);
          }
          
        },

        RemoveItem:(state , action)=>{
            return state.filter((item)=>item.id!==action.payload)
        },
        IncrementQty:(state , action)=>{

          return state.map((item)=>item.id===action.payload?{...item , qty:item.qty+1}:item)

        },
        DecreaseQty:(state , action)=>{
       
       return state.map((item)=>item.id===action.payload?{...item , qty:item.qty > 1 ? item.qty-1 : 1}:item) 

        }

      }

})

export const {AddItem , RemoveItem ,IncrementQty , DecreaseQty} = cartSlice.actions
export default cartSlice.reducer