import Image from "next/image";
import logoImg from "@/public/logo.png";

export default function Header() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <Image src={logoImg} alt="Fazenda" />
      <h1 className="text-3xl lg:text-4xl !leading-tight mt-4 text-center">Фазенда</h1>
      <p className="text-2xl lg:text-3xl !leading-tight text-center">
        Учет грядок и всего что растет
      </p>
    </div>
  );
}
