import { useSelector } from "react-redux";

const App = () => {
  const store = useSelector(store => store);
  console.log(store);
  return (
    <div>
      React inreractive map
    </div>
  )
}

export {App};

