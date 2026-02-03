import Card from '@/components/Card/Card';
import Subsection from '@/components/Card/Subsection';

export default function Work() {
  return (
    <section className="flex-1 overflow-y-scroll overflow-x-hidden">
      <div>
        <Card title="Projects">
          <p className="mb-3">
            I am leading the UI architecture of FDA-cleared digital pathology
            software at Indica Labs. Check it out{' '}
            <a
              className="bold underline"
              href="https://indicalab.com/clinical-products/halo-ap-dx"
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <p>
            More project stories comming soon. Want more details?{' '}
            <a
              className="bold underline"
              href="https://linkedin.com/in/nathan-levick"
              target="_blank"
            >
              Contact me
            </a>
            .
          </p>
        </Card>
      </div>
    </section>
  );
}
