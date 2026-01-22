import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { Category } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";

const categoryList = [
  {
    name: "Running",
    imgUrl: "category-running.svg",
  },
];

type TCategoriesProps = {
  categories: Category[];
};

const CategoriesSection = ({ categories }: TCategoriesProps) => {
  return (
    <section id="category-section" className="container mx-auto pb-20">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Browse By Categories</h2>
        <Link href="#" className="text-primary flex gap-2 font-medium ">
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center" />
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-12">
        {categories.map((category) => (
          <div
            className="rounded-lg bg-gradient-to-r from-[#f1f1f1] to-[#f7f7f7] w-full aspect-square flex flex-col justify-center items-center gap-4 hover:scale-105 transition-transform duration-300 mt-5 md:mt-5"
            key={category._id}
          >
            <Image
              src={getImageUrl(category.imageUrl)}
              width={86}
              height={86}
              alt={category.name}
              className="object-contain"
            />

            <div className="text-primary md:font-medium font-medium  md:text-lg text-[10px] text-center capitalize">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
