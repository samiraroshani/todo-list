import React, {useRef, useState} from 'react';
import {RootNavigator} from "./src/navigations";

const App = () => {
  const navigationRef = useRef();
  const [rootStore, setRootStore] = useState(undefined);

  // setRootNavigation(navigationRef);
  // useBackButtonHandler(navigationRef, canExit);

  return (
    <RootNavigator
      ref={navigationRef}
    />
  )
};
export default App;
