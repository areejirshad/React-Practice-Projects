import { configureStore} from "@reduxjs/toolkit";
import itemslice from "./itemslice";
import fetchslice from "./fetchitems";
import bagslice from "./bagslice";
const myntrastore=configureStore({
  reducer:{
     items:itemslice.reducer,
     fetchitems:fetchslice.reducer,
     bag:bagslice.reducer
  }
});
export default myntrastore;