import { LockKeyhole } from "lucide-react";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";

const Security = () => {
  const [twoFactor, setTwoFactor] = useState(false);
  return (
    <SettingSection icon={LockKeyhole} title={"Security"}>
      <ToggleSwitch
        label={"Two-Factor Authentication"}
        isOn={twoFactor}
        onToggle={() => setTwoFactor(!twoFactor)}
      />
      <div className="mt-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 py-2 pb-2.5 px-4 rounded font-bold text-white transition duration-200">
          Change Password
        </button>
      </div>
    </SettingSection>
  );
};

export default Security;
