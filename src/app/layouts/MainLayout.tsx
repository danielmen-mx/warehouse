import { PropsWithChildren } from "react";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-4">
        {children}
      </main>
    </div>
  );
}