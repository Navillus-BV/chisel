import Label from './Label.svelte';

export const LABEL_CONTEXT = {};

export interface LabelContext {
	labelledBy: string;
	bind(id: string): void;
}

export default Label;
