import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state) => {
            state.push({name:"Jack Roud"})
            state.push({name:"John Beals"})
        }
    }
})

export default slice.reducer;

export const{getUser} = slice.actions;