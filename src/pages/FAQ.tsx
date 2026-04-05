import React from "react";
import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "How quickly can I receive my order?",
        a: "We offer various shipping options, including urgent dispatch and express shipping. If you need your gift quickly, select a faster shipping method at checkout, and we’ll do our best to ensure timely delivery."
      },
      {
        q: "What occasions are your products best suited for?",
        a: "Our products are perfect for a wide range of occasions, including weddings, anniversaries, birthdays, housewarmings, and holidays."
      },
      // {
      //   q: "Can I customise my order?",
      //   a: "Yes! Many of our products can be personalised with custom messages. Simply choose the customisation options available on the product page during checkout to create a truly unique and meaningful gift."
      // },
      {
        q: "Can I add a personal message?",
        a: "Yes, we offer the ability to include a personalised message with your order. These options can be selected when choosing each gift."
      },
      // {
      //   q: "What if I don't know the recipient's preferences?",
      //   a: "We understand that choosing the perfect gift can be challenging. If you’re unsure, consider our popular best-sellers. We also offer gift cards, allowing the recipient to choose something they truly love."
      // },
      // {
      //   q: "What if I'm unsure whether the gift will be well-received?",
      //   a: "Our products are designed with unique craftsmanship and personalisation options to make a lasting impression. Their unique beauty is sure to bring joy to any recipient, helping to reassure your choice."
      // },
      {
        q: "How do I care for my product?",
        a: "Each product comes with care instructions to help you maintain its quality and appearance. You can also find care guides on our website under the Product Care section."
      }
    ]
  },
  {
    category: "Products & Materials",
    questions: [
      {
        q: "Are your products safe for food use?",
        a: "Yes, our products, including cheese boards and serving trays, are made with materials that are safe for incidental food contact. The resin-coated surfaces are suitable for briefly serving dry or non-moist foods. For any direct or prolonged food contact, we recommend using the wood side of the boards."
      },
      {
        q: "What materials are used in your products, and are they sustainable?",
        a: "We use high-quality, sustainably sourced materials, including locally sourced timber and non-toxic, food-safe resin. Our commitment to environmentally friendly practices is reflected in every step of our production process."
      },
      {
        q: "Will my product look exactly like the pictures on the website?",
        a: "Due to the handmade nature of our products, slight variations in color and texture will occur. These unique differences are part of what makes each item special, ensuring you receive a one-of-a-kind piece."
      },
      {
        q: "Can I preview my customisation before purchase?",
        a: "Yes, in case of a bulk order, we offer a preview picture for the products so you can see how your customised message will look before finalizing your order. This ensures you’re happy with the design before it’s made."
      },
      {
        q: "Are your products durable?",
        a: "Absolutely. Our products are designed to last, using high-quality materials and craftsmanship to ensure they withstand everyday use while maintaining their beauty."
      },
      {
        q: "How do I clean and maintain resin products?",
        a: "To clean resin products, simply wipe them down with a soft, damp cloth. Avoid using harsh chemicals or abrasive materials."
      },
      {
        q: "Are your resin products heat-resistant?",
        a: "While our resin products are durable, they are not designed to withstand high temperatures. We recommend avoiding direct contact with hot items to prevent damage."
      },
      {
        q: "Can I use resin products with acidic foods like lemons?",
        a: "Yes, our food-safe resin is resistant to acidic foods. However, we suggest cleaning the surface after use to maintain its pristine condition."
      }
    ]
  },
  {
    category: "Orders, Returns & Support",
    questions: [
      {
        q: "How long has your brand been in business?",
        a: "We have been operating successfully as a passion-driven project turned into a recognized brand known for quality craftsmanship and innovative designs."
      },
      {
        q: "What is your return policy?",
        a: "Because all our products are made with precision and care, we don't offer any returns until the product you receive is broken or damaged. In that case we would appreciate a unboxing video to confirm the return for the same. Exchange, however is acceptable. We offer credit notes with 2 month validity which will be delivered to your mail once your product reaches our warehouse. Exchange couriers have to be paid for by the client."
      },
      {
        q: "How can I contact customer support?",
        a: "You can reach our customer support team via live chat, email, or phone. We’re here to help with any questions or concerns you may have, ensuring a smooth and pleasant shopping experience."
      },
      // {
      //   q: "Do you offer international shipping?",
      //   a: "Yes, we ship to many countries worldwide. Shipping costs and delivery times vary depending on the destination. Customs duties and taxes may apply, and these will be communicated during checkout."
      // },
      {
        q: "How do I track my order?",
        a: "Once your order is shipped, you’ll receive a tracking number via email. You can track your order using this number on our website or through the carrier’s tracking page."
      },
      // {
      //   q: "What payment methods do you accept?",
      //   a: "We accept all major credit cards, PayPal, and other secure payment options. All transactions are processed through encrypted and secure payment gateways to protect your personal information."
      // },
      {
        q: "Can I visit a physical store or showroom?",
        a: "Currently, we operate online only."
      },
      // {
      //   q: "What do I do if my product arrives damaged?",
      //   a: "If your product arrives damaged, please contact us immediately. We will arrange for a replacement or refund and provide guidance on the next steps."
      // },
      {
        q: "Are there discounts for bulk or corporate orders?",
        a: "Yes, we offer special pricing for bulk and corporate orders with a minimum order quantity of 30 pieces. Please contact us directly for more information on how we can accommodate your needs."
      },
      {
        q: "Is my personal information safe when shopping on your website?",
        a: "Absolutely. We use secure encryption and follow strict data protection policies to ensure your personal and payment information is safe."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <Layout>
      <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
        <h1 className="text-4xl md:text-5xl font-heading mb-6 tracking-wide text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Find answers to all your questions about our products, customisation options, shipping, and more. 
          If you need further help, feel free to contact us.
        </p>

        <div className="space-y-16">
          {faqs.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-heading mb-6 border-b border-border/50 pb-3">{section.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {section.questions.map((item, i) => (
                  <AccordionItem key={i} value={`item-${index}-${i}`} className="border-b border-[#e5e5e5]">
                    <AccordionTrigger className="hover:no-underline text-left py-5 text-[15px] font-medium text-[#2c2c2c]">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pr-8">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
