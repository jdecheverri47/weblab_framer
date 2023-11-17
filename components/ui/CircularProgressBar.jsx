const CircularProgressBar = ({ value, maxValue }) => {
  const radius = 45; // Radio del círculo
  const circumference = 2 * Math.PI * radius; // Circunferencia del círculo
  const normalizedValue = ((value / maxValue) * circumference).toFixed(0);

  return (
    <svg width="180" height="180" viewBox="0 0 100 100" >
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="transparent"
        opacity={0.4}
        stroke="#eee"
        strokeWidth="8"
      />
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="#FAFAF5"
        strokeWidth="8"
        strokeDasharray={`${normalizedValue} ${circumference}`}
        transform="rotate(-90 50 50)"
        strokeLinecap="round"
      />
      <text
        x="50"
        y="55"
        fill="white"
        textAnchor="middle"
        fontSize="20"
        fontFamily="Konnect"

      >{`${Math.round(value)}`}</text>
    </svg>
  );
};

export default CircularProgressBar;
