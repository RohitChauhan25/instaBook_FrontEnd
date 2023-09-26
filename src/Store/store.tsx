import { combineReducers, configureStore } from '@reduxjs/toolkit'
import headerSlice from './slice/herder'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
}

const reducer = combineReducers({
  headerReducer: headerSlice,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
