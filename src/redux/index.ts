import { configureStore } from "@reduxjs/toolkit";

import user from "./userSlice";

const store: any = configureStore({
  reducer: { user: user },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
