import { Pre, RawCode, highlight, AnnotationHandler } from "codehike/code"
import { callout } from "./annotations/callout"
import { CopyButton } from "./button"
import { InlineFold } from "./fold";

const fold: AnnotationHandler = {
  name: "fold",
  Inline: InlineFold,
};

export async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "github-from-css")
  return (
    <div className="relative">
      <CopyButton text={highlighted.code} />
      <Pre code={highlighted} handlers={[callout, fold]} className="border bg-card" />
    </div>
  );
}
