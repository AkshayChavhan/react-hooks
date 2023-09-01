import StateHookSample from './Hook/StateHookSample';
import ContextSample from './Hook/useContex/ContextSample';
import UseEffectComponentSample from "./Hook/useEffect/useEffectComponentSample";
import UseMemoHookSample from './Hook/useMemo/UseMemoHookSample';
import UseRefHookSample from './Hook/useRef/UseRefHookSample';



function App() {
  return (
    <div className="App">
      {/* <StateHookSample /> */}
      {/* <UseEffectComponentSample /> */}
      {/* <UseMemoHookSample /> */}
      {/* <UseRefHookSample /> */}
      <ContextSample />
    </div>
  );
}

export default App;
