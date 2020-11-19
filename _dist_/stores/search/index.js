import Search from "./constant.js";
const search = (store) => {
  store.on("@init", () => ({
    search: "",
    isLoading: false,
    isError: false,
    useCurrentSearch: false
  }));
  store.on(Search.UPDATE, (store2, search2) => ({
    search: search2
  }));
  store.on(Search.LOADING, (store2, isLoading) => ({
    ...store2,
    isLoading
  }));
  store.on(Search.ERROR, (store2, isError) => ({
    ...store2,
    isError
  }));
  store.on(Search.USE_CURRENT, (store2, useCurrentSearch) => ({
    ...store2,
    useCurrentSearch
  }));
};
export default search;
