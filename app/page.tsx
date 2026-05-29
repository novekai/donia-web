import { HeroMultilingue } from "@/components/HeroMultilingue";
import { SectionDemo } from "@/components/SectionDemo";
import {
  SectionWhy,
  SectionHow,
  SectionCatalog,
  SectionEvents,
  SectionReferral,
  SectionTestimonials,
  SectionCounters,
  SectionDownload,
} from "@/components/Sections";
import { SectionAnonymes } from "@/components/SectionAnonymes";
import { SectionAbout, SectionBlog, SectionFAQ, SectionContact } from "@/components/SectionsExtras";

// Ordre EXACT défini par Paul :
// 1. Pourquoi Donia
// 2. Comment ça marche
// 3. En vidéo
// 4. Catalogue
// 5. Reçois des messages anonymes
// 6. Évènement
// 7. Parrainage
// 8. Premier retour (témoignages)
// 9. 14 287 utilisateurs (counters)
// 10. À propos
// 11. Blog
// 12. FAQ
// 13. Contact
// 14. Télécharger
// 15. Footer (via layout)
export default function HomePage() {
  return (
    <>
      <HeroMultilingue />
      <SectionWhy />
      <SectionHow />
      <SectionDemo />
      <SectionCatalog />
      <SectionAnonymes />
      <SectionEvents />
      <SectionReferral />
      <SectionTestimonials />
      <SectionCounters />
      <SectionAbout />
      <SectionBlog />
      <SectionFAQ />
      <SectionContact />
      <SectionDownload />
    </>
  );
}
