import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="text-center py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-[clamp(2.2rem,4vw,3.75rem)] font-extrabold mb-6 bg-gradient-to-r from-amber-500 via-emerald-500 to-sky-400 bg-clip-text text-transparent">
        Найди свой баланс питания
      </h1>
      <p className="text-[clamp(1.05rem,4vw,1.25rem)] text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
        Balancio рассчитает твой идеальный рацион — персонально под твой
        возраст, вес, активность и цели. Без диет. Без лишнего. Просто баланс.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="bg-amber-500 hover:bg-amber-600 text-white cursor-pointer"
        >
          Рассчитать питание
        </Button>
        <Button variant="outline" size="lg" className="cursor-pointer">
          Как это работает?
        </Button>
      </div>
    </section>
  );
};
export default HeroSection;
