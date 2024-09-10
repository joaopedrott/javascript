import { css } from "styled-components";

export const clampText = (lineNumber: number) => css`
text-overflow: ellipsis;
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: ${lineNumber};
-webkit-box-orient: vertical;
`