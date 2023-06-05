import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://63caca48d0ab64be2b5a9de2.mockapi.io/";

export const fetchUsers = createAsyncThunk("users", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get("users", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
