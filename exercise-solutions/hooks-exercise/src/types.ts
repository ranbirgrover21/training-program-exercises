// Types for the random line of programming, syntax highlighting
export type File = {
  filename: string,
  language: string,
};

export type Line = {
  contents: string,
  language: string,
};

// Types for idle game itself
export type Resource = {
  name: string,
  increase: number,
  amount: number,
  cost: number,
};
