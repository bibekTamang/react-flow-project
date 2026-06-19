import { useState } from "react";
import { Button } from "../actions/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { Dropdown } from "./Dropdown";
import { Input } from "./Input";

const operators = [
  { label: "=", value: "=" },
  { label: "!=", value: "!=" },
  { label: ">", value: ">" },
  { label: "<", value: "<" },
  { label: ">=", value: ">=" },
  { label: "<=", value: "<=" },
];

export const PathConditionCard = () => {
  const [selectedOp, setSelectedOp] = useState(operators[0]);

  return (
    <div className="bg-brand-light/10 p-2 mt-2">
      <div className="text-xs text-brand-light font-semibold flex items-center justify-between pb-2">
        <span>Path 0</span>
        <Button
          label="Add Clause"
          icon={<AiOutlinePlus size={14} />}
          className="bg-white px-2 py-1"
        />
      </div>
      <div className="bg-white p-4 rounded-lg text-xs text-brand-light grid grid-cols-3 gap-2">
        <Input label="Input" type="Any" placeholder="Input" />
        <Dropdown
          label="Type"
          value={selectedOp}
          options={operators}
          onChange={setSelectedOp}
        />
        <Input label="Value" type="Any" placeholder="Value" />
      </div>
    </div>
  );
};
