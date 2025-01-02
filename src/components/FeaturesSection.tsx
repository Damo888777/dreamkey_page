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
    <section id="features" className="py-20 bg-gradient-to-b from-twilight to-lavender">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-lightText text-center mb-16">
          Unlock Your Dream Potential
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-moonlight mb-4">{feature.icon}</div>
              <h3 className="text-xl font-poppins font-semibold text-lightText mb-2">
                {feature.title}
              </h3>
              <p className="text-lightText/80 font-inter">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};