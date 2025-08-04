import { SubtitleItem } from "@/types";
import { colorContentCard, colorText } from "@/utils/color-vars";
import Image from "next/image";

const Subtitle = async () => {
  const res = await fetch("http://localhost:3000/data/subtitle.json");

  if (!res.ok) {
    console.error("Failed to fetch subtitle data");
    return <div>Ошибка загрузки данных</div>;
  }

  const subtitle: SubtitleItem[] = await res.json();

  return (
    <div className="grid lg:grid-cols-3 lg:gap-8 gap-6 lg:mt-16 mt-2 px-6">
      {subtitle.map((item) => (
        <div
          key={item.id}
          className={`${colorContentCard} lg:p-6 p-4 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center duration-300 hover:scale-103`}
        >
          <Image
            src={item.icon}
            alt={item.title}
            className="mb-3 dark:invert"
            width={30}
            height={30}
          />
          <h3 className="text-xl font-semibold mb-2 text-center">
            {item.title}
          </h3>
          <p className={`text-center ${colorText}`}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};
export default Subtitle;
