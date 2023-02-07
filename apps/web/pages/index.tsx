import { Button } from "ui";
import { math } from "@shirtiny/utils/src/main";
import logger from "@shirtiny/logger/src/main";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button
        onClick={() => {
          logger.debug("Web", "Button clicked", math.restrict(1, 2, 3));
        }}
      />
    </div>
  );
}
