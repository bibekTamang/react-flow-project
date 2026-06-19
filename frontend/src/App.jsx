import { PipelineToolbar } from "./components/navigation/Toolbar";
import { PipelineCanvas } from "./components/canvas/PipelineCanvas";
import { ToastContainer } from "./components/notifications/ToastContainer";

function App() {
  return (
    <div className="app-container">
      <div className="bg-white rounded-md h-full border-2 border-gray-200">
        <ToastContainer />
        <PipelineToolbar />
        <div style={{ flex: 1 }}>
          <PipelineCanvas />
        </div>
      </div>
    </div>
  );
}

export default App;
