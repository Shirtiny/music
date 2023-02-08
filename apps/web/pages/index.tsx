import { Button } from "ui";
import logger from "@shirtiny/logger";
import { math } from "@shirtiny/utils/src/main";

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
