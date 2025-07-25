import { S } from "@angular/cdk/scrolling-module.d-ud2XrbF8";

let c5: "asaaaa" = "asaaaa";
type TAction = "up" | "down";

function performAction(action: TAction): -1 | 1 {
  switch (action) {
    case "up":
      return 1;
    case "down":
      return -1;
  }
}
