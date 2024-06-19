export interface VO {
	validate(value: any): void
	toPrimitive(): any
}
