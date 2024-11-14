import { Pre, RawCode, highlight, AnnotationHandler } from "codehike/code";
import { callout } from "./annotations/callout";
import { InlineFold } from "./fold";
import { wordWrap } from "./annotations/word-wrap";
import { tokenTransitions } from "./annotations/token-transitions";
import { Selection, Selectable, SelectionProvider } from "codehike/utils/selection";

const fold: AnnotationHandler = {
    name: "fold",
    Inline: InlineFold,
};

function Code({ highlightedCode }: { highlightedCode: any }) {
    return (
        <Pre
            code={highlightedCode}
            handlers={[callout, fold, wordWrap, tokenTransitions]}
            className="border bg-card p-6 rounded-3xl overflow-hidden"
        />
    );
}

export async function HeroCode({ codeblocks }: { codeblocks: RawCode[] }) {
    const highlighted = await Promise.all(
        codeblocks.map((block) => highlight(block, "github-from-css"))
    );

    return (
        <SelectionProvider className="flex flex-col items-center">
            <div className="flex mb-4 justify-center">
                {codeblocks.map((block, i) => (
                    <Selectable
                        key={i}
                        index={i}
                        selectOn={["click"]}
                        className="px-4 py-2 cursor-pointer border-b-2 data-[selected=true]:border-turq justify-center items-center"
                    >
                        {block.meta}
                    </Selectable>
                ))}
            </div>
            <div className="w-full bg-card rounded-3xl">
                <Selection
                    from={highlighted.map((highlightedCode, i) => (
                        <Code key={i} highlightedCode={highlightedCode}/>
                    ))}
                />
            </div>
        </SelectionProvider>
    );
}
