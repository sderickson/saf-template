import { test as teardown } from "@playwright/test";
import { exec } from "child_process";

teardown("shut down docker compose", async () => {
  let resolve: () => void;
  let reject: (error: Error) => void;
  const promise = new Promise<void>((r, j) => {
    resolve = r;
    reject = j;
  });
  console.log("=== Docker Teardown Start ===");
  console.log("Shutting down docker containers...");
  const result = exec("docker stop $(docker ps -a -q)", (error) => {
    if (error) {
      console.error("Docker teardown failed:", error.message);
      reject(error);
      return;
    }
    console.log("Docker teardown complete!");
    console.log("=== Docker Teardown End ===");
    resolve();
  });
  result.stderr?.on("data", (data) => {
    process.stderr.write(data);
  });
  result.stdout?.on("data", (data) => {
    process.stdout.write(data);
  });
  await promise;
});
