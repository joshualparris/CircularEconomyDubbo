export function EvidenceBadge({ status }) {
  const key = String(status || "unknown").toLowerCase().replaceAll(" ", "-");
  return <span className={"evidence-badge evidence-" + key}>{status}</span>;
}
