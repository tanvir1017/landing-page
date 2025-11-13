import { cn } from "@/lib/utils";

const StaticsCardsComponent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-4 gap-2">
      {analyticsCards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 border-[#E4E7EC] border space-y-3"
        >
          <p className="text-[#667085] leading-5 tracking-[-0.2px] text-sm">
            {card.title}
          </p>
          <div className="flex items-baseline justify-between">
            <h5 className="text-2xl leading-8 tracking-[-0.5px] font-semibold text-[#1D2939]">
              {card.value}
            </h5>
            <div className="flex items-center space-x-1">
              <span
                className={cn(
                  "text-xs leading-[18px] font-medium flex items-center px-2 py-0.5 rounded-full",
                  {
                    "text-[#039855] bg-[#ECFDF3]":
                      card.changeType === "positive",
                    "text-[#D92D20] bg-[#FEF3F2]":
                      card.changeType !== "positive",
                  }
                )}
              >
                {card.change}
              </span>
              <p className="text-[#667085] leading-4 text-xs tracking-[-0.2px]">
                Vs last month
              </p>
            </div>
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
