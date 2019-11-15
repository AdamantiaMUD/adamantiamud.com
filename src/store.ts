import {configureStore, createAction, createReducer} from '@reduxjs/toolkit';

export interface StoreState {
    isSidebarVisible: boolean;
}

// Actions
export const toggleSidebar = createAction('TOGGLE_SIDEBAR');

export const initialState: StoreState = {isSidebarVisible: false};

export const reducer = createReducer(initialState, {
    [toggleSidebar.type]: (state: StoreState): void => {
        state.isSidebarVisible = !state.isSidebarVisible;
    },
});

// Store
export const store = configureStore({reducer});
