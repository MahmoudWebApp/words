import {
    isFulfilled,
    isPending,
    isRejectedWithValue,
    Middleware,
  } from "@reduxjs/toolkit";
  import { toast } from "react-toastify";
  
  const queryStatus: Middleware = () => (next) => (action) => {
    const TOAST_QUERY_ID = "query-status";
    if (isPending(action)) {
      toast("Loading", {
        isLoading: true,
        toastId: TOAST_QUERY_ID,
        type: toast.TYPE.DEFAULT,
      });
    } else if (isFulfilled(action)) {
      if (action.meta.arg.type === "mutation") {
        toast.update(TOAST_QUERY_ID, {
          render: "Done",
          type: toast.TYPE.SUCCESS,
          isLoading: false,
          autoClose: 200,
        });
      } else {
        toast.update(TOAST_QUERY_ID, {
          isLoading: false,
          autoClose: 100,
        });
      }
    } else if (isRejectedWithValue(action)) {
      toast.update(TOAST_QUERY_ID, {
        render: "Error",
        type: toast.TYPE.ERROR,
        isLoading: false,
        autoClose: 3000,
      });
    }
    return next(action);
  };
  
  export default queryStatus;

  