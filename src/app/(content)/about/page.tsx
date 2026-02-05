import Card from '@/components/Card/Card';
import Subsection from '@/components/Card/Subsection';
import Divider from '@/components/Divider';

export default function About() {
  return (
    <section className="flex-1 overflow-y-scroll overflow-x-hidden">
      <div>
        <Card title="Bio">
          <Subsection title="Hello, I am Nathan.">
            <p>
              When not at my computer, you might find me biking or eating pizza
              or maybe biking to eat pizza. I live in Albuquerque with my
              family.
            </p>
          </Subsection>
        </Card>
        <Card title="Process">
          <p>
            I build web apps by spanning the entire UX stack, from user research
            to production deployment. Using my unconventional journey to
            software (studying art, math, and screenwriting), my solutions blend
            creativity, technicality, and storytelling.
          </p>
          <Divider />
          <Subsection title="Research">
            <p>
              I start with by understanding users through interviews, usability
              testing, and analysis.
            </p>
          </Subsection>

          <Subsection title="Design">
            <p>
              I create lo-fi wireframes explore concepts then usually move
              directly to code rapid iteration.
            </p>
          </Subsection>

          <Subsection title="Code">
            <p>
              I build emphasizing scalability, performance, and testability.
            </p>
          </Subsection>
        </Card>
      </div>
    </section>
  );
}
