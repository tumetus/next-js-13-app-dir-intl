import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import AlertMessage from "./AlertMessage";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div>
      <div>
        <Link href="/" locale="en">
          In english
        </Link>{" "}
        |{" "}
        <Link href="/" locale="fi">
          In Finnish
        </Link>
        <br />
        <br />
      </div>
      <div>
        <p>{t("title")}</p>
        <p>{t("subtitle")}</p>
      </div>
      <div>
        <br />
        <AlertMessage message={t("alertMessage")} />
      </div>
    </div>
  );
}
