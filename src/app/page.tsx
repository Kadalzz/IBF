import {
  AwardingIntro,
  BookBackground,
  BookCases,
  BookObjective,
  Categories,
  Cover,
  Criteria,
  GlanceBooks,
  GlancePhotos,
  Judges,
  LineUp,
  Programs,
  RegisterCta,
  Winners,
} from "@/components/sections";
import { Divider, MobileBuyBar } from "@/components/ui";

// The whole deck, slide by slide, in its original order.
export default function HomePage() {
  return (
    <>
      <Cover />
      <GlancePhotos />
      <GlanceBooks />
      <Programs />

      <Divider word="Awarding" id="awarding" />
      <AwardingIntro />
      <Criteria />
      <Categories />
      <Winners />
      <Judges />

      <Divider word="Conference" id="conference" />
      <LineUp />

      <Divider word="Book" id="book" />
      <BookBackground />
      <BookObjective />
      <BookCases />

      <RegisterCta />
      <MobileBuyBar />
    </>
  );
}
