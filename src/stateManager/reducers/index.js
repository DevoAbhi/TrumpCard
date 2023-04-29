//This is the file where you combine all the recuders into one

import { combineReducers } from "redux";

import auth from "./auth";
import card from './card';
import score from "./score";

export const reducers = combineReducers({ auth, card, score });
// export const reducers = combineReducers({ auth: authReducer });