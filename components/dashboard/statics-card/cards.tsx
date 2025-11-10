const StaticsCardsComponent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {analyticsCards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100"
        >
          <p className="text-sm text-gray-500 mb-2">{card.title}</p>
          <div className="flex items-baseline justify-between">
            <p className="text-3xl font-bold text-gray-900">{card.value}</p>
            <span
              className={`text-sm font-medium flex items-center ${
                card.changeType === "positive"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {card.changeType === "negative" && "↓"} {card.change}
              <span className="text-gray-500 ml-1">Vs last month</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaticsCardsComponent;

const analyticsCards = [
  {
    title: "Unique Visitors",
    value: "24.7K",
    change: "+20%",
    changeType: "positive",
    vs: "Vs last month",
  },
  {
    title: "Total Pageviews",
    value: "55.9K",
    change: "+4%",
    changeType: "positive",
    vs: "Vs last month",
  },
  {
    title: "Bounce Rate",
    value: "54%",
    change: "-1.59%",
    changeType: "negative",
    vs: "Vs last month",
  },
  {
    title: "Visit Duration",
    value: "2m 56s",
    change: "+7%",
    changeType: "positive",
    vs: "Vs last month",
  },
];
