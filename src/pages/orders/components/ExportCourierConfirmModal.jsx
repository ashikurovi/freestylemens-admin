import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Truck } from "lucide-react";

const ExportCourierConfirmModal = ({
  isOpen,
  onClose,
  order,
  onConfirm,
  isLoading,
  providerLabel,
}) => {
  const { t } = useTranslation();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[460px]">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/20">
              <Truck className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            </div>
            <div>
              <DialogTitle>
                {t("orders.exportCourierConfirmTitle")}
              </DialogTitle>
              <DialogDescription className="mt-1 text-sm text-black/60 dark:text-white/60">
                {t("orders.exportCourierConfirmDesc", {
                  id: order?.id,
                  provider: providerLabel || t("orders.courier"),
                })}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <DialogFooter>
          <Button variant="ghost" onClick={onClose} disabled={isLoading}>
            {t("common.cancel")}
          </Button>
          <Button
            onClick={onConfirm}
            disabled={isLoading}
            className="bg-violet-600 hover:bg-violet-700 text-white"
          >
            {isLoading ? t("common.processing") : t("orders.exportCourier")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExportCourierConfirmModal;
