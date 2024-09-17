

export default interface EditProps {
    close?: () => void;
    setSeries?: (series: any) => void;
    edit?: boolean;
    data: any;
}