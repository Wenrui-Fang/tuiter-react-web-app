import {createSlice} from "@reduxjs/toolkit";
import profile from './profile.json';

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            state.profile = action.payload
        }
    }
});

export default profileSlice.reducer;
export const {updateProfile} = profileSlice.actions;