import {styleTags, tags as t} from "@lezer/highlight"

export const graffiticodeHighlighting = styleTags({
  Let: t.keyword,
  Terminator: t.separator,
  String: t.string,
  Number: t.number,
  "True False": t.bool,
  PropertyName: t.propertyName,
  Null: t.null,
  ", : =": t.separator,
  "[ ]": t.squareBracket,
  "{ }": t.brace
})
