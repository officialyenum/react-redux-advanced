import { createSlice } from "@reduxjs/toolkit";

//init ui Slice
const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        cartIsVisible: false,
        notification: null
    },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
});
// Export Slice Actions 
export const uiActions = uiSlice.actions;
// Export Slice
export default uiSlice;