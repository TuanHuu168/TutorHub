const StatsItem = ({ label, value }) => {
  return (
    <div className="stats-item">
      <strong>{value}</strong>
      <p>{label}</p>
    </div>
  );
};

export default StatsItem;