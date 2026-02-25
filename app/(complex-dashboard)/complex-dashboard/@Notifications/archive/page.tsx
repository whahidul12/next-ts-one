import "../../../../globals.css";
// app/(complex-dashboard)/complex-dashboard/@Notifications/archive/page.tsx
import Link from "next/link";

export default function ArchiveNotifications() {
  return (
    <div className="p-4 border rounded shadow bg-black">
      <h2 className="text-xl font-bold">Archived Notifications</h2>
      <nav className="my-2 flex gap-2">
        <Link href="/complex-dashboard" className="underline text-blue-600">
          Recent
        </Link>
        <Link href="/complex-dashboard/archive" className="underline font-bold">
          Archive
        </Link>
      </nav>
      <p>No archived messages found.</p>
    </div>
  );
}
