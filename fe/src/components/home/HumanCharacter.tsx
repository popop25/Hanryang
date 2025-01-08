const HumanCharacter = () => {
  return (
    <div className="character">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        width="200"
        height="200"
      >
        <circle cx="100" cy="60" r="40" fill="#F9C9B6" />
        <circle cx="85" cy="50" r="5" fill="#000" />
        <circle cx="115" cy="50" r="5" fill="#000" />
        <path
          d="M85 75 C95 85, 105 85, 115 75"
          stroke="#000"
          strokeWidth="3"
          fill="none"
        />
        <rect x="70" y="100" width="60" height="80" fill="#6EC1E4" rx="10" />
        <rect x="40" y="110" width="20" height="60" fill="#F9C9B6" rx="10" />
        <rect x="140" y="110" width="20" height="60" fill="#F9C9B6" rx="10" />
        <rect x="75" y="180" width="20" height="40" fill="#4E5D73" rx="10" />
        <rect x="105" y="180" width="20" height="40" fill="#4E5D73" rx="10" />
        <circle cx="85" cy="220" r="10" fill="#2D3A45" />
        <circle cx="115" cy="220" r="10" fill="#2D3A45" />
      </svg>
    </div>
  );
};

export default HumanCharacter;
