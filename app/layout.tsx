import type { Metadata } from "next";
import AppLayout from "./_components/AppLayout";
import "./globals.css";
import { TaskProvider } from "./_context/TaskContext";
import colors from "./_utils/colors";

export const metadata: Metadata = { title: "TaskTodoApp" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ background: colors.background }}
        className=" text-white  w-full"
      >
        <TaskProvider>
          <AppLayout>{children}</AppLayout>
        </TaskProvider>
      </body>
    </html>
  );
}
