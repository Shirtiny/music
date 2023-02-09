import { Button } from "ui";
import logger from "common/logger";
import { math } from "@shirtiny/utils/src/main";
import songApi from "../api/song";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button
        onClick={async () => {
          logger.debug("Web", "Button clicked", math.restrict(1, 2, 3));
          const song = await songApi.pickOne();
          const [url] = await songApi.url(song.id);
          const audio = document.createElement("audio");
          audio.src = url;
          audio.play();
        }}
      />
    </div>
  );
}
