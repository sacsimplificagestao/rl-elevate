import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="px-4 py-12 md:py-16 border-t border-border">
      <div className="max-w-xl mx-auto space-y-6">
        <p className="text-[10px] font-body font-semibold tracking-luxury uppercase leading-relaxed text-primary">
          Sign up to receive the latest news, special offers and/or exclusive events relating to Ralph Lauren products and services, by e-mail or targeted social media ads. By signing up, you consent to the use of tracking technologies for personalisation and analytics.
        </p>
        <div className="flex border border-border">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ENTER EMAIL ADDRESS"
            className="flex-1 px-4 py-3 text-xs font-body tracking-wider bg-transparent placeholder:text-muted-foreground/60 focus:outline-none"
          />
          <button className="px-6 py-3 bg-primary text-primary-foreground text-xs font-body font-semibold tracking-luxury hover:opacity-90 transition-opacity">
            SUBMIT
          </button>
        </div>
        <p className="text-[10px] font-body text-muted-foreground leading-relaxed">
          You may unsubscribe at any time by clicking on the unsubscribe link in each e-mail. For more information, please read Ralph Lauren Europe Sàrl's{" "}
          <button className="underline underline-offset-2">Privacy Policy.</button>
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
