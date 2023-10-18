declare module "*.mp3" {
    const value: string;
    export default value;
  }
  
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.svg' {
  const value: any;
  export = value;
}

declare module '*.JPG' {
  const value: any;
  export = value;
}