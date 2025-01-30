import { redirect } from "next/navigation";
import AppRoutes from "./_lib/appRoutes";
export default function Page() {
  redirect(AppRoutes.Tasks);
}
