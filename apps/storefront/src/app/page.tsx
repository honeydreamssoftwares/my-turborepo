import { log } from "logger";
import { CounterButton, NewTabLink } from "ui";
import { add } from "math-helpers";

export const metadata = {
  title: "Store | Kitchen Sink" + add(1,6),
};

export default function Store() {
  log("Hey! This is Home.");
  return (
    <div className="container">
      <h1 className="title">
        Store <br />
        <span>Kitchen Sink 2</span>
      </h1>
      <CounterButton />
      <p className="description">
        Built With{" "}
        <NewTabLink href="https://turbo.build/repo">Turborepo</NewTabLink> +{" "}
        <NewTabLink href="https://nextjs.org/">Next.js</NewTabLink>
      </p>
    </div>
  );
}
