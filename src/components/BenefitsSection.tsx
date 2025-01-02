import { Brain, Lightbulb, Target } from "lucide-react";

const benefits = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Build Skills",
    description: "Practice and master new abilities in your dreams",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Solve Problems",
    description: "Find creative solutions while dreaming",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Personal Growth",
    description: "Explore unlimited potential in your dreams",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 sm:py-20 bg-gradient-to-b from-lavender to-moonlight">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-darkText text-center mb-3 sm:mb-4">
          Unlock More Time for Your Life
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-greatVibes text-darkText/80 text-center mb-12 sm:mb-16 italic">
          With endless opportunities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-twilight mb-6">{benefit.icon}</div>
              <h3 className="text-lg sm:text-xl font-poppins font-semibold text-darkText mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-darkText/80 font-inter">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};