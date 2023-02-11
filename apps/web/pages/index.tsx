import { Button } from "ui";
import logger from "common/logger";
import { math, TaskHub } from "@shirtiny/utils/src/main";
import songApi from "../api/song";
import { useEffect } from "react";

let hub: TaskHub;

export default function Web() {
  useEffect(() => {
    hub = new TaskHub({
      storageKey: "app-tasks",
    });
    hub.addEventListener("taskStatusChange", (e) => {
      logger.debug("taskStatusChange", e);
    });
    hub.addEventListener("addTask", (e) => {
      logger.debug("addTask", e);
    });
    hub.addEventListener("removeTask", (e) => {
      logger.debug("removeTask", e);
    });
    (window as any).taskHub = hub;
    logger.log(hub.listTasks());
    hub.addTask({
      key: "click-button",
      pKey: "me",
      status: "waiting",
    });
    hub.addTask({
      key: "click-button",
      pKey: "anro",
    });
    logger.debug("task-list:", hub.listTasks());
    hub.addTask({
      key: "click-button",
      pKey: "anro",
      payload: {
        clickTime: 2,
      },
    });
  }, []);

  return (
    <div>
      <h1>Web</h1>
      <Button
        onClick={async () => {
          logger.debug("Web", "Button clicked", math.restrict(1, 2, 3));
          const song = await songApi.pickOne();
          const [url] = await songApi.url(song.id);
          console.log(url);
          const audio = document.createElement("audio");
          audio.src = url;
          audio.play();
          const tasks = hub.searchTasks({});
          logger.log(tasks);
          tasks.forEach((t) => {
            t.status = "running";
          });
        }}
      />
    </div>
  );
}
