import Image from "next/image";
import { ingredients, instructions, nutrition, preparation } from "./lib";

export default function Home() {
  return (
    <main className=" flex px-20 md:px-60 py-20 bg-[var(--primary-color)]">
      <section className="w-full bg-[var(--secondary-color)] rounded-xl overflow-hidden p-10 flex flex-col">
        <img className="rounded-lg" src="/image-omelette.jpeg" alt="banner" />
        <h1 className="mt-10 text-5xl font-serif text-[hsl(24,5%,18%)]">Simple Omelette Recipe</h1>
        <p className="mt-3 font-outfit">
          An easy and quick dish, perfect for any meal. This classNameic omelette combines beaten eggs cooked to perfection, 
          optionally filled with your choice of cheese, vegetables, or meats.
        </p>
        <div className="rounded-lg bg-[hsl(330,100%,98%)] p-[2rem] mt-[2rem]">
          <h3 className="mb-[1.3rem] font-outfit">{preparation.title}</h3>
          <ul className="pl-6">
            {preparation.list.map(item => (
              <li key={item.id} className="mb-[var(--list-marginb)] marker:text-[var(--color-h3)] font-outfit"><span className="ml-4"></span><strong>{item.title}</strong>{item.description}</li>
              ))}
          </ul>
        </div>
        <h2 className="my-[var(--margin-y-h2)] font-serif">{ingredients.title}</h2>
        <ul className="mb-5 p-2 pl-6">
          {ingredients.list.map(item => (
            <li key={item.id} className="mb-[var(--list-marginb)] font-outfit"><span className="ml-4"></span>{item.description}</li>
          ))}
        </ul>
        <hr/>
        <h2 className="my-[var(--margin-y-h2)] font-serif">{instructions.title}</h2>
        <ol  className="mb-5 p-2 pl-6">
          {instructions.list.map(item => (
            <li key={item.id}  className="mb-[var(--list-marginb)] pl-5 font-outfit"><strong>{item.title}</strong>{item.description}</li>
          ))}
        </ol>
        <hr />
        <h2 className="my-[var(--margin-y-h2)] font-serif">{nutrition.title}</h2>
        <p className="mb-3 font-outfit">{nutrition.description}</p>
        {nutrition.list.map(item => (
          <div className="flex flex-col font-outfit" key={item.id}>
            <div className="flex my-3">
              <h4 className="w-1/2 pl-5">{item.title}</h4>
              <p className="w-1/2 text-[var(--color-h3)]"><strong>{item.value}</strong></p>
            </div>
            <hr />
          </div>
        ))}
      </section>
    </main>
  );
}
