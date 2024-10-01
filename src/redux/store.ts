import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/CartSlice";
import { baseApi } from "./api/api";

// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import orderReducer from "./features/OrderSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage/'
import userReducer from "./features/UserSlice";

  const persistConfig={
    key:'root',
    storage
  }
const persistCartReducer=persistReducer(persistConfig,cartReducer)
const persistOrderReducer=persistReducer(persistConfig,orderReducer)
const persistUserReducer=persistReducer(persistConfig,userReducer)

export const store = configureStore(
  {
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [baseApi.reducerPath]: baseApi.reducer,
    cartR:persistCartReducer,
    orderR:persistOrderReducer,
    userR:persistUserReducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
}
)
export const persistor = persistStore(store);
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch