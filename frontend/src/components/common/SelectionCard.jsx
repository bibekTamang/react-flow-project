import { useTranslation } from "react-i18next";
import { MdKeyboardArrowRight } from "react-icons/md";

export const SelectionCard = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-3 rounded-md border border-brand-light/20 mb-2 flex items-center justify-between cursor-pointer hover:bg-brand-light/10">
      <div className="flex flex-col gap-1 pr-2">
        <span className="text-sm font-semibold text-brand-dark">
          {t(data.titleKey)}
        </span>
        <span className="text-xs text-brand-light">
          {t(data.descriptionKey)}
        </span>
      </div>
      <MdKeyboardArrowRight
        className="text-brand-light flex-shrink-0"
        size={20}
      />
    </div>
  );
};
