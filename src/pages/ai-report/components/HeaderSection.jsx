import React from "react";
import { useTranslation } from "react-i18next";
import { Sparkles } from "lucide-react";

const HeaderSection = ({ userName }) => {
  const { t } = useTranslation();
  const greetingText = userName ? t("aiReport.hello", { name: userName }) : null;

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 grid place-items-center">
          <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div className="min-w-0">
          {greetingText ? (
            <span className="inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 px-3 py-1 text-xs font-bold mb-1">
              {greetingText}
            </span>
          ) : null}
          <h1 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
            
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            {t("aiReport.subtitle")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;