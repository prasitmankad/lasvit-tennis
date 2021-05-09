import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import { useTranslation } from "react-i18next";

export default function SnackbarUI({ onClose }) {
  const { t } = useTranslation();

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open
        autoHideDuration={6000}
        onClose={onClose}
        onExited={onClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{t("subscribeSnackbar")}</span>}
        action={[
          <div
            className="cursor-pointer text-xs text-white-600 p-2"
            onClick={onClose}
          >
            <CloseIcon className="w-1 h-1" />
          </div>,
        ]}
      />
    </>
  );
}
