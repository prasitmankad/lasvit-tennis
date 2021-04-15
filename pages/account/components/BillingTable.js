export function BillingTable(props) {
  const { nameTable, billing = [] } = props;

  return (
    <section aria-labelledby="billing_history_heading py-12">
      <div class="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 sm:px-6 lg:px-8">
          <h2
            id="billing_history_heading"
            class="text-lg leading-6 font-medium text-gray-900"
          >
            {nameTable}
          </h2>
        </div>
        <div class="mt-6 flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden border-t border-gray-200">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Amount
                      </th>

                      <th
                        scope="col"
                        class="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        <span class="sr-only">View receipt</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    {billing &&
                      billing.map((bill, i) => {
                        console.log("[TODO bill]", bill);
                        return (
                          <tr key={i}>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              <time datetime="2020-01-01">1/1/2020</time>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              Business Plan - Annual Billing
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              CA$109.00
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a
                                href="#"
                                class="text-orange-600 hover:text-orange-900"
                              >
                                View receipt
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
