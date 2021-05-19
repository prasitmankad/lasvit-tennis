export function FaqSection({ faqs }) {
  return (
    <>
      <div className={"bg-gray-darkest"}>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white">{faqs.heading}</h2>
          <p className="text-lg text-white">{faqs.content}</p>
          <div className="mt-6 border-t border-blue-400 border-opacity-25 pt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
              {faqs.faq.map((item) => (
                <div key={item.id}>
                  <dt className="text-lg leading-6 font-medium text-white">
                    {item.question}
                  </dt>
                  <dd className="mt-2 text-base text-blue-200">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
