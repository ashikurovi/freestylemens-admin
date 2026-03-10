import React from "react";
import { motion } from "framer-motion";
import { Box, Download, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

const InventoryHeader = ({ onExport, onAdd }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
    >
      {/* ── Title block ── */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
          <Box className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-bold leading-tight text-gray-900 dark:text-white">
            {t("inventory.title")}
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight mt-0.5">
            {t("inventory.subtitle")}
          </p>
        </div>
      </div>

      {/* ── Action buttons ── */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onExport}
          className="h-8 px-3 rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 text-xs font-medium flex items-center gap-1.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800"
        >
          <Download className="w-3.5 h-3.5" />
          {t("inventory.exportReport")}
        </Button>
        <Button
          size="md"
          className="h-8 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm"
          onClick={onAdd}
        >
          <Plus className="w-3.5 h-3.5" />
          {t("inventory.addNewItem")}
        </Button>
      </div>
    </motion.div>
  );
};

export default InventoryHeader;