"use client";

import MultipleChoice from "./MultipleChoice";
import MatchPairs from "./MatchPairs";
import DragDrop from "./DragDrop";
import Hotspot from "./Hotspot";
import FillBlank from "./FillBlank";
import ArrangeOrder from "./ArrangeOrder";

type ChallengeType =
  | "multiple-choice"
  | "match-pairs"
  | "drag-drop"
  | "hotspot"
  | "fill-blank"
  | "arrange-order";

type ChallengeRendererProps = {
  type: ChallengeType;
  data: any;
  onSuccess: () => void;
};

export default function ChallengeRenderer({
  type,
  data,
  onSuccess,
}: ChallengeRendererProps) {

  switch (type) {

    case "multiple-choice":
      return (
        <MultipleChoice
          data={data}
          onSuccess={onSuccess}
        />
      );

    case "match-pairs":
      return (
        <MatchPairs
          data={data}
          onSuccess={onSuccess}
        />
      );

    case "drag-drop":
      return (
        <DragDrop
          data={data}
          onSuccess={onSuccess}
        />
      );

    case "hotspot":
      return (
        <Hotspot
          data={data}
          onSuccess={onSuccess}
        />
      );

    case "fill-blank":
      return (
        <FillBlank
          data={data}
          onSuccess={onSuccess}
        />
      );

    case "arrange-order":
      return (
        <ArrangeOrder
          data={data}
          onSuccess={onSuccess}
        />
      );

    default:
      return (
        <div className="rounded-3xl border border-red-500 bg-red-500/10 p-8 text-center text-red-300">
          Unknown Challenge Type
        </div>
      );
  }
}