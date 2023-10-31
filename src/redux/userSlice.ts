import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  name: "hi",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { login } = userSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default userSlice.reducer;
