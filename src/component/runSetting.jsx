import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ToggleSwitch = ({ label, checked, onChange }) => (
  <div className="flex justify-between items-center py-2">
    <span className="text-white text-sm">{label}</span>
    <input type="checkbox" checked={checked} onChange={onChange} className="toggle" />
  </div>
);

const RunSettings = () => {
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [thinkingMode, setThinkingMode] = useState(false);
  const [thinkingBudget, setThinkingBudget] = useState(false);
  const [structuredOutput, setStructuredOutput] = useState(false);
  const [codeExecution, setCodeExecution] = useState(false);
  const [functionCalling, setFunctionCalling] = useState(false);
  const [grounding, setGrounding] = useState(false);
  const [urlContext, setUrlContext] = useState(false);
  const [temperature, setTemperature] = useState(1);

  return (
    <div className="w-72 bg-black text-white rounded-lg p-4 space-y-4 shadow-xl">
      <h2 className="font-semibold text-sm">Run settings</h2>

      <div className="space-y-1">
        <label className="text-xs text-gray-300">Model</label>
        <select className="w-full bg-gray-800 text-sm p-2 rounded">
          <option>Gemini 2.5 Pro Preview</option>
        </select>
      </div>

      <div>
        <div className="text-xs text-gray-300">Token count</div>
        <div className="text-sm">0 / 1,048,576</div>
      </div>

      <div>
        <label className="text-xs text-gray-300">Temperature</label>
        <div className="flex items-center space-x-2">
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={temperature}
            onChange={(e) => setTemperature(parseFloat(e.target.value))}
            className="w-full"
          />
          <span className="text-sm">{temperature}</span>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-2">
        <p className="text-xs font-semibold text-gray-300">Thinking</p>
        <ToggleSwitch label="Thinking mode" checked={thinkingMode} onChange={() => setThinkingMode(!thinkingMode)} />
        <ToggleSwitch label="Set thinking budget" checked={thinkingBudget} onChange={() => setThinkingBudget(!thinkingBudget)} />
      </div>

      <div className="border-t border-gray-700 pt-2">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setToolsOpen(!toolsOpen)}
        >
          <p className="text-xs font-semibold text-gray-300">Tools</p>
          {toolsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {toolsOpen && (
          <div className="space-y-2 mt-2">
            <ToggleSwitch label="Structured output" checked={structuredOutput} onChange={() => setStructuredOutput(!structuredOutput)} />
            <ToggleSwitch label="Code execution" checked={codeExecution} onChange={() => setCodeExecution(!codeExecution)} />
            <ToggleSwitch label="Function calling" checked={functionCalling} onChange={() => setFunctionCalling(!functionCalling)} />
            <ToggleSwitch label="Grounding with Google Search" checked={grounding} onChange={() => setGrounding(!grounding)} />
            <ToggleSwitch label="URL context" checked={urlContext} onChange={() => setUrlContext(!urlContext)} />
          </div>
        )}
      </div>

      <div className="border-t border-gray-700 pt-2">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setAdvancedOpen(!advancedOpen)}
        >
          <p className="text-xs font-semibold text-gray-300">Advanced settings</p>
          {advancedOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {advancedOpen && (
          <p className="text-xs text-gray-400 mt-2">Advanced settings coming soon...</p>
        )}
      </div>
    </div>
  );
};

export default RunSettings;
