import React from "react";
import Layout from "@/components/Layout";

export default function ProductCare() {
  return (
    <Layout>
      <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-screen font-body text-[#2c2c2c] selection:bg-[#2c2c2c] selection:text-white">
        <h1 className="text-4xl md:text-5xl font-heading mb-6 tracking-wide text-center uppercase">
          Product Care Guide
        </h1>
        <p className="text-muted-foreground text-center mb-16 leading-relaxed">
          At Etch Studio, our resin and wood products are crafted with care to ensure they are not only beautiful but also durable and long-lasting. To help you maintain the quality and appearance of your resin and wood cheese boards, cheese knives, coasters, and bowls, we’ve put together this comprehensive care guide.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-heading mb-4 border-b border-border/50 pb-2 uppercase tracking-widest">
              Quick Tips
            </h2>
            <ul className="space-y-3 list-disc list-inside text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-[#2c2c2c] font-medium mr-1">Hand Wash Only:</strong> 
                Avoid the dishwasher. Always hand wash with warm, soapy water and dry immediately.
              </li>
              <li>
                <strong className="text-[#2c2c2c] font-medium mr-1">Oil Regularly:</strong> 
                Apply food-safe mineral oil or beeswax to wood surfaces every 2-4 weeks, depending on use, to maintain luster and prevent drying.
              </li>
              <li>
                <strong className="text-[#2c2c2c] font-medium mr-1">Avoid Extreme Temperatures:</strong> 
                Keep products away from direct sunlight, heat sources, and extreme cold to prevent warping and cracking.
              </li>
              <li>
                <strong className="text-[#2c2c2c] font-medium mr-1">Handle with Care:</strong> 
                Use soft cloths for cleaning and avoid abrasive materials that can scratch the resin or wood.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading mb-4 border-b border-border/50 pb-2 uppercase tracking-widest">
              Common Care Practices
            </h2>
            <p className="text-muted-foreground mb-4 font-medium italic">These practices apply to all our resin and wood products:</p>
            <ul className="space-y-3 list-disc list-inside text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-[#2c2c2c] font-medium mr-1">Hand Washing:</strong> 
                Always wash your resin and wood items by hand using warm, soapy water. The dishwasher’s heat and harsh detergents can damage both the resin and wood.
              </li>
              <li>
                <strong className="text-[#2c2c2c] font-medium mr-1">Immediate Drying:</strong> 
                After washing, dry your items thoroughly with a soft towel to prevent water absorption and potential damage to the wood or resin.
              </li>
              <li>
                <strong className="text-[#2c2c2c] font-medium mr-1">Regular Oiling:</strong> 
                To keep the wood moisturized and the resin shiny, apply a food-safe mineral oil or beeswax every 2-4 weeks. This helps maintain the finish and prevents the wood from drying or cracking.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading mb-4 border-b border-border/50 pb-2 uppercase tracking-widest">
              Resin and Wood Cheese Boards
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <strong className="block text-[#2c2c2c] mb-2 uppercase tracking-wide text-sm">Cleaning Your Cheese Board:</strong>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Hand Wash Only:</strong> Wash with warm, soapy water and avoid soaking. Dry thoroughly to prevent moisture from seeping into the wood, which can lead to cracking.</li>
                </ul>
              </div>
              
              <div>
                <strong className="block text-[#2c2c2c] mb-2 uppercase tracking-wide text-sm">Maintaining the Finish:</strong>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Oil Regularly:</strong> Apply food-safe mineral oil or beeswax to the wood and resin surfaces every few weeks to keep the wood moisturized and the resin shiny.</li>
                  <li><strong>Avoid Extreme Temperatures:</strong> Keep the board away from direct sunlight, heat sources, or extreme cold to prevent expansion, cracking, or resin damage.</li>
                </ul>
              </div>

              <div>
                <strong className="block text-[#2c2c2c] mb-2 uppercase tracking-wide text-sm">Storing Your Cheese Board:</strong>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Store Upright:</strong> Store upright or flat in a dry area to prevent warping. Avoid stacking to prevent scratches on the resin and wood surfaces.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading mb-4 border-b border-border/50 pb-2 uppercase tracking-widest">
              Resin and Wood Cheese Knives
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <strong className="block text-[#2c2c2c] mb-2 uppercase tracking-wide text-sm">Cleaning Your Cheese Knives:</strong>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Hand Wash Only:</strong> Wash with warm, soapy water and dry immediately. Avoid the dishwasher, as it can damage both the resin and wood components.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading mb-4 border-b border-border/50 pb-2 uppercase tracking-widest">
              Resin and Wood Coasters
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <strong className="block text-[#2c2c2c] mb-2 uppercase tracking-wide text-sm">Cleaning Your Coasters:</strong>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Wipe Clean:</strong> Use a damp cloth for regular cleaning. Avoid soaking, as this can damage both the resin and wood.</li>
                  <li><strong>Avoid Harsh Scrubbing:</strong> Prevent scratches on the resin and wear on the wood by using non-abrasive materials.</li>
                </ul>
              </div>
              
              <div>
                <strong className="block text-[#2c2c2c] mb-2 uppercase tracking-wide text-sm">Maintaining Appearance:</strong>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Condition as Needed:</strong> Apply food-safe mineral oil or beeswax to the wood occasionally to keep it moisturized.</li>
                  <li><strong>Protect from Stains:</strong> While resin is stain-resistant, clean up spills promptly and avoid placing extremely hot items directly on the coasters.</li>
                </ul>
              </div>

              <div>
                <strong className="block text-[#2c2c2c] mb-2 uppercase tracking-wide text-sm">Storing Your Coasters:</strong>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Keep Dry:</strong> Store in a dry place, and avoid stacking while wet to prevent moisture buildup and warping.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading mb-4 border-b border-border/50 pb-2 uppercase tracking-widest">
              Resin and Wood Bowls
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <strong className="block text-[#2c2c2c] mb-2 uppercase tracking-wide text-sm">Cleaning Your Bowls:</strong>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Hand Wash Only:</strong> Wash with warm, soapy water and dry immediately. Avoid the dishwasher to prevent damage to the resin and wood.</li>
                  <li><strong>Dry Immediately:</strong> After washing, dry thoroughly to prevent water absorption that could harm the wood or resin.</li>
                </ul>
              </div>

              <div>
                <strong className="block text-[#2c2c2c] mb-2 uppercase tracking-wide text-sm">Caring for Wooden and Resin Surfaces:</strong>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Oil Regularly:</strong> Apply food-safe oil or beeswax to the wooden parts regularly to maintain their finish and prevent drying. Polish the resin with a soft cloth to keep it glossy.</li>
                  <li><strong>Avoid Direct Heat:</strong> Keep bowls away from heat sources, and do not use them in the oven or microwave, as this can damage both the wood and resin.</li>
                </ul>
              </div>

              <div>
                <strong className="block text-[#2c2c2c] mb-2 uppercase tracking-wide text-sm">Storing Your Bowls:</strong>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Store in a Cool, Dry Place:</strong> Keep your bowls in a cool, dry area away from direct sunlight to prevent warping or cracking.</li>
                  <li><strong>Avoid Stacking:</strong> If stacking bowls, place a soft cloth or towel between them to prevent scratches on the resin and dents in the wood.</li>
                </ul>
              </div>
            </div>
          </section>

          <p className="text-center italic text-muted-foreground mt-16 pt-8 border-t border-border/40">
            If you have any questions about caring for your resin and wood products or need further assistance, please don't hesitate to <a href="/contact" className="underline hover:text-primary transition-colors">contact our customer service</a>. We're here to help!
          </p>
        </div>
      </div>
    </Layout>
  );
}
