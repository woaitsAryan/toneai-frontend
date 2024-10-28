export enum ToneEnum {
  Offensive = 'offensive',
  Ironic = 'ironic',
}

interface Tone {
  type: string;
  value: number;
}

export interface ToneResponse {
  tone: Tone;
  message: string;
  success: boolean;
}