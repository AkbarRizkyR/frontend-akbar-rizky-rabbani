
import StaticTable from "@/components/StaticTable";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <section className="mb-8 shadow">
        <h2 className="text-xl font-semibold mb-2">Statistics</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-primary shadow  border-accent border-2 rounded">
            <p className="text-gray-600">Users</p>
            <p className="text-2xl font-bold">100</p>
          </div>
          <div className="p-4 bg-primary shadow rounded border-accent border-2 ">
            <p className="text-gray-600">Sales</p>
            <p className="text-2xl font-bold">$5000</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Recent Activities</h2>
        <ul className="bg-primary shadow rounded border-accent border-2  p-4">
          <li className="mb-2">User A signed up</li>
          <li className="mb-2">User B made a purchase</li>
        </ul>
      </section>
      <section className="w-full pt-5">
        <StaticTable className="bg-primary" />
      </section>
    </main>
  );
}