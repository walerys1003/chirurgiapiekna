import { HeroEditorial } from '@/components/sections/HeroEditorial';
import { FeaturedProcedures } from '@/components/sections/FeaturedProcedures';
import { BeforeAfterShowcase } from '@/components/sections/BeforeAfterShowcase';
import { SurgeonSpotlight } from '@/components/sections/SurgeonSpotlight';
import { TrendingNow } from '@/components/sections/TrendingNow';
import { PatientStories } from '@/components/sections/PatientStories';
import { PriceGuideTeaser } from '@/components/sections/PriceGuideTeaser';
import { SEOContentBlock } from '@/components/sections/SEOContentBlock';

export default function Home() {
  return (
    <>
      <section>
        <HeroEditorial />
      </section>
      <section>
        <FeaturedProcedures />
      </section>
      <section>
        <BeforeAfterShowcase />
      </section>
      <section>
        <SurgeonSpotlight />
      </section>
      <section>
        <TrendingNow />
      </section>
      <section>
        <PatientStories />
      </section>
      <section>
        <PriceGuideTeaser />
      </section>
      <section>
        <SEOContentBlock />
      </section>
    </>
  );
}