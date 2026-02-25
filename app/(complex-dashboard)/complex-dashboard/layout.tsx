import Card from "@/components/card/Card";
import "../../globals.css";

export default function Layout({
  children,
  UserAnalitics,
  RevenueMatrix,
  Notifications,
}: {
  children: React.ReactNode;
  UserAnalitics: React.ReactNode;
  RevenueMatrix: React.ReactNode;
  Notifications: React.ReactNode;
}) {
  return (
    <section>
      {children}
      <div className="flex">
        <div className="flex-col">
          <Card>{UserAnalitics}</Card>
          <Card>{RevenueMatrix}</Card>
        </div>
        <div>{Notifications}</div>
      </div>
      <h1>hi</h1>
    </section>
  );
}
