import { useEffect, useContext, useReducer } from "react";
import "../styles/globals.css";
import ContextProvider, {
  manifestReducer,
  initialState,
} from "../context/ContextProvider";
import { Context } from "../context/Context";
import { getCall } from "../utils/callApi";

const App = ({ Component, pageProps }) => {
  const [manifest, dispatch] = useReducer(manifestReducer, initialState);

  useEffect(() => {
    localStorage.setItem("Manifest", JSON.stringify(manifest));
  }, [manifest]);
  // X-API-Key
  useEffect(() => {
    async function getManifest() {
      const getData = getCall("/");
    }
    setTimeout(() => {
      dispatch({ items: [] });
    }, 200);
    // console.log(dispatch);
  }, []);
  return (
    <ContextProvider value={{ manifest, dispatch }}>
      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default App;
