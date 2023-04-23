//This is the file where you combine all the recuders into one

import { combineReducers } from "redux";

import auth from "./auth";

export const reducers = combineReducers({ auth });
// export const reducers = combineReducers({ auth: authReducer });