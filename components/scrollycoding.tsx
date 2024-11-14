import { z } from "zod"
import {
  Selection,
  Selectable,
  SelectionProvider,
} from "codehike/utils/selection"
import { Block, CodeBlock, parseProps } from "codehike/blocks"
import { Pre, RawCode, highlight, AnnotationHandler } from "codehike/code"

import { tokenTransitions } from "@/components/annotations/token-transitions"
import { wordWrap } from "./annotations/word-wrap"
import { CopyButton } from "./button"
import { InlineFold } from "./fold";
import { callout } from "./annotations/callout"


const Schema = Block.extend({
    steps: z.array(Block.extend({ code: CodeBlock })),
});

export function Scrollycoding(props: unknown) {
    const { steps } = parseProps(props, Schema);
    return (
        <SelectionProvider className="flex flex-col">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {steps.map((step, i) => (
                    <Selectable
                        key={i}
                        index={i}
                        selectOn={["click"]}
                        className="border-t-4 data-[selected=true]:border-turq px-5 py-2 rounded-2xl bg-card">
                        <h2 className="mt-2 sm:mt-4 lg:text-xl text-base flex flex-col break-words hyphens-auto">
                            {step.title}
                        </h2>
                        <div>{step.children}</div>
                    </Selectable>
                ))}
            </div>
            <div className="w-full bg-card">
                <Selection
                    from={steps.map((step) => (
                        <Code codeblock={step.code} />
                    ))}
                />
            </div>
        </SelectionProvider>
    );
}

async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "github-from-css")
  return (
    <div className="relative">
      <CopyButton text={highlighted.code} />
      <Pre
        code={highlighted}
        handlers={[tokenTransitions, wordWrap, fold, callout]}
        className=""
      />
    </div>
  );
}


const fold: AnnotationHandler = {
  name: "fold",
  Inline: InlineFold,
};




