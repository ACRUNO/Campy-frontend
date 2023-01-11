import { Typography } from "@mui/material";

export default function MakeParagraph(text: string, isPost: boolean = false) {
  if (!text) return <div>loading...</div>

  return text.split("\n").filter((paragraph: string) => paragraph).map((paragraph: string, i: number) => (
    isPost ? <Typography variant="body1"
      pb={2}
      fontSize={18}
      paragraph
      sx={{ wordWrap: "break-word", wordBreak: "break-all" }}>
      {paragraph}
    </Typography>
      : <Typography
        pt={!i ? 2 : 0}
        width="100%"
        sx={{ wordBreak: "break-all" }}
      >{paragraph}</Typography>
  ))
}