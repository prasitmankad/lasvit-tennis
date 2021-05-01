import { FeatureSection } from "./sections/FeatureSection";
import { FaqSection } from "./sections/FaqSection";
import { StatSection } from "./sections/StatSection";
import { PricingSection } from "./sections/PricingSection";

export function CoursePriceCard({ payCourse, course }) {
  return (
    <div className="bg-white">
      <PricingSection pricing={course.pricing} payCourse={payCourse} />
      <FeatureSection content={course.content} />
      <FaqSection faqs={course.faqs} />
      <StatSection stats={course.stats} />
    </div>
  );
}
