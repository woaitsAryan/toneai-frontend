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
    question: "What exactly does toneAI do?",
    answer: "We analyze messages to detect irony, sarcasm, and aggression, then suggest appropriate replies. Think of us as your smart friend who's really good at reading between the lines!"
  },
  {
    id: "item-2",
    question: "How accurate is it?",
    answer: "Our AI model is trained on 58 million tweets with 94.6% accuracy in tone detection. But remember, even humans misread messages sometimes!"
  },
  {
    id: "item-3",
    question: "Is my data private?",
    answer: "Your messages are analyzed in real-time and never stored. We value your privacy as much as we value detecting sarcasm (which is a lot!)."
  },
  {
    id: "item-4",
    question: "Will it understand my group chat drama?",
    answer: "Absolutely! Whether it's passive-aggressive work emails or confusing dating app messages, we've got you covered. We're especially good at decoding those tricky 'k.' responses."
  },
  {
    id: "item-5",
    question: "Does it work with emojis?",
    answer: "Yes! We understand that 🙂 hits different than 🙃. Our AI is fluent in emoji and understands their contextual usage in modern communication."
  },
  {
    id: "item-6",
    question: "How fast does it work?",
    answer: "Lightning fast! We process your messages in under 200ms. That's faster than the time it takes to overthink a response!"
  }
];

export default function Faqs() {
  return (
    <section className="pt-2 pb-12 relative bg-white/25 rounded-xl" id="faq">
      <div className="text-center text-3xl font-bold text-neutral-900 md:text-5xl lg:h-12 mt-12 mb-4">
        FAQs
      </div>
      <Accordion type="single" collapsible className="w-[85%] md:w-[70%] mx-auto font-geist flex flex-col gap-2">
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