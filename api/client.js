export async function getStatus() {
  const res = await fetch("/api/status");
  return res.json();
}
