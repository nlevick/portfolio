import Card from '@/components/Card';

export default function About() {
  return (
    <section className="flex-1 overflow-y-scroll overflow-x-hidden">
      <div className="">
        <Card title="Bio">
          <p>I dive into complex data to create elegant surfaces.</p>
          <p>Currenlty building FDA-cleared medical imaging software.</p>
          <p>Always exploring new depths.</p>
        </Card>
        <Card title="Process">
          <p>I dive into complex data to create elegant surfaces.</p>
          <p>Currenlty building FDA-cleared medical imaging software.</p>
          <p>Always exploring new depths.</p>
        </Card>
        <Card title="Thoughts">
          <p>I dive into complex data to create elegant surfaces.</p>
          <p>Currenlty building FDA-cleared medical imaging software.</p>
          <p>Always exploring new depths.</p>
        </Card>
      </div>
    </section>
  );
}
