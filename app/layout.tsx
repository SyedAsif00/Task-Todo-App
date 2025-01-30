import type { Metadata } from "next";
import AppLayout from "./_components/AppLayout";
import "./globals.css";
import { TaskProvider } from "./_context/TaskContext";

export const metadata: Metadata = { title: "TaskTodoApp" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white  w-full">
        <TaskProvider>
          <AppLayout>{children}</AppLayout>
        </TaskProvider>
      </body>
    </html>
  );
}
