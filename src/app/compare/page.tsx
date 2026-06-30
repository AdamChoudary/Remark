import { HeroVariant } from "@/components/HeroVariant";

export const metadata = {
  title: "Hero compare — Remark Studio",
};

export default function Compare() {
  return (
    <main>
      <HeroVariant variant="dark" />
      <HeroVariant variant="bright" />
    </main>
  );
}
