import styles from "./CheckboxComp.module.css";

type CheckboxCompProps = {
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxComp: React.FC<CheckboxCompProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="flex items-center mt-2">
      <input
        type="checkbox"
        className={`${styles.customCheckbox} me-2 border-[#dfdfdf] dark:border-[#252b37]`}
        checked={checked}
        onChange={onChange}
      />
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default CheckboxComp;
