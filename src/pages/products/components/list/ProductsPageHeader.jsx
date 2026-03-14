import React from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Upload, Download, Zap, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetCurrentUserQuery } from "@/features/auth/authApiSlice";
import {
  hasPermission,
  FeaturePermission,
} from "@/constants/feature-permission";

export default function ProductsPageHeader({
  onBulkUpload,
  onExport,
  t = (k) => k,
}) {
  const navigate = useNavigate();
  const { data: user } = useGetCurrentUserQuery();

  const canBulkUpload = hasPermission(
    user,
    FeaturePermission.PRODUCT_BULK_UPLOAD,
  );
  const canManageFlashSell = hasPermission(user, FeaturePermission.FLASH_SELL);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-2">
      {/* ── Title block (Package Management style) ── */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
          <Package className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-bold leading-tight text-gray-900 dark:text-white">
            {t("products.pageHeadline")}
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight mt-0.5">
            {t("products.pageSubheadline")}
          </p>
        </div>
      </div>

      {/* ── Action buttons ── */}
      <div className="flex items-center gap-2">
        {canBulkUpload && (
          <Button
            variant="outline"
            size="sm"
            onClick={onBulkUpload ?? (() => navigate("/products/bulk-upload"))}
            className="h-8 px-3 rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1f26] text-xs font-medium flex items-center gap-1.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50"
          >
            <Upload className="w-3.5 h-3.5" />
            {t("products.bulkUpload")}
          </Button>
        )}

        <Button
          variant="outline"
          size="sm"
          onClick={onExport}
          className="h-8 px-3 rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1f26] text-xs font-medium flex items-center gap-1.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50"
        >
          <Download className="w-3.5 h-3.5" />
          {t("products.export")}
        </Button>

        {canManageFlashSell && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/flash-sell")}
            className="h-8 px-3 rounded-lg border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/20 text-xs font-medium flex items-center gap-1.5 text-amber-700 dark:text-amber-400 hover:bg-amber-100"
          >
            <Zap className="w-3.5 h-3.5" />
            {t("nav.flashSell") || "Flash Sell"}
          </Button>
        )}

        <Button
          size="sm"
          className="h-8 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm"
          onClick={() => navigate("/products/create")}
        >
          <Plus className="w-3.5 h-3.5" />
          {t("products.addProduct")}
        </Button>
      </div>
    </div>
  );
}
