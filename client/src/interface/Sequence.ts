
/**
 * Interface for Sequence
 * @readonly
 */
export interface SequenceInterface {
    Name: string;
    Description: string;
    SeqFor:number;
    Prefix: string;
    Suffix: string;
    Curr: number;
    Increment: number;
    MaxDigits: number;
    ModifiedBy: string;
    ModifiedDateTime?: string;
    CreatedBy: string;
    CreatedDateTime?: string;
    RecId?: number;
}


export const EmptySequence: SequenceInterface = {
    Name: '',
    Description: '',
    SeqFor:0,
    Prefix: '',
    Suffix: '',
    Curr: 0,
    Increment: 0,
    MaxDigits: 0,
    ModifiedBy: '',
    ModifiedDateTime: '',
    CreatedBy: '',
    CreatedDateTime: '',
    RecId: 0
}