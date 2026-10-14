// Placeholder copy: review with the team before launch.
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'What is Jaba Jerky made of?',
    answer:
      'Organic, non-GMO tofu that we press, marinate, and slow-smoke until it has a proper jerky chew. Full ingredient lists are on each product page.',
  },
  {
    question: 'Is it vegan?',
    answer: 'Yes. Every Jaba Jerky flavor is 100% plant-based.',
  },
  {
    question: 'Is it gluten-free?',
    answer:
      'Some flavors use soy sauce that contains wheat. Check each flavor’s label; gluten-free flavors are marked.',
  },
  {
    question: 'How much protein is in a bag?',
    answer: 'TODO: confirm nutrition numbers with the final recipe.',
  },
  {
    question: 'How should I store it?',
    answer:
      'Unopened bags are shelf-stable. Once opened, reseal the bag and eat within a week, or keep it in the fridge.',
  },
  {
    question: 'Where can I buy it?',
    answer:
      'Online ordering is coming soon. In the meantime, email us to find out where to pick some up.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Not yet. We’ll start with domestic shipping when the online shop opens.',
  },
];
