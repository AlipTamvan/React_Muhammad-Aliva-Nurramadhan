import { SubscribeForm } from "../molecules/SubscribeForm";

export const Newsletter = () => (
  <section className="bg-gray-100 py-16 px-5">
    <div className="container mx-auto text-center">
      <h3 className="text-2xl font-semibold text-primary mb-4">
        Join Our Newsletter
      </h3>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Tamen quem nulla quae legam multos aute sint culpa legam noster magna
      </p>
      <SubscribeForm />
    </div>
  </section>
);
