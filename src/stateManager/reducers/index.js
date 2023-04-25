//This is the file where you combine all the recuders into one

import { combineReducers } from "redux";

import auth from "./auth";
import card from './card';

export const reducers = combineReducers({ auth, card });
// export const reducers = combineReducers({ auth: authReducer });