// app/(complex-dashboard)/complex-dashboard/@Notifications/page.tsx
import "../../../globals.css";
import Link from "next/link";

export default function Notifications() {
  return (
    <div className="p-4 border rounded shadow ">
      <h2 className="text-xl font-bold">Recent Notifications</h2>
      <nav className="my-2 flex gap-2">
        <Link href="/complex-dashboard" className="underline font-bold">
          Recent
        </Link>
        <Link href="/complex-dashboard/archive" className="underline text-blue-600">
          Archive
        </Link>
      </nav>
      <ul>
        <li>Message 1: &quot;System update complete.&quot;</li>
        <li>Message 2: &quot;New login detected.&quot;</li>
      </ul>
    </div>
  );
}
