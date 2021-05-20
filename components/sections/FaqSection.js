import { useLanguage } from "../../hooks/useLanguage";
export function FaqSection({ faqs }) {
  const { l } = useLanguage();
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {l(faqs.heading)}
          </h2>
          <p className="text-lg text-gray-500">{l(faqs.content)}</p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-12">
            {faqs.faq.map((faq, i) => (
              <div key={i}>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  {l(faq.question)}
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {l(faq.answer)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
