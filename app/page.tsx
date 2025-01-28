import { redirect } from "next/navigation";
import AppRoutes from "./_lib/appRoutes";
export default function Page() {
  // default redirection to /tasks
  redirect(AppRoutes.Tasks);
}
