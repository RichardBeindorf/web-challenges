import Link from "../components/Link";

export default function HomePage({ onToggle, isOn }) {
  return (
    <div>
      <h1>Home</h1>
      <p>?? light(s) are on.</p>
      <p>
        <Link href="/rooms" onToggle={onToggle} isOn={isOn} >All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
