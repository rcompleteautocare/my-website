type Props = { date: string };

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function LastUpdated({ date }: Props) {
  const d = new Date(`${date}T00:00:00Z`);
  const human = `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
  return (
    <p style={{ color: "#888", fontSize: "13px", marginBottom: "24px" }}>
      <time dateTime={date}>Last updated: {human}</time>
    </p>
  );
}
