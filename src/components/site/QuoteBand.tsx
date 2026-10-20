export function QuoteBand({ quote, author = "Erika" }: { quote: string; author?: string }) {
  return (
    <section className="bg-lavender px-6 py-20">
      <figure className="mx-auto max-w-3xl text-center">
        <span className="font-display text-7xl leading-none text-lavender-strong">“</span>
        <blockquote className="-mt-6 font-display text-3xl italic leading-snug text-primary-deep md:text-4xl">
          {quote}
        </blockquote>
        <figcaption className="eyebrow mt-6">— {author}</figcaption>
      </figure>
    </section>
  );
}
