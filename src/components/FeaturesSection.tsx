import { Sparkles, Moon, Calendar, Bell, ChartPie } from "lucide-react";

const features = [
  {
    icon: <Moon className="w-6 h-6" />,
    title: "Dream Journaling",
    description: "Record dreams with text, voice, and images",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Reality Checks & Dream Signs",
    description: "Set custom or in-app checks",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Dream Calendar",
    description: "Organize dreams by date",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Smart Reminders",
    description: "Customizable notifications",
  },
  {
    icon: <ChartPie className="w-6 h-6" />,
    title: "Statistics & Progress",
    description: "Analyze dream patterns and track achievements",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 sm:py-20 bg-gradient-to-b from-twilight to-twilight/80">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-lightText text-center mb-12 sm:mb-16">
          Unlock Your Dream Potential
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-darkText/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-moonlight mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-poppins font-semibold text-lightText mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-lightText/80 font-inter">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};