
import WebView from "react-native-webview";

const LoadWebview = () => {

  var GPT = "https://chatgpt.com/";
  const GOOGLE =  "https://google.com/";
  return (
    <WebView source={{uri:`${GOOGLE}`}} />
  );
};
export { LoadWebview };