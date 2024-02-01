export type TUnknown = any;

export type SocialIcon = Record<string, string | TUnknown>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'ninja-keys': TUnknown;
    }
  }
}
