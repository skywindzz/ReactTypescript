import ReactDOM from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const App = () => {
  return <div>
    <h1>Hello there</h1>
  </div>
};

root.render(<App />);
