import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-2",
    question: "Is it styled?",
    answer: "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    id: "item-3",
    question: "Is it animated?",
    answer: "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

export default function Faqs() {
  return (
    <section className="pt-2 pb-12 relative bg-white/25 rounded-xl" id="faq">
      <div className="text-center text-3xl font-bold text-neutral-900 md:text-5xl lg:h-12 mt-12 mb-4">
        FAQs
      </div>
      <Accordion type="single" collapsible className="w-[70%] mx-auto font-geist flex flex-col gap-2">
        {faqItems.map((item, index) => (
          <AccordionItem key={item.id} value={item.id} className={`${index % 2 == 0 ? "bg-yellow-300/50" : "bg-orange-300/50"} rounded-xl px-2`}>
            <AccordionTrigger className="no-underline">{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}